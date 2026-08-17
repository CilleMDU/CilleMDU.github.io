import { useParams } from "react-router";
import styles from "./ProjectPage.module.css";
import projects from '../../Data/projects.json';
import websiteInactive from '../../img/clouds/linkClouds/website.svg';
import websiteActive from '../../img/clouds/linkClouds/websiteActive.svg';

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => String(p.id) === slug);

const projectImages = import.meta.glob('../../img/projects/**/*', { eager: true, import: 'default' });
const projectTitleImages = import.meta.glob('../../img/titles/**/*', { eager: true, import: 'default' });

function projectImage(path) {
  const filename = path.split('/').pop();
  const match = Object.entries(projectImages).find(([key]) => key.endsWith(filename));
  return match ? match[1] : path;
}

function projectTitleImage(path) {
  const filename = path.split('/').pop();
  const match = Object.entries(projectTitleImages).find(([key]) => key.endsWith(filename));
  return match ? match[1] : path;
}

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
          <img
            src={projectTitleImage(project["image title"])}
            alt={project.title}
            className={styles.projectTitleImage}
          />
          <img
            src={projectImage(project["image rectangle"])}
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
          <div className={styles.projectLink}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={websiteInactive}
                alt="Website"
                className={styles.projectLinkIcon}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}