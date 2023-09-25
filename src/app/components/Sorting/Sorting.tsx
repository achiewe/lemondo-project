import styles from "./sorting.module.scss";
import sortSvg from "../../../../public/assets/adjustment-svgrepo-com.svg";
import arrowSvg from "../../../../public/assets/Dropdown - 2.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setOpenFilter } from "@/features/OpenFilterSlice";
import { Rootstate } from "@/features/store";
import { setInfo } from "@/features/InfoArraySlice";
import { Info } from "../../../../type";
import { useState } from "react";

const Sorting = (): JSX.Element => {
  const dispatch = useDispatch();
  const filteredData = useSelector(
    (store: Rootstate) => store.filtered.filtered
  );
  const info = useSelector((store: Rootstate) => store.info.info);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const [openSort, setOpenSort] = useState<boolean>(false);

  const handleSort = () => {
    const sortedData = [...info]; // Create a copy of the fetched data
    sortedData.sort((a, b) => {
      const monthlyAmountA = parseFloat(a.monthlyAmount);
      const monthlyAmountB = parseFloat(b.monthlyAmount);

      return monthlyAmountA - monthlyAmountB;
    });

    // Dispatch the sorted data to the Redux store
    dispatch(setInfo(sortedData));
  };

  const sortByDomain = () => {
    const sortedData = [...info]; // Create a copy of the data

    sortedData.sort((a, b) => {
      const domainA = a.domain.toLowerCase(); // Convert to lowercase for case-insensitive sorting
      const domainB = b.domain.toLowerCase();

      if (sortOrder === "asc") {
        if (domainA < domainB) return -1;
        if (domainA > domainB) return 1;
        return 0;
      } else {
        if (domainA < domainB) return 1;
        if (domainA > domainB) return -1;
        return 0;
      }
    });

    // Update sortOrder if needed
    // setSortOrder(newSortOrder);

    return sortedData;
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.MainSorting}>
        <div className={styles.filterSorting}>
          <h4 className={styles.sortingTitle}>სორტირება </h4>
          <Image
            src={sortSvg}
            alt="sort image"
            onClick={() => {
              dispatch(setOpenFilter());
            }}
          />
        </div>
        <div className={styles.filterSorting}>
          <h4 className={styles.sortingTitle}>სორტირება </h4>
          <Image
            src={arrowSvg}
            alt="sort image"
            onClick={() => {
              setOpenSort(!openSort);
            }}
          />
        </div>
      </div>
      <div
        className={styles.sortingDesk}
        style={{
          display:
            window.innerWidth >= 1024 ? "flex" : openSort ? "flex" : "none",
        }}
      >
        <div className={styles.sortingleftSide}>
          <p className={styles.countDomain}>
            დომენები მარკეტზე: <span className={styles.countSpan}>703 </span>
          </p>
          <div className={styles.sortingList}>
            <h3 className={styles.sortTiTle}>სორტირება: </h3>
            <h4 className={styles.sortMarkCat}>
              დამატების თარიღით{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="9"
                viewBox="0 0 18 9"
              >
                <path
                  id="Fill_919"
                  data-name="Fill 919"
                  d="M14.25,9h-6a.75.75,0,1,1,0-1.5h6a.75.75,0,1,1,0,1.5ZM3,9a.751.751,0,0,1-.75-.75V2.559l-.97.975A.751.751,0,0,1,.22,2.469L2.47.219a.751.751,0,0,1,1.06,0l2.25,2.249A.752.752,0,0,1,4.72,3.533L3.75,2.559V8.25A.751.751,0,0,1,3,9ZM14.25,5.251h-6a.75.75,0,0,1,0-1.5h6a.75.75,0,0,1,0,1.5Zm3-3.75h-9a.75.75,0,1,1,0-1.5h9a.75.75,0,1,1,0,1.5Z"
                  fill="#9c6"
                />
              </svg>
            </h4>
            <h4 className={styles.sortCat}>ვადის ამოწურვით </h4>
            <button className={styles.sortCat} onClick={handleSort}>
              ფასით
            </button>
            <button
              className={styles.sortCat}
              onClick={() => {
                const sortedData = sortByDomain(); // Call the sorting function
                dispatch(setInfo(sortedData)); // Dispatch the sorted data to Redux store
              }}
            >
              ანბანით
            </button>
          </div>
        </div>
        <a className={styles.href} href="#">
          როგორ გავყიდო დომენი?
        </a>
      </div>
    </div>
  );
};

export default Sorting;
