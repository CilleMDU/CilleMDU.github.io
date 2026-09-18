import { useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import styles from "./ResumePage.module.css";
import ResumePDF from "../../PDF/CVEnglish.pdf";
// placeholder until a dedicated Resume title image exists
import ResumeTitle from "../../img/titles/AboutMeTitle.svg";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

// buffer is rendered above display scale so the page still looks crisp when enlarged
const RENDER_SCALE = 2;
const DISPLAY_SCALE = 1.25;

export default function ResumePage() {
  const containerRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    async function renderPdf() {
      const pdf = await pdfjsLib.getDocument({ url: ResumePDF }).promise;
      const container = containerRef.current;
      if (cancelled || !container) return;
      container.innerHTML = "";

      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
        const page = await pdf.getPage(pageNumber);
        if (cancelled) return;

        const viewport = page.getViewport({ scale: RENDER_SCALE });
        const canvas = document.createElement("canvas");
        canvas.className = styles.resumePage;
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        canvas.style.width = `${(viewport.width / RENDER_SCALE) * DISPLAY_SCALE}px`;
        canvas.style.height = `${(viewport.height / RENDER_SCALE) * DISPLAY_SCALE}px`;
        container.appendChild(canvas);

        await page.render({
          canvasContext: canvas.getContext("2d"),
          viewport,
        }).promise;
      }
    }

    renderPdf();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className={styles.resumePageContent}>
      <div className={styles.titleImage}>
        <img src={ResumeTitle} alt="Resume" />
      </div>
      <div className={styles.resumePagePDF} ref={containerRef} />
    </div>
  );
}
