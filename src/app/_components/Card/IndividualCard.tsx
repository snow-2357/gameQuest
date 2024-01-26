import React from "react";
import Image from "next/image";

type CardType = {
  img: string;
  title: string;
  size?: "small" | "normal";
};

const IndividualCard: React.FC<CardType> = ({
  img,
  title,
  size = "normal",
}) => {
  return (
    <div
      className={`${
        size === "small" && "h-72 w-72"
      } relative cursor-pointer rounded-lg bg-white p-4 text-black`}
    >
      <div className="h-80 w-80 transition duration-100 ease-out">
        <Image alt="expimage" className="rounded-xl" src={img} layout="fill" />
      </div>
      <div className="absolute top-0 flex gap-2 mt-2 bg-gray-950 rounded-full px-2 py-1 text-gray-200 font-semibold">
        <div className="my-2 w-2 h-2 bg-green-500 drop-shadow-smshadow-lg rounded-full" />
        1200 online
      </div>
      <div className="absolute bottom-0">
        <h3 className="text-3xl mt-4 font-aoboshi font-bold capitalize">
          {title.split(" ")[0] + " "}
          {title.split(" ")[2]}
        </h3>
        <Rating />
        <div className="text-red-500 flex flex-row  items-center font-bold">
          10k+ Players
          <div className="m-2 w-2 h-2 bg-red-500 rounded-full" />
          Action
          <div className="m-2 w-2 h-2 bg-red-500 rounded-full" />
          Advanture
        </div>
        <h1 className="font-semibold">Realeased 10th August 2022</h1>

        <div className="flex flex-row gap-4 items-center my-2">
          <h1 className="font-bold text-2xl">$40</h1>
          <button
            type="button"
            className="text-white bg-yellow-500 hover:bg-yellow-600 rounded-full py-2 w-full active:scale-90"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default IndividualCard;

function Rating() {
  return (
    <div className="flex items-center">
      <svg
        className="w-4 h-4 text-yellow-300 ms-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className="w-4 h-4 text-yellow-300 ms-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className="w-4 h-4 text-yellow-300 ms-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className="w-4 h-4 text-yellow-300 ms-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    </div>
  );
}
