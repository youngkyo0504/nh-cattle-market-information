import HighchartOptionMaker from "./highchart-option-maker";
import carcassPrices from "../../datas/heifer.json";
import { IPriceData } from "../../@types";
import getCowStockOptions from "../../datas/cowData";
import Highcharts, { Options } from "highcharts";
import HighStockSeriesData from "../../@types/HighStockSeriesData";

// singletone pattern
export default class HighchartCowOptionMaker implements HighchartOptionMaker {
  private static instance: HighchartCowOptionMaker;
  private constructor() {}

  static getInstance(): HighchartCowOptionMaker {
    return this.instance || (this.instance = new this());
  }

  public getCowStockOptions(
    seriesData: Highcharts.SeriesOptionsType[],
    unit: string
  ): Options {
    return {
      plotOptions: {
        series: {
          animation: false,
          stickyTracking: false, // 마우스가 계속 따라가는 것
          states: {
            inactive: {
              opacity: 1,
            },
            hover: {
              enabled: false,
              halo: {
                opacity: 1,
              },
            },
          },
        },
      },
      xAxis: {
        tickLength: 0,
        lineWidth: 0,
        type: "datetime",
        dateTimeLabelFormats: {
          millisecond: "%H:%M:%S.%L",
          second: "%H:%M:%S",
          minute: "%H:%M",
          hour: "%H:%M",
          day: "%m/%d",
          week: "%m/%d",
          month: "%m",
          year: "%Y",
        },
      },
      yAxis: {
        gridLineWidth: 0,
        lineWidth: 0,
        labels: {
          align: "left",
          style: { letterSpacing: -1 },
        },
        // height: "80%",
        resize: {
          enabled: true,
        },
      },
      // {
      //   // labels: {
      //   //   align: "left",
      //   // },
      //   // top: "80%",
      //   // height: "20%",
      //   // offset: 0,
      // },
      title: {
        text: "",
      },
      tooltip: {
        className: "list-none",
        shared: true,
        useHTML: true,
        animation: false,
        borderColor: "transparent", // TODO 색깔바꾸기
        shadow: false,
        style: {
          width: 1000,

          "list-style": "none",
        },
        formatter: function () {
          if (this.points) {
            return this.points.reduce(function (s, point) {
              return (
                s +
                '<br/><span class="font-bold" style="color:' +
                point.color +
                '; ">' +
                point.series.name +
                "</span> " +
                "<b>" +
                point.y +
                unit +
                " </b>"
              );
            }, "<b>" +
              '<span class="font-medium">' +
              new Date(this.x).toISOString().slice(0, 10) +
              "</span>" +
              "</b>");
          }
        },
        enabled: true,
        xDateFormat: "%y-%m-%y",
        split: false,
      },
      navigator: {
        enabled: false,
      },
      scrollbar: {
        enabled: false,
      },
      chart: {
        style: { fontFamily: "Spoqa Han Sans , sans-serif" },
        height: "300px",
      },
      rangeSelector: {
        inputEnabled: false,
        buttonPosition: {
          align: "right",
          x: 0,
          y: 0,
        },
        buttonTheme: {
          fill: "none",
          states: {
            hover: {
              fill: "rgba(0, 70, 142,0.7)",
              style: {
                color: "white",
              },
            },
            select: {
              fill: "#00468E",
              style: {
                color: "white",
              },
            },
            // disabled: { ... }
          },
        },

        buttons: [
          // 어떤 버튼을 누르는지에 따라 다릅니다.
          {
            type: "month",
            count: 1,
            text: "한달",
            title: "View 1 month",
          },
          {
            type: "month",
            count: 3,
            text: "3개월",
            title: "View 3 months",
          },
          {
            type: "month",
            count: 6,
            text: "6개월",
            title: "View 6 months",
          },

          {
            type: "year",
            count: 1,
            text: "년",
            title: "년",
          },
          {
            type: "all",
            text: "전체",
            title: "View all",
          },
        ],
        // 한달 , 두달 씩 끊어서 보는 것
      },
      series: [
        ...seriesData,
        // {
        //   name: "수송아지",
        //   color: "rgb(30 58 138)",
        //   type: "line",
        //   data: thisYearData,
        //   // TODO line 굵기나 다른 것 변경 예정
        //   states: {
        //     inactive: {
        //       opacity: 1, // 다른 것이 포커싱되어도 0.5로 opacity동일하게 한다.
        //     },
        //   },
        // },
        // {
        //   name: "암송아지",
        //   color: "red",
        //   type: "line",
        //   states: {
        //     inactive: {
        //       opacity: 1, // 다른 것이 포커싱되어도 0.5로 opacity동일하게 한다.
        //     },
        //   },
        //   data: lastYearData,
        // },
      ],
    };
  }

