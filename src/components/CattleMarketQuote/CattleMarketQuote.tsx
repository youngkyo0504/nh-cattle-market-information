import React from "react";
import priceRank from "../../datas/priceRank";
import LineArticle from "../LineArticle/LineArticle";

const CattleMarketQuote = () => {
  return (
    <article className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-5xl md:px-24 lg:px-8 lg:py-20">
      <div className=" flex-col lg:flex-row max-w-xl sm:mx-auto  lg:max-w-6xl flex place-content-between w-full  ">
        {/* title */}
        <div className="lg:mb-0  mb-8">
          <div className="text-blue-900 font-extrabold text-2xl flex-1 ">
            <h2>우시장 시세</h2>
          </div>
          <div className="text-gray-600 text-xs">2022년1월 20일 기준</div>
        </div>
        {/* LineArticle */}
        <LineArticle data={priceRank} />
      </div>
    </article>
  );
};

export default CattleMarketQuote;
