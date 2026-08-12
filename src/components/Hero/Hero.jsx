import styles from './Hero.module.css';
import image from '../../img/placeholder/placeholderHero.png';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <img src={image} alt="Hero" className={styles.heroImage} />
            </div>
        </section>
    );
}