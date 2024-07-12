"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { LinearProgress } from "@mui/material";

import { useRef, useState } from "react";

function AuthLayout(props) {
  const [activeStep, setActiveStep] = useState(0);
  const [activeProgress, setActiveProgress] = useState(0);
  const intervalRef = useRef();

  const carousel = [
    {
      title: "Manage CrowdCargo Advance Store",
      subtitle: "Take control of CrowdCargo Advance with this all-in-one solution for e-commerce.",
    },
    {
      title: "Manage CrowdCargo Advance Store",
      subtitle: "Take control of CrowdCargo Advance with this all-in-one solution for e-commerce.",
    },
    {
      title: "Manage CrowdCargo Advance Store",
      subtitle: "Take control of CrowdCargo Advance with this all-in-one solution for e-commerce.",
    },
  ];

  const handleStepChange = (swiper) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      setActiveProgress(0);
    }
    setActiveStep(swiper.activeIndex);
    intervalRef.current = setInterval(() => {
      setActiveProgress((p) => p + (10 * 100) / CAROUSEL_DELAY);
    }, 10);
  };

  return (
    <div className="hidden md:flex pt-12 bg-gray-100 w-[40%] ">
      <div className=" hidden md:flex flex-col p-12   ">
        <div className=" relative ">
          <Swiper
            spaceBetween={5}
            autoplay={
              {
                // delay: CAROUSEL_DELAY,
                // disableOnInteraction: false,
              }
            }
            // navigation
            modules={[Autoplay, Navigation]}
            onInit={handleStepChange}
            onDestroy={() => {
              if (intervalRef.current) {
                clearInterval(intervalRef.current);
              }
            }}
            onActiveIndexChange={handleStepChange}
            //   className="mySwiper"
            //   height="auto"
            //   slidesPerView="auto"
            // breakpoints={{
            //   400: { slidesPerView: 1 },
            //   800: { slidesPerView: 2 },
            //   1200: { slidesPerView: 3 },
            // }}
            // className="mySwiper"
            direction="vertical"
          >
            {carousel.map(({ title, subtitle }, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col ">
                  <div className="w-96">
                    <Image src={"/delivery-bag.png"} alt={"/delivery-bag"} width={400} height={400} />
                  </div>
                  <div className="">
                    <div className=" text-center text-xl  text-primary font-semibold mt-8">{title}</div>
                    {subtitle ? <div className="text-center text-gray-500 max-w-xs mt-4 font-medium">{subtitle}</div> : null}
                  </div>
                  <div className="relative pl-16 pt-8 ">
                    <div className="grid grid-cols-5 gap-2 max-w-lg  ">
                      {Array(carousel.length)
                        .fill(1)
                        .map((_, index) => {
                          return <LinearProgress key={index} variant="determinate" value={index === activeStep ? activeProgress : index < activeStep ? 100 : 0} />;
                        })}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;

const CAROUSEL_DELAY = 3000;

/**
 * @typedef {{children: import("react").ReactNode}} AuthLayoutProps
 */
