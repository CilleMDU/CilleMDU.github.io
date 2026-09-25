import { Link, useParams } from "react-router";
import styles from "./ProjectPage.module.css";
import projects from "../../Data/projects.json";
import websiteInactive from "../../img/clouds/linkClouds/website.svg";
import repository from "../../img/clouds/linkClouds/repository.svg";
import Process from "../../img/clouds/linkClouds/process.svg";
import { getProjectImage, getProjectTitleImage } from "../../utils/resolveProjectImage";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => String(p.id) === slug);

  if (!project) {
    return (
      <div className={styles.projectPage}>
        <div className={styles.projectContainer}>
          <p>Project not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.projectPage}>
      <div className={styles.projectContainer}>
        <div className={styles.projectCard}>
          {project.imageTitle && (
            <img
              src={getProjectTitleImage(project.imageTitle)}
              alt={project.title}
              className={styles.projectTitleImage}
            />
          )}
          <img
            src={getProjectImage(project.imageRectangle)}
            alt={project.title}
            className={styles.projectImage}
          />
          <div className={styles.projectText}>
            <p className={styles.projectYear}>
              <span className={styles.yearTitle}>Year:</span> {project.year}
            </p>
            <div className={styles.projectDescription}>
              <p className={styles.aboutTitle}>About:</p>
              <p
                className={styles.projectAbout}
                dangerouslySetInnerHTML={{ __html: project.about }}
              ></p>
            </div>
          </div>
          <div className={styles.links}>
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
            <Link to={`/process/${project.id}`}>
              <img
                src={Process}
                alt="Process"
                className={styles.processLinkIcon}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
