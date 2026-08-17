import styles from "./FunFactCards.module.css";
import funFactCardFront from "../../img/funFact/funFact.svg";
import FactOne from "../../img/funFact/FactOne.svg";
import FactTwo from "../../img/funFact/FactTwo.svg";
import FactThree from "../../img/funFact/FactThree.svg";

export default function FunFactCards() {
  const handleCardFlip = (event) => {
    const card = event.currentTarget;
    card.classList.toggle(styles.flipped);
  };

  return (
    <div className={styles.funFactCards}>
      <div className={styles.funFactContainer}>
        <div className={styles.funFactCard} onClick={handleCardFlip}>
          <div className={styles.funFactCardFront}>
            <img
              src={funFactCardFront}
              alt="Fun Fact Card Front"
              className={styles.funFactCardImage}
            />
          </div>
          <div className={styles.funFactCardBack}>
            <img
              src={FactOne}
              alt="Fun Fact Card Back"
              className={styles.funFactCardImage}
            />
          </div>
        </div>
        <div className={styles.funFactCard} onClick={handleCardFlip}>
          <div className={styles.funFactCardFront}>
            <img
              src={funFactCardFront}
              alt="Fun Fact Card Front"
              className={styles.funFactCardImage}
            />
          </div>
          <div className={styles.funFactCardBack}>
            <img
              src={FactTwo}
              alt="Fun Fact Card Back"
              className={styles.funFactCardImage}
            />
          </div>
        </div>
        <div className={styles.funFactCard} onClick={handleCardFlip}>
          <div className={styles.funFactCardFront}>
            <img
              src={funFactCardFront}
              alt="Fun Fact Card Front"
              className={styles.funFactCardImage}
            />
          </div>
          <div className={styles.funFactCardBack}>
            <img
              src={FactThree}
              alt="Fun Fact Card Back"
              className={styles.funFactCardImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
