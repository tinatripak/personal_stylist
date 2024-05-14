import React from "react";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.heading}>Contacts</p>
      <div className={styles.social_media}>
        <p className={styles.name}>Liza Balizka</p>
        <div className={styles.icons}>
          <a href="https://www.instagram.com/li.balizka/">
            <FaInstagram />
          </a>
          <a href="https://t.me/libalizka">
            <FaTelegramPlane />
          </a>
          <a href="mailto:collabs@lizabalizka.com">
            <SiGmail />
          </a>
        </div>
        <p className={styles.name}>Liza Balizka</p>
      </div>
    </footer>
  );
};

export default Footer;
