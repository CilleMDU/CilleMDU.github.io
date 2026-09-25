import { useState } from "react";
import { Link, useParams } from "react-router";
import projects from "../../Data/projects.json";
import styles from "./ProcessCategoryPage.module.css";
import websiteInactive from "../../img/clouds/linkClouds/website.svg";
import repository from "../../img/clouds/linkClouds/repository.svg";
import { getProjectImage, getProjectTitleImage } from "../../utils/resolveProjectImage";
import Process from "../../img/clouds/linkClouds/process.svg";

// "imgBrainstorm" -> "Brainstorm", "bestCode" -> "Best Code"
function labelFromKey(key) {
  return key
    .replace(/^img/, "")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (char) => char.toUpperCase());
}

// Shows one image at a time across all of a category's gallery slides, with prev/next controls.
function ImageGallery({ slides, projectTitle }) {
  const [index, setIndex] = useState(0);

  if (slides.length === 0) return null;
  const slide = slides[index];

  const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const goNext = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <div className={styles.gallery}>
      <div className={styles.galleryRow}>
        <button
          type="button"
          onClick={goPrev}
          className={styles.galleryNav}
          aria-label="Previous image"
          disabled={slides.length < 2}
        >
          ‹
        </button>
        <img
          src={getProjectImage(slide.src)}
          alt={`${projectTitle} ${slide.label} ${index + 1}`}
          className={styles.galleryImage}
        />
        <button
          type="button"
          onClick={goNext}
          className={styles.galleryNav}
          aria-label="Next image"
          disabled={slides.length < 2}
        >
          ›
        </button>
      </div>
      <p className={styles.galleryCount}>
        {slide.label} — {index + 1} / {slides.length}
      </p>
    </div>
  );
}

// Shared layout for the Research/Design/Code pages, mirroring ProjectPage but with
// a single image gallery in place of the rectangle image.
export default function ProcessCategoryPage({ category }) {
  const { slug } = useParams();
  const project = projects.find((p) => String(p.id) === slug);

  if (!project) {
    return (
      <div className={styles.categoryPage}>
        <div className={styles.categoryContainer}>
          <p>Project not found.</p>
        </div>
      </div>
    );
  }

  const process = project.process?.find((p) => p.category === category);
  const gallery = project.imgGallery?.find((g) => g.category === category);

  const textEntries = process
    ? Object.entries(process).filter(([key]) => key !== "category")
    : [];
  const slides = gallery
    ? Object.entries(gallery)
        .filter(([key]) => key !== "category")
        .flatMap(([key, images]) =>
          images.map((src) => ({ label: labelFromKey(key), src })),
        )
    : [];

  return (
    <div className={styles.categoryPage}>
      <div className={styles.categoryContainer}>
        <div className={styles.categoryCard}>
          {project.imageTitle && (
            <img
              src={getProjectTitleImage(project.imageTitle)}
              alt={project.title}
              className={styles.titleImage}
            />
          )}

          <ImageGallery slides={slides} projectTitle={project.title} />

          <div className={styles.categoryText}>
            <p className={styles.categoryTitle}>{category}</p>
            {textEntries.map(([key, value]) => (
              <div key={key} className={styles.textBlock}>
                <p className={styles.textLabel}>{labelFromKey(key)}:</p>
                <p className={styles.textBody}>{value}</p>
              </div>
            ))}
          </div>

          <div className={styles.links}>
            <Link to={`/process/${project.id}`}>
              <img
                src={Process}
                alt="Process"
                className={styles.processLinkIcon}
              />
            </Link>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={websiteInactive}
                alt="Website"
                className={styles.projectLinkIcon}
              />
            </a>
            <a href={project.repository} target="_blank" rel="noopener noreferrer">
              <img
                src={repository}
                alt="Repository"
                className={styles.repoLinkIcon}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

