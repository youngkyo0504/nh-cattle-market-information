import styles from "./Page.module.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import IntroductionPage from "./IntroductionPage/IntroductionPage";
// import MarketsPage from "./MarketsPage/MarketsPage";
import CattlePage from "./CattlePage/CattlePage";

const Page = () => {
  return (
    <main className={"min-h-screen"}>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/introduction" element={<IntroductionPage />} />
        <Route path="/cattle" element={<CattlePage />} />
        {/* <Route path="/trends" element={<TrendPage />} /> */}
        {/* <Route path="/markets" element={<MarketsPage />} /> */}
        {/* <Route path="/onepage" element={<OnePage />} /> */}
      </Routes>
    </main>
  );
};

export default Page;
