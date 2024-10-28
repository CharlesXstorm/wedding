"use client";

import HomeImage from "@/components/HomeImage";
import HomeText from "@/components/HomeText";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Portal from "@/components/ui/Portal";
import Scrollicon from "@/components/ui/Scrollicon";
import gsap from "gsap";
import LocomotiveScroll, { ILocomotiveScrollOptions } from "locomotive-scroll";
import Image from "next/image";
import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export default function Home() {
  const mainRef = useRef(null);

  // const mainScroll =(e)=>{
 
  //     console.log(e)

  // }

  useEffect(() => {
    gsap.to(".title", {
      y: 0,
      opacity: 1,
      duration: 0.6,
      delay:.4,
      stagger: 0.1,
    });
    gsap.to(".home__text__p1", {
      y: 0,
      opacity: 1,
      duration: 0.6,
      delay:0.8,
    });
    gsap.to(".home__text__p2", {
      opacity: 0.2,
      duration: 2,
      delay:.6,
    });

    // window.addEventListener("scroll",mainScroll)

    if (mainRef.current) {
      const scroll = new LocomotiveScroll({
        el: document.querySelector(`[data-scroll-container]`),
        smooth: true,
        multiplier: 0.2,
      } as ILocomotiveScrollOptions);
    }

    // return ()=> removeEventListener("scroll",mainScroll)
  }, []);

  return (
    <main id="_main" ref={mainRef} data-scroll-container>
      {<Loader/>}
      <Nav />
      <div className="home pages" data-scroll-section>
        <HomeImage />
        <HomeText />
        <Scrollicon />
      </div>

      <div id="story" className="story pages" data-scroll-section>
        <p>Story</p>
      </div>

      <div id="photo" className="photo pages">
        <p>photo</p>
      </div>

      <div id="wish" className="wish pages">
        <p>wish</p>
      </div>
    </main>
  );
}
