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
            <div className="text-gray-subtitle font-bold flex text-lg sm:text-subtitle -tracking-[0.65px] ">
              <span>{graphInfo.name}</span>
              <span className="text-xs font-medium ml-1.5 py-1 text-gray-unit -tracking-[0.38px] ">
                {graphInfo.unit}
              </span>
            </div>
            <div className=" text-sm  font-medium text-gray-info  -tracking-[0.43px]">
              {graphInfo.reference}{" "}
            </div>
          </div>
          {/* changeDown */}
          <div className="text-red text-right   -tracking-[0.5px]">
            <div className=" font-bold sm:text-subtitle text-lg ">
              {graphInfo.latestData}
            </div>
            <div className="flex sm:text-sm ">
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
