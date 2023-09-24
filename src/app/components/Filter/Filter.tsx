import styles from "./filter.module.scss";
import closeSvg from "../../../../public/assets/Btn_close.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { Rootstate } from "@/features/store";
import { setOpenFilter } from "@/features/OpenFilterSlice";
import FilterCategory from "./filterCategory/FilterCategory";

const Filter = (): JSX.Element => {
  const openFilter = useSelector(
    (store: Rootstate) => store.openFilter.openFilter
  );

  const dispatch = useDispatch();
  const mainClass = `${styles.filterMain} ${
    openFilter ? styles.filter : styles.deskFilter
  }`;
  return (
    <form className={mainClass}>
      <div className={styles.FilterTopMain}>
        <div className={styles.titleFilterDiv}>
          <h3 className={styles.titleFilter}> ფილტრი</h3>
          <Image
            src={closeSvg}
            alt="close img"
            onClick={() => {
              dispatch(setOpenFilter());
            }}
          />
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
                    // value={0}
                  />
                </div>

                <div className={styles.secondInputOverlay}>
                  <input
                    className={styles.secondInput}
                    type="number"
                    // value={0}
                  />
                </div>
              </div>

              <div className={styles.rangeSlider}>
                <input
                  type="range"
                  className={styles.slider}
                  min="0"
                  max="50"
                />
                <input
                  type="range"
                  className={styles.slider}
                  min="50"
                  max="100"
                />
              </div>
            </div>
          </div>

          <div className={styles.priceDiv}>
            <div className={styles.titleInputDiv}>
              <h3 className={styles.titleP}> სიმბოლოების რაოდონობა</h3>

              <div className={styles.priceInputDiv}>
                <div className={styles.inputSymbols}>
                  <input
                    className={styles.SymbolsFirstInp}
                    type="number"
                    value={0}
                  />
                </div>

                <div className={styles.priceInputDivsec}>
                  <input
                    className={styles.SymbolsSecInp}
                    type="number"
                    value={0}
                  />
                </div>
              </div>

              {/* <div className={styles.rangeDiv}> */}
              <input
                className={styles.slider2}
                type="range"
                min="0"
                // max="2"
              />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      <FilterCategory />
      <div className={styles.buttonDiv}>
        <button className={styles.submitButton} type="submit">
          ᲫᲘᲔᲑᲐ
        </button>
      </div>
    </form>
  );
};

export default Filter;
