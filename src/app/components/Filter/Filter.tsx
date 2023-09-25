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
import { setFilteredData } from "@/features/FilteredInfoSlice";

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

  const [filtered, setFiltered] = useState<number>(0);
  const [saveText, setSaveText] = useState<string>("");
  const info = useSelector((store: Rootstate) => store.info.info);

  // for symbols input range
  const [symbolsValue, setSymbolsValue] = useState<string>("26");
  const [secondSymbolValue, setSecondSymbolValue] = useState<string>("1");

  //for price input range
  const [priceValue, setPriceValue] = useState<string>("1");
  const [secPriceValue, setSecPriceValue] = useState<string>("100");
  const filteredData = useSelector(
    (store: Rootstate) => store.filtered.filtered
  );

  const filterAll = (text: string): Info[] => {
    let filterData: Info[] = [];
    if (text.length > 0) {
      filterData = info.filter((data) => {
        // console.log("asdasdasd");
        return data?.domain?.toLowerCase().includes(text.toLowerCase());
      });
    }

    return filterData;
  };

  // Usage
  // const text = "example";
  const filterData = filterAll(text);
  // console.log(filterData);

  // useEffect(() => {

  // }, [filtered]);

  console.log(filteredData);
  // console.log(info, "dqwdqwdqwd");
  return (
    <form
      className={mainClass}
      onSubmit={(e) => {
        e.preventDefault();
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
              dispatch(setText(saveText));
              setFiltered(filtered + 1);
              const ragaca = filterAll(e.target.value);
              dispatch(setFilteredData(filterData));
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
                  defaultValue={0}
                  min="1"
                  max="100"
                  onChange={(e) => {
                    setPriceValue(e.target.value);
                  }}
                />
                <input
                  type="range"
                  className={styles.slider}
                  defaultValue={100}
                  min="1"
                  max="100"
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
                  defaultValue={1}
                  min="1"
                  max="26"
                  onChange={(e) => {
                    setSecondSymbolValue(e.target.value);
                  }}
                />
                <input
                  type="range"
                  className={styles.sliderSec}
                  defaultValue={26}
                  min="1"
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
