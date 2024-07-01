import React, { useState } from 'react'
import ScrollCarousel from 'scroll-carousel-react'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { useTranslation } from 'react-i18next'
import Loader from '../../../components/Loader/Loader'

import styles from './GiftCard.module.scss'

const GiftCard: React.FC = () => {
  const { t } = useTranslation()
  const [imagesLoaded, setImagesLoaded] = useState({ bg: false, card: false })

  const handleImageLoad = (image: 'bg' | 'card') => {
    setImagesLoaded((prevState) => ({ ...prevState, [image]: true }))
  }

  const allImagesLoaded = imagesLoaded.bg && imagesLoaded.card

  return (
    <div>
      {!allImagesLoaded && <Loader />}
      <div className={styles.giftCardPage}>
        <img
          src="/images/gloves.jpg"
          alt="Background"
          className={styles.backgroundImg}
          onLoad={() => handleImageLoad('bg')}
        />
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
              <img
                src="images/giftcertificate.png"
                alt={`Liza Balizka, Gift Card`}
                onLoad={() => handleImageLoad('card')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GiftCard
