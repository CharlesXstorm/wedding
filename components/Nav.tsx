"use client";

import React from "react";
import { nav } from "@/constant";
import Link from "next/link";

interface naveItemProps {
  title: string;
  id: number;
}

const NavItem: React.FC<naveItemProps> = ({ title, id }) => {
  const scrollToView = () => {
    window.scrollTo({
      top: id * window.innerHeight,
      behavior: "smooth"
    })
  
  };

  return <button onClick={scrollToView}>{title}</button>;
};

const Nav = () => {
  return (
    <nav className="nav">
      {nav.map((navItem, index) => (
        <NavItem key={index} title={navItem.title} id={navItem.id} />
      ))}
    </nav>
  );
};

export default Nav;
