import React from "react";
import { cowStockOptions } from "../../datas";
import Highcharts from "highcharts";
import ChartContainer from "../../components/Chart/ChartContainer";

const TrendGraph = ({ data }: { data: Highcharts.Options }) => {
  return (
    <>
      <div className="flex flex-auto flex-col">
        {/* // graph head */}

        <div className="py-5 px-6 flex justify-between ">
          {/* Title */}
          <div className="flex flex-col">
            <div className="text-blue-900 font-bold">송아지</div>
            <div className="text-gray-600 text-xs ">만원/마리 농협 중앙회 </div>
          </div>
          {/* changeDown */}
          <div className="text-red-500 text-right">
            <div className="text-red-500">491.2</div>
            <div className="flex text-xs">
              <div className="text-red-500 ">▾ 52.67</div>
              <div className="pl-3 ">-0.98%</div>
            </div>
          </div>
        </div>
        <ChartContainer data={data} />
      </div>
    </>
  );
};

export default TrendGraph;
