import { Link } from "react-router";
import cases from "../../Data/cases.json";
import { getProjectImage } from "../../utils/resolveProjectImage";
import styles from "./CasesCard.module.css";

export default function CasesCards() {
  return (
    <div className={styles.caseCards}>
      {cases
        .filter((caseItem) => caseItem.imageSquare && caseItem.about)
        .map((caseItem) => (
          <Link
            key={caseItem.id}
            to={`/cases/${caseItem.id}`}
            className={styles.caseCard}
          >
            <img
              src={getProjectImage(caseItem.imageSquare)}
              alt={caseItem.title}
              className={styles.caseImage}
            />
            <h2 className={styles.caseTitle}>{caseItem.title}</h2>
            <p className={styles.caseIntro}>{caseItem.shortIntro}</p>
          </Link>
        ))}
    </div>
  );
}
