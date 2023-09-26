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
import { useDispatch, useSelector } from "react-redux";
import data from "../../public/data.json";
import { setInfo } from "@/features/InfoArraySlice";
import { Rootstate } from "@/features/store";
import React from "react";

export default function Home() {
  const [shouldShowFilter, setShouldShowFilter] = useState(true);
  const openFilter = useSelector(
    (store: Rootstate) => store.openFilter.openFilter
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setInfo(data));
  }, []);

  return (
    <main className={styles.MainPage}>
      <Header />
      <BurgerMenu />
      <NavbarDesk />
      <Advertisment />
      <Sorting />
      {openFilter ? <Filter /> : shouldShowFilter}
      <div className={styles.SortingFiltDiv}>
        {openFilter ? shouldShowFilter : <Filter />}
        <SortingInfo />
      </div>
    </main>
  );
}
