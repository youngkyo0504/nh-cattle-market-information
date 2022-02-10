import React from "react";
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

        <div className=" px-4 flex justify-between ">
          {/* Title */}
          <div className="flex flex-col">
            <div className="text-gray-subtitle font-bold flex text-4xl ">
              <span>{graphInfo.name}</span>
              <span className="text-sm font-normal ml-1.5 text-gray-unit">
                {graphInfo.unit}
              </span>
            </div>
            <div className=" text-lg pt-[4px] text-gray-info ">
              {graphInfo.reference}{" "}
            </div>
          </div>
          {/* changeDown */}
          <div className="text-red text-right">
            <div className="text-4xl">{graphInfo.latestData}</div>
            <div className="flex text-lg">
              <div className=" ">▾ {graphInfo.change}</div>
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
