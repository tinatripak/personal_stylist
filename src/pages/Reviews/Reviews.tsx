import React, { useState, useRef } from 'react'
import reviews from './reviewlist'
import { CgQuote } from 'react-icons/cg'
import { useTranslation } from 'react-i18next'

import styles from './Reviews.module.scss'

const Carousel = () => {
  const { t, i18n } = useTranslation()
  const [current, setCurrent] = useState(0)
  const containerRef = useRef(null)
  const numToShow = 3
  const numDots = Math.ceil(reviews.length / numToShow)
  const [visibleCount, setVisibleCount] = useState(3)

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3)
  }
  const goToReview = (index: number) => {
    setCurrent(index)
  }

  return (
    <div className={styles.carouselContainer}>
      <h1 className={styles.heading}>{t('reviews_title')}</h1>
      <div className={styles.carousel} ref={containerRef}>
        <div
          className={styles.carouselInner}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {reviews.map((review, _) => (
            <div key={review.id} className={styles.review}>
              <p>
                <CgQuote /> <br />
                {i18n.language == 'en'
                  ? review.reviewText
                  : review.reviewTextUkr}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.smallCarousel}>
        {reviews.slice(0, visibleCount).map((review) => (
          <div key={review.id} className={styles.review}>
            <p>
              <CgQuote /> <br />
              {i18n.language == 'en' ? review.reviewText : review.reviewTextUkr}
            </p>
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {Array.from({ length: numDots }).map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === current ? styles.active : ''}`}
            onClick={() => goToReview(index)}
          ></span>
        ))}
      </div>
      {visibleCount < reviews.length && (
        <button className={styles.loadMore} onClick={loadMore}>
          {t('load_more')}
        </button>
      )}
    </div>
  )
}

export default Carousel
