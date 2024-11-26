import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// // import Swiper core and required modules
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { story } from "@/constant";

// // Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface storyItemProp {
  id: number;
  title: string;
  content: string;
  src: string;
}

const StoryItem: React.FC<storyItemProp> = ({ id, title, content, src }) => {
  return (
    <div className="flex flex-col items-center font-[jost] w-full justify-center">
      <p className="storyitem__title font-bold text-[2em] md:text-[2.5em] w-[80%]">
        {title}
      </p>

      <div className="md:px-[10%] w-[80%] md:w-full flex flex-col md:flex-row md:gap-4 md:items-center ">
        <div className="storyitem__pic h-[24em] lg:h-[16em] xl:h-[24em] w-[100%] lg:w-[50%] mt-[1em]  overflow-hidden rounded-[16px]">
          <img className="w-full" src={src} alt="story_pic" />
        </div>
        <p className="pt-[1em] md:text-[1.5em] w-[100%] md:w-[100%]">
          {content}
        </p>
      </div>
    </div>
  );
};

const Story = () => {
  return (
    <div className="story__container">
      <p className="story__title">our story</p>
      <div className="story__content">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          grabCursor={true}
          spaceBetween={50}
          slidesPerView={1}
          speed={800}
          slideToClickedSlide={true}
          navigation
          pagination={{ clickable: true }}
          className="h-full w-full"
        >
          {story.map((item, index) => (
            <SwiperSlide key={index}>
              <StoryItem
                id={item.id}
                title={item.title}
                src={item.src}
                content={item.content}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="page__end"></div>
    </div>
  );
};

export default Story;
