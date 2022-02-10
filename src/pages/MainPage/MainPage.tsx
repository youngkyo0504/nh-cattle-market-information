import React from "react";
import CattleMarketPriceContainer from "../../components/CattleMarketPrice/CattleMarketPriceContainer";
import CattleMarketQuote from "../../components/CattleMarketQuote/CattleMarketQuote";
import Iframe from "../../components/Iframe/Iframe";
import MainBannerContainer from "../../components/MainBanner/MainBannerContainer";
import Container from "../../components/Util/Container/Container";
// import CattleCardListContainer from "../../components/CattleCardList/CattleCardListContainer";
// import MainBannerContainer from "../../components/MainBanner/MainBannerContainer";
// import Iframe from "../../components/Iframe/Iframe";
// import CalfAnalysisContainer from "../../components/ CalfAnalysis/CalfAnalysisContainer";
const MainPage = () => {
  return (
    <>
      <MainBannerContainer />
      <CattleMarketPriceContainer />
      <CattleMarketQuote />

      {/* <CattleCardListContainer /> */}
      {/* <CalfAnalysisContainer /> */}
    </>
  );
};

export default MainPage;
