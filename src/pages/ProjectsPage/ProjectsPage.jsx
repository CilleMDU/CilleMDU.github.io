import styles from "./ProjectsPage.module.css";
import ProjectCards from "../../components/ProjectCards/ProjectCards";
import Year2025 from "../../img/titles/2025.svg";
import Year2026 from "../../img/titles/2026.svg";

export default function ProjectsPage() {

  return (
    <div className={styles.projectsPage}>
      <div className={styles.titleContainer2025}>
        <img src={Year2025} alt="Projects 2026" className={styles.titleImage} />
      </div>
      <ProjectCards year={2025} />

      <div className={styles.titleContainer2026}>
        <img src={Year2026} alt="Projects 2025" className={styles.titleImage} />
      </div>
      <ProjectCards year={2026} />
    </div>
  );
}