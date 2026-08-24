import styles from './Footer.module.css';
import logo from "../../img/logo.svg";
import InstaIcon from "../../img/footer/insta.svg";
import LinkedInIcon from "../../img/footer/linked.svg";
import GitHubIcon from "../../img/footer/github.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.addressContainer}>
          <h3 className={styles.addressTitle}>School</h3>
          <p className={styles.addressText}>
            Erhvervsakadamiet Aarhus<br />
            Sønderhøj 30<br />
            Viby J, 8260<br />
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
            <a href="https://www.linkedin.com/in/cecilie-schmidt-90a040428/" target="_blank" rel="noopener noreferrer">
              <img src={LinkedInIcon} alt="LinkedIn" className={styles.socialIcon} />
            </a>
            <a href="https://github.com/CilleMDU" target="_blank" rel="noopener noreferrer">
              <img src={GitHubIcon} alt="GitHub" className={styles.socialIcon} />
            </a>
            <a href="https://www.instagram.com/EonsOfHemera/" target="_blank" rel="noopener noreferrer">
              <img src={InstaIcon} alt="Instagram" className={styles.socialIcon} />
            </a>
          </div>
        </div>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <p className={styles.logoText}>C. Schmidt</p>
        </div>
      </div>
    </footer>
  );
}