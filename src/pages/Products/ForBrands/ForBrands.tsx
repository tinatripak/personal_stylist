import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ScrollCarousel from 'scroll-carousel-react'
import 'react-lazy-load-image-component/src/effects/blur.css'
import styles from './ForBrands.module.scss'

const ForBrands: React.FC = () => {
  return (
    <div className={styles.forBrands}>
      <div className={styles.heading}>
        <ScrollCarousel
          autoplay
          smartSpeed
          speed={6}
          className={styles.carousel}
        >
          {Array.from({ length: 7 }, (_, index) => (
            <div key={index} className={styles.brand}>
              <p className={styles.name}>For Brands</p>
            </div>
          ))}
        </ScrollCarousel>
      </div>
      <div className={styles.lectionsIntegrations}>
        <div className={styles.lections}>
          <LazyLoadImage
            src="lection.jpg"
            alt="Lector"
            effect="blur"
            className={styles.lazyImage}
          />
          <div>
            <p className={styles.heading}>
              Lection about the fashion and style
            </p>
            <ul>
              <li>suitable for customers and staff</li>
            </ul>
            <span>
              The topic, location, and cost are discussed individually
              <br />
            </span>
            <a href="https://t.me/libalizka">Contact Me</a>
          </div>
        </div>
        <div className={styles.integrations}>
          <div>
            <p className={styles.heading}>Advertising integrations</p>
            <ul>
              <li>online or offline brand reviews</li>
              <li>photo or video in the profile</li>
              <li>unpacking</li>
            </ul>
            <span>
              I am also considering other formats of cooperation
              <br />
            </span>
            <a href="https://t.me/libalizka">Contact Me</a>
          </div>
          <LazyLoadImage
            src="integrations.jpg"
            alt="Advertisement"
            effect="blur"
            className={styles.lazyImage}
          />
        </div>
      </div>
    </div>
  )
}

export default ForBrands
