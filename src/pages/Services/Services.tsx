import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import ScrollCarousel from 'scroll-carousel-react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Loader from '../../components/Loader/Loader'
import servicelist from './servicelist'
import { useNavigate } from 'react-router-dom'

import styles from './Services.module.scss'

const Services: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const navigate = useNavigate()

  const handleImageLoad = () => {
    setImageLoaded(true)
  }
  return (
    <div>
      {!imageLoaded && <Loader />}
      <Layout>
        <div className={styles.services}>
          <div className={styles.heading}>
            <ScrollCarousel
              autoplay
              smartSpeed
              speed={6}
              className={styles.carousel}
            >
              {Array.from({ length: 7 }, (_, index) => (
                <div key={index} className={styles.service}>
                  <p className={styles.name}>My Services</p>
                </div>
              ))}
            </ScrollCarousel>
          </div>
          <div className={styles.serviceList}>
            {servicelist.map((service) => (
              <div
                key={service.id}
                className={styles.service}
                onClick={() => navigate(`/service/${service.id}`)}
              >
                <LazyLoadImage
                  key={service.id}
                  src={service.photoUrl}
                  alt={service.name}
                  effect="blur"
                  onLoad={handleImageLoad}
                />
                <p className={styles.name}>{service.name}</p>
                <p className={styles.description}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Services
