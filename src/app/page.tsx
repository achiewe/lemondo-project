"use client";
import styles from "./page.module.scss";
import Header from "./components/Header/Header";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";

export default function Home() {
  return (
    <main className={styles.MainPage}>
      <Header />
      <BurgerMenu />
    </main>
  );
}
