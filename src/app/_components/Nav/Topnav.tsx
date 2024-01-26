import Link from "next/link";
import React from "react";
import { BsFillHandbagFill, BsPersonFill } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";

type TopnavType = {
  popUp: boolean;
  handlePopUp: () => void;
};

const Topnav: React.FC<TopnavType> = ({ popUp, handlePopUp }) => {
  return (
    <div className="m-2 mt-6 mb-4 flex flex-row justify-between items-center">
      <button
        onClick={handlePopUp}
        className="flex flex-col gap-2 mt-[-4px] md:hidden"
      >
        <hr className="px-4 bg-gray-200 border-2 dark:bg-gray-700 rounded-full" />
        <hr className="px-4 bg-gray-200 border-2 dark:bg-gray-700 rounded-full" />
        <hr className="px-4 bg-gray-200 border-2 dark:bg-gray-700 rounded-full" />
      </button>
      <div className="hidden md:flex gap-1">
        <Link href="/" className="p-1 cursor-pointer hover:underline">
          Home
        </Link>
        <hr className="px-4 my-4 rotate-90 bg-gray-200 border-1 dark:bg-gray-700" />
        <div className="p-1 cursor-pointer hover:underline">Game Store</div>
        <hr className="px-4 my-4 rotate-90 bg-gray-200 border-1 dark:bg-gray-700" />
        <div className="p-1 cursor-pointer hover:underline">Leaderboard</div>
      </div>
      <div className="flex gap-1 md:gap-4 justify-end">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-100 dark:text-gray-100"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="px-4 py-2 ps-12 text-sm text-gray-100 border-2 bg-transparent rounded-full"
            placeholder="What are you looking for?"
          />
        </div>
        <div className="flex">
          <div className="hidden sm:flex ">
            <div className="border-2 p-1 my-1 rounded-full ">
              <IoNotifications size={24} />
            </div>
            <hr className="px-4 my-5 rotate-90 bg-gray-200 border-1 dark:bg-gray-700" />
            <div className="border-2 p-1 my-1 rounded-full ">
              <BsFillHandbagFill size={22} />
            </div>

            <hr className="px-4 my-5 rotate-90 bg-gray-200 border-1 dark:bg-gray-700" />
          </div>
          <div className="flex my-1">
            <div className="border-2 p-1 rounded-full ">
              <BsPersonFill size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
