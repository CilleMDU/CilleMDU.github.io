import styles from "./AboutPage.module.css";
import HeadShot from "../../img/me/headshot.jpg";
import AboutMeTitle from "../../img/titles/AboutMeTitle.svg";
import ResumeDownload from "../../img/clouds/linkClouds/resume.svg";
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
              Wanna know if the girl behind the portfolio is the girl you need
              for your team? Check out my resume!
              <br />
              Other than my resume, you can also get to see what people have
              said about me in different contexts!
              <br />
              <br />
              I'm looking for a smaller setting with open-minded colleagues and
              bosses. The company can be big as long as the department I'm in is
              a smaller setting.
              <br />
              As a girl with autism, I might need to work a few days from home
              and be allowed to create my own space by using headphones and
              other tools. That said! It's also a super power that allows me to
              notice tiny details and it also allows me to dive deep into
              subjects I'm passionate about. Like coding!
              <br />
              <br />
              I'm a special girl in many ways and require understanding and
              support but I can promise you that with my level of dedication and
              passion, that support and understanding will ensure I deliver work
              of the highest quality.
            </p>
          </div>
        </div>
        <div className={styles.resume}>
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeLink}
          >
            <img src={ResumeDownload} alt="Resume" />
          </a>
        </div>
      </div>
    </div>
  );
}
