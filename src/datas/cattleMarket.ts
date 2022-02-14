import { ICattleMarketInfo } from "../@types";
import IMap from "../@types/map";

type MarketName =
  | "gcch"
  | "ulc"
  | "hch"
  | "anseong"
  | "gamso"
  | "gblc"
  | "sjkj"
  | "jd"
  | "jeju";
//우시장마다 id를 저장하고 id마다 각 정보들을 적어서 넣는다.
// 계속 늘려나가면 됨
type CattleMarketInfos = { [K in MarketName]: ICattleMarketInfo };

const cattleMarket: CattleMarketInfos = {
  gcch: {
    title: "거창축협",
    position: {
      latitude: 36.9796624,
      longitude: 127.2914548,
    },
    phone: "010-3182-4552",
    url: "https://www.gcch.co.kr/",
  },
  ulc: {
    title: "울산축협",
    position: {
      latitude: 37.5989354,
      longitude: 127.0231516,
    },
    url: "https://ulcf.nonghyup.com:8100/user/indexMain.do?siteId=ulcf",
    phone: "02-929-4550",
  },
  // TODO 홍천부터 전화번호랑 다 입력해야됨
  hch: {
    title: "홍천축협",
    position: {
      latitude: 36.9796624,
      longitude: 127.2914548,
    },
    phone: "033-439-3400~3",
    url: "https://www.hchanwoo.com:461/main/",
  },
  anseong: {
    title: "안성축협",
    position: {
      latitude: 36.9796624,
      longitude: 127.2914548,
    },
    phone: "031-8046-8000",
    url: "https://anseongch.nonghyup.com:8100/user/indexMain.do?siteId=anseongch",
  },
  gamso: {
    title: "상주축협",
    position: {
      latitude: 36.9796624,
      longitude: 127.2914548,
    },
    phone: "054)530-5100",
    url: "https://gamso.nonghyup.com:8100/user/indexMain.do?siteId=gamso",
  },
  gblc: {
    title: "고창부안축협",
    position: {
      latitude: 36.9796624,
      longitude: 127.2914548,
    },
    phone: "063-560-3000",
    url: "https://gblc.nonghyup.com:8100/user/indexMain.do?siteId=gblc",
  },
  sjkj: {
    title: "세종공주축협",
    position: {
      latitude: 36.9796624,
      longitude: 127.2914548,
    },
    phone: "041-852-4664",
    url: "https://sjkjch.nonghyup.com:8100/user/indexMain.do?siteId=sjkjch",
  },
  jd: {
    title: "제천단양축협",
    position: {
      latitude: 36.9796624,
      longitude: 127.2914548,
    },
    phone: "043-646-7544",
    url: "https://jd.nonghyup.com:8100/user/indexMain.do?siteId=jdlck",
  },
  jeju: {
    title: "제주축협",
    position: {
      latitude: 36.9796624,
      longitude: 127.2914548,
    },
    phone: "064-756-4201",
    url: "https://jejuch.nonghyup.com:8100/user/indexMain.do?siteId=jejuch",
  },
};
export default cattleMarket;
