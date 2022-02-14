import React from "react";
import bannerImgae from "../../assets/cattle.png";
const MainBanner = () => {
  return (
    <div
      style={{
        background:
          "transparent linear-gradient(0deg, #FFFFFF 0%, #EEEAE7 100%) 0% 0% no-repeat padding-box",
      }}
    >
      <div className="px-4 p-16 mx-auto sm:max-w-xl md:max-w-full font-spoqa lg:max-w-7xl md:px-24 lg:px-2 lg:pt-36 ">
        <div className="max-w-xl sm:mx-auto lg:max-w-6xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <a href="/" className="mb-6 sm:mx-auto"></a>
            <div className="max-w-xl mb-5 md:mx-auto text-center lg:max-w-6xl md:mb-14">
              <h2 className=" text-blue font-spoqa text-5xl font-bold leading-none tracking-tight  sm:text-7xl md:mx-auto">
                <span className="relative inline-block"></span>{" "}
                <p className={"p-2 "}>데이터를 통한</p>
                합리적인 송아지 구매
              </h2>
            </div>
            <div>
              <a href="/" className="">
                <span className="text-3xl py-5 font-spoqa bg-blue font-extrabold  text-white inline-flex items-center justify-center  px-14 -tracking-wide   transition duration-200 rounded-4xl shadow-md -deep-purple-accent-400 hover:-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                  우시장 둘러보기
                </span>
              </a>
            </div>
            <img className={"mt-[5.5rem]"} src={bannerImgae} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
