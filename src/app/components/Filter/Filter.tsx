import styles from "./filter.module.scss";
import closeSvg from "../../../../public/assets/Btn_close.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { Rootstate } from "@/features/store";
import { setOpenFilter } from "@/features/OpenFilterSlice";
import FilterCategory from "./filterCategory/FilterCategory";
import { useState } from "react";
import { setFilteredData } from "@/features/FilteredInfoSlice";
import { setErrorMessage } from "@/features/ErrorMessageSlice";

const Filter = (): JSX.Element => {
  const openFilter = useSelector(
    (store: Rootstate) => store.openFilter.openFilter
  );

  const dispatch = useDispatch();
  const mainClass = `${styles.filterMain} ${
    openFilter ? styles.filter : styles.deskFilter
  }`;

  const info = useSelector((store: Rootstate) => store.info.info);

  // State variables to track checked checkboxes
  const [categoryCheckboxes, setCategoryCheckboxes] = useState({
    business: false,
    realEstate: false,
    auto: false,
    entertainment: false,
    eduaction: false,
    medicine: false,
    games: false,
    finance: false,
    commerce: false,
    technologies: false,
    media: false,
  });

  const [zoneCheckboxes, setZoneCheckboxes] = useState({
    ge: false,
    comGe: false,
    netGe: false,
    orgGe: false,
    schoolGe: false,
    eduGe: false,
  });

  // for symbols input range
  const [symbolsValue, setSymbolsValue] = useState<string>("26");
  const [secondSymbolValue, setSecondSymbolValue] = useState<string>("1");

  //for price input range
  const [priceValue, setPriceValue] = useState<string>("1");
  const [secPriceValue, setSecPriceValue] = useState<string>("100");
  const filteredData = useSelector(
    (store: Rootstate) => store.filtered.filtered
  );

  const [inputValue, setInputValue] = useState<string>("");

  const areAllInputsDefault = () => {
    return (
      inputValue === "" &&
      priceValue === "1" &&
      secPriceValue === "100" &&
      secondSymbolValue === "1" &&
      symbolsValue === "26" &&
      Object.values(categoryCheckboxes).every((value) => !value) &&
      Object.values(zoneCheckboxes).every((value) => !value)
    );
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    // Convert the price range values to numbers
    const minPrice = parseFloat(priceValue);
    const maxPrice = parseFloat(secPriceValue);

    // Convert the symbol range values to numbers
    const minSymbols = parseInt(secondSymbolValue);
    const maxSymbols = parseInt(symbolsValue);

    // Create an array to store selected endings
    const selectedEndings: string[] = [];

    // Define the endings for each property in zoneCheckboxes
    const endingMap: { [key: string]: string } = {
      ge: ".ge",
      comGe: ".com.ge",
      netGe: ".net.ge",
      orgGe: ".org.ge",
      schoolGe: ".school.ge",
      eduGe: ".edu.ge",
    };

    // Check each property within zoneCheckboxes
    for (const ending in zoneCheckboxes) {
      if (zoneCheckboxes[ending as keyof typeof zoneCheckboxes]) {
        // If the property is true, add the corresponding ending to selectedEndings
        selectedEndings.push(endingMap[ending]);
      }
    }

    const selectedCategories: string[] = [];

    // Define the categories for each property in categoryCheckboxes
    const categoryMap: { [key: string]: string } = {
      business: "business",
      realEstate: "realEstate",
      auto: "auto",
      entertainment: "entertainment",
      eduaction: "eduaction",
      medicine: "medicine",
      games: "games",
      finance: "finance",
      commerce: "commerce",
      technologies: "technologies",
      media: "media",
    };

    for (const category in categoryCheckboxes) {
      if (categoryCheckboxes[category as keyof typeof categoryCheckboxes]) {
        // If the property is true, add the corresponding category to selectedCategories
        selectedCategories.push(categoryMap[category]);
      }
    }

    // Filter the 'info' state based on name, price, and symbols range

    const filteredData = info.filter((item) => {
      const itemPrice = parseFloat(item.monthlyAmount);
      const itemSymbols = item.domain.length; // Calculate the number of characters in the domain

      // Check if item.domain ends with any of the selected endings
      const endingSee = selectedEndings.some((ending) =>
        item.domain.endsWith(ending)
      );

      const categoryCheck = selectedCategories.some((cat) =>
        item.class.includes(cat)
      );

      return (
        item.domain.includes(inputValue) &&
        endingSee &&
        !isNaN(itemPrice) && // Check if item.price is a valid number
        itemPrice >= minPrice &&
        itemPrice <= maxPrice &&
        itemSymbols >= minSymbols &&
        itemSymbols <= maxSymbols &&
        categoryCheck
      );
    });

    if (areAllInputsDefault()) {
      dispatch(setErrorMessage(false));
    } else {
      dispatch(setErrorMessage(true));
    }

    // Dispatch an action to update the 'filteredData' state
    dispatch(setFilteredData(filteredData));
  };

  return (
    <form className={mainClass} onSubmit={handleFormSubmit}>
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
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
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
      <FilterCategory
        categoryCheckboxes={categoryCheckboxes}
        setCategoryCheckboxes={setCategoryCheckboxes}
        zoneCheckboxes={zoneCheckboxes}
        setZoneCheckboxes={setZoneCheckboxes}
      />
      <div className={styles.buttonDiv}>
        <button className={styles.submitButton} type="submit">
          ᲫᲘᲔᲑᲐ
        </button>
      </div>
    </form>
  );
};

export default Filter;
