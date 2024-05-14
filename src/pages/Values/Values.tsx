import React from "react";
import Layout from "../../components/Layout/Layout";
import valuelist from "./valuelist";
import styles from "./Values.module.scss";

const Values: React.FC = () => {
  return (
    <Layout>
      <div className={styles.values}>
        <div className={styles.backgroundImage}></div>
        <p className={styles.heading}>My Values</p>
        <div className={styles.valuelist}>
          {valuelist.map((value) => (
            <div key={value.id} className={styles.value}>
              <p className={styles.id}>/{value.id}</p>
              <p className={styles.text}>{value.valueText}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Values;
