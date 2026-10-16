import styles from "./CasesPage.module.css";
import casesTitle from "../../img/titles/cases.svg";
import CasesCards from "../../components/CasesCards/CasesCards";

export default function CasesPage() {
  return (
    <section className={styles.casesPage} aria-labelledby="cases-heading">
      <h2 className={styles.casesHeading} id="cases-heading">
        <img src={casesTitle} alt="Cases" />
      </h2>
      <p className={styles.casesInformation}>
        Explore the cases I have worked on and the solutions I developed.
      </p>
      <CasesCards />
    </section>
  );
}