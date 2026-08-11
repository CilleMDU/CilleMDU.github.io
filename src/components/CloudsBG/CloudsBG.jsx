import { useEffect, useState } from 'react';
import styles from './CloudsBG.module.css';
import bigCloud from '../../img/clouds/bgClouds/bg-cloud-big.svg';
import smallCloud from '../../img/clouds/bgClouds/bg-cloud-small.svg';
import medCloud from '../../img/clouds/bgClouds/bg-cloud-med.svg';

const CLOUD_IMAGES = { big: bigCloud, med: medCloud, small: smallCloud };

// height (px) of one scattered-cloud pattern block, repeated down the whole page
const TILE_HEIGHT = 900;

// multiplies every cloud's animation duration; lower is faster
const SPEED_MULTIPLIER = 0.968;

// deterministic pseudo-random number in [0, 1), so repeated tiles vary in size without hydration mismatches
function seededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

// hand-picked "random" scatter of clouds within a single tile (top in % of the tile,
// left in % is only used to stagger how far into its screen-crossing each cloud starts)
const CLOUD_PATTERN = [
    { type: 'big', top: 2, left: 4, width: 360, duration: 70, delay: -8 },
    { type: 'small', top: 10, left: 2, width: 110, duration: 42, delay: -20 },
    { type: 'med', top: 18, left: 44, width: 200, duration: 56, delay: -2 },
    { type: 'small', top: 26, left: 18, width: 90, duration: 34, delay: -6 },
    { type: 'big', top: 34, left: 62, width: 300, duration: 60, delay: -18 },
    { type: 'small', top: 44, left: 16, width: 130, duration: 36, delay: -26 },
    { type: 'med', top: 50, left: 6, width: 240, duration: 52, delay: -34 },
    { type: 'big', top: 60, left: 34, width: 380, duration: 64, delay: -40 },
    { type: 'small', top: 68, left: 70, width: 100, duration: 38, delay: -12 },
    { type: 'med', top: 76, left: 6, width: 170, duration: 50, delay: -14 },
    { type: 'small', top: 84, left: 46, width: 140, duration: 44, delay: -32 },
    { type: 'med', top: 90, left: 22, width: 220, duration: 58, delay: -46 },
    { type: 'small', top: 6, left: 54, width: 120, duration: 40, delay: -16, reverse: true },
    { type: 'big', top: 22, left: 88, width: 340, duration: 66, delay: -28, reverse: true },
    { type: 'med', top: 40, left: 14, width: 160, duration: 48, delay: -4 },
    { type: 'small', top: 56, left: 58, width: 100, duration: 32, delay: -22, reverse: true },
    { type: 'big', top: 72, left: 8, width: 280, duration: 62, delay: -36 },
    { type: 'med', top: 96, left: 12, width: 190, duration: 54, delay: -10 },
];

export default function CloudsBG() {
    const [pageHeight, setPageHeight] = useState(0);

    // re-measure the document height whenever page content changes length, so the
    // scattered-cloud pattern keeps tiling all the way down no matter the page/route
    useEffect(() => {
        const updateHeight = () => setPageHeight(document.documentElement.scrollHeight);

        updateHeight();

        const observer = new ResizeObserver(updateHeight);
        observer.observe(document.body);
        window.addEventListener('resize', updateHeight);

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', updateHeight);
        };
    }, []);

    const tileCount = Math.max(1, Math.ceil(pageHeight / TILE_HEIGHT));

    return (
        <div className={styles.cloudsBG}>
            <div className={styles.pageHighlight}></div>
            <div className={styles.clouds} style={{ height: tileCount * TILE_HEIGHT }}>
                {Array.from({ length: tileCount }, (_, tileIndex) =>
                    CLOUD_PATTERN.map((cloud, cloudIndex) => {
                        // size and speed variance per repeat so tiles don't look identical
                        // and clouds don't drift in sync (which left one side looking empty)
                        const sizeVariance = 0.65 + seededRandom(tileIndex * 97 + cloudIndex * 13) * 0.7;
                        const speedVariance = 0.7 + seededRandom(tileIndex * 61 + cloudIndex * 29 + 500) * 0.6;
                        const duration = cloud.duration * speedVariance * SPEED_MULTIPLIER;
                        // negative delay starts the cloud partway across the screen instead of
                        // every cloud entering from off-screen at the same time
                        const delay = -((cloud.left / 100) * duration) + cloud.delay;

                        return (
                        <div
                            key={`${tileIndex}-${cloudIndex}`}
                            className={styles.cloudWrap}
                            style={{
                                top: tileIndex * TILE_HEIGHT + (cloud.top / 100) * TILE_HEIGHT,
                                width: cloud.width * sizeVariance,
                            }}
                        >
                            <img
                                src={CLOUD_IMAGES[cloud.type]}
                                alt=""
                                className={styles.cloud}
                                style={{
                                    animationDuration: `${duration}s`,
                                    animationDelay: `${delay}s`,
                                    animationDirection: cloud.reverse ? 'reverse' : 'normal',
                                }}
                            />
                        </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}