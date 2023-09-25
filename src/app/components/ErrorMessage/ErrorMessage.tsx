import styles from "./ErrorMessage.module.scss";
import ErorSvg from "../../../../public/assets/ErrorImg.svg";
import Image from "next/image";
const ErrorMessage = (): JSX.Element => {
  return (
    <div className={styles.mainError}>
      <Image src={ErorSvg} alt="error svg" />
      <p className={styles.ErrorP}> დომენი ვერ მოიძებნა</p>
      <p className={styles.errorMessage}>
        მითითებული პარამეტრებით დომენების მარკეტში შედეგები ვერ მოიძებნა,
        შეცვალეთ ძიების პარამეტრები და ცადეთ თავიდან
      </p>
    </div>
  );
};

export default ErrorMessage;
