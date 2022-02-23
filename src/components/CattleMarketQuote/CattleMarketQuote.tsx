import React from "react";
import priceRank from "../../datas/priceRank";
import LineArticle from "../LineArticle/LineArticle";

const CattleMarketQuote = () => {
  return (
    <article className=" mx-auto py-12 px-4  sm:max-w-9xl   ">
      <div className="  flex w-full  flex-col place-content-between lg:flex-row  ">
        {/* title */}
        <div className="mb-8 lg:mb-0  lg:px-content">
          <div className="text-blue-900  flex-1 text-subtitle font-bold  text-blue  sm:text-title ">
            <h2>우시장 시세</h2>
          </div>
          <div className="text-xs text-gray-info sm:text-sm ">
            2022년 1월 20일 기준
          </div>
        </div>
        {/* LineArticle */}
        <div className="w-full max-w-2xl">
          <LineArticle data={priceRank} />
        </div>
      </div>
    </article>
  );
};

export default CattleMarketQuote;
