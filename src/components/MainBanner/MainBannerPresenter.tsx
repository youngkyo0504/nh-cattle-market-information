import React from "react";
import { Link } from "react-router-dom";
import bannerImgae from "../../assets/cattle.png";
const MainBanner = () => {
  return (
    <div
      style={{
        background:
          "transparent linear-gradient(0deg, #FFFFFF 0%, #EEEAE7 100%) 0% 0% no-repeat padding-box",
      }}
    >
      <div className="px-4 p-16 mx-auto sm:max-w-xl md:max-w-full font-spoqa lg:max-w-7xl md:px-24 lg:px-2 lg:pt-80 ">
        <div className="max-w-xl sm:mx-auto lg:max-w-6xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div className="max-w-xl  md:mx-auto text-center lg:max-w-6xl md:mb-14">
              <h2 className=" text-blue font-spoqa text-5xl font-bold   -tracking-[0.118rem] md:text-[4.7rem] md:mx-auto leading-tight">
                <p className={"p-2 "}>데이터를 통한</p>
                합리적인 송아지 구매
              </h2>
            </div>
            <div className="my-20">
              <Link to="/">
                <span className="text-3xl py-5  font-spoqa traking-[-0.75px] bg-blue font-bold  text-white inline-flex items-center justify-center  px-14 -tracking-wide   transition duration-200 rounded-4xl shadow-md -deep-purple-accent-400 hover:-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                  우시장 둘러보기
                </span>
              </Link>
            </div>
            <img
              className={"mt-[2rem] max-w-5xl  mx-auto"}
              src={bannerImgae}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
