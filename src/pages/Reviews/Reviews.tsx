// import React from 'react'
// import styles from './Reviews.module.scss'
// import { CgQuote } from 'react-icons/cg'
// import { useTranslation } from 'react-i18next'
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

// import reviewlist from './reviewlist'

// const Reviews: React.FC = () => {
//   const { t, i18n } = useTranslation()
//   const slider = React.useRef(null)
//   const settings = {
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 2,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1290,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 855,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   }

//   return (
//     <div className={styles.reviews}>
//       <p className={styles.heading}>{t('reviews_title')}</p>
//       <Slider {...settings} ref={slider} className={styles.carousel}>
//         {reviewlist.map((review) => (
//           <div key={review.id} className={styles.slide}>
//             <div className={styles.review}>
//               <CgQuote />
//               <p className={styles.text}>
//                 {i18n.language == 'en'
//                   ? review.reviewText
//                   : review.reviewTextUkr}
//               </p>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   )
// }

// export default Reviews

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
      <p className={styles.heading}>{t('reviews_title')}</p>
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
