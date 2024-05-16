import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ScrollCarousel from 'scroll-carousel-react'
import 'react-lazy-load-image-component/src/effects/blur.css'
import styles from './GiftCard.module.scss'

const GiftCard: React.FC = () => {
  return (
    <div className={styles.giftCard}>
      <div className={styles.heading}>
        <ScrollCarousel
          autoplay
          smartSpeed
          speed={6}
          className={styles.carousel}
        >
          {Array.from({ length: 7 }, (_, index) => (
            <div key={index} className={styles.card}>
              <p className={styles.name}>Gift Card</p>
            </div>
          ))}
        </ScrollCarousel>
      </div>
      <div className={styles.giftblock}>
        <div className={styles.rules}>
          <p className={styles.heading}>
            You can purchase this service as a gift
          </p>
          <p className={styles.desc}>
            All you need to do is contact me in a format that is convenient for
            you, so that together we can choose the service that will be most
            effective in your case.{' '}
          </p>
          <a href="https://t.me/libalizka">Contact Me</a>
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
