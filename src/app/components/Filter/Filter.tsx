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

  // for symbols input range
  const [symbolsValue, setSymbolsValue] = useState<string>(" ");
  const [secondSymbolValue, setSecondSymbolValue] = useState<string>(" ");

  //for price input range
  const [priceValue, setPriceValue] = useState<string>(" ");
  const [secPriceValue, setSecPriceValue] = useState<string>(" ");

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
                  <input
                    className={styles.firstInput}
                    type="number"
                    value={priceValue}
                  />
                </div>

                <div className={styles.secondInputOverlay}>
                  <input
                    className={styles.secondInput}
                    type="number"
                    value={secPriceValue}
                  />
                </div>
              </div>

              <div className={styles.rangeSlider}>
                <input
                  type="range"
                  className={styles.slider}
                  min="1"
                  max="50000"
                  onChange={(e) => {
                    setPriceValue(e.target.value);
                  }}
                />
                <input
                  type="range"
                  className={styles.slider}
                  min="1"
                  max="50000"
                  onChange={(e) => {
                    setSecPriceValue(e.target.value);
                  }}
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
                    value={secondSymbolValue}
                  />
                </div>

                <div className={styles.priceInputDivsec}>
                  <input
                    className={styles.SymbolsSecInp}
                    type="number"
                    value={symbolsValue}
                  />
                </div>
              </div>

              <div className={styles.secSliderRange}>
                <input
                  type="range"
                  className={styles.sliderSec}
                  min="0"
                  max="26"
                  onChange={(e) => {
                    setSecondSymbolValue(e.target.value);
                  }}
                />
                <input
                  type="range"
                  className={styles.sliderSec}
                  min="0"
                  max="26"
                  onChange={(e) => {
                    setSymbolsValue(e.target.value);
                  }}
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
