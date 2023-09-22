import styles from "./sortingInfo.module.scss";
import lariSvg from "../../../../public/assets/lari.svg";
import basketSvg from "../../../../public/assets/Fill 932.svg";
import Image from "next/image";

const SortingInfo = (): JSX.Element => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoDiv}>
        <div className={styles.contactInfo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
          >
            <g id="Btn_send" transform="translate(-1.227 -2)">
              <rect
                id="Rectangle"
                width="36"
                height="36"
                rx="10"
                transform="translate(1.227 2)"
                fill="#f5f5f8"
              />
              <path
                id="Shape"
                d="M5,3.821,8.577.244A.833.833,0,0,1,9.756,1.423L5.589,5.589a.833.833,0,0,1-1.179,0L.244,1.423A.833.833,0,0,1,1.423.244Z"
                transform="translate(14.227 18.083)"
                fill="#696974"
              />
            </g>
          </svg>
          <p className={styles.emailP}> gijashvili.org.ge</p>
        </div>
        <div className={styles.sumBasketDiv}>
          <h3 className={styles.sumText}>
            40 000 <Image src={lariSvg} alt="lari svg" />
            <span className={styles.sumSpan}> 14 285.7 $</span>
          </h3>
          <button className={styles.basketButton}>
            <Image src={basketSvg} alt="basket img" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortingInfo;
