import React from "react";
import priceRank from "../../datas/priceRank";
import LineArticle from "../LineArticle/LineArticle";

const CattleMarketQuote = () => {
  return (
    <article className="px-8 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-7xl md:px-24 lg:px-8 lg:py-20">
      <div className=" px-6 flex-col lg:flex-row  flex place-content-between w-full  ">
        {/* title */}
        <div className="px-4 lg:mb-0  mb-8">
          <div className="text-[2.5rem]  text-blue-900 font-extrabold  text-blue  flex-1 ">
            <h2>우시장 시세</h2>
          </div>
          <div className="text-gray-info text-lg mt-2.5">
            2022년1월 20일 기준
          </div>
        </div>
        {/* LineArticle */}
        <div className="max-w-3xl  w-full">
          <LineArticle data={priceRank} />
        </div>
      </div>
    </article>
  );
};

export default CattleMarketQuote;
