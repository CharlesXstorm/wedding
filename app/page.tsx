"use client";

import HomeImage from "@/components/HomeImage";
import HomeText from "@/components/HomeText";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Photo from "@/components/Photo";
import Story from "@/components/Story";
import HomeBtn from "@/components/ui/HomeBtn";
import Portal from "@/components/ui/Portal";
import Scrollicon from "@/components/ui/Scrollicon";
import Wish from "@/components/Wish";
import { useStore } from "@/store";
// import gsap from "gsap";
import LocomotiveScroll, { ILocomotiveScrollOptions } from "locomotive-scroll";
import Image from "next/image";
import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export default function Home() {
  const { setNavChange, setNavScrollChange } = useStore();
  const mainRef = useRef(null);

  // const mainScroll =(e)=>{

  //     console.log(e)

  // }

  const trackElement = () => {
    const photoEl = document.querySelector("#photo");
    const homeEl = document.querySelector("#home_");
    const homeScroll = Math.ceil(homeEl?.getBoundingClientRect().top ?? 0);
    const photoScroll = Math.ceil(photoEl?.getBoundingClientRect().top ?? 0);
    // console.log("homeScroll", homeScroll)
    homeScroll < -50 ? setNavScrollChange(true) : setNavScrollChange(false);
    photoScroll < -500 ? setNavChange(true) : setNavChange(false);
  };

  useEffect(() => {
    // gsap.to(".title", {
    //   y: 0,
    //   opacity: 1,
    //   duration: 0.6,
    //   delay:.4,
    //   stagger: 0.1,
    // });
    // gsap.to(".home__text__p1", {
    //   y: 0,
    //   opacity: 1,
    //   duration: 0.6,
    //   delay:0.8,
    // });
    // gsap.to(".home__text__p2", {
    //   opacity: 0.2,
    //   duration: 2,
    //   delay:.6,
    // });

    // window.addEventListener("scroll",mainScroll)

    window.addEventListener("scroll", trackElement);

    if (mainRef.current) {
      const scroll = new LocomotiveScroll({
        el: document.querySelector(`[data-scroll-container]`),
        smooth: true,
        multiplier: 0.2,
      } as ILocomotiveScrollOptions);
    }

    return () => removeEventListener("scroll", trackElement);
  }, []);

  return (
    <main id="_main" ref={mainRef} data-scroll-container>
      {<Loader />}
      <Nav />
      <HomeBtn />
      <div id="home_" className="home pages" data-scroll-section>
        <HomeImage />
        <HomeText />
        <Scrollicon />
      </div>

      <div id="story" className="story pages" data-scroll-section>
        <Story />
      </div>

      <div id="photo" className="photo pages">
        <Photo />
      </div>

      <div id="wish" className="wish pages">
        <Wish />
      </div>
    </main>
  );
}
