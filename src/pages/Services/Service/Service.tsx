import React, { useEffect, useState } from 'react'
import servicelist from '../servicelist'
import Loader from '../../../components/Loader/Loader'
import Layout from '../../../components/Layout/Layout'
import { useParams } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import styles from './Service.module.scss'
import { useTranslation } from 'react-i18next'

const Service: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [serviceItem, setServiceItem] = useState<any>({})
  const [imageLoaded, setImageLoaded] = useState(false)
  const { t, i18n } = useTranslation()

  const fullDescription =
    i18n.language === 'en'
      ? serviceItem?.fullDescription
      : serviceItem?.fullDescriptionUkr

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  useEffect(() => {
    setServiceItem(servicelist.find((x) => x.id === id) || {})
  }, [id])

  return (
    <div>
      {!imageLoaded && <Loader />}
      <Layout>
        <div className={styles.service}>
          <div className={styles.image}>
            <LazyLoadImage
              src={serviceItem.photoUrl}
              alt={serviceItem.name}
              effect="blur"
              onLoad={handleImageLoad}
              fetchPriority="high"
            />
          </div>
          <div className={styles.descItem}>
            <p className={styles.name}>
              {i18n.language == 'en' ? serviceItem.name : serviceItem.nameUkr}
            </p>
            <p className={styles.description}>
              {i18n.language == 'en'
                ? serviceItem.description
                : serviceItem.descriptionUkr}
            </p>
            <ul>
              {fullDescription?.map((desc: string, index: number) => (
                <li key={index} className={styles.fulldesc}>
                  {desc}
                </li>
              ))}
            </ul>
            <p className={styles.result}>
              {i18n.language == 'en'
                ? serviceItem.result
                : serviceItem.resultUkr}
            </p>
            {serviceItem.price != '' && (
              <p className={styles.price}>
                {t('services_price')} : {serviceItem.price}$
              </p>
            )}
            {serviceItem.oldPrice != '' && (
              <p className={styles.oldPrice}>
                {t('services_oldprice')} : {serviceItem.oldPrice}$
              </p>
            )}
            {serviceItem.offlinePrice != '' && (
              <p className={styles.offlinePrice}>
                OFFLINE : {serviceItem.offlinePrice}$
              </p>
            )}
            {serviceItem.onlinePrice != '' && (
              <p className={styles.onlinePrice}>
                ONLINE : {serviceItem.onlinePrice}$
              </p>
            )}
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Service
