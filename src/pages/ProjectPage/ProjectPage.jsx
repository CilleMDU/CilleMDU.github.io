import { useParams } from "react-router";
import styles from "./ProjectPage.module.css";
import projects from '../../Data/projects.json';

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
          <img src={projectTitleImage(project["image title"])} alt={project.title} className={styles.projectTitleImage} />
          <img src={projectImage(project["image rectangle"])} alt={project.title} className={styles.projectImage} />
          <p className={styles.projectYear}>Year: {project.year}</p>
          <p className={styles.projectAbout} dangerouslySetInnerHTML={{ __html: project.about }}></p>
          <div className={styles.projectLinks}>
            {project["link og"] && (
              <a href={project["link og"]} target="_blank" rel="noopener noreferrer">
                Original
              </a>
            )}
            {project["link exam"] && (
              <a href={project["link exam"]} target="_blank" rel="noopener noreferrer">
                Exam
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}