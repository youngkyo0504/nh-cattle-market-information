import ICowGraphInfo from "../@types/CowGraphInfo";

type IGraphName = "cow" | "meat";

const cowGraphInfo: Record<IGraphName, Partial<ICowGraphInfo>> = {
  cow: {
    name: "송아지 가격",
    unit: "만원 / 마리",
    reference: "농협 중앙회",
  },
  meat: {
    name: "지육 가격",
    unit: "원 / kg",
    reference: "축산물품질평가원",
  },
};
export default cowGraphInfo;
