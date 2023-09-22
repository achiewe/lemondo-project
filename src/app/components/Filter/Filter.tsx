import styles from "./filter.module.scss";
import closeSvg from "../../../../public/assets/Btn_close.svg";
import Image from "next/image";

const Filter = (): JSX.Element => {
  return (
    <div className={styles.filterMain}>
      <div className={styles.FilterTopMain}>
        <div className={styles.titleFilterDiv}>
          <h3 className={styles.titleFilter}> ფილტრი</h3>
          <Image src={closeSvg} alt="close img" />
        </div>

        <div className={styles.inputDiv}>
          <input
            className={styles.inputName}
            type="text"
            placeholder="სახელით ძიება"
          />
        </div>

        <div className={styles.priceSymbolsDiv}>
          <div className={styles.priceDiv}>
            <div className={styles.titleInputDiv}>
              <h3 className={styles.titleP}> ფასი</h3>

              <div className={styles.priceInputDiv}>
                <div className={styles.inputOverlay}>
                  <input
                    className={styles.firstInput}
                    type="number"
                    value={0}
                  />
                </div>

                <div className={styles.inputOverlay}>
                  <input
                    className={styles.firstInput}
                    type="number"
                    value={0}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
