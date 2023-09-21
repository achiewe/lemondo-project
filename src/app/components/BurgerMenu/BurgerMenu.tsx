import styles from "./BurgerMenu.module.scss";
import Navbar from "../NavBar/Navbar";

interface BurgerProps {
  setOpennBurger(openBurger: boolean): void;
  openBurger: boolean;
}

const BurgerMenu = ({
  setOpennBurger,
  openBurger,
}: BurgerProps): JSX.Element => {
  return (
    <div
      className={styles.BrugerContainer}
      style={{
        display: openBurger ? "flex" : "none",
      }}
    >
      <svg
        onClick={() => {
          setOpennBurger(false);
        }}
        fill="#000000"
        width="40px"
        height="30px"
        viewBox="0 0 256 256"
        id="Flat"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="3" />

        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <g id="SVGRepo_iconCarrier">
          <path d="M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z" />{" "}
        </g>
      </svg>
      <Navbar />
    </div>
  );
};

export default BurgerMenu;
