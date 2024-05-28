import React from 'react'
import Layout from '../../components/Layout/Layout'
import ScrollCarousel from 'scroll-carousel-react'
import styles from './Reviews.module.scss'
import { CgQuote } from 'react-icons/cg'
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import reviewlist from './reviewlist'

const Reviews: React.FC = () => {
  const { t, i18n } = useTranslation()
  const slider = React.useRef(null)
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 855,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Layout>
      <div className={styles.reviews}>
        <p className={styles.heading}>{t('reviews_title')}</p>
        <Slider {...settings} ref={slider} className={styles.carousel}>
          {reviewlist.map((review) => (
            <div key={review.id} className={styles.slide}>
              <div className={styles.review}>
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
            </div>
          ))}
        </Slider>
        <div className={styles.quote}>
          <q>{t('reviews_quote')}</q>
          <br />— {t('reviews_quotePerson')}
        </div>
      </div>
    </Layout>
  )
}

export default Reviews
