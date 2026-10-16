import { useState } from "react";
import { Link, useParams } from "react-router";
import styles from "./CaseCategoryPage.module.css";
import {
  getCaseImage,
  getProjectImage,
  getProjectTitleImage,
} from "../../utils/resolveProjectImage";
import {
  CASE_CATEGORIES,
  findCase,
  getCaseGallery,
  getCaseRectangle,
  getCaseSolution,
  getGallerySlides,
} from "../../utils/caseHelpers";
import caseCloud from "../../img/clouds/linkClouds/case.svg";
import websiteCloud from "../../img/clouds/linkClouds/website.svg";
import repositoryCloud from "../../img/clouds/linkClouds/repository.svg";
import researchCloud from "../../img/clouds/linkClouds/research.svg";
import figmaCloud from "../../img/clouds/linkClouds/figma.svg";
import prototypeCloud from "../../img/clouds/linkClouds/prototype.svg";

// Shows one gallery entry at a time with prev/next controls. Before/after entries
// show all of their images side by side.
function ImageGallery({ slides, caseName, category }) {
  const [index, setIndex] = useState(0);

  if (slides.length === 0) return null;
  const slide = slides[index];

  const move = (offset) =>
    setIndex((i) => (i + offset + slides.length) % slides.length);

  return (
    <div className={styles.gallery}>
      <div className={styles.galleryRow}>
        <button
          type="button"
          onClick={() => move(-1)}
          className={styles.galleryNav}
          aria-label="Previous image"
          disabled={slides.length < 2}
        >
          ‹
        </button>
        <div className={styles.galleryMedia}>
          {slide.media.map(({ label, src }) => (
            <figure className={styles.galleryFigure} key={src}>
              <img
                src={getCaseImage(src)}
                alt={`${caseName} ${category}${label ? ` ${label}` : ""} ${index + 1}`}
              />
              {label && <figcaption>{label}</figcaption>}
            </figure>
          ))}
        </div>
        <button
          type="button"
          onClick={() => move(1)}
          className={styles.galleryNav}
          aria-label="Next image"
          disabled={slides.length < 2}
        >
          ›
        </button>
      </div>
      <p className={styles.galleryCount}>
        {index + 1} / {slides.length}
      </p>
    </div>
  );
}

function CaseLinks({ caseItem }) {
  const externalLinks = [
    { href: caseItem.webLink, icon: websiteCloud, alt: "Website", hover: styles.websiteLinkIcon },
    { href: caseItem.repository, icon: repositoryCloud, alt: "Repository", hover: styles.repoLinkIcon },
    { href: caseItem.researchLink, icon: researchCloud, alt: "Research board", hover: styles.researchLinkIcon },
    { href: caseItem.figmaLink, icon: figmaCloud, alt: "Figma design", hover: styles.figmaLinkIcon },
    { href: caseItem.prototypeLink, icon: prototypeCloud, alt: "Prototype", hover: styles.prototypeLinkIcon },
  ].filter((link) => link.href);

  return (
    <div className={styles.links}>
      <Link to={`/cases/${caseItem.id}`}>
        <img src={caseCloud} alt="Case overview" className={styles.caseLinkIcon} />
      </Link>
      {externalLinks.map(({ href, icon, alt, hover }) => (
        <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
          <img src={icon} alt={alt} className={hover} />
        </a>
      ))}
    </div>
  );
}

// Research and Optimization: title image, image gallery, then the text.
// Afterthought: same layout as ProjectPage, with the rectangle image in place of the gallery.
export default function CaseCategoryPage({ category }) {
  const { slug } = useParams();
  const caseItem = findCase(slug);

  if (!caseItem) {
    return (
      <div className={styles.categoryPage}>
        <p>Case not found.</p>
      </div>
    );
  }

  const caseName = caseItem.title;
  const solution = getCaseSolution(caseItem, category);
  const isAfterthought = category === CASE_CATEGORIES.afterthought;
  const slides = getGallerySlides(getCaseGallery(caseItem, category));

  return (
    <div className={styles.categoryPage}>
      <div className={styles.categoryContainer}>
        <div className={styles.categoryCard}>
          <img
            src={getProjectTitleImage(caseItem.titleImg)}
            alt={caseName}
            className={styles.titleImage}
          />

          {isAfterthought ? (
            getCaseRectangle(caseItem) && (
              <img
                src={getProjectImage(getCaseRectangle(caseItem))}
                alt={caseName}
                className={styles.rectangleImage}
              />
            )
          ) : (
            <ImageGallery slides={slides} caseName={caseName} category={category} />
          )}

          <div className={styles.categoryText}>
            {isAfterthought && (
              <>
                <p className={styles.metaLine}>
                  <span className={styles.textLabel}>Year:</span> {caseItem.year}
                </p>
                <p className={styles.metaLine}>
                  <span className={styles.textLabel}>Duration:</span> {caseItem.duration}
                </p>
                <p className={styles.metaLine}>
                  <span className={styles.textLabel}>Group:</span> {caseItem.group}
                </p>
              </>
            )}
            <p className={styles.categoryTitle}>{category}</p>
            {solution && (
              <div className={styles.textBlock}>
                <p className={styles.textLabel}>{solution.title}:</p>
                <p
                  className={styles.textBody}
                  dangerouslySetInnerHTML={{ __html: solution.description }}
                ></p>
              </div>
            )}
          </div>

          <CaseLinks caseItem={caseItem} />
        </div>
      </div>
    </div>
  );
}
