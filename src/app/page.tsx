"use client";
import styles from "./page.module.scss";
import Header from "./components/Header/Header";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import { useState } from "react";

export default function Home() {
  const [openBurger, setOpennBurger] = useState<boolean>(false);
  console.log(openBurger);
  return (
    <main className={styles.MainPage}>
      <Header setOpennBurger={setOpennBurger} />
      <BurgerMenu setOpennBurger={setOpennBurger} openBurger={openBurger} />
    </main>
  );
}
