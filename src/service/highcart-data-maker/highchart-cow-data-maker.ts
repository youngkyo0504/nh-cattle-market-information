import { PointOptionsObject } from "highcharts";
import HighchartOptionMaker from "./highchart-data-maker";
import carcassPrices from "../../datas/heifer.json";
import { IPriceData } from "../../@types";
import HighStockSeriesData from "../../@types/HighStockSeriesData";

export default class HighChartCowDataMaker implements HighchartOptionMaker {
  private static instance: HighchartOptionMaker;
  private constructor() {}

  public getData(): HighStockSeriesData {
    //*올해와 작년의 데이터가 반환된다.
    const { thisYearPriceData, lastYearPriceData } =
      this.divideIntoLastYearAndThisYear();
    // dependency cowData에 종속되어있다.
    const cowData = {
      lastYearData: lastYearPriceData,
      thisYearData: thisYearPriceData,
    };
    return cowData;
  }

  static getInstance(): HighchartOptionMaker {
    return this.instance || (this.instance = new this());
  }

  private divideIntoLastYearAndThisYear() {
    const YEAR = 86400000 * 365;
    const today = carcassPrices[0].date[0] * 1000;
    const lastYearToday = today - YEAR;
    const twoYearsAgoToday = lastYearToday - YEAR;
    const thisYearPriceData: number[][] = [];
    const lastYearPriceData: number[][] = [];

    carcassPrices //의존적이다. 빼야됨
      .reverse()
      .forEach((priceData) => {
        if (this.isValid(priceData)) {
          const { day, price } = this.getPriceAndDate(priceData);
          if (day > lastYearToday) {
            thisYearPriceData.push([day, price]);
          } else if (day > twoYearsAgoToday) {
            lastYearPriceData.push([day + YEAR, price]);
          }
        }
      });

    return { thisYearPriceData, lastYearPriceData };
  }

  private getPriceAndDate(
    priceData:
      | { date: number[]; 암송아지: number[] }
      | { date: number[]; 암송아지: string[] }
  ) {
    const day = priceData.date[0] * 1000;
    const price = Number(priceData["암송아지"][0]);
    return { day, price };
  }

  private isValid = (priceData: IPriceData) => {
    if (
      String(priceData["date"][0]) !== "NA" &&
      priceData["암송아지"][0] !== "NA" &&
      priceData["암송아지"][0] !== 0
    ) {
      return true;
    }
  };
}
