import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './RefundPolicy.module.scss'
import Layout from '../../components/Layout/Layout'

const RefundPolicy = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <div className={styles.refundPolicy}>
        <p className={styles.heading}>{t('refundPolicy_title')}</p>
        <p className={styles.subscription}>{t('refundPolicy_subscription')}</p>
        <p className={styles.headingList}>{t('refundPolicy_payment_title')}:</p>
        <p className={styles.liText}>
          &#9675; {t('refundPolicy_payment_paypal')}
        </p>
        <p className={styles.liText}>
          &#9675; {t('refundPolicy_payment_cash')}
        </p>
        <p className={styles.headingList}>
          {t('refundPolicy_giftcard_title')}:
        </p>
        <p className={styles.liText}>
          &#9675; {t('refundPolicy_giftcard_delivery')}
        </p>
        <p className={styles.headingList}>
          {t('refundPolicy_conditions_title')}:
        </p>
        <p className={styles.liText}>
          &#9675; {t('refundPolicy_firstCondition')}
        </p>
        <p className={styles.liText}>
          &#9675; {t('refundPolicy_secondCondition')}
        </p>
        <p className={styles.liText}>
          &#9675; {t('refundPolicy_thirdCondition')}
        </p>
      </div>
    </Layout>
  )
}

export default RefundPolicy
