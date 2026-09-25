import styles from "./ProjectProcessCards.module.css";
import Projects from "../../../Data/projects.json";
import { getProjectImage } from "../../../utils/resolveProjectImage";

export default function ProjectCards({ year }) {
  const handleProjectClick = (projectId) => {
    // Navigate to the ProjectPage with the selected project ID
    window.location.href = `/process/${projectId}`;
  };

  const projects = Projects;

  return (
    <div className={styles.projectCards}>
      {projects.map((project) => (
        <div
          key={project.id}
          className={styles.projectCard}
          onClick={() => handleProjectClick(project.id)}
        >
          <img src={getProjectImage(project.imageSquare)} alt={project.title} />
          <h2 className={styles.projectTitle}>{project.title}</h2>
          <p className={styles.projectIntro}>{project.shortIntro}</p>
        </div>
      ))}
    </div>
  );
}
