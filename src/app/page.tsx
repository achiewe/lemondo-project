"use client";
import styles from "./page.module.scss";
import Header from "./components/Header/Header";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import { useState } from "react";
import Advertisment from "./components/Advertisment/Advertisment";
import Sorting from "./components/Sorting/Sorting";
import Filter from "./components/Filter/Filter";
import NavbarDesk from "./components/NavBarDesk/NavbarDesk";
import SortingInfo from "./components/SortingInfo/SortingInfo";
import { useEffect } from "react";

export default function Home() {
  const [shouldShowFilter, setShouldShowFilter] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setShouldShowFilter(false);
      } else {
        setShouldShowFilter(true);
      }
    }

    // Initial check
    handleResize();

    // Add the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <main className={styles.MainPage}>
      <Header />
      <BurgerMenu />
      <NavbarDesk />
      <Advertisment />
      <Sorting />
      {shouldShowFilter && <Filter />}
      <div className={styles.SortingFiltDiv}>
        <Filter />
        <SortingInfo />
      </div>
    </main>
  );
}
