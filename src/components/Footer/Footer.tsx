import React from 'react'
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

import styles from './Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.heading}>Get in touch</p>
      <div className={styles.social_media}>
        <div>
          <p>Social media</p>
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
          <p>Email</p>
          <a href="mailto:collabs@lizabalizka.com">collabs@lizabalizka.com</a>
        </div>
        <p className={styles.name}>Liza Balizka</p>
      </div>
    </footer>
  )
}

export default Footer
