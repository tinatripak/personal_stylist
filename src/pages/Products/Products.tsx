import React, { useState } from 'react'
import styles from './Products.module.scss'
import Layout from '../../components/Layout/Layout'
import Loader from '../../components/Loader/Loader'
import ForBrands from './ForBrands/ForBrands'
import GiftCard from './GIftCard/GiftCard'

const Products: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false)

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
            <p className={styles.heading}>My Products</p>
            <p className={styles.title}>How upgrade your style in 2024</p>
            <ul>
              <li>trends</li>
              <li>main leading colours of 2024</li>
              <li>style formulas for whole seasons</li>
            </ul>
            <button>Download</button>
          </div>
        </div>
        <GiftCard />
        <ForBrands />
      </Layout>
    </div>
  )
}

export default Products
