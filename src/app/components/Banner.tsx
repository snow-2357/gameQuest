import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[600px] lg:h-[600px] xl:h-[700px] overflow-x-hidden">
      <Image
        className=""
        alt="banner"
        src="/Image/709967.png"
        layout="fill"
        objectFit="cover"
      />
      <div></div>
      <h1 className="absolute font-heroFont text-5xl mt-4 ml-2 lg:ml-28 md:mr-4 mr-0">
        daysgone
      </h1>
      <div className="absolute w-full bottom-0 text-left ml-2 lg:ml-28 md:mr-4 mr-0">
        <button className="text-white bg-yellow-500 px-10 py-4 shadow-md rounded-full font-bold hover:shadow-xl active:scale-90 transition duration-100 cursor-pointer">
          Try For Free
        </button>
        <p className="">Buy now for $40 only</p>
        <p>40 of your friends are playing</p>
      </div>
    </div>
  );
}
