import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import Loader from '../../components/Loader/Loader'
import ForBrands from './ForBrands/ForBrands'
import GiftCard from './GIftCard/GiftCard'
import { useTranslation } from 'react-i18next'

import styles from './Products.module.scss'

const Products: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const { t } = useTranslation()

  const handleImageLoad = () => {
    setImageLoaded(true)
  }
  return (
    <div>
      {!imageLoaded && <Loader />}
      <Layout>
        <div className={styles.product}>
          <div className={styles.image}>
            <img
              src="/images/products.jpg"
              alt="Liza Balizka"
              onLoad={handleImageLoad}
            />
          </div>
          <div className={styles.presentation}>
            <p className={styles.heading}>{t('products_title')}</p>
            <p className={styles.title}>{t('products_presentationName')}</p>
            <ul>
              <li>{t('products_presentationDesc1')}</li>
              <li>{t('products_presentationDesc2')}</li>
              <li>{t('products_presentationDesc3')}</li>
            </ul>
            <a href="/AccessoryTrends.pdf" download>
              {t('products_presentationButton')}
            </a>
          </div>
        </div>
        <GiftCard />
        <ForBrands />
      </Layout>
    </div>
  )
}

export default Products
