import React from "react";
import Iframe from "../../components/Iframe/Iframe";
import { cattleMarket } from "../../datas";
const CattlePage = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-24">
        <div>
          <h1 className="font-bold text-3xl mb-12  text-blue">
            우시장 둘러보기
          </h1>
          <div className="flex flex-col">
            <div className="border-b justify-between flex text-lg p-2 text-blue  border-blue ">
              <span>우시장 목록</span> <span>▼</span>
            </div>
          </div>
          <ul>
            {Object.values(cattleMarket).map((market) => (
              <li className="cursor-pointer bg-light-blue hover:bg-hover-light-blue text-blue p-2 ">
                {market.title}
              </li>
            ))}
          </ul>
        </div>

        <Iframe
          className={"w-3/6"}
          src={"/cattle-market-information-center/iframe/woo-table2.html"}
        />
        <Iframe
          className={"w-4/12"}
          src={"/cattle-market-information-center/iframe/kpn.html"}
        />
      </div>
    </>
  );
};

export default CattlePage;
