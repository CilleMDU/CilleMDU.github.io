import { useParams } from "react-router";
import styles from "./ProjectPage.module.css";
import projects from '../../Data/projects.json';

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
          <h2 className={styles.projectTitle}>{project.title}</h2>
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