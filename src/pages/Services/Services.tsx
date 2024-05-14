import React from "react";
import Layout from "../../components/Layout/Layout";
import ScrollCarousel from "scroll-carousel-react";
import servicelist from "./servicelist";

import styles from "./Services.module.scss";

const Services: React.FC = () => {
  return (
    <Layout>
      <div className={styles.services}>
        <div className={styles.heading}>
          <ScrollCarousel
            autoplay
            smartSpeed
            speed={6}
            className={styles.carousel}
          >
            {[
              "My Services",
              "My Services",
              "My Services",
              "My Services",
              "My Services",
              "My Services",
              "My Services",
            ].map((text, index) => (
              <div key={index} className={styles.service}>
                <p className={styles.name}>{text}</p>
              </div>
            ))}
          </ScrollCarousel>
        </div>
        <div className={styles.serviceList}>
          {servicelist.map((service) => (
            <div key={service.id} className={styles.service}>
              <img src={service.photoUrl} alt={service.name} />
              <p className={styles.name}>{service.name}</p>
              <p className={styles.description}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Services;
