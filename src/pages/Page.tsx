import styles from "./Page.module.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import IntroductionPage from "./IntroductionPage/IntroductionPage";
// import MarketsPage from "./MarketsPage/MarketsPage";
import CattlePage from "./CattlePage/CattlePage";
import FaqPage from "./FaqPage/FaqPage";
import KPNPage from "./KPNPage/KPNPage";

const Page = () => {
  return (
    <main className={"flex-1"}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/faq" element={<FaqPage />}></Route>
        {/* <Route path="/faq" element={<FaqPage />}></Route> */}
        <Route path="/introduction" element={<IntroductionPage />} />
        <Route path="/cattle" element={<CattlePage />} />
        <Route path="/kpn/:kpnId" element={<KPNPage />} />
        {/* <Route path="/trends" element={<TrendPage />} /> */}
        {/* <Route path="/markets" element={<MarketsPage />} /> */}
        {/* <Route path="/onepage" element={<OnePage />} /> */}
      </Routes>
    </main>
  );
};

export default Page;
