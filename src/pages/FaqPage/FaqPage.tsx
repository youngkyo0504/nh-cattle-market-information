import React from "react";
// import QaBox from "../../components/QaBox/QaBox";
import QaImage from "../../assets/qa-images/qna@2x.png";

const FaqPage = () => {
  return (
    <section className="mx-auto mt-24 mb-36 flex min-h-[65vh] max-w-9xl flex-col p-4 md:mt-48 md:flex-row md:justify-between">
      <div className=" flex flex-col justify-between">
        <div>
          <h1 className="flex flex-col text-3xl font-bold tracking-[-0.73px] text-blue md:flex-row">
            자주 묻는
            <p>질문</p>
          </h1>
          <p className="mt-1 hidden tracking-[-0.39px] text-gray-info md:block">
            FAQ
          </p>
        </div>
        <img
          className="hidden max-w-[19rem] md:block"
          src={QaImage}
          alt="qa-img"
        />
      </div>

      <div className="flex w-full max-w-xl flex-col">
        <div className=" mt-16 flex flex-col md:mt-28 md:first:mt-0">
          <div className="border-b border-gray-subtitle py-2 md:px-3">
            <h3 className="tracking-[-0.49px] text-gray-subtitle md:text-lg">
              가격 정보의 출처는 어딘가요?
            </h3>
          </div>
          <div className="mt-5 text-[0.93rem] leading-normal tracking-[-0.46px] text-gray-info md:px-3 md:text-base">
            송아지 가격은 농협, 지육 가격은 축산물품질평가원에서 공개하고 있는
            <p>자료를 활용했어요</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:mt-28 md:first:mt-0">
          <div className="border-b border-gray-subtitle py-2 md:px-3">
            <h3 className="tracking-[-0.49px] text-gray-subtitle md:text-lg">
              우시장 선별 기준은 어떻게 되나요?
            </h3>
          </div>
          <div className="mt-5 text-[0.93rem] leading-normal tracking-[-0.46px] text-gray-info md:px-3 md:text-base">
            각 지역별로 친자일치, KPN, 계대 등의 정보를 다양하게 제공하는
            우시장을 우선 선별하였습니다. 추후 전국 우시장으로 확대될
            예정입니다.
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
