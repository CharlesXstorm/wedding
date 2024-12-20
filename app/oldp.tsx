"use client";

import HomeImage from "@/components/HomeImage";
import HomeText from "@/components/HomeText";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Photo from "@/components/Photo";
import Story from "@/components/Story";
import HomeBtn from "@/components/ui/HomeBtn";
import Scrollicon from "@/components/ui/Scrollicon";
import Wish from "@/components/Wish";
import { useStore } from "@/store";
import { useEffect, useRef } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

// // import Swiper core and required modules
import { Keyboard, Navigation, Pagination, Scrollbar } from "swiper/modules";

// // Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Home() {
  // const { setNavChange, setNavScrollChange } = useStore();
  const swiperRef = useRef<SwiperClass | null>();
  const mainRef = useRef(null);

  const handleSlide = (e: any) => {
    if (e.deltaY > 0) {
      swiperRef.current?.slideNext();
    } else {
      swiperRef.current?.slidePrev();
    }
  };

  // const trackElement = () => {
  //   const photoEl = document.querySelector("#photo");
  //   const homeEl = document.querySelector("#home_");
  //   const homeScroll = Math.ceil(homeEl?.getBoundingClientRect().top ?? 0);
  //   const photoScroll = Math.ceil(photoEl?.getBoundingClientRect().top ?? 0);
  //   homeScroll < -50 ? setNavScrollChange(true) : setNavScrollChange(false);
  //   photoScroll < -500 ? setNavChange(true) : setNavChange(false);
  // };

  useEffect(() => {
    window.addEventListener("wheel", handleSlide);
    // window.addEventListener("scroll", trackElement);

    // if (mainRef.current) {
    //   const scroll = new LocomotiveScroll({
    //     el: document.querySelector(`[data-scroll-container]`),
    //     smooth: true,
    //     multiplier: 0.2,
    //   } as ILocomotiveScrollOptions);
    // }

    return () => removeEventListener("wheel", handleSlide);
  }, []);

  return (
    <main id="_main" ref={mainRef} data-scroll-container>
      {<Loader />}
      {/* <Nav swiper={swiperRef.current} />
      <HomeBtn swiper={swiperRef.current} /> */}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        direction="vertical"
        mousewheel={{ enabled: true, invert: false }}
        // mousewheelControl={{enabled:true}}
        // mousewheel: false,
        // slidesPerView: 1,
        keyboard={{
          enabled: true,
          // onlyInViewport: true,
        }}
        modules={[Navigation, Pagination, Scrollbar, Keyboard]}
        // grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        speed={800}
        // slideToClickedSlide={true}
        scrollbar={{ draggable: true }}
        // navigation
        className="w-full h-[100vh]"
      >
        <SwiperSlide
          id="home_"
          className="home pages h-[100vh]"
          data-scroll-section
        >
          <HomeImage />
          <HomeText />
          <Scrollicon />
        </SwiperSlide>

        <SwiperSlide id="story" className="story pages" data-scroll-section>
          {({isActive})=><Story isActive={isActive} />}
        </SwiperSlide>

        <SwiperSlide id="photo" className="photo pages">
        {({isActive})=><Photo isActive={isActive} />}
          
        </SwiperSlide>

        <SwiperSlide id="wish" className="wish pages">
        {({isActive})=><Wish isActive={isActive}/>}
          
        </SwiperSlide>
      </Swiper>
    </main>
    // <main id="_main" ref={mainRef} data-scroll-container>
    //   {<Loader />}
    //   <Nav />
    //   <HomeBtn />
    //   <div id="home_" className="home pages" data-scroll-section>
    //     <HomeImage />
    //     <HomeText />
    //     <Scrollicon />
    //   </div>

    //   <div id="story" className="story pages" data-scroll-section>
    //     <Story />
    //   </div>

    //   <div id="photo" className="photo pages">
    //     <Photo />
    //   </div>

    //   <div id="wish" className="wish pages">
    //     <Wish />
    //   </div>
    // </main>
  );
}
