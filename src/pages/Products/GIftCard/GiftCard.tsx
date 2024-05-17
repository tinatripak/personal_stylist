import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ScrollCarousel from 'scroll-carousel-react'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { useTranslation } from 'react-i18next'

import styles from './GiftCard.module.scss'

const GiftCard: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.giftCard}>
      <div className={styles.heading}>
        <ScrollCarousel autoplay speed={1} className={styles.carousel}>
          {Array.from({ length: 7 }, (_, index) => (
            <div key={index} className={styles.card}>
              <p className={styles.name}>{t('giftcad_title')}</p>
            </div>
          ))}
        </ScrollCarousel>
      </div>
      <div className={styles.giftblock}>
        <div className={styles.rules}>
          <p className={styles.heading}>{t('giftcad_desc')}</p>
          <p className={styles.desc}>{t('giftcad_rule')}</p>
          <a href="https://t.me/libalizka">{t('giftcad_giftCardButton')}</a>
        </div>
        <div className={styles.cardImage}>
          <LazyLoadImage
            src="images/giftcertificate.png"
            alt=""
            effect="blur"
          />
        </div>
      </div>
    </div>
  )
}

export default GiftCard
