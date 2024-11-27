import { useStore } from "@/store";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

interface wishProp{
  isActive: boolean;
}

const Wish: React.FC<wishProp> = ({isActive}) => {
  const{setNavChange} = useStore()

useEffect(()=>{
  setNavChange(isActive)
},[isActive])

  return (
    <div className="wish__contain">
      <motion.div 
      animate={{
        opacity: isActive? 1: 0,
        y: isActive? 0: 40
      }}
      transition={{duration:0.5, delay:0.4, ease:"easeInOut"}}
      className="wish__title">Wish</motion.div>
      <p className="wish__text">
        Your presence is the greatest gift of all. However, if you wish to
        honour us with a gift instead, please choose from the following options
        below.
      </p>
    </div>
  );
};

export default Wish;
