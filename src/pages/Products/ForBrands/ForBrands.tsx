import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ScrollCarousel from 'scroll-carousel-react'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { useTranslation } from 'react-i18next'

import styles from './ForBrands.module.scss'

const ForBrands: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.forBrands}>
      <div className={styles.heading}>
        <ScrollCarousel autoplay speed={1} className={styles.carousel}>
          {Array.from({ length: 7 }, (_, index) => (
            <div key={index} className={styles.brand}>
              <h1 className={styles.name}>{t('brands_title')}</h1>
            </div>
          ))}
        </ScrollCarousel>
      </div>
      <div className={styles.lectionsIntegrations}>
        <div className={styles.lections}>
          <LazyLoadImage
            src="images/lection.jpg"
            alt="Lector"
            effect="blur"
            className={styles.lazyImage}
          />
          <div>
            <h2 className={styles.heading}>{t('brands_lectionTitle')}</h2>
            <ul>
              <li>{t('brands_lectionRule')}</li>
            </ul>
            <span>
              {t('brands_lectionAdd')}
              <br />
            </span>
            <a href="https://t.me/libalizka">{t('brands_lectionButton')}</a>
          </div>
        </div>
        <div className={styles.integrations}>
          <div>
            <h2 className={styles.heading}>{t('brands_integrationTitle')}</h2>
            <ul>
              <li>{t('brands_integrationRule1')}</li>
              <li>{t('brands_integrationRule2')}</li>
              <li>{t('brands_integrationRule3')}</li>
            </ul>
            <span>
              {t('brands_integrationAdd')}
              <br />
            </span>
            <a href="https://t.me/libalizka">{t('brands_integrationButton')}</a>
          </div>
          <LazyLoadImage
            src="images/integrations.jpg"
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
