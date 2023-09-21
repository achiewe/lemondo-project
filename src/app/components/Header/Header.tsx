import styles from "./Header.module.scss";
import burgerMenuSvg from "../../../../public/assets/Group 4795.svg";
import siteSvg from "../../../../public/assets/Symbols.svg";
import notificationSvg from "../../../../public/assets/Fill 1172.svg";
import basketSvg from "../../../../public/assets/Fill 932-1.svg";
import accountSvg from "../../../../public/assets/Fill 943.svg";
import Image from "next/image";

interface HeaderProps {
  setOpennBurger(burger: boolean): void;
}

const Header = ({ setOpennBurger }: HeaderProps): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.siteContentdiv}>
        <Image
          onClick={() => {
            setOpennBurger(true);
          }}
          src={burgerMenuSvg}
          alt="burger-menu img"
          className={styles.burgerMenuImg}
        />
        <Image src={siteSvg} alt="site url img" />
      </div>
      <div className={styles.userActions}>
        <Image src={notificationSvg} alt="notification img" />
        <Image src={basketSvg} alt="notification img" />
        <Image src={accountSvg} alt="notification img" />
      </div>
    </header>
  );
};

export default Header;
