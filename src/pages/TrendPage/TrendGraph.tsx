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
      <div className="md:first:mr-12 flex lg:w-3/6 flex-auto flex-col">
        {/* // graph head */}

        <div className=" flex justify-between ">
          {/* Title */}
          <div className="flex flex-col">
            <div className="text-gray-subtitle font-bold flex text-2xl -tracking-[0.65px] ">
              <span>{graphInfo.name}</span>
              <span className="text-sm font-medium ml-1.5 text-gray-unit -tracking-[0.38px] ">
                {graphInfo.unit}
              </span>
            </div>
            <div className=" text-base pt-[4px] font-medium text-gray-info  -tracking-[0.43px]">
              {graphInfo.reference}{" "}
            </div>
          </div>
          {/* changeDown */}
          <div className="text-red text-right   -tracking-[0.5px]">
            <div className="text-[1.68rem] font-bold ">
              {graphInfo.latestData}
            </div>
            <div className="flex text-[1.25rem]">
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
