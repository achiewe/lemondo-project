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

              {/* <div className={styles.rangeDiv}> */}
              <input
                className={styles.slider}
                type="range"
                min="0"
                // max="2"
              />
              {/* </div> */}
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
      <div className={styles.divCategory}>
        <h3 className={styles.categoryP}> კატეგორიები</h3>
        <div className={styles.categoryListDiv}>
          <div className={styles.checkboxDiv}>
            <input className={styles.inputCheckbox} type="checkbox" />
            <h3 className={styles.categoryTitles}> ბიზნესი</h3>
          </div>
          <div className={styles.checkboxDiv}>
            <input className={styles.inputCheckbox} type="checkbox" />
            <h3 className={styles.categoryTitles}> უძრავი ქონება</h3>
          </div>
          <div className={styles.checkboxDiv}>
            <input className={styles.inputCheckbox} type="checkbox" />
            <h3 className={styles.categoryTitles}> ავტო</h3>
          </div>
          <div className={styles.checkboxDiv}>
            <input className={styles.inputCheckbox} type="checkbox" />
            <h3 className={styles.categoryTitles}> მედიცინა</h3>
          </div>
          <div className={styles.checkboxDiv}>
            <input className={styles.inputCheckbox} type="checkbox" />
            <h3 className={styles.categoryTitles}> ტექნოლოგიები</h3>
          </div>
          <div className={styles.checkboxDiv}>
            <input className={styles.inputCheckbox} type="checkbox" />
            <h3 className={styles.categoryTitles}> თამაშები</h3>
          </div>
          <div className={styles.checkboxDiv}>
            <input className={styles.inputCheckbox} type="checkbox" />
            <h3 className={styles.categoryTitles}> გართობა და დასვენება</h3>
          </div>
          <div className={styles.checkboxDiv}>
            <input className={styles.inputCheckbox} type="checkbox" />
            <h3 className={styles.categoryTitles}> მედია</h3>
          </div>
          <div className={styles.checkboxDiv}>
            <input className={styles.inputCheckbox} type="checkbox" />
            <h3 className={styles.categoryTitles}> განათლება</h3>
          </div>
          <div className={styles.checkboxDiv}>
            <input className={styles.inputCheckbox} type="checkbox" />
            <h3 className={styles.categoryTitles}> კომერცია</h3>
          </div>
          <div className={styles.checkboxDiv}>
            <input className={styles.inputCheckbox} type="checkbox" />
            <h3 className={styles.categoryTitles}> ფინანსები</h3>
          </div>
        </div>
      </div>

      <div className={styles.divCategory}>
        <h3 className={styles.categoryP}> დომენის ზონა</h3>
        <div className={styles.categoryListDiv}>
          <div className={styles.checkboxDiv}>
            <input className={styles.inputCheckbox} type="checkbox" />
            <h3 className={styles.categoryTitles}> .ge</h3>
          </div>
          <div className={styles.checkboxDiv}>
            <input className={styles.inputCheckbox} type="checkbox" />
            <h3 className={styles.categoryTitles}> .com.ge</h3>
          </div>
          <div className={styles.checkboxDiv}>
            <input className={styles.inputCheckbox} type="checkbox" />
            <h3 className={styles.categoryTitles}> .net.ge</h3>
          </div>
          <div className={styles.checkboxDiv}>
            <input className={styles.inputCheckbox} type="checkbox" />
            <h3 className={styles.categoryTitles}> .org.ge</h3>
          </div>
          <div className={styles.checkboxDiv}>
            <input className={styles.inputCheckbox} type="checkbox" />
            <h3 className={styles.categoryTitles}> .edu.ge</h3>
          </div>
          <div className={styles.checkboxDiv}>
            <input className={styles.inputCheckbox} type="checkbox" />
            <h3 className={styles.categoryTitles}> .school.ge</h3>
          </div>
        </div>
      </div>
      <div className={styles.buttonDiv}>
        <button className={styles.submitButton} type="submit">
          ᲫᲘᲔᲑᲐ
        </button>
      </div>
    </div>
  );
};

export default Filter;
