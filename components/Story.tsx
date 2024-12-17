import React from "react";
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

interface storyProp{
  isActive: boolean;
}

interface storyItemProp {
  id: number;
  title: string;
  content: string;
  src: string;
  isActive: boolean;
}

const StoryItem: React.FC<storyItemProp> = ({ id, title, content, src, isActive }) => {
  return (
    <div className="flex flex-col h-full items-center font-[jost] w-full justify-center">
      <motion.p
      animate={{
        opacity: isActive? 1: 0,
        y: isActive? 0: 40
      }}
      transition={{duration:0.3, delay:0.6, ease:"easeInOut"}}
      className="storyitem__title font-bold text-[2em] md:text-[2.5em] w-[80%]">
        {title}
      </motion.p>

      <motion.div 
      animate={{
        opacity: isActive? 1: 0,
        // y: isActive? 0: 40
      }}
      transition={{duration:0.5, delay:0.2, ease:"easeInOut"}}
      className="md:px-[10%] w-[80%] md:w-full flex flex-col md:flex-row md:gap-4 md:items-center ">
        <div className="storyitem__pic h-[24em] lg:h-[16em] xl:h-[24em] w-[100%] lg:w-[50%] mt-[1em]  overflow-hidden rounded-[16px]">
          <img className="w-full" src={src} alt="story_pic" />
        </div>
        <p className="pt-[1em] md:text-[1.5em] w-[100%] md:w-[100%]">
          {content}
        </p>
      </motion.div>
    </div>
  );
};

const Story: React.FC<storyProp> = ({isActive}) => {
  return (
    <div className="story__container">
      <motion.p
      animate={{
        opacity: isActive? 1: 0,
        y: isActive? 0: 40
      }}
      transition={{duration:0.5, delay:0.4, ease:"easeInOut"}}
      className="story__title">our story</motion.p>
      <div className="border-[2px] border-red-600 flex-grow w-full overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          grabCursor={true}
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
                src={item.src}
                content={item.content}
                isActive={isActive}
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
