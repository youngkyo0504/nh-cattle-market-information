import React from "react";
import Iframe from "../../components/Iframe/Iframe";
import { cattleMarket } from "../../datas";
const CattlePage = () => {
  return (
    <>
      <div className="flex max-w-9xl mx-auto mt-56 min-h-[70vh] justify-between mb-24">
        <div className="mt-6">
          <h1 className="font-bold text-2xl mb-12 px-1.5 text-blue">
            우시장 둘러보기
          </h1>
          <div className="flex flex-col">
            <div className="border-b font-medium justify-between flex -tracking-[0.03rem] text-lg px-1.5 pb-3.5 mb-3 text-blue  border-blue ">
              <span className="font-bold">우시장 목록</span>
            </div>
          </div>
          <ul>
            {Object.values(cattleMarket).map((market) => (
              <li
                onClick={() => {}}
                className="cursor-pointer text-gray-nav -tracking-[0.025rem] font-bold hover:text-blue px-1.5 py-2 "
              >
                {market.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-[865px] w-full flex justify-center items-center">
          <Iframe
            className={" px-3 w-full overflow-y-auto min-h-[1200px] mt-4"}
            src={"/cattle-market-information-center/iframe/gch.html"}
          />
        </div>

        {/* <Iframe
          className={"w-3/6"}
          src={"/cattle-market-information-center/iframe/woo-table2.html"}
        />
        <Iframe
          className={"w-4/12"}
          src={"/cattle-market-information-center/iframe/kpn.html"}
        /> */}
      </div>
    </>
  );
};

export default CattlePage;
