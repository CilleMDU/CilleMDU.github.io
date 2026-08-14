import styles from "./ProjectsPage.module.css";
import ProjectCards from "../../components/ProjectCards/ProjectCards";

export default function ProjectsPage() {

  return (
    <div className={styles.projectsPage}>
      <ProjectCards />
    </div>
  );
}