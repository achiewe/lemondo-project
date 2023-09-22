"use client";
import styles from "./page.module.scss";
import Header from "./components/Header/Header";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import { useState } from "react";
import Advertisment from "./components/Advertisment/Advertisment";
import Sorting from "./components/Sorting/Sorting";

export default function Home() {
  return (
    <main className={styles.MainPage}>
      <Header />
      <BurgerMenu />
      <Advertisment />
      <Sorting />
    </main>
  );
}
