import { Link } from "react-router";
import Hero from "../../components/Hero/Hero";
import Carousel from "../../components/Carousel/Carousel";
import styles from "./HomePage.module.css";
import ProjectCards from "../../components/ProjectCards/ProjectCards";
import ProjectTitles from "../../img/titles/projects.svg";
import FunFactCards from "../../components/FunFactCards/FunFactCards";

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
        <div className={styles.funFactCardsContainer}>
          <FunFactCards />
        </div>
      </div>
    </div>
  );
}
