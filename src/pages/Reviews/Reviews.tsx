import React from "react";
import Layout from "../../components/Layout/Layout";
import reviewlist from "./reviewlist";
import ScrollCarousel from "scroll-carousel-react";
import styles from "./Reviews.module.scss";

const Reviews: React.FC = () => {
  return (
    <Layout>
      <div className={styles.reviews}>
        <p className={styles.heading}>Reviews</p>
        <ScrollCarousel
          autoplay
          smartSpeed
          speed={6}
          className={styles.carousel}
        >
          {reviewlist.map((review) => (
            <div key={review.id} className={styles.review}>
              <p className={styles.name}>/{review.name}</p>
              <p className={styles.text}>{review.reviewText}</p>
            </div>
          ))}
        </ScrollCarousel>
        <div className={styles.quote}>
          <q>
            Don't be into trends. Don't make fashion own you, but you decide
            what you are, what you want to express by the way you dress and the
            way to live.
          </q>
          <br />
          —Gianni Versace
        </div>
      </div>
    </Layout>
  );
};

export default Reviews;
