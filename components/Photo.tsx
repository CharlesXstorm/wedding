"use client";

import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { photoPage1, photoPage2 } from "@/constant";
import Image from "next/image";
import { LeftSVG } from "@/svg";
import { AnimatePresence, motion } from "framer-motion";

const albumVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, type: "easeInOut" },
  },
};

const albumChildVariant = {
  hidden: { opacity: 0, x: 50, y: -50 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.5, type: "easeInOut" },
  },
};

interface photoitemProps {
  className: string;
  page?: number;
  src: string;
  alt: string;
}

interface btnProps {
  page?: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const clickHandler = (btnType: string, setPage: any) => {
  switch (btnType) {
    case "next":
      setPage((prevPage: number) => {
        if (prevPage + 1 < 3) {
          return prevPage + 1;
        } else {
          return 1;
        }
      });
      return;
    case "prev":
      setPage((prevPage: number) => {
        if (prevPage - 1 > 0) {
          return prevPage - 1;
        } else {
          return 2;
        }
      });
      return;
    default:
      return;
  }
};

const Next: React.FC<btnProps> = ({ page, setPage }) => {
  return (
    <button
      onClick={() => clickHandler("next", setPage)}
      className="scale-x-[-1] pointer-events-auto"
    >
      <LeftSVG />
    </button>
  );
};

const Prev: React.FC<btnProps> = ({ page, setPage }) => {
  return (
    <button
      onClick={() => clickHandler("prev", setPage)}
      className={"pointer-events-auto"}
    >
      <LeftSVG />
    </button>
  );
};

const PhotoItem: React.FC<photoitemProps> = ({ className, page, src, alt }) => {
  // const [imageWidth, setImageWidth] = useState<number>(0);
  // const [imageHeight, setImageHeight] = useState<number>(0);
  const [isClicked, setIsClicked] = useState(false);

  // const imageRef = useRef<HTMLDivElement>(null);

  const picsClick = () => {
    setIsClicked((prev)=>{
      return !prev
    })
  };

  // useEffect(() => {
  //   if (imageRef.current) {
  //     setImageWidth(imageRef.current.clientWidth);
  //     setImageHeight(imageRef.current.clientHeight);
  //   }
  // }, [page]);
  return (
    <motion.div
      onClick={picsClick}
      // ref={imageRef}
      variants={albumChildVariant}
      className={["photo__pics", `${!isClicked && `${className} w-[10em] h-[10em]`}`, `${isClicked && "w-[30em] h-[30em] z-[25]"}`]
        .filter(Boolean)
        .join(" ")}
      style={{
        top: isClicked ? `calc(50vh - 15em)` : "",
        left: isClicked ? `calc(50% - 15em)` : "",
        // top: isClicked ? `calc(50vh - ${imageHeight / 2}px)` : "",
        // left: isClicked ? `calc(50% - ${imageWidth / 2}px)` : "",
      }}
    >
      <Image
        className="photo__image object-contain"
        src={src}
        width={120}
        height={120}
        alt={alt}
      />
    </motion.div>
  );
};

const Photo = () => {
  const [page, setPage] = useState(1);
  return (
    <div className="photo__cont pointer-events-none">
      <p className="photo__title">Photo Album</p>

      <div className="photo__page1">
        <AnimatePresence mode="wait">
          {page === 1 && (
            <motion.div
              variants={albumVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
              key="1"
            >
              {photoPage1.map((item, index) => (
                <PhotoItem
                  key={index}
                  className={item.className}
                  page={page}
                  src={item.src}
                  alt={item.alt}
                />
              ))}
            </motion.div>
          )}

          {page === 2 && (
            <motion.div
              variants={albumVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
              key="2"
            >
              {photoPage2.map((item, index) => (
                <PhotoItem
                  key={index}
                  className={item.className}
                  src={item.src}
                  alt={item.alt}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="navbtn">
        <Prev setPage={setPage} />
        <Next setPage={setPage} />
      </div>
    </div>
  );
};

export default Photo;
