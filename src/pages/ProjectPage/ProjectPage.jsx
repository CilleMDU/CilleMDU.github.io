import styles from "./ProjectPage.module.css";
import Project from '../../Data/projects.json';

export default function ProjectPage() {
  return (
    <div className={styles.projectPage}>
      <div className={styles.projectContainer}>
        {Project.map((project) => (
          <div key={project.id} className={styles.projectCard}>
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
        ))}
      </div>
    </div>
  );
}