import React, { FC, ReactNode } from "react";

interface QaBoxProp {
  title?: string;
}

const QaBox: FC<QaBoxProp> = ({ title, children }) => (
  <div className="first:mt-0 mt-28 flex flex-col">
    <div className="border-b border-gray-subtitle px-3 py-2">
      <h3 className="tracking-[-0.49px] text-gray-subtitle text-lg">
        가격 정보의 출처는 어딘가요?
      </h3>
    </div>
    <div className="px-3 text-gray-info mt-5 leading-normal tracking-[-0.46px]">
      뉴소레터는 매주 목요일에 발행되기 때문에 이번주 한우 가격은 월-수 3일로
      계산해요. 지난주 평균을 계산할 때는 월-금 5일의 가격이 포함되기 때문에
      같은 주차여도 발행일에 따라 가격이 조금 다를 수 있어요.
    </div>
  </div>
);

export default QaBox;
