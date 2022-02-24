import React from "react";
// import QaBox from "../../components/QaBox/QaBox";
import QaImage from "../../assets/qa-images/qna@2x.png";

const FaqPage = () => {
  return (
    <section className="max-w-9xl mx-auto mt-48 mb-36 flex min-h-[65vh] justify-between p-4">
      <div className=" flex flex-col justify-between">
        <div>
          <h1 className="text-blue text-3xl font-bold tracking-[-0.73px]">
            자주 묻는 질문
          </h1>
          <p className="text-gray-info tracking-[-0.39px]">FAQ</p>
        </div>
        <img className="max-w-[19rem]" src={QaImage} alt="qa-img" />
      </div>
      <div className="flex w-full max-w-xl flex-col">
        <div className="mt-28 flex flex-col first:mt-0">
          <div className="border-gray-subtitle border-b px-3 py-2">
            <h3 className="text-gray-subtitle text-lg tracking-[-0.49px]">
              가격 정보의 출처는 어딘가요?
            </h3>
          </div>
          <div className="text-gray-info mt-5 px-3 leading-normal tracking-[-0.46px]">
            송아지 가격은 농협, 지육 가격은 축산물품질평가원에서 공개하고 있는
            <p>자료를 활용했어요</p>
          </div>
        </div>
        <div className="mt-28 flex flex-col first:mt-0">
          <div className="border-gray-subtitle border-b px-3 py-2">
            <h3 className="text-gray-subtitle text-lg tracking-[-0.49px]">
              우시장 선별 기준은 어떻게 되나요?
            </h3>
          </div>
          <div className="text-gray-info mt-5 px-3 leading-normal tracking-[-0.46px]">
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
