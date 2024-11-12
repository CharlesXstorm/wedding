"use client";
import { useStore } from "@/store";
import { useIsMobile } from "@/hooks/customHooks";
import Image from "next/image";
import React from "react";

const HomeImage = () => {
  const { imageLoaded, setImageLoaded } = useStore();
  const isMobile = useIsMobile()

  const srcList = ["/images/heroDsk3.jpg","/images/heroMobile.jpg"]

  return (
    <div className="home__image">
      <Image
        onLoad={() => setImageLoaded(true)}
        className={[
          "origin-[50%_0] translate-y-[0]",
          `${
            imageLoaded
              ? "scale-[1.2] lg:scale-[1]"
              : "scale-[1.5] lg:scale-[1.5]"
          }`,
        ]
          .filter(Boolean)
          .join(" ")}
        src={isMobile?srcList[1]:srcList[0]}
        alt="couples"
        width={750}
        height={900}
        style={{ width: "100%", transition: "all 0.8s ease, opacity 0.2s linear" }}
      />
    </div>
  );
};

export default HomeImage;
