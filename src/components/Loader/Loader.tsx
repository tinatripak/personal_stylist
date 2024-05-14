import React from 'react'
import styles from './Loader.module.scss'

const Loader: React.FC = () => {
  return (
    <div className={styles.loader_overlay}>
      <div className={styles.loader}>Liza Balizka</div>
    </div>
  )
}

export default Loader
