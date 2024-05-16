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
                      'Be yourself and let your style speak uniquely for you!',
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
              <p className={styles.greetings}>HEY Sweatheart,</p>
              <p className={styles.bio}>
                I am a <span>personal stylist</span> and{' '}
                <span>fashion influencer</span> Liza and I aim to assist you in
                discovering and articulating your distinct style.
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
                It&apos;s about bringing you more joy by allowing your inner
                essence to shine through your outward expression, particularly
                via your exquisite selection of clothing styles.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home
