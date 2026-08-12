import { Link } from "react-router";
import Hero from "../../components/Hero/Hero";
import Carousel from "../../components/Carousel/Carousel";
import styles from "./HomePage.module.css";

export default function HomePage() {
    return (
        <div className="homePage">
            <div className={styles.homePageContent}>
            <div className={styles.heroContainer}>
                <Hero />
            </div>
            <div className={styles.carouselContainer}>
                <Carousel />
            </div>
            </div>
        </div>
    );
}