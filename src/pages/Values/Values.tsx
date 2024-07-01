import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { useTranslation } from 'react-i18next'
import valuelist from './valuelist'
import Loader from '../../components/Loader/Loader'

import styles from './Values.module.scss'

const Values: React.FC = () => {
  const { t, i18n } = useTranslation()
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div>
      {!imageLoaded && <Loader />}
      <Layout>
        <div className={styles.valuesPage}>
          <img
            src="/images/bgvalues.JPG"
            alt="Background"
            className={styles.backgroundImg}
            onLoad={() => setImageLoaded(true)}
          />
          <div className={styles.values}>
            <h1 className={styles.heading}>{t('values_title')}</h1>
            <div className={styles.valuelist}>
              {valuelist.map((value) => (
                <div key={value.id} className={styles.value}>
                  <p className={styles.id}>{value.id}</p>
                  <p className={styles.text}>
                    {i18n.language === 'en'
                      ? value.valueText
                      : value.valueTextUkr}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Values
