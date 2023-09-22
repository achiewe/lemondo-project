import styles from "./filter.module.scss";

const Filter = (): JSX.Element => {
  return (
    <div className={styles.filterMain}>
      <div className={styles.titleFilterDiv}>
        <h3 className={styles.titleFilter}> ფილტრი</h3>
      </div>
    </div>
  );
};

export default Filter;
