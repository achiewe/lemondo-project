import styles from "./Header.module.scss";
import burgerMenuSvg from "../../../../public/assets/Group 4795.svg";
import siteSvg from "../../../../public/assets/Symbols.svg";
import notificationSvg from "../../../../public/assets/Fill 1172.svg";
import basketSvg from "../../../../public/assets/Fill 932-1.svg";
import accountSvg from "../../../../public/assets/Fill 943.svg";
import notificDeskSvg from "../../../../public/assets/notificDesk.svg";
import basketDeskSvg from "../../../../public/assets/basketDesk.svg";
import accountDeskSvg from "../../../../public/assets/accountDesk.svg";
import arrowDeskSvg from "../../../../public/assets/arrowHeadDesk.svg";
import flagSvg from "../../../../public/assets/flagDesk.svg";
import symbolDeskSvg from "../../../../public/assets/SymbolDesk.svg";
import Image from "next/image";
import { setOpenBurger } from "@/features/OpenBurgerSilce";
import { useDispatch } from "react-redux";

const Header = (): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <header className={styles.header}>
      <div className={styles.headerMain}>
        <div className={styles.siteContentdiv}>
          <Image
            onClick={() => {
              dispatch(setOpenBurger());
            }}
            src={burgerMenuSvg}
            alt="burger-menu img"
            className={styles.burgerMenuImg}
          />
          <Image
            className={styles.siteMobSvg}
            src={siteSvg}
            alt="site url img"
          />
          <Image
            className={styles.symbolSvg}
            src={symbolDeskSvg}
            alt="site url image"
          />
        </div>
        <div className={styles.userActions}>
          <Image
            className={styles.notificationSvg}
            src={notificationSvg}
            alt="notification img"
          />

          <Image
            className={styles.basketSvg}
            src={basketSvg}
            alt="basket img"
          />

          <Image
            className={styles.accountSvg}
            src={accountSvg}
            alt="account img"
          />
          <div className={styles.iconDiv}>
            <Image src={notificDeskSvg} alt="notification image" />
          </div>

          <div className={styles.iconDiv}>
            <Image src={basketDeskSvg} alt="basket image" />
          </div>

          <div className={styles.iconDivAcc}>
            <div className={styles.accountProfile}>
              <Image src={accountDeskSvg} alt="account image" />
              <p className={styles.profileP}> Kancha Co.</p>
            </div>
            <Image src={arrowDeskSvg} alt="arrow image" />
          </div>

          <div className={styles.iconDiv}>
            <Image src={flagSvg} alt="flag image" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
