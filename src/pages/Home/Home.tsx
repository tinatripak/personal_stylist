import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import Loader from '../../components/Loader/Loader'
import styles from './Home.module.scss'
import Typewriter from 'typewriter-effect'
import { ReactTyped } from 'react-typed'

const Home: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false)

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
              <p className={styles.heading}>Personal Stylist</p>
              <p className={styles.subheading}>
                <Typewriter
                  options={{
                    strings: [
                      'Let your look speak for you. Individual style for the unique you!',
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 0,
                  }}
                />
              </p>
              <a className={styles.service_button} href="/services">
                My Services
              </a>
            </div>
            <div className={styles.first_image}>
              <img
                src="/stylist.jpg"
                alt="Liza Balizka"
                onLoad={handleImageLoad}
              />
            </div>
          </div>
          <div className={styles.second_block}>
            <div className={styles.second_image}>
              <img src="/stylist_2.jpg" alt="Liza Balizka" />
            </div>
            <div className={styles.about}>
              <p className={styles.greetings}>HI!</p>
              <p className={styles.bio}>
                I am a <span>personal stylist Liza</span> and I want to help you
                find and express you unique style.
              </p>
              <p className={styles.mission_heading}>
                <ReactTyped
                  strings={['My mission', 'My desire', 'My purpose']}
                  typeSpeed={100}
                  loop
                  backSpeed={20}
                  showCursor={true}
                />
              </p>
              <p className={styles.mission}>
                It is to make you happier by expressing your inner world through
                your appearance, especially though your choice of style in
                clothing.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home
