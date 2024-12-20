"use client";

import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { photoPage } from "@/constant";
import Image from "next/image";
import { LeftSVG } from "@/svg";
import { AnimatePresence, motion } from "framer-motion";
import { useStore } from "@/store";

// const albumVariant = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1, type: "easeInOut" },
//   },
// };

// const albumChildVariant = {
//   hidden: { opacity: 0, x: 50, y: -50 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     y: 0,
//     transition: { duration: 0.5, type: "easeInOut" },
//   },
// };

interface photoProp {
  isActive: boolean;
}

interface photoitemProps {
  className: string;
  classNameInit: string;
  page?: number;
  src: string;
  alt: string;
  isActive:boolean;
}

interface btnProps {
  page?: number;
  setPage: Dispatch<SetStateAction<number>>;
  timeoutID: (() => void) | undefined;
  setTimeoutID: Dispatch<SetStateAction<(() => void) | undefined>>;
}

/////////////clickFunction/////////////////
const clickHandler = (
  btnType: string,
  setPage: any,
  navClick: Boolean,
  setNavClick: any,
  timeoutID: any,
  setTimeoutID: any
) => {
  switch (btnType) {
    case "next":
      setNavClick(true);

      const newTimeoutID = setTimeout(() => {
        setNavClick(false);
        setPage((prevPage: number) => {
          if (prevPage + 1 < 3) {
            return prevPage + 1;
          } else {
            return 1;
          }
        });
      }, 500);

      setTimeoutID(newTimeoutID);

      return () => clearTimeout(newTimeoutID);
    case "prev":
      if (timeoutID) {
        clearTimeout(timeoutID);
        setTimeoutID(null);
      }

      setNavClick(true);

      const newTimeoutID2 = setTimeout(() => {
        setNavClick(false);
        setPage((prevPage: number) => {
          if (prevPage - 1 > 0) {
            return prevPage - 1;
          } else {
            return 2;
          }
        });
      }, 500);

      setTimeoutID(newTimeoutID2);

      return () => clearTimeout(newTimeoutID2);

    default:
      return;
  }
};

///////////////////////button///////////////
const Next: React.FC<btnProps> = ({
  page,
  setPage,
  timeoutID,
  setTimeoutID,
}) => {
  const { navClick, setNavClick } = useStore();
  return (
    <button
      onClick={() =>
        clickHandler(
          "next",
          setPage,
          navClick,
          setNavClick,
          timeoutID,
          setTimeoutID
        )
      }
      className="scale-x-[-1] pointer-events-auto"
    >
      <LeftSVG />
    </button>
  );
};

const Prev: React.FC<btnProps> = ({
  page,
  setPage,
  timeoutID,
  setTimeoutID,
}) => {
  const { navClick, setNavClick } = useStore();
  return (
    <button
      onClick={() =>
        clickHandler(
          "prev",
          setPage,
          navClick,
          setNavClick,
          timeoutID,
          setTimeoutID
        )
      }
      className={"pointer-events-auto"}
    >
      <LeftSVG />
    </button>
  );
};

///////////////////picItem///////////////////////
const PhotoItem: React.FC<photoitemProps> = ({
  className,
  classNameInit,
  page,
  src,
  alt,
  isActive
}) => {
  const { navClick } = useStore();
  const [isClicked, setIsClicked] = useState(false);
  const [position, setPosition] = useState(classNameInit);

  const picsClick = () => {
    setIsClicked((prev) => {
      return !prev;
    });
  };

  useEffect(() => {
    if (navClick) {
      setPosition(classNameInit);
    }
  }, [navClick]);

  useEffect(() => {
    if (position === classNameInit) {
      setPosition(className);
    }
  }, [page]);

  return (
    <motion.div
    // animate={{
    //   opacity: isActive? 1: 0,
    //   scale: isActive? 1: 0
    // }}
    // transition={{opacity:{duration:0.5, ease:"easeInOut"}}}
      onClick={picsClick}
      className={[
        `photo__pics justify-center`,
        `${!isClicked && `${position} w-[10em] h-[10em]`}`,
        `${
          isClicked && " w-[100%] h-[100vh] z-[25] justify-center items-center"
        }`,
        // `${isClicked && " w-[30em] h-[30em] z-[25]"}`,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        top: isClicked ? "0px" : "",
        left: isClicked ? "0px" : "",
        paddingTop: isClicked ? "2em" : "",
        // paddingBottom: isClicked ? "2em" : "",
      }}
    >
      <div
        className="flex"
        style={{
          height: isClicked ? "70%" : "100%",
          // paddingBottom: isClicked ? "2em" : "",
        }}
      >
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-black opacity-80 "></div>
        <img
          className="photo__image object-contain z-[2]"
          src={src}
          alt={alt}
        />
      </div>
    </motion.div>
  );
};

//////////////////////photoPage//////////////////////
const Photo: React.FC<photoProp> = ({isActive}) => {
  const [page, setPage] = useState(1);
  const [timeoutID, setTimeoutID] = useState<() => void>();

  //   useEffect(()=>{
  //     if(timeoutID){
  //         clearTimeout(timeoutID)
  //     }
  //   },[])
  return (
    <div className="photo__cont pointer-events-none">
      <motion.p 
        initial={{opacity:0, y:40}}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{once: true}}
      transition={{duration:0.5, delay:0.4, ease:"easeInOut"}}
      className="photo__title">Photo Album</motion.p>

      <div className="photo__page1">
        {page === 1 && (
          <div key="1">
            {photoPage[0].map((item, index) => (
              <PhotoItem
                key={index}
                className={item.className}
                classNameInit={item.classNameInit}
                page={page}
                src={item.src}
                alt={item.alt}
                isActive={isActive}
              />
            ))}
          </div>
        )}

        {page === 2 && (
          <div key="2">
            {photoPage[1].map((item, index) => (
              <PhotoItem
                key={index}
                className={item.className}
                classNameInit={item.classNameInit}
                src={item.src}
                alt={item.alt}
                isActive={isActive}
              />
            ))}
          </div>
        )}
      </div>

      <div className="navbtn">
        <Prev
          setPage={setPage}
          timeoutID={timeoutID}
          setTimeoutID={setTimeoutID}
        />
        <Next
          setPage={setPage}
          timeoutID={timeoutID}
          setTimeoutID={setTimeoutID}
        />
      </div>
    </div>
  );
};

export default Photo;
