import React from "react";
import bannerImgae from "../../assets/banner.png";
const MainBanner = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-5xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
          <a href="/" className="mb-6 sm:mx-auto"></a>
          <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl md:mb-5">
            <h2 className="text-blue-900 max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight  sm:text-4xl md:mx-auto">
              <span className="relative inline-block"></span>{" "}
              <p className={"p-2"}>데이터를 통한</p>
              합리적인 송아지 구매
            </h2>
          </div>
          <div>
            <a
              href="/"
              className="font bg-blue-900 font-extrabold text-white inline-flex items-center justify-center h-12 px-10 tracking-wide   transition duration-200 rounded-2xl shadow-md -deep-purple-accent-400 hover:-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              우시장 둘러보기
            </a>
          </div>
          <img className={"mt-8"} src={bannerImgae} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
