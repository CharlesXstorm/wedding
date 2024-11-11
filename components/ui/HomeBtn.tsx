"use client";
import HomeSVG from "@/svg/HomeSVG";
// import Link from "next/link";
import React from "react";

const HomeBtn = () => {
    const scrollToView = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      
      };
  return (
    <div >
      <button onClick={scrollToView} className="homeBtn">
        <HomeSVG />
      </button>
    </div>
  );
};

export default HomeBtn;
