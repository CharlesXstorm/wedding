import { useStore } from "@/store";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

interface wishProp{
  isActive: boolean;
}

const Wish: React.FC<wishProp> = ({isActive}) => {
  // const{setNavChange} = useStore()

useEffect(()=>{
  // setNavChange(isActive)
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
        honour us with a gift instead, please do send it as cash to the account below.
      </p>

      <div className="pt-6 wish__text items-center">
      <p><span className="pr-2 inline-block"><img className="w-[2em]" src="/icons/bank.svg" alt="bank" /></span><strong>Bank Name:</strong> GT Bank </p>
      <p><span className="pr-2 inline-block"><img className="w-[2em]" src="/icons/num.svg" alt="bank" /></span><strong>Account Number:</strong> 0426018947 </p>
      <p><span className="pr-2 inline-block"><img className="w-[2em]" src="/icons/account.svg" alt="bank" /></span><strong>Account Name:</strong> Ikeagwuonu Onyekwere Clement </p>

      </div>
    </div>
  );
};

export default Wish;
