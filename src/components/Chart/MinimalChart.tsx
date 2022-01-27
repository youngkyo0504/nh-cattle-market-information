import React, { Props, useRef } from "react";
import Highcharts from "highcharts/highstock";
import { Options } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HC_more from "highcharts/highcharts-more"; //module
// HighChart 글로벌 옵션 주고 시작하기 !!!
// HC_more(Highcharts);
Highcharts.setOptions({ lang: { rangeSelectorZoom: "기간" } });

interface IStockChartProps {
  highcharts: typeof Highcharts;
  options: Options;
}

const MinimalChart = (props: IStockChartProps) => (
  <HighchartsReact
    highcharts={Highcharts}
    constructorType="stockChart"
    options={props.options}
  />
);
export default MinimalChart;
