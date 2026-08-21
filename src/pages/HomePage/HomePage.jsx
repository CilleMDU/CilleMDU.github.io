import { Link } from "react-router";
import Hero from "../../components/Hero/Hero";
import Carousel from "../../components/Carousel/Carousel";
import styles from "./HomePage.module.css";
import ProjectCards from "../../components/ProjectCards/ProjectCards";
import ProjectTitles from "../../img/titles/projects.svg";
import FunFactCards from "../../components/FunFactCards/FunFactCards";
import ToolboxTitle from "../../img/titles/toolbox.svg";

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <div className={styles.homePageContent}>
        <div className={styles.heroContainer}>
          <Hero />
        </div>
        <div className={styles.carouselContainer}>
          <Carousel />
        </div>
        <div className={styles.titleContainer}>
          <img
            src={ProjectTitles}
            alt="Projects"
            className={styles.titleImage}
          />
        </div>
        <div className={styles.projectCardsContainer}>
          <ProjectCards />
        </div>
        <div className={styles.titleContainer}>
          <img src={ToolboxTitle} alt="Toolbox" className={styles.titleImage} />
        </div>
        <div className={styles.skillsContainer}>
          <div className={styles.hardSkills}>
            <p className={styles.skillsTitle}>Hard Skills</p>
            <ul className={styles.skillsList}>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Figma</li>
              <li>Adobe Photoshop - user level</li>
              <li>Adobe Illustrator - user level</li>
            </ul>
          </div>
          <div className={styles.softSkills}>
            <p className={styles.skillsTitle}>Soft Skills</p>
            <ul className={styles.skillsList}>
              <li>Service-minded</li>
              <li>Approachable</li>
              <li>Driven</li>
              <li>Independent</li>
              <li>Responsible</li>
              <li>Reliable</li>
            </ul>
          </div>
        </div>
        <div className={styles.funFactCardsContainer}>
          <FunFactCards />
        </div>
      </div>
    </div>
  );
}
