import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Loader.module.scss'

const Loader: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.loader_overlay}>
      <div className={styles.loader}>{t('loading_text')}</div>
    </div>
  )
}

export default Loader
