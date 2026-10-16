import { Link, useParams } from "react-router";
import styles from "../ProjectProcessPage/ProjectProcessPage.module.css";
import caseStyles from "./CasePage.module.css";
import { getProjectTitleImage } from "../../utils/resolveProjectImage";
import { findCase } from "../../utils/caseHelpers";
import Researching from "../../img/thumbnails/Researching.svg";
import Designing from "../../img/thumbnails/Designing.svg";
import Afterthought from "../../img/thumbnails/Afterthought.svg";

const CasePage = () => {
  const { slug } = useParams();
  const caseItem = findCase(slug);

  if (!caseItem) {
    return <div>Case not found</div>;
  }

  return (
    <div className={styles.projectProcessPage}>
      <div className={styles.projectProcessContent}>
        <div className={styles.titleImage}>
          <img src={getProjectTitleImage(caseItem.titleImg)} alt={caseItem.title} />
        </div>
        <div className={caseStyles.caseDetails}>
          <p><span className={caseStyles.detailLabel}>Year:</span> {caseItem.year}</p>
          <p><span className={caseStyles.detailLabel}>Duration:</span> {caseItem.duration}</p>
          <p><span className={caseStyles.detailLabel}>Group:</span> {caseItem.group}</p>
        </div>
        <div className={styles.projectProcessDescription}>
          <p dangerouslySetInnerHTML={{ __html: caseItem.about }}></p>
        </div>
        <nav className={styles.projectProcessNav}>
          <Link to={`/cases/${caseItem.id}/research`} className={styles.processCard}>
            <img src={Researching} alt="Research" />
            <p className={styles.processCardLabel}>Research</p>
          </Link>
          <Link to={`/cases/${caseItem.id}/optimization`} className={styles.processCard}>
            <img src={Designing} alt="Optimization" />
            <p className={styles.processCardLabel}>Optimization</p>
          </Link>
          <Link to={`/cases/${caseItem.id}/afterthought`} className={styles.processCard}>
            <img src={Afterthought} alt="Afterthought" />
            <p className={styles.processCardLabel}>Afterthought</p>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default CasePage;
