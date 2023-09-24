import styles from "./sortingInfo.module.scss";
import lariSvg from "../../../../public/assets/lari.svg";
import basketSvg from "../../../../public/assets/Fill 932.svg";
import clickSvg from "../../../../public/assets/click4868.svg";
import sendSvg from "../../../../public/assets/Btn_send.svg";
import sendSvgFoc from "../../../../public/assets/btn_arrowDown.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { Rootstate } from "@/features/store";
import { useEffect, useState } from "react";
import axios from "axios";
import { setInfo } from "@/features/InfoArraySlice";

import { setCalculate } from "@/features/CalculateAddSlice";

const SortingInfo = (): JSX.Element => {
  const info = useSelector((store: Rootstate) => store.info.info);
  const calculate = useSelector(
    (store: Rootstate) => store.calculate.calculate
  );
  const dispatch = useDispatch();

  const [clickedItems, setClickedItems] = useState<number[]>([]);
  const [clickDiv, setclickDiv] = useState<number | null>(null);

  // useEffect(() => {
  //   const requesData = async () => {
  //     const response = await axios.get("/data.json");
  //     const data = response.data;
  //     dispatch(setInfo(data));
  //   };
  //   requesData();
  // }, []);

  return (
    <div className={styles.infoContainer}>
      {info.map((item) => (
        <div
          className={styles.mainInfo}
          key={item.id}
          style={{
            backgroundColor: clickDiv === item.id ? "#F5F5F8" : "white",
          }}
          onClick={() => {
            if (clickDiv !== item.id) {
              setclickDiv(item.id);
            }
          }}
        >
          <div className={styles.infoDiv}>
            <div className={styles.contactInfo}>
              <Image
                src={clickDiv === item.id ? sendSvgFoc : sendSvg}
                alt="send image"
              />
              <p className={styles.emailP}>{item.domain}</p>
            </div>
            <div className={styles.sumBasketDiv}>
              <div className={styles.sumDiv}>
                <h3
                  className={styles.sumText}
                  style={{
                    display: clickedItems.includes(item.id) ? "none" : "flex",
                  }}
                >
                  {item.monthlyAmount} <Image src={lariSvg} alt="lari svg" />
                </h3>
                <span
                  className={styles.sumSpan}
                  style={{
                    display: clickedItems.includes(item.id) ? "none" : "flex",
                  }}
                >
                  {item.amountDollar}
                </span>
              </div>
              <button
                className={styles.basketButton}
                style={{
                  display: clickedItems.includes(item.id) ? "none" : "flex",
                  width: clickDiv === item.id ? "120px" : "36px",
                }}
                onClick={() => {
                  if (!clickedItems.includes(item.id)) {
                    setClickedItems([...clickedItems, item.id]);
                    dispatch(setCalculate());
                  }
                }}
              >
                <p
                  className={styles.basketP}
                  style={{
                    display: clickDiv === item.id ? "flex" : "none",
                  }}
                >
                  დამატება
                </p>
                <Image src={basketSvg} alt="basket img" />
              </button>
              <div
                className={styles.InBasket}
                style={{
                  display: clickedItems.includes(item.id) ? "flex" : "none",
                }}
              >
                <Image src={clickSvg} alt="click svg" /> კალათაშია
              </div>
            </div>
          </div>
          <hr className={styles.seperator} />
        </div>
      ))}
    </div>
  );
};

export default SortingInfo;
