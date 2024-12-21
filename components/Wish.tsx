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
        initial={{opacity:0, y:40}}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{once: true}}
      transition={{duration:0.5, delay:0.4, ease:"easeInOut"}}
      className="wish__title">Wish</motion.div>
      <p className="wish__text">
        Your presence is the greatest gift of all. However, if you wish to
        honour us with a gift instead, please do send it as cash to the account below.
      </p>

      <div className="pt-6 flex flex-col w-full gap-4 items-center">
      <p className="w-[90%] lg:w-[50%]"><span className="pr-2 inline-block"><img className="w-[1em]" src="/icons/bank.svg" alt="bank" /></span><strong>Bank Name:</strong> GT Bank </p>
      <p className="w-[90%] lg:w-[50%]"><span className="pr-2 inline-block"><img className="w-[1em]" src="/icons/num.svg" alt="bank" /></span><strong>Account Number:</strong> 0426018947 </p>
      <p className="w-[90%] lg:w-[50%]"><span className="pr-2 inline-block"><img className="w-[1em]" src="/icons/account.svg" alt="bank" /></span><strong>Account Name:</strong> Ikeagwuonu Onyekwere </p>

      </div>
    </div>
  );
};

export default Wish;
