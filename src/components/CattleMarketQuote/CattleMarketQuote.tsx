import React from "react";
import priceRank from "../../datas/priceRank";
import LineArticle from "../LineArticle/LineArticle";

const CattleMarketQuote = () => {
  return (
    <article className=" py-12 px-4 mx-auto  sm:max-w-9xl   ">
      <div className="  flex-col lg:flex-row  flex place-content-between w-full  ">
        {/* title */}
        <div className="lg:px-content lg:mb-0  mb-8">
          <div className="sm:text-title  text-subtitle text-blue-900 font-bold  text-blue  flex-1 ">
            <h2>우시장 시세</h2>
          </div>
          <div className="text-gray-info text-xs sm:text-sm ">
            2022년 1월 20일 기준
          </div>
        </div>
        {/* LineArticle */}
        <div className="max-w-2xl w-full">
          <LineArticle data={priceRank} />
        </div>
      </div>
    </article>
  );
};

export default CattleMarketQuote;
