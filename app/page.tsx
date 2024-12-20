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
import LocomotiveScroll, { ILocomotiveScrollOptions } from "locomotive-scroll";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

// // import Swiper core and required modules
import { Keyboard, Navigation, Pagination, Scrollbar } from "swiper/modules";

// // Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Home() {
  const { setNavChange, setNavScrollChange } = useStore();
  const [isActive, setIsActive] = useState({
    home_: true,
    story: true,
    photo: true,
    wish: true,
  });
  // const swiper = useSwiper()
  const mainRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const wishRef = useRef<HTMLDivElement>(null);

  const pageRef = [homeRef, storyRef, photoRef, wishRef];

  const handleSlide = (e: any) => {
    const limit = Math.floor(0.8 * window.innerHeight);
    const minLimit = Math.floor(0.2 * window.innerHeight);

    // console.log("limit",limit, "minLimit",minLimit)

    pageRef.forEach((ref) => {
      if (ref.current) {
        if (e.deltaY > 0) {
          //   // down
          if (
            ref?.current?.getBoundingClientRect()?.top > 0 &&
            ref?.current?.getBoundingClientRect()?.top < limit
          ) {
            window.scrollTo({
              top: ref.current.getBoundingClientRect().top + window.scrollY,
              behavior: "smooth",
            });

            // ////////////////////////
            // console.log(
            //   `${ref?.current?.id}`,
            //   ref.current?.getBoundingClientRect().top === 0,
            //   Math.floor(
            //     ref.current?.getBoundingClientRect().top + window.scrollY
            //   )
            // );
            // setIsActive((prev) => {
            //   return {
            //     ...prev,
            //     [`${ref?.current?.id}`]:
            //       Math.floor(
            //         ref?.current?.getBoundingClientRect().top ??
            //           0 + window.scrollY
            //       ) === window.innerHeight,
            //   };
            // });
            // ///////////////////////////////
          }
        } else {
          //  // UP
          if (
            ref?.current?.getBoundingClientRect()?.bottom > minLimit &&
            ref?.current?.getBoundingClientRect()?.bottom < limit
          ) {
            window.scrollTo({
              top: ref.current.getBoundingClientRect().top + window.scrollY,
              behavior: "smooth",
            });
          }
        }
        // ////////////////////////
        //         console.log(
        //           `${ref?.current?.id}`,
        //           ref.current?.getBoundingClientRect().top <= limit,
        //           limit
        //         );
        //         setIsActive((prev) => {
        //           return {
        //             ...prev,
        //             [`${ref?.current?.id}`]: ref.current?.getBoundingClientRect().top??0 <= limit,
        //           };
        //         });
        // ///////////////////////////////
      }
    });
  };

  const scrollHandler =()=>{
    if(homeRef.current){
      if(homeRef?.current?.getBoundingClientRect().top < -5){
        setNavScrollChange(true)
      }else{
        setNavScrollChange(false)
      }
    }

    if(wishRef.current){
      if(wishRef?.current?.getBoundingClientRect().top < 100){
        setNavChange(true)
      }else{
        setNavChange(false)
      }
    }

  }

  useEffect(() => {
    window.addEventListener("wheel", handleSlide);
    window.addEventListener("scroll",scrollHandler)

    return () => {
      removeEventListener("wheel", handleSlide);
      removeEventListener("scroll", scrollHandler);
    }
  }, []);

  return (
    <main
      id="_main"
      className="w-full overflow-hidden"
      ref={mainRef}
      data-scroll-container
    >
      {<Loader />}
      <Nav />
      <HomeBtn />
      <div
        id="home_"
        ref={homeRef}
        className="home pages h-[100vh]"
        data-scroll-section
      >
        <HomeImage />
        <HomeText />
        <Scrollicon />
      </div>

      <div
        ref={storyRef}
        id="story"
        className="story pages"
        data-scroll-section
      >
        <Story isActive={isActive["story"]} />
      </div>

      <div ref={photoRef} id="photo" className="photo pages">
        <Photo isActive={isActive["photo"]} />
      </div>

      <div ref={wishRef} id="wish" className="wish pages">
        <Wish isActive={isActive["wish"]} />
      </div>
    </main>
  );
}
