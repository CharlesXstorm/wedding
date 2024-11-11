"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useStore } from "@/store";

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
      <AnimatePresence mode="wait">
        {showText && (
          <motion.p
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
          <motion.div className="home__text__para">
            <motion.p
              variants={title2Variants}
              initial="hidden"
              animate="visible"
              className="home__text__p1"
            >
              save the date.
            </motion.p>
            <motion.p
              variants={title3Variants}
              initial="hidden"
              animate="visible"
              className="home__text__p2"
            >
              040125
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomeText;
