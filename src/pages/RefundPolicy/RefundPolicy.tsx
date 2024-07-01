import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../../components/Layout/Layout'

import styles from './RefundPolicy.module.scss'

const RefundPolicy = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <div className={styles.refundPolicy}>
        <h1 className={styles.heading}>{t('refundPolicy_title')}</h1>
        <h2 className={styles.subscription}>
          {t('refundPolicy_subscription')}
        </h2>
        <h3 className={styles.headingList}>
          {t('refundPolicy_payment_title')}:
        </h3>
        <ul>
          <li className={styles.liText}>{t('refundPolicy_payment_paypal')}</li>
          <li className={styles.liText}>{t('refundPolicy_payment_cash')}</li>
        </ul>
        <h3 className={styles.headingList}>
          {t('refundPolicy_giftcard_title')}:
        </h3>
        <ul>
          <li className={styles.liText}>
            {t('refundPolicy_giftcard_delivery')}
          </li>
        </ul>
        <h3 className={styles.headingList}>
          {t('refundPolicy_conditions_title')}:
        </h3>
        <ul>
          <li className={styles.liText}>{t('refundPolicy_firstCondition')}</li>
          <li className={styles.liText}>{t('refundPolicy_secondCondition')}</li>
          <li className={styles.liText}>{t('refundPolicy_thirdCondition')}</li>
        </ul>
      </div>
    </Layout>
  )
}

export default RefundPolicy
