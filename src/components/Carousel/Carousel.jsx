import { useMemo } from 'react';
import styles from './Carousel.module.css';
import Reviews from '../../Data/reviews.json';

// Fisher-Yates shuffle, returns a new array without mutating the original
function shuffle(array) {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

export default function Carousel() {
    // Randomize review order and pick a single random answer per question, once per mount
    const shuffledReviews = useMemo(
        () =>
            shuffle(Reviews).map((review) => ({
                ...review,
                answer: review.answer[Math.floor(Math.random() * review.answer.length)],
            })),
        []
    );

    // Render the list twice so the scroll animation can loop seamlessly
    const loopedReviews = [...shuffledReviews, ...shuffledReviews];

    return (
        <div className={styles.carousel}>
            <div className={styles.carouselContainer}>
                {loopedReviews.map((review, index) => (
                    <div
                        key={`${review.id}-${index}`}
                        className={styles.carouselItem}
                        aria-hidden={index >= shuffledReviews.length}
                    >
                        <p className={styles.reviewTitle}>{review.question}</p>
                        <p className={styles.reviewText}>"{review.answer}"</p>
                        <p className={styles.reviewText}>- {review.relationship}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}