import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageGeo from "../../assets/presentation/1.1.png";
import Image1 from "../../assets/presentation/2.1.png";
import Image2 from "../../assets/presentation/2.2.png";
import Image3 from "../../assets/presentation/2.3.png";
import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  Thumbs,
  Mousewheel,
  Keyboard,
  Scrollbar,
  EffectFade,
  EffectCoverflow,
  EffectCube,
} from "swiper";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import FadeInSection from "../../components/FadeInSection/FadeInsection";
import { Link } from "react-router-dom";

SwiperCore.use([Keyboard, Mousewheel, EffectFade, Pagination]);

function IntroductionPage() {
  useEffect(() => {
    window.addEventListener("resize", () => {
      const swiperElements =
        document.querySelectorAll<HTMLElement>(".swiper-slide");
      swiperElements.forEach((element) => {
        element.style.height = "100vh";
      });
    });
    document.body.style.overflowY = "hidden";
    // const a = document.querySelector<HTMLElement>("#header");
    // a && (a.style.display = "none");
    // console.log("none");
    return () => {
      document.body.style.overflowY = "auto";
      // const a = document.querySelector<HTMLElement>("#header");
      // a && (a.style.display = "block");
    };
  }, []);
  return (
    <>
      <Swiper
        effect={"slide"}
        autoHeight={true}
        followFinger={false}
        touchReleaseOnEdges={true}
        parallax={true}
        updateOnWindowResize={true}
        speed={800}
        // height={1200}
        slidesPerView={1}
        direction={"vertical"}
        spaceBetween={10}
        mousewheel={{
          thresholdDelta: 100,
          thresholdTime: 500,
          releaseOnEdges: true,
        }}
        threshold={200}
        keyboard={{
          enabled: true,
        }}
        className="mySwiper overflow-hidden"
      >
        <SwiperSlide className=" h-screen">
          <FadeInSection
            cb={() => {
              // const a = document.querySelector<HTMLElement>("#header");
              // a && (a.style.display = "none");
            }}
          >
            <article className="pt-80 text-center font-bold">
              <div className="animate-fade-in-up text-blue text-6xl font-bold">
                90개의 우시장
              </div>
              <div className="animate-fade-in-up mt-7 text-3xl font-bold ">
                전국 우시장의 제각각의 정보들
              </div>
              <div className="animate-fade-in-up mx-auto mt-24 max-w-[76rem] ">
                <img className="w-full" src={ImageGeo} alt="" />
              </div>
            </article>
          </FadeInSection>
        </SwiperSlide>
        <SwiperSlide className="  h-screen">
          <FadeInSection>
            <article className="flex h-full flex-col justify-evenly text-center font-bold">
              <div className="animate-fade-in-up ">
                <p className="text-blue font-bold capitalize">STORY 1.</p>
                <p className="mt-4 text-2xl font-bold">우시장 정보센터란?</p>
              </div>
              <div className=" animate-fade-in-up text-blue text-6xl font-bold leading-[1.26] ">
                <p>데이터를 통한</p>
                <p>
                  합리적인 송아지 구매 정보
                  <span className="text-black">를</span>
                </p>
                <p className="text-black">제공하는</p>
                <p>우시장 정보센터</p>
              </div>
              <div className="leading-[ 1.37]  animate-fade-in-up-2 text-2xl  delay-100">
                <p>좋은 사양관리의 첫 단추는 좋은 송아지를 사는 것 입니다.</p>
                <p>우시장 출품우의 혈통과 가격을 분석해</p>
                <p>한우 농가가 꼭 맞는 소를 살 수 있게 도와줍니다.</p>
              </div>
            </article>
          </FadeInSection>
        </SwiperSlide>

        <SwiperSlide className=" h-screen bg-[#eeeeee]">
          <FadeInSection>
            {" "}
            <article className="max-w-9xl animate-fade-in-up mx-auto flex h-full flex-col justify-evenly text-center font-bold">
              <div className="">
                <p className=" text-blue font-bold capitalize">STORY 2.</p>
                <p className="mt-4 text-2xl font-bold">기술소개</p>
              </div>
              {/* 기술소개들 */}
              <div className="flex justify-between   ">
                <div className="animate-fade-in-up-1 flex flex-col ">
                  <div className="flex h-80 flex-col justify-between">
                    <div>
                      <p className="text-blue font-bold capitalize">
                        Service 1.
                      </p>
                      <p className="mt-2 text-2xl font-bold">AI 송아지 분석</p>
                    </div>
                    <div>
                      <img className=" max-w-[16rem]" src={Image1} alt="" />
                    </div>
                  </div>

                  <div className="mt-16 w-56 text-sm tracking-tighter">
                    <p>
                      사육자, KPN, 계대 등 축산물이력제 기반 빅데이터 분석을
                      통해 보다 정확한 송아지의 잠재능력을 제공합니다.
                    </p>
                  </div>
                </div>
                <div className="animate-fade-in-up-2 flex flex-col justify-between">
                  <div className="flex h-80 flex-col justify-between">
                    <div>
                      <p className="text-blue font-bold capitalize">
                        Service 2.
                      </p>
                      <p className="mt-2 text-2xl font-bold">가격 비교</p>
                    </div>
                    <div>
                      <img className=" max-w-[14rem]" src={Image2} alt="" />
                    </div>
                  </div>

                  <div className="mt-16 w-56 text-sm tracking-tighter">
                    <p>
                      사고자 하는 송아지와 비슷한 잠재능력을 가진 다른 송아지의
                      유사도 분석을 통해 최신 가격정보를 제공합니다.
                    </p>
                  </div>
                </div>
                <div className="animate-fade-in-up-3 flex flex-col ">
                  <div className="flex h-80 flex-col justify-between">
                    <div>
                      <p className="text-blue font-bold capitalize">
                        Service 3.
                      </p>
                      <p className="mt-2 text-2xl font-bold">시세 분석</p>
                    </div>
                    <div>
                      <img className=" max-w-[12rem]" src={Image3} alt="" />
                    </div>
                  </div>

                  <div className="mt-16 w-56 text-sm tracking-tighter">
                    <p>
                      송아지 가격과 지육 가격에 대한 시세 정보 및 한우산업 연간
                      자료를 제공합니다.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </FadeInSection>
        </SwiperSlide>

        <SwiperSlide className=" h-screen bg-[#363636]">
          <div className="presentation-1 h-screen">
            <FadeInSection>
              <article className=" flex h-full flex-col items-center justify-end pb-[10%] text-center font-bold">
                <div className="animate-fade-in-up mb-9 max-w-[38rem] text-4xl font-bold leading-tight  tracking-[-1.13px;]  text-white">
                  지금 바로 당신의 농장에 <br /> 꼭 맞는 소를 구입해 보세요
                </div>
                <div className="animate-fade-in-up rounded-4xl cursor-pointer bg-white py-3 px-10 text-2xl font-bold tracking-[-0.59px]">
                  <Link to="/cattle">우시장 정보센터 바로가기</Link>
                </div>
              </article>
            </FadeInSection>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default IntroductionPage;
