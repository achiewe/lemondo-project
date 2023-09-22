import styles from "./Advertisment.module.scss";

const Advertisment = (): JSX.Element => {
  return (
    <div className={styles.mainAdvetisment}>
      <div className={styles.overlay}>
        <p className={styles.advertismentP}>გაყიდე და იყიდე დომენი მარტივად </p>
      </div>
    </div>
  );
};

export default Advertisment;
