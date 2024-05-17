import React from 'react'
import Layout from '../../components/Layout/Layout'
import ScrollCarousel from 'scroll-carousel-react'
import styles from './Reviews.module.scss'
import { CgQuote } from 'react-icons/cg'
import { useTranslation } from 'react-i18next'

import reviewlist from './reviewlist'

const Reviews: React.FC = () => {
  const { t, i18n } = useTranslation()

  return (
    <Layout>
      <div className={styles.reviews}>
        <p className={styles.heading}>{t('reviews_title')}</p>
        <ScrollCarousel
          autoplay
          autoplaySpeed={1}
          speed={1}
          className={styles.carousel}
        >
          {reviewlist.map((review) => (
            <div key={review.id} className={styles.review}>
              <p className={styles.name}>
                {i18n.language == 'en' ? review.name : review.nameUkr}
              </p>
              <CgQuote />
              <p className={styles.text}>
                {i18n.language == 'en'
                  ? review.reviewText
                  : review.reviewTextUkr}
              </p>
            </div>
          ))}
        </ScrollCarousel>
        <div className={styles.quote}>
          <q>{t('reviews_quote')}</q>
          <br />— {t('reviews_quotePerson')}
        </div>
      </div>
    </Layout>
  )
}

export default Reviews
