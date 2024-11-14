import Image from "next/image";
import React from "react";

const photoPage1 = [
  { className: "pic1", src: "/images/albums/photo1.jpg", alt: "photo1" },
  { className: "pic2", src: "/images/albums/photo2.jpg", alt: "photo2" },
  { className: "pic3", src: "/images/albums/photo3.jpg", alt: "photo3" },
];

interface photoitemProps {
  className: string;
  src: string;
  alt: string;
}

const PhotoItem: React.FC<photoitemProps> = ({ className, src, alt }) => {
  return (
    <div className={`photo__pics ${className}`}>
      <Image
        className="object-contain"
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
    </div>
  );
};

export default Photo;
