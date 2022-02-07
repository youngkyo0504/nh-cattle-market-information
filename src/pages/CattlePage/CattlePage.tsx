import React from "react";
import Iframe from "../../components/Iframe/Iframe";
const CattlePage = () => {
  return (
    <>
      <h1>출품우 분석 서비스</h1>
      <div className="flex justify-center items-center">
        <Iframe className={"w-3/6"} src={"/iframe/woo-table2.html"} />
        <Iframe className={"w-4/12"} src={"/iframe/kpn.html"} />
      </div>
    </>
  );
};

export default CattlePage;
