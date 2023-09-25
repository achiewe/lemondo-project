import styles from "./filter.module.scss";
import closeSvg from "../../../../public/assets/Btn_close.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { Rootstate } from "@/features/store";
import { setOpenFilter } from "@/features/OpenFilterSlice";
import FilterCategory from "./filterCategory/FilterCategory";
import { Info } from "../../../../type";
import { setText } from "@/features/TakeNameSlice";
import { useEffect } from "react";
import { useState } from "react";
import { setInfo } from "@/features/InfoArraySlice";

const Filter = (): JSX.Element => {
  const text = useSelector((store: Rootstate) => store.text.text);
  // console.log("gaveshviiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii" + " " + text);
  const openFilter = useSelector(
    (store: Rootstate) => store.openFilter.openFilter
  );

  const dispatch = useDispatch();
  const mainClass = `${styles.filterMain} ${
    openFilter ? styles.filter : styles.deskFilter
  }`;

  const [saveText, setSaveText] = useState<string>(" ");
  const info = useSelector((store: Rootstate) => store.info.info);

  // const filterAll = (): Info[] => {
  //   let filterData = info;
  //   if (text.length > 0) {
  //     filterData = filterData.filter((data) => {
  //       return data.domain.toLowerCase().includes(text.toLowerCase());
  //     });
  //   }

  //   return filterData;
  // };
  // const filterData = filterAll();

  // console.log(filterData);

  // useEffect(() => {
  //   dispatch(setInfo(filterData));
  // }, [filterData]);

  // console.log(info, "dqwdqwdqwd");
  return (
    <form
      className={mainClass}
      onSubmit={(e) => {
        e.preventDefault();

        dispatch(setText(saveText));
      }}
    >
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
            onChange={(e) => {
              setSaveText(e.target.value);
            }}
            className={styles.inputName}
            type="text"
            placeholder="სახელით ძიება"
            value={saveText}
          />
        </div>

        <div className={styles.priceSymbolsDiv}>
          <div className={styles.priceDiv}>
            <div className={styles.titleInputDiv}>
              <h3 className={styles.titleP}> ფასი</h3>

              <div className={styles.priceInputDiv}>
                <div className={styles.inputOverlay}>
                  <input className={styles.firstInput} type="number" />
                </div>

                <div className={styles.secondInputOverlay}>
                  <input className={styles.secondInput} type="number" />
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

              <div className={styles.secSliderRange}>
                <input
                  type="range"
                  className={styles.sliderSec}
                  min="1"
                  max="50000"
                  // onChange={(e) => {
                  //   console.log("Min:", e.target.min);
                  //   console.log("Max:", e.target.max);
                  // }}
                />
                <input
                  type="range"
                  className={styles.sliderSec}
                  min="50"
                  max="100"
                />
              </div>
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
