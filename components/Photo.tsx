import React from "react";
import { photoPage1 } from "@/constant";
import Image from "next/image";
import { LeftSVG } from "@/svg";

interface photoitemProps {
  className: string;
  src: string;
  alt: string;
}

const Next =()=>{

  return(
    <>

    </>
  )
}

const Prev =()=>{

  return(
    <button>
      <LeftSVG />
    </button>
  )
}

const PhotoItem: React.FC<photoitemProps> = ({ className, src, alt }) => {
  return (
    <div className={`photo__pics ${className}`}>
      <Image
        className="photo__image object-contain"
        src={src}
        width={120}
        height={120}
        alt={alt}
      />
    </div>
  );
};

const Photo = () => {
  return (
    <div className="photo__cont">
      <p className="photo__title">Photo Album</p>

      <div className="photo__page1">
        {photoPage1.map((item, index) => (
          <PhotoItem
            key={index}
            className={item.className}
            src={item.src}
            alt={item.alt}
          />
        ))}
      </div>

      <div className="navbtn">
      <Next />
      <Prev />
      </div>
    </div>
  );
};

export default Photo;
