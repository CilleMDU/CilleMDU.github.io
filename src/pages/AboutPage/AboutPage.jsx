import styles from "./AboutPage.module.css";
import HeadShot from "../../img/me/headshot.jpg";
import AboutMeTitle from "../../img/titles/AboutMeTitle.svg";
import DownloadsTitle from "../../img/titles/downloads.svg";
import CV from "../../PDF/CVEnglish.pdf";

export default function AboutPage() {
  return (
    <div className={styles.aboutPageContent}>
      <div className={styles.titleImage}>
        <img src={AboutMeTitle} alt="About Me" />
      </div>
      <div className={styles.aboutTop}>
        <div className={styles.aboutMeImage}>
          <img src={HeadShot} alt="Headshot" />
        </div>
        <div className={styles.aboutMeIntro}>
          <div className={styles.aboutMeTitle}>
            <h2>The basics</h2>
          </div>
          <div className={styles.aboutMeText}>
            <p>
              <span className={styles.textCategory}>Age:</span> 23 <br />
              <span className={styles.textCategory}>Gender:</span> Female <br />
              <span className={styles.textCategory}>
                Pronouns:
              </span> She/Her <br />
              <span className={styles.textCategory}>
                Nationality
              </span> Danish <br />
              <span className={styles.textCategory}>Number 1 hobby:</span>{" "}
              Gaming <br />
              <span className={styles.textCategory}>Favorite book:</span> Pride
              and Prejudice <br />
              <span className={styles.textCategory}>Pet peeve:</span> People who
              stand and talk in doorways
            </p>
          </div>
        </div>
      </div>
      <div className={styles.downloads}>
        <div className={styles.titleImage}>
          <img src={DownloadsTitle} alt="Downloads" />
        </div>
        <div className={styles.downloadsContent}>
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeLink}
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
