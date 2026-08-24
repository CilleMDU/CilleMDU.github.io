import { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactPage.module.css';
import contactTitle from "../../img/titles/contactMe.svg";
import instaLogo from "../../img/footer/insta.svg";
import linkedinLogo from "../../img/footer/linked.svg";
import githubLogo from "../../img/footer/github.svg";
import sendBtn from "../../img/btns/Send.svg";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const RECIPIENT_EMAIL = "cs.media.work@outlook.com";

export default function ContactPage() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target, {
        publicKey: PUBLIC_KEY,
      });
      setStatus('success');
      event.target.reset();
    } catch (error) {
      console.error('Failed to send message:', error);
      setStatus('error');
    }
  }

  return (
    <div className={styles.contactPage}>
      <div className={styles.contactPageContent}>
        <div className={styles.titleContainer}>
          <img
            src={contactTitle}
            alt="Contact Me"
            className={styles.titleImage}
          />
        </div>
        <div className={styles.contactDescriptionContainer}>
          <h3 className={styles.contactDescriptionTitle}>Let's get connected!</h3>
          <p className={styles.contactDescription}>
            Looking for a dedicated worker? Or do you simply have a question for me?<br/>
            Feel free to reach out in whichever way you prefer, as long as it's listed below!<br/>
            If you call and I don't pick up, be sure to leave a voicemail and I'll get right back to you!
          </p>
        </div>
        <div className={styles.contactInfoContainer}>
          <div className={styles.contactInfoClassic}>
          <h3 className={styles.contactInfoTitle}>Classic contact information</h3>
          <p className={styles.contactInfoEmail}>
            Email: <a href="mailto:cs.media.work@outlook.com">cs.media.work@outlook.com</a>
          </p>
          <p className={styles.contactInfoPhone}>
            Phone: <a href="tel:+4561317965">+4561317965</a>
          </p>
          </div>
          <div className={styles.socialMediaContainer}>
            <h3 className={styles.socialMediaTitle}>Social media platforms</h3>
            <div className={styles.socialMediaLinks}>
            <a href="https://www.linkedin.com/in/cecilie-schmidt-90a040428/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn" className={styles.socialMediaLogo} />
            </a>
            <a href="https://github.com/CilleMDU" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub" className={styles.socialMediaLogo} />
            </a>
            <a href="https://www.instagram.com/EonsOfHemera/" target="_blank" rel="noopener noreferrer">
              <img src={instaLogo} alt="Instagram" className={styles.socialMediaLogo} />
            </a>
            </div>
          </div>
        </div>
        <div className={styles.contactFormContainer}>
          <h2 className={styles.contactFormTitle}>Contact form</h2>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <input type="hidden" name="to_email" value={RECIPIENT_EMAIL} />
            <label htmlFor="name" className={styles.contactFormLabel}>Name:</label>
            <input type="text" id="name" name="name" className={styles.contactFormInput} required />
            <label htmlFor="email" className={styles.contactFormLabel}>Email:</label>
            <input type="email" id="email" name="email" className={styles.contactFormInput} required />
            <label htmlFor="subject" className={styles.contactFormLabel}>Subject:</label>
            <input type="text" id="subject" name="subject" className={styles.contactFormInput} required />
            <label htmlFor="message" className={styles.contactFormLabel}>Message:</label>
            <textarea id="message" name="message" className={styles.contactFormMsg} required></textarea>
            <button type="submit" className={styles.contactFormButton} disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : <img src={sendBtn} alt="Send" />}
            </button>
            {status === 'success' && (
              <p className={styles.contactFormStatusSuccess}>Message recieved! Sending good vibes back soon!</p>
            )}
            {status === 'error' && (
              <p className={styles.contactFormStatusError}>Darn it! Something went wrong! Try again or feel free to email me directly</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}