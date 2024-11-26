"use client";

import { useStore } from "@/store";
import React from "react";

const Loader = () => {
  const { imageLoaded } = useStore();
  return (
    <div
      className={["loader", `${imageLoaded ? "opacity-0" : "opacity-100"}`]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="h-[50vh] w-full text-white text-[3em] font-[cremeEspana] flex flex-col lg:flex-row gap-2 items-center justify-center">
          <span>Clems</span>
          <span>&</span>
          <span>Perky</span>
        </div>

        <div className="w-full flex flex-col gap-4 items-center">
          <span className="left__span"></span>
          <span className="right__span"></span>
        </div>
      </div>

    </div>
  );
};

export default Loader;
