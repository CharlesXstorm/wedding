"use client";
import { useStore } from "@/store";
import { useIsMobile } from "@/hooks/customHooks";
import Image from "next/image";
import React from "react";

const HomeImage = () => {
  const { imageLoaded, setImageLoaded } = useStore();
  const isMobile = useIsMobile()

  // const srcList = ["/images/heroDesk.jpg","/images/heroMobile.jpg"]
  if(isMobile){
    return (
      <div className="home__image">
        <Image
          onLoad={() => setImageLoaded(true)}
          className={[
            "origin-[50%_0] translate-x-[0px] translate-y-[0px] md:translate-y-[-150px]  md:translate-x-[0px] lg:translate-y-[0px]",
            `${
              imageLoaded
                ? "scale-[1.15] md:scale-[1]"
                : "scale-[1.5] lg:scale-[1.5]"
            }`,
          ]
            .filter(Boolean)
            .join(" ")}
          src={"/images/heroMobile.jpg"}
          alt="couples"
          width={750}
          height={900}
          style={{ width: "100%", transition: "all 0.8s ease, opacity 0.2s linear" }}
        />
      </div>
    );
  }else{
    return (
      <div className="home__image">
        <Image
          onLoad={() => setImageLoaded(true)}
          className={[
            "origin-[50%_0] translate-x-[0px] translate-y-[0px] md:translate-y-[-150px]  md:translate-x-[0px] lg:translate-y-[0px]",
            `${
              imageLoaded
                ? "scale-[1.15] md:scale-[1]"
                : "scale-[1.5] lg:scale-[1.5]"
            }`,
          ]
            .filter(Boolean)
            .join(" ")}
          src={"/images/heroDesk.jpg"}
          alt="couples"
          width={750}
          height={900}
          style={{ width: "100%", transition: "all 0.8s ease, opacity 0.2s linear" }}
        />
      </div>
    );
  }
};

export default HomeImage;
