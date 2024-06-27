import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import Loader from '../../components/Loader/Loader'
import styles from './Home.module.scss'
import Typewriter from 'typewriter-effect'
import { ReactTyped } from 'react-typed'
import { useTranslation } from 'react-i18next'
import Reviews from '../Reviews/Reviews'

const Home: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const { t } = useTranslation()
  const handleImageLoad = () => {
    setImageLoaded(true)
  }
  return (
    <div>
      {!imageLoaded && <Loader />}
      <Layout>
        <div className={styles.home}>
          <div className={styles.first_block}>
            <div className={styles.main}>
              <p className={styles.heading}>{t('home_title')}</p>
              <div className={styles.subheading}>
                <Typewriter
                  options={{
                    strings: [`${t('home_subtitle')}`],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 0,
                  }}
                />
              </div>
              <a className={styles.service_button} href="/services">
                {t('home_button')}
              </a>
            </div>
            <div className={styles.first_image}>
              <img
                src="/images/secondMain.jpg"
                alt="Liza Balizka, Certified Personal Stylist"
                onLoad={handleImageLoad}
              />
            </div>
          </div>
          <div className={styles.second_block}>
            <div className={styles.second_image}>
              <img
                src="/images/firstMain.jpg"
                alt="Liza Balizka, Certified Personal Stylist"
              />
            </div>
            <div className={styles.about}>
              <p className={styles.greetings}>{t('home_hiText')}</p>
              <p className={styles.bio}>
                {t('home_startText')} <span> {t('home_stylistText')} </span>{' '}
                {t('home_endText')}
              </p>
              <p className={styles.bio}>{t('home_firstDesc')}</p>
              <p className={styles.bio}>{t('home_secondDesc')}</p>
            </div>
          </div>
          <Reviews />
        </div>
      </Layout>
    </div>
  )
}

export default Home
