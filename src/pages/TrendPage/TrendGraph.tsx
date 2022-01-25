import React from "react";
import { cowStockOptions } from "../../datas";
import Highcharts from "highcharts";



// const TrendGraphIndexArrow = styled.span``;
// const TrendGraphIndexPercent = styled.span`
//   padding-left: 10px;
// `;
const TrendGraph = ({ data }: { data: Highcharts.Options }) => {
  return (
    <></>
    // <GraphContainer>
    //   <TrendGraphHead>
    //     <TrendGraphTitle>
    //       <TrendGraphName>UBHD</TrendGraphName>
    //       <TrendGraphDesc>송아지 가격 정보</TrendGraphDesc>
    //     </TrendGraphTitle>
    //     <TrendGraphChangeDown>
    //       <TrendGraphIndex>10,861.92</TrendGraphIndex>
    //       <TrendGraphIndexDesc>
    //         <TrendGraphIndexArrow>▾ 52.67</TrendGraphIndexArrow>
    //         <TrendGraphIndexPercent>-0.98%</TrendGraphIndexPercent>
    //       </TrendGraphIndexDesc>
    //     </TrendGraphChangeDown>
    //   </TrendGraphHead>
    //   <ChartContainer data={data} />
    // </GraphContainer>
  );
};

export default TrendGraph;
