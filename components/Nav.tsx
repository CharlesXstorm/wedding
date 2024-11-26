"use client";

import React from "react";
import { nav } from "@/constant";
import Link from "next/link";
import { useStore } from "@/store";

interface naveItemProps {
  title: string;
  id: number;
}

const NavItem: React.FC<naveItemProps> = ({ title, id }) => {
  const scrollToView = () => {
    window.scrollTo({
      top: id * window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="navmenubtn relative h-[2em] pointer-events-auto overflow-hidden">
      <button onClick={scrollToView}>{title}</button>
    <div></div>
    </div>
  );
};

const Nav = () => {
  const { navChange } = useStore();
  return (
    <nav
      className={["nav pointer-events-none", `${navChange ? "bg-black" : "bg-transparent"}`]
        .filter(Boolean)
        .join(" ")}
    >
      {nav.map((navItem, index) => (
        <NavItem key={index} title={navItem.title} id={navItem.id} />
      ))}
    </nav>
  );
};

export default Nav;
