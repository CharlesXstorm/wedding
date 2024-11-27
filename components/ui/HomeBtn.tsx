"use client";
import { useStore } from "@/store";
import { HomeSVG } from "@/svg";
import React from "react";
import { SwiperClass } from "swiper/react";

interface homeProp {
  swiper: SwiperClass | null | undefined;
}

const HomeBtn: React.FC<homeProp> = ({ swiper }) => {
  const { navChange } = useStore();
  const scrollToView = () => {
    swiper?.slideTo(0);
  };
  return (
    <div>
      {navChange && (
        <button onClick={scrollToView} className="homeBtn">
          <HomeSVG />
        </button>
      )}
    </div>
  );
};

export default HomeBtn;
