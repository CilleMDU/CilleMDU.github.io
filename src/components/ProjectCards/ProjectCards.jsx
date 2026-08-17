import styles from './ProjectCards.module.css';
import Projects from '../../Data/projects.json';

// JSON can't use ES imports, so resolve the "image square" path against Vite's
// bundled project images (raw relative path strings aren't processed by Vite).
const projectImages = import.meta.glob('../../img/projects/**/*', { eager: true, import: 'default' });

function projectImage(path) {
  const filename = path.split('/').pop();
  const match = Object.entries(projectImages).find(([key]) => key.endsWith(filename));
  return match ? match[1] : path;
}

export default function ProjectCards({ year }) {

  const handleProjectClick = (projectId) => {
    // Navigate to the ProjectPage with the selected project ID
    window.location.href = `/projects/${projectId}`;
  }

    const projects = year === undefined ? Projects : Projects.filter((project) => project.year === year);

    return (
        <div className={styles.projectCards}>
            {projects.map((project) => (
                <div key={project.id} className={styles.projectCard} onClick={() => handleProjectClick(project.id)}>
                    <img src={projectImage(project["image square"])} alt={project.title} />
                    <h2 className={styles.projectTitle}>{project.title}</h2>
                    <p className={styles.projectIntro}>{project["short intro"]}</p>
                </div>
            ))}
        </div>
    );
}