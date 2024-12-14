"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useStore } from "@/store";
import DateButton from "./ui/DateButton";

const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, type: "easeInOut" },
  },
};

const title2Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.4, type: "easeInOut" },
  },
};
const title3Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.2,
    transition: { duration: 3, delay: 0.2, type: "easeInOut" },
  },
};
const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HomeText = () => {
  const { imageLoaded } = useStore();
  const [showText, setShowText] = useState(false);
  const [timeoutID, setTimeoutID] = useState(null);

  useEffect(() => {
    if (timeoutID) {
      setTimeoutID(null);
    }
    if (imageLoaded) {
      const newTimeout = setTimeout(() => {
        setShowText(true);
      }, 400);

      return () => clearTimeout(newTimeout);
    }
  }, [imageLoaded]);

  return (
    <div className="home__text">
      <AnimatePresence>
        {showText && (
          <motion.p
            key="1"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className={`home__text__title`}
          >
            <motion.span variants={childVariants} className="title">
              Clems
            </motion.span>{" "}
            <motion.span variants={childVariants} className="title">
              &
            </motion.span>{" "}
            <motion.span variants={childVariants} className="title">
              Perky
            </motion.span>
          </motion.p>
        )}

        {showText && (
          <motion.div key="2" className="lg:absolute w-full px-[6em] text-[0.9em] flex flex-col gap-2 justify-center items-center">
            <motion.div
              variants={title2Variants}
              initial="hidden"
              animate="visible"
              className="flex gap-2 items-center"
            >
              <span className="flex self-start"><img className="w-[2em]" src="/icons/location.svg" alt="location" /></span>
              <p>
                Our Lady Queen of Peace Parish, Housing Estate Fegge Onitsha By
                12PM
              </p>
            </motion.div>
            <motion.p
              variants={title2Variants}
              initial="hidden"
              animate="visible"
              className="flex gap-2 items-center"
            >
              <span className="flex self-start"><img className="w-[2em]" src="/icons/food.svg" alt="location" /></span>
              Reception @ Recreational Center Housing Estate Fegge Onitsha By 3
              PM
            </motion.p>
          </motion.div>
        )}

        {showText && (
          <motion.div key="3" className="home__text__para">
            <motion.div
              variants={title2Variants}
              initial="hidden"
              animate="visible"
              className="home__text__p1"
            >
              <DateButton />
            </motion.div>
            <motion.p
              variants={title3Variants}
              initial="hidden"
              animate="visible"
              className="home__text__p2"
            >
              04-JAN-25
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomeText;
