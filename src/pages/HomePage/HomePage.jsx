import { Link } from "react-router";
import Hero from "../../components/Hero/Hero";
import Carousel from "../../components/Carousel/Carousel";
import styles from "./HomePage.module.css";
import ProjectCards from "../../components/ProjectCards/ProjectCards";

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
            <div className={styles.projectCardsContainer}>
                <ProjectCards />
            </div>
            </div>
        </div>
    );
}