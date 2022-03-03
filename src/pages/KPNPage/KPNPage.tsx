import React from "react";
import { useParams } from "react-router-dom";

import Iframe from "../../components/Iframe/Iframe";

const KPNPage = () => {
  const { kpnId } = useParams();
  return (
    <section className="mx-auto mt-32 flex w-full max-w-9xl items-center justify-center">
      <Iframe
        className={"mt-4  w-full  overflow-y-auto px-3 md:mt-12"}
        src={`/cattle-market-information-center/iframe/${kpnId}.html`}
      />
    </section>
  );
};

export default KPNPage;
