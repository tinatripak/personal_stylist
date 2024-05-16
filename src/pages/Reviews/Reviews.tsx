import React from 'react'
import Layout from '../../components/Layout/Layout'
import ScrollCarousel from 'scroll-carousel-react'
import styles from './Reviews.module.scss'
import { CgQuote } from 'react-icons/cg'

import reviewlist from './reviewlist'

const Reviews: React.FC = () => {
  return (
    <Layout>
      <div className={styles.reviews}>
        <p className={styles.heading}>Precious Reviews</p>
        <ScrollCarousel
          autoplay
          smartSpeed
          speed={6}
          className={styles.carousel}
        >
          {reviewlist.map((review) => (
            <div key={review.id} className={styles.review}>
              <p className={styles.name}>{review.name}</p>
              <CgQuote />
              <p className={styles.text}>{review.reviewText}</p>
            </div>
          ))}
        </ScrollCarousel>
        <div className={styles.quote}>
          <q>
            Don&apos;t be into trends. Don&apos;t make fashion own you, but you
            decide what you are, what you want to express by the way you dress
            and the way to live.
          </q>
          <br />
          —Gianni Versace
        </div>
      </div>
    </Layout>
  )
}

export default Reviews