  public getMinimalCowStockOptions({
    lastYearData,
    thisYearData,
  }: HighStockSeriesData): Options {
    return {
      plotOptions: {
        series: {
          animation: false,
          stickyTracking: false, // 마우스가 계속 따라가는 것
          states: {
            inactive: {
              opacity: 1,
            },
            hover: {
              enabled: false,
              halo: {
                opacity: 1,
              },
            },
          },
        },
        // series: {
        //   stickyTracking: false, // 마우스가 계속 따라가는 것
        //   states: {
        //     inactive: {
        //       opacity: 1,
        //     },
        //     hover: {
        //       enabled: false,
        //       halo: {
        //         opacity: 1,
        //       },
        //     },
        //   },
        // },
        area: {
          gapSize: 100,
          connectNulls: true, // null인 값들 모두 연결할지 말지
          // enableMouseTracking: false,
          stickyTracking: false,

          states: {
            hover: {
              opacity: 1,
              enabled: false,
              halo: {
                opacity: 1,
              },
            },
          },
        },
      },
      yAxis: [
        {
          crosshair: false,
          range: 2000,
          lineWidth: 0,
          minorGridLineWidth: 0,

          lineColor: "transparent",
          gridLineColor: "transparent",
          labels: {
            enabled: false,
          },
          title: {
            text: null,
          },
          minPadding: 0.3,
          maxPadding: 0.1,
        },
      ],
      credits: { enabled: false },
      rangeSelector: {
        labelStyle: { display: "none" },
        inputEnabled: false,
        buttonPosition: {
          align: "right",
        }, //버튼의 위치
        allButtonsEnabled: false,
        enabled: false,
      },
      xAxis: {
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: "transparent",
        labels: {
          enabled: false,
        },
        title: {
          text: null,
        },
        crosshair: false,
        minorTickLength: 0,
        tickLength: 0,
        minPadding: 0,
        maxPadding: 0,
      },
      tooltip: {
        shared: true,
        useHTML: true,
        animation: false,
        formatter: function () {
          if (this.points) {
            return this.points.reduce(function (s, point) {
              return (
                s +
                '<br/><p style="color:' +
                point.color +
                ';">' +
                point.series.name +
                "</p> " +
                ": <b>" +
                point.y +
                " 천원</b>"
              );
            }, "<b>" + new Date(this.x).toISOString().slice(0, 10) + "</b>");
          }
        },
        enabled: true,
        xDateFormat: "%y-%m-%y",
        split: false,
        style: {
          listStyleType: "none",
        },
        className: "high-tooltip",
      },
      chart: {
        // width //전체 차트 넓이를나타낸다.

        height: "300px",
        borderColor: "transparent",
        borderWidth: 0.5,
        spacingBottom: 30,
        spacingTop: 30,
        spacingLeft: 30,
        spacingRight: 30,
        style: { pading: "100px" },
        className: "kyoyoung",
      },
      lang: {
        rangeSelectorZoom: "",
      },
      navigator: { enabled: false },
      scrollbar: { enabled: false },
      series: [
        {
          data: lastYearData, //HighStockSeriesData
          lineWidth: 1,
          type: "area", //가격이 밑에 남는 것 색깔이 중요한듯..
          gapSize: 5,
          opacity: 0.5,
          states: {
            inactive: {
              opacity: 0.5, // 다른 것이 포커싱되어도 0.5로 opacity동일하게 한다.
            },
          },
          showInNavigator: false,
          color: "rgba(192,192,192,0.85)",
          name: "작년 송아지 가격",
          id: "cattle",
          animation: {
            duration: 1000,
          },
          findNearestPointBy: "xy",
          selected: true,
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1,
            },
            stops: [
              [0, "rgba(240, 241, 242)"],
              [1, "rgba(240, 241, 242,0)"],
            ],
          },
        },
        {
          data: thisYearData, //this year
          lineWidth: 1,
          showCheckbox: true,
          type: "line",
          // color: "#edacb1",
          color: "#edb445",
          name: "송아지 가격",
          id: "cattle",
          description: "소 가격",

          animation: {
            duration: 1000,
          },
          states: {
            hover: { enabled: false },
          },
        },
      ],
    };
  }
}
