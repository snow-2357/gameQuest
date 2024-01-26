import React, { ReactNode } from "react";
import Image from "next/image";

type BannerProps = {
  url: string;
  children?: ReactNode;
};

const Banner: React.FC<BannerProps> = ({ url, children }) => {
  return (
    <div className="relative h-[300px] sm:h-[600px] lg:h-[600px] xl:h-[700px] overflow-x-hidden">
      <Image
        className=""
        alt="banner"
        src={url}
        layout="fill"
        objectFit="cover"
      />
      {children}
      {/* <h1 className="absolute font-heroFont text-5xl w-full top-0 mt-8 text-left ml-8 lg:ml-32 md:mr-4 mr-0 mb-4">
        daysgone
      </h1>
      <div className="absolute w-full bottom-0 text-left ml-8 lg:ml-32 md:mr-4 mr-0 mb-4">
        <button className="text-white bg-yellow-500 px-8 py-4 shadow-md rounded-full font-bold hover:shadow-xl active:scale-90 transition duration-100 cursor-pointer">
          Try For Free
        </button>
        <p className="">Buy now for $40 only</p>
        <p className="mt-4 text-sm flex items-center gap-4">
          <div className="my-2 w-2 h-2 bg-green-500 drop-shadow-smshadow-lg rounded-full" />
          <span>40 of your friends are playing</span>
        </p>
      </div> */}
    </div>
  );
};

export default Banner;
