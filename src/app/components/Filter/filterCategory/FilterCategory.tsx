import React from "react";
import styles from "./filterCategory.module.scss";

interface FilterCategoryProps {
  categoryCheckboxes: {
    [key: string]: boolean;
    // Define properties for each category checkbox
    business: boolean;
    realEstate: boolean;
    auto: boolean;
    entertainment: boolean;
    eduaction: boolean;
    medicine: boolean;
    games: boolean;
    finance: boolean;
    commerce: boolean;
    technologies: boolean;
    media: boolean;
  };
  setCategoryCheckboxes: React.Dispatch<
    React.SetStateAction<{
      [key: string]: boolean;
      // Define properties for each category checkbox
      business: boolean;
      realEstate: boolean;
      auto: boolean;
      entertainment: boolean;
      eduaction: boolean;
      medicine: boolean;
      games: boolean;
      finance: boolean;
      commerce: boolean;
      technologies: boolean;
      media: boolean;
    }>
  >;

  zoneCheckboxes: {
    [key: string]: boolean;
    // Define properties for each zone checkbox
    ge: boolean;
    comGe: boolean;
    netGe: boolean;
    orgGe: boolean;
    schoolGe: boolean;
    eduGe: boolean;
  };
  setZoneCheckboxes: React.Dispatch<
    React.SetStateAction<{
      [key: string]: boolean;
      // Define properties for each zone checkbox
      ge: boolean;
      comGe: boolean;
      netGe: boolean;
      orgGe: boolean;
      schoolGe: boolean;
      eduGe: boolean;
    }>
  >;
}

