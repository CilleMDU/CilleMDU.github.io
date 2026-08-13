import styles from './ProjectCards.module.css';
import Projects from '../../Data/projects.json';

export default function ProjectCards() {

  const handleProjectClick = (projectId) => {
    // Navigate to the ProjectPage with the selected project ID
    window.location.href = `/projects/${projectId}`;
  }

    return (
        <div className={styles.projectCards}>
            {Projects.map((project) => (
                <div key={project.id} className={styles.projectCard} onClick={() => handleProjectClick(project.id)}>
                    <h2>{project.title}</h2>
                </div>
            ))}
        </div>
    );
}