import React from "react";
import Image from "next/image";


const Images = () => {
  const images = [
    {
      src: "/img.png",
      rotate: "rotate-3",
    },

    {
      src: "/img1.png",
      rotate: "-rotate-3",
    },

    {
      src: "/img2.png",
      rotate: "rotate-3",
    },
  ];
  return (
    <div className=" mt-20 flex justify-between items-center gap-10 relative overflow-hidden h-96">
      {images.map(({ src, rotate }, index) => {
        return (
          <div
            className={`aspect-4  w-72 h-80 rounded-lg relative ${rotate}`}
            key={index}
          >
            <Image
              src={src}
              fill={true}
              alt=""
              className="rounded-lg object-cover object-center hover:scale-110 transition-all min-w-full min-h-full "
            />
          </div>
        );
      })}
    </div>
  );
};

export default Images;
