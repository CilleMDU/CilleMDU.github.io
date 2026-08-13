import styles from './Hero.module.css';
import image from '../../img/placeholder/placeholderHero.png';
import ProjectsInactive from '../../img/clouds/navbarClouds/inactive/projects.svg';
import ProjectsActive from '../../img/clouds/navbarClouds/active/projectsActive.svg';
import AboutInactive from '../../img/clouds/navbarClouds/inactive/about.svg';
import AboutActive from '../../img/clouds/navbarClouds/active/aboutActive.svg';

export default function Hero() {

    const handleProjectsPageClick = () => {
        window.location.href = '/projects';
    };

    const handleAboutPageClick = () => {
        window.location.href = '/about';
    }

    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <img src={image} alt="Hero" className={styles.heroImage} />
                <div className={styles.ctaAbout}>
                    <img src={AboutInactive} alt="About" className={styles.ctaAboutIcon} onClick={handleAboutPageClick} />
                </div>
                <div className={styles.ctaProjects}>
                    <img src={ProjectsInactive} alt="Projects" className={styles.ctaProjectsIcon} onClick={handleProjectsPageClick} />
                </div>
            </div>
        </section>
    );
}