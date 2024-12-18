"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// // import Swiper core and required modules
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { story } from "@/constant";

// // Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useIsMobile } from "@/hooks/customHooks";
import { formatparagraph } from "@/script";
// import Clientscript from "./script/Clientscript";

interface storyProp {
  isActive: boolean;
}

interface storyItemProp {
  id: number;
  title: string;
  author: string;
  content: string;
  content2: { title: string; content: string } | null;
  src: string;
  isActive: boolean;
  isMobile: boolean;
}

const StoryItem: React.FC<storyItemProp> = ({
  id,
  title,
  author,
  content,
  content2,
  src,
  isActive,
  isMobile,
}) => {
  const [readmore, setReadmore] = useState(false);

  const readRef = useRef<HTMLDivElement>(null);

  const readHandler = () => {
    setReadmore((prev) => !prev);
  };
  const scrollUpHandler = () => {
    readRef.current?.scrollBy({ top: -60, behavior: "smooth" });
  };
  const scrollDownHandler = () => {
    readRef.current?.scrollBy({ top: 60, behavior: "smooth" });
  };
  return (
    <div className="flex flex-col h-full items-center font-[jost] w-full ">
      <motion.p
        animate={{
          opacity: isActive ? 1 : 0,
          y: isActive ? 0 : 40,
        }}
        transition={{ duration: 0.3, delay: 0.6, ease: "easeInOut" }}
        className="storyitem__title font-bold text-[1.5em] lg:text-[1.5em] w-[80%]"
      >
        {title}
      </motion.p>

      <motion.div
        animate={{
          opacity: isActive ? 1 : 0,
          // y: isActive? 0: 40
        }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
        className="lg:px-[10%] w-[80%] relative lg:w-full flex flex-col lg:flex-row lg:gap-4 lg:items-center "
      >
        <div className="storyitem__pic w-[100%] lg:w-[50%] mt-[1em] overflow-hidden rounded-[16px]">
          <img className="w-full" src={src} alt="story_pic" />
        </div>
        <div
          ref={readRef}
          className="storyitem__content flex flex-col h-[12em] md:h-[8em] lg:h-[12em] w-[100%] mt-[1em] overflow-auto"
        >
          <i className="font-bold text-[orange]">{`${author} -`}</i>
          {(
            <>
              {" "}
              <p className="pt-[1em] w-[100%] paragraph">
                {content}
                {/* {isMobile
                  ? content.length > 150
                    ? `${content.slice(0, 150)}...`
                    : content
                  : content.length > 350
                  ? `${content.slice(0, 350)}...`
                  : content} */}
              </p>
              <div className="pt-[1em] w-[100%]">
                <h1 className="font-bold text-[orange]">{content2?.title}</h1>
                <p>{content2?.content}</p>
              </div>
              {/* {((isMobile && content.length > 150) || content.length > 350) && (
                <span>
                  <button
                    onClick={readHandler}
                    className="text-blue-600 font-bold"
                  >
                    read more
                  </button>
                </span>
              )} */}
            </>
          )}

          {/* { (
            <>
              {" "}
              <p className="pt-[1em] w-[100%]">{content}</p>
              <div className="pt-[1em] w-[100%]">
                <h1 className="font-bold text-[orange]">{content2?.title}</h1>
                <p>{content2?.content}</p>
              </div>
              {
                <span>
                  <button
                    onClick={readHandler}
                    className="text-blue-600 font-bold"
                  >
                    see less
                  </button>
                </span>
              }
            </>
          )} */}
        </div>
        {((isMobile && content.length > 150) || content.length > 350) &&  (
          <>
            <div className="absolute flex justify-center items-center rotate-180 w-[4em] h-[4em] bottom-[16%] left-[calc(100%-2em)] lg:bottom-[40%] lg:left-[calc(100%-8em)]">
              <button onClick={scrollUpHandler} className="w-[3em]">
                <img src="/icons/arrowdown.svg" alt="arrow_down" />
              </button>
            </div>
            <div className="absolute flex justify-center items-center w-[4em] h-[4em] bottom-[6%] left-[calc(100%-2em)] lg:bottom-[15%] lg:left-[calc(100%-8em)]">
              <button onClick={scrollDownHandler} className="w-[3em]">
                <img src="/icons/arrowdown.svg" alt="arrow_down" />
              </button>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

const Story: React.FC<storyProp> = ({ isActive }) => {
  const isMobile = useIsMobile();
  return (
    <div className="story__container">
      <motion.p
        animate={{
          opacity: isActive ? 1 : 0,
          y: isActive ? 0 : 40,
        }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
        className="story__title"
      >
        our story
      </motion.p>
      <div className="flex-grow w-full overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          // grabCursor={true}
          spaceBetween={50}
          slidesPerView={1}
          speed={800}
          slideToClickedSlide={true}
          navigation
          // pagination={{ clickable: true }}
          className="w-full h-full"
        >
          {story.map((item, index) => (
            <SwiperSlide className="h-full" key={index}>
              <StoryItem
                id={item.id}
                title={item.title}
                author={item.author}
                src={item.src}
                content={item.content}
                content2={item.content2}
                isActive={isActive}
                isMobile={isMobile}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <div className="page__end"></div> */}
    </div>
  );
};

export default Story;
