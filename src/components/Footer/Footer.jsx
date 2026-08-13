import styles from './Footer.module.css';
import logo from "../../img/logo.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.addressContainer}>
          <h3 className={styles.addressTitle}>Address</h3>
          <p className={styles.addressText}>
            Stennehøj Allé 28 1<br />
            Højbjerg 8270<br />
            Denmark
          </p>
        </div>
        <div className={styles.contactContainer}>
          <h3 className={styles.contactTitle}>Contact</h3>
          <p className={styles.contactText}>
            Phone: <a href="tel:+4561317965">+4561317965</a><br />
            Email: <a href="mailto: cs.media.work@outlook.com">cs.media.work@outlook.com</a>
          </p>
        </div>
        <div className={styles.socialContainer}>
          <h3 className={styles.socialTitle}>Follow Me!</h3>
          <div className={styles.socialIcons}>
          </div>
        </div>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <p className={styles.logoText}>Cecilie Schmidt</p>
        </div>
      </div>
    </footer>
  );
}