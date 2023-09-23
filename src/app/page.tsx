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

export default function Home() {
  return (
    <main className={styles.MainPage}>
      <Header />
      <BurgerMenu />
      <NavbarDesk />
      <Advertisment />
      <Sorting />
      <Filter />
      <div className={styles.SortingFiltDiv}>
        <SortingInfo />
      </div>
    </main>
  );
}
