"use client";

import React from "react";
import { nav } from "@/constant";
import Link from "next/link";
import { useStore } from "@/store";
import { SwiperClass } from "swiper/react";

interface navProp {
  swiper: SwiperClass | null | undefined;
}

interface naveItemProps {
  title: string;
  id: number;
  swiper: SwiperClass | null | undefined;
}

const NavItem: React.FC<naveItemProps> = ({ title, id, swiper }) => {
  const scrollToView = () => {
    swiper?.slideTo(id)
    // window.scrollTo({
    //   top: id * window.innerHeight,
    //   behavior: "smooth",
    // });
  };

  return (
    <div className="navmenubtn relative h-[2em] pointer-events-auto overflow-hidden">
      <button onClick={scrollToView}>{title}</button>
      <div></div>
    </div>
  );
};

const Nav: React.FC<navProp> = ({ swiper }) => {
  const { navChange } = useStore();
  return (
    <nav
      className={[
        "nav pointer-events-none",
        `${navChange ? "bg-black" : "bg-transparent"}`,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {nav.map((navItem, index) => (
        <NavItem key={index} title={navItem.title} id={navItem.id} swiper={swiper} />
      ))}
    </nav>
  );
};

export default Nav;
