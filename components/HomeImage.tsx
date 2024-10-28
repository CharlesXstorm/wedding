"use client";
import { useStore } from "@/store";
import Image from "next/image";
import React from "react";

const HomeImage = () => {
  const { imageLoaded, setImageLoaded } = useStore();
  return (
    <div className="home__image">
      <Image
        onLoad={() => setImageLoaded(true)}
        className={[
          "origin-[25%_0] translate-y-[0] lg:translate-y-[-200px]",
          `${
            imageLoaded
              ? "scale-[2] lg:scale-[1]"
              : "scale-[2.5] lg:scale-[1.5]"
          }`,
        ]
          .filter(Boolean)
          .join(" ")}
        src="/images/placehold2.jpeg"
        alt="couples"
        width={750}
        height={900}
        style={{ width: "100%", transition: "all 0.8s ease, opacity 0.2s linear" }}
      />
    </div>
  );
};

export default HomeImage;
