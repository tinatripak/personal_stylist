import React from 'react'
import Layout from '../../components/Layout/Layout'
import styles from './Values.module.scss'
import { useTranslation } from 'react-i18next'

import valuelist from './valuelist'

const Values: React.FC = () => {
  const { t, i18n } = useTranslation()

  return (
    <Layout>
      <div className={styles.values}>
        <h1 className={styles.heading}>{t('values_title')}</h1>
        <div className={styles.valuelist}>
          {valuelist.map((value) => (
            <div key={value.id} className={styles.value}>
              <p className={styles.id}>{value.id}</p>
              <h2 className={styles.text}>
                {i18n.language == 'en' ? value.valueText : value.valueTextUkr}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Values
