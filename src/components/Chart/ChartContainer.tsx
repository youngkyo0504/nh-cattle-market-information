import React from "react";
import Highcharts from "highcharts";
import MinimalChart from "./MinimalChart";
import minimalData from "../../datas/minimalData";
// import styled from "styled-components";
// import { cowStockOptions } from "../../datas";

// const Wrapper = styled.div`
//   padding: 0 29px 18px;
// `;

const ChartContainer = ({ data }: { data: Highcharts.Options }) => {
  return (
    <div className="mx-auto pb-[18px] mt-8 w-full">
      <MinimalChart highcharts={Highcharts} options={data} />
    </div>
  );
};

export default ChartContainer;
