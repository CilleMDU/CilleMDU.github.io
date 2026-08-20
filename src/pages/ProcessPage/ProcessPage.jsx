import styles from './ProcessPage.module.css';
import processWorkflow from '../../img/titles/workflow.svg';
import projectTitle from '../../img/titles/projects.svg';
import ProjectProcessCards from '../../components/ProjectCards/ProjectProcessCards/ProjectProcessCards';

export default function ProcessPage() {
  return (
    <div className={styles.processPage}>
      <div className={styles.processPageContent}>
        <div className={styles.processPageWorkFlow}>
            <img src={processWorkflow} alt="Process Workflow" className={styles.workFlowImg}/>
        </div>
        <div className={styles.processPageProjects}>
            <img src={projectTitle} alt="Projects" className={styles.projectsImg}/>
        </div>
        <div className={styles.processPageProjectCards}>
            <ProjectProcessCards />
        </div>
      </div>
    </div>
  );
}