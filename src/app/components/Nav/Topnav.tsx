import React from "react";
import { BsFillHandbagFill } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";

export default function Topnav() {
  return (
    <div className="m-4 flex flex-row justify-between items-center ">
      <div className="flex gap-1">
        <div className="p-1 ">Home</div>
        <hr className="px-4 my-4 rotate-90 bg-gray-200 border-1 dark:bg-gray-700" />
        <div className="p-1 ">Game</div>
        <hr className="px-4 my-4 rotate-90 bg-gray-200 border-1 dark:bg-gray-700" />
        <div className="p-1  ">Store</div>
        <hr className="px-4 my-4 rotate-90 bg-gray-200 border-1 dark:bg-gray-700" />
        <div className="p-1">Leaderboard</div>
      </div>
      <div className="flex gap-4 ">
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="px-4 py-2 ps-10 text-sm text-gray-100  border-2 bg-transparent rounded-full"
            placeholder="What are you looking for?"
          />
        </div>
        <div className="flex gap-1 m-1">
          <div className="border-2 p-1 rounded-full">
            <IoNotifications size={24} />
          </div>
          <hr className="px-4 my-4 rotate-90 bg-gray-200 border-1 dark:bg-gray-700" />
          <div className="border-2 p-1 rounded-full">
            <IoNotifications size={24} />
          </div>
          <hr className="px-4 my-4 rotate-90 bg-gray-200 border-1 dark:bg-gray-700" />

          <div className="border-2 p-1 rounded-full ">
            <IoNotifications size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
