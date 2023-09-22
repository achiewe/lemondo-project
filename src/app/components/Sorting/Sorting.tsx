import styles from "./sorting.module.scss";
import sortSvg from "../../../../public/assets/adjustment-svgrepo-com.svg";
import arrowSvg from "../../../../public/assets/Dropdown - 2.svg";
import Image from "next/image";
import SortingInfo from "../SortingInfo/SortingInfo";

const Sorting = (): JSX.Element => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.MainSorting}>
        <div className={styles.filterSorting}>
          <h4 className={styles.sortingTitle}>სორტირება </h4>
          <Image src={sortSvg} alt="sort image" />
        </div>
        <div className={styles.filterSorting}>
          <h4 className={styles.sortingTitle}>სორტირება </h4>
          <Image src={arrowSvg} alt="sort image" />
        </div>
      </div>
      <SortingInfo />
    </div>
  );
};

export default Sorting;
