import React from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./Home.module.scss";

const Home: React.FC = () => {
  return (
    <Layout>
      <div className={styles.home}>
        <div className={styles.first_block}>
          <div className={styles.main}>
            <p className={styles.heading}>Personal Stylist</p>
            <p className={styles.subheading}>
              Let your look speak for you. Individual style for the unique you!
            </p>
            <a className={styles.service_button} href="/services">
              My Services
            </a>
          </div>
          <div className={styles.first_image}>
            <img src="/stylist.jpg" alt="Liza Balizka" />
          </div>
        </div>
        <div className={styles.second_block} id="about">
          <div className={styles.second_image}>
            <img src="/stylist_2.jpg" alt="Liza Balizka" />
          </div>
          <div className={styles.about}>
            <p className={styles.greetings}>HI!</p>
            <p className={styles.bio}>
              I am a <span>personal stylist Liza</span> and I want to help you
              find and express you unique style.
            </p>
            <p className={styles.mission_heading}>My mission</p>
            <p className={styles.mission}>
              It is to make you happier by expressing your inner world through
              your appearance, especially though your choice of style in
              clothing.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