const FilterCategory = ({
  categoryCheckboxes,
  setCategoryCheckboxes,
  zoneCheckboxes,
  setZoneCheckboxes,
}: FilterCategoryProps): JSX.Element => {
  return (
    <div className={styles.categoryMain}>
      <div className={styles.divCategory}>
        <h3 className={styles.categoryP}> კატეგორიები</h3>
        <div className={styles.categoryListDiv}>
          <div className={styles.checkboxDiv}>
            <input
              className={styles.inputCheckbox}
              type="checkbox"
              onChange={(e) =>
                setCategoryCheckboxes({
                  ...categoryCheckboxes,
                  business: e.target.checked,
                })
              }
            />
            <h3 className={styles.categoryTitles}> ბიზნესი</h3>
          </div>
          <div className={styles.checkboxDiv}>
            <input
              className={styles.inputCheckbox}
              type="checkbox"
              onChange={(e) =>
                setCategoryCheckboxes({
                  ...categoryCheckboxes,
                  realEstate: e.target.checked,
                })
              }
            />
            <h3 className={styles.categoryTitles}> უძრავი ქონება</h3>
          </div>
          <div className={styles.checkboxDiv}>
            <input
              className={styles.inputCheckbox}
              type="checkbox"
              onChange={(e) =>
                setCategoryCheckboxes({
                  ...categoryCheckboxes,
                  auto: e.target.checked,
                })
              }
            />
            <h3 className={styles.categoryTitles}> ავტო</h3>
          </div>
          <div className={styles.checkboxDiv}>
            <input
              className={styles.inputCheckbox}
              type="checkbox"
              onChange={(e) =>
                setCategoryCheckboxes({
                  ...categoryCheckboxes,
                  medicine: e.target.checked,
                })
              }
            />
            <h3 className={styles.categoryTitles}> მედიცინა</h3>
          </div>
          <div className={styles.checkboxDiv}>
            <input
              className={styles.inputCheckbox}
              type="checkbox"
              onChange={(e) =>
                setCategoryCheckboxes({
                  ...categoryCheckboxes,
                  technologies: e.target.checked,
                })
              }
            />
            <h3 className={styles.categoryTitles}> ტექნოლოგიები</h3>
          </div>
          <div className={styles.checkboxDiv}>
            <input
              className={styles.inputCheckbox}
              type="checkbox"
              onChange={(e) =>
                setCategoryCheckboxes({
                  ...categoryCheckboxes,
                  games: e.target.checked,
                })
              }
            />
            <h3 className={styles.categoryTitles}> თამაშები</h3>
          </div>
          <div className={styles.checkboxDiv}>
            <input
              className={styles.inputCheckbox}
              type="checkbox"
              onChange={(e) =>
                setCategoryCheckboxes({
                  ...categoryCheckboxes,
                  entertainment: e.target.checked,
                })
              }
            />
            <h3 className={styles.categoryTitles}> გართობა და დასვენება</h3>
          </div>
          <div className={styles.checkboxDiv}>
            <input
              className={styles.inputCheckbox}
              type="checkbox"
              onChange={(e) =>
                setCategoryCheckboxes({
                  ...categoryCheckboxes,
                  media: e.target.checked,
                })
              }
            />
            <h3 className={styles.categoryTitles}> მედია</h3>
          </div>
          <div className={styles.checkboxDiv}>
            <input
              className={styles.inputCheckbox}
              type="checkbox"
              onChange={(e) =>
                setCategoryCheckboxes({
                  ...categoryCheckboxes,
                  eduaction: e.target.checked,
                })
              }
            />
            <h3 className={styles.categoryTitles}> განათლება</h3>
          </div>
          <div className={styles.checkboxDiv}>
            <input
              className={styles.inputCheckbox}
              type="checkbox"
              onChange={(e) =>
                setCategoryCheckboxes({
                  ...categoryCheckboxes,
                  commerce: e.target.checked,
                })
              }
            />
            <h3 className={styles.categoryTitles}> კომერცია</h3>
          </div>
          <div className={styles.checkboxDiv}>
            <input
              className={styles.inputCheckbox}
              type="checkbox"
              onChange={(e) =>
                setCategoryCheckboxes({
                  ...categoryCheckboxes,
                  finance: e.target.checked,
                })
              }
            />
            <h3 className={styles.categoryTitles}> ფინანსები</h3>
          </div>
        </div>
      </div>

      <div className={styles.divCategory}>
        <h3 className={styles.categoryP}> დომენის ზონა</h3>
        <div className={styles.categoryListDiv}>
          <div className={styles.checkboxDiv}>
            <input
              className={styles.inputCheckbox}
              type="checkbox"
              onChange={(e) =>
                setZoneCheckboxes({
                  ...zoneCheckboxes,
                  ge: e.target.checked,
                })
              }
            />
            <h3 className={styles.categoryTitles}> .ge</h3>
          </div>
          <div className={styles.checkboxDiv}>
            <input
              className={styles.inputCheckbox}
              type="checkbox"
              onChange={(e) =>
                setZoneCheckboxes({
                  ...zoneCheckboxes,
                  comGe: e.target.checked,
                })
              }
            />
            <h3 className={styles.categoryTitles}> .com.ge</h3>
          </div>
          <div className={styles.checkboxDiv}>
            <input
              className={styles.inputCheckbox}
              type="checkbox"
              onChange={(e) =>
                setZoneCheckboxes({
                  ...zoneCheckboxes,
                  netGe: e.target.checked,
                })
              }
            />
            <h3 className={styles.categoryTitles}> .net.ge</h3>
          </div>
          <div className={styles.checkboxDiv}>
            <input
              className={styles.inputCheckbox}
              type="checkbox"
              onChange={(e) =>
                setZoneCheckboxes({
                  ...zoneCheckboxes,
                  orgGe: e.target.checked,
                })
              }
            />
            <h3 className={styles.categoryTitles}> .org.ge</h3>
          </div>
          <div className={styles.checkboxDiv}>
            <input
              className={styles.inputCheckbox}
              type="checkbox"
              onChange={(e) =>
                setZoneCheckboxes({
                  ...zoneCheckboxes,
                  eduGe: e.target.checked,
                })
              }
            />
            <h3 className={styles.categoryTitles}> .edu.ge</h3>
          </div>
          <div className={styles.checkboxDiv}>
            <input
              className={styles.inputCheckbox}
              type="checkbox"
              onChange={(e) =>
                setZoneCheckboxes({
                  ...zoneCheckboxes,
                  schoolGe: e.target.checked,
                })
              }
            />
            <h3 className={styles.categoryTitles}> .school.ge</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCategory;
