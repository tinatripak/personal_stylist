import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  const { t } = useTranslation()

  return (
    <footer className={styles.footer}>
      <p className={styles.heading}>{t('footer_title')}</p>
      <div className={styles.social_media}>
        <div>
          <p>{t('footer_social')}</p>
          <div className={styles.icons}>
            <div>
              <a href="https://www.instagram.com/li.balizka/">Instagram</a>
            </div>
            <div>
              <a href="https://t.me/libalizka">Telegram</a>
            </div>
          </div>
        </div>
        <div>
          <p>{t('footer_email')}</p>
          <a href="mailto:collabs@lizabalizka.com">collabs@lizabalizka.com</a>
        </div>
        <div>
          <p className={styles.name}>{t('footer_name')}</p>
          <Link className={styles.refundPolicy} to="/refundPolicy">
            {t('refundPolicy_title')}
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
