import React from "react";
import stockOptions from "../../datas/minimalData";
import TrendGraph from "../../pages/TrendPage/TrendGraph";
import HighchartCowOptionMaker from "../../service/highchart-option-maker/highchart-cow-option-maker";
const highCahrtOptionMaker = HighchartCowOptionMaker.getInstance();
const data = highCahrtOptionMaker.getData();
const CattleMarketPriceContainer = () => {
  return (
    <article className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-6xl">
        <div
          className={
            "text-blue-900 font-extrabold text-2xl border-solid border-b-[1px] border-black py-3  "
          }
        >
          <h2>우시장 가격 정보</h2>
        </div>

        <div className="flex">
          <TrendGraph data={data} />

          <TrendGraph data={data} />
          {/* <Container/> */}
          {/* <Container/> */}
        </div>
      </div>
    </article>
  );
};

export default CattleMarketPriceContainer;
