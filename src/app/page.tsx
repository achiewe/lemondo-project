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
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import data from "../../public/data.json";
import { setInfo } from "@/features/InfoArraySlice";
import { Rootstate } from "@/features/store";
import React from "react";

export default function Home() {
  const [shouldShowFilter, setShouldShowFilter] = useState(true);
  const [openSort, setOpenSort] = useState(false);
  const openFilter = useSelector(
    (store: Rootstate) => store.openFilter.openFilter
  );
  const dispatch = useDispatch();

  function handleResize() {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) {
        setOpenSort(true);
      } else {
        setOpenSort(false);
      }
    }
  }

  useEffect(() => {
    // Your existing logic to dispatch data
    dispatch(setInfo(data));

    // Your custom logic here
    // For example, fetch some data using axios
    axios
      .get("/api/someEndpoint")
      .then((response) => {
        // Handle the response data here
        console.log(response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });

    // Initial check for window resizing
    handleResize();

    // Add the event listener for window resizing
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
        {openFilter ? shouldShowFilter : <Filter />}
        <SortingInfo />
      </div>
    </main>
  );
}
