import styles from "./sortingInfo.module.scss";
import lariSvg from "../../../../public/assets/lari.svg";
import basketSvg from "../../../../public/assets/Fill 932.svg";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Rootstate } from "@/features/store";
import { useEffect } from "react";
import axios from "axios";
import { setInfo } from "@/features/InfoArraySlice";

const SortingInfo = (): JSX.Element => {
  const info = useSelector((store: Rootstate) => store.info.info);

  useEffect(() => {
    const requesData = async () => {
      const response = await axios.get("../../../../public/data.json");
      const data = response.data;
      setInfo(data);
    };
    requesData();
  }, []);

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
          <div className={styles.sumDiv}>
            <h3 className={styles.sumText}>
              40 000 <Image src={lariSvg} alt="lari svg" />
            </h3>
            <span className={styles.sumSpan}> 14 285.7 $</span>
          </div>
          <button className={styles.basketButton}>
            <Image src={basketSvg} alt="basket img" />
          </button>
        </div>
      </div>
      <hr className={styles.seperator} />
    </div>
  );
};

export default SortingInfo;
