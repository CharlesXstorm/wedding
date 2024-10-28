"use client";

import { useStore } from "@/store";
import React from "react";

const Loader = () => {
  const { imageLoaded } = useStore();
  return <div className={["loader",`${imageLoaded && "opacity-0"}`].filter(Boolean).join(" ")}></div>;
};

export default Loader;
