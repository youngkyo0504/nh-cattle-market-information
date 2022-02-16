import React, { useEffect } from "react";
import { cowStockOptions } from "../../datas";
import Highcharts from "highcharts";
import ChartContainer from "../../components/Chart/ChartContainer";
import ICowGraphInfo from "../../@types/CowGraphInfo";

const TrendGraph = ({
  data,
  graphInfo,
}: {
  data: Highcharts.Options;
  graphInfo: ICowGraphInfo;
}) => {
  return (
    <>
      <div className="   lg:max-w-[29rem]   flex  flex-auto flex-col">
        {/* // graph head */}

        <div className=" flex justify-between ">
          {/* Title */}
          <div className="flex flex-col">
            <div className="text-gray-subtitle font-bold flex text-subtitle -tracking-[0.65px] ">
              <span>{graphInfo.name}</span>
              <span className="text-xs font-medium ml-1.5 py-1 text-gray-unit -tracking-[0.38px] ">
                {graphInfo.unit}
              </span>
            </div>
            <div className=" text-sm pt-[4px] font-medium text-gray-info  -tracking-[0.43px]">
              {graphInfo.reference}{" "}
            </div>
          </div>
          {/* changeDown */}
          <div className="text-red text-right   -tracking-[0.5px]">
            <div className=" font-bold text-subtitle ">
              {graphInfo.latestData}
            </div>
            <div className="flex ">
              <div className=" ">▼ {graphInfo.change}</div>
              {/* ▲ */}
              <div className="pl-3 ">-{graphInfo.rateOfChagne}%</div>
            </div>
          </div>
        </div>
        <ChartContainer data={data} />
      </div>
    </>
  );
};

export default TrendGraph;
