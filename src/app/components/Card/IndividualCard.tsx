import React from "react";
import Image from "next/image";

type CardType = {
  img: string;
  title: string;
};

const IndividualCard: React.FC<CardType> = ({ img, title }) => {
  return (
    <div className="cursor-pointer bg-yellow-200 text-black">
      <div className="relative h-80 w-80 hover:scale-105 transition duration-100 ease-out">
        <Image alt="expimage" className="rounded-xl" src={img} layout="fill" />
      </div>
      <h3 className="text-2xl mt-4">
        {title.split(" ")[0] + " "}
        {title.split(" ")[2]}
      </h3>
    </div>
  );
};
export default IndividualCard;
