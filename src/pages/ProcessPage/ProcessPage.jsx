import styles from './ProcessPage.module.css';
import projectTitle from '../../img/titles/projects.svg';
import ProjectProcessCards from '../../components/ProjectCards/ProjectProcessCards/ProjectProcessCards';

export default function ProcessPage() {
  return (
    <div className={styles.processPage}>
      <div className={styles.processPageContent}>
        <div className={styles.processPageProjects}>
            <img src={projectTitle} alt="Projects" className={styles.projectsImg}/>
        </div>
        <div className={styles.processPageInformation}>
          <p>Currently being worked on. Completed processes so far: Lumina</p>
          <p>More processes will be added soon</p>
          </div>
        <div className={styles.processPageProjectCards}>
            <ProjectProcessCards />
        </div>
      </div>
    </div>
  );
}