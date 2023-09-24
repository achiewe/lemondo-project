import React from "react";
import styles from "./filterCategory.module.scss"; // Replace with the correct path to your CSS module

const FilterCategory = (): JSX.Element => {
  return (
    <div className={styles.categoryMain}>
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
    </div>
  );
};

export default FilterCategory;
