"use client";
import { useStore } from "@/store";
import { HomeSVG } from "@/svg";
import React from "react";
import { SwiperClass } from "swiper/react";

interface homeProp {
  // swiper: SwiperClass | null | undefined;
}

const HomeBtn: React.FC<homeProp> = () => {
  const { navChange } = useStore();
  const scrollToView = () => {
    const homeDiv = document.getElementById("home_");
    homeDiv?.scrollIntoView({ behavior: "smooth" });
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
