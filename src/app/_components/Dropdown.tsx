"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Genre = "Sort by" | "Indy" | "Adventure";

export default function Dropdown() {
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);
  const [sortedBy, setSortedBy] = useState<Genre>("Sort by");
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (event: { target: any }) => {
    // @ts-ignore //
    if (wrapperRef.current && !wrapperRef?.current?.contains(event.target)) {
      setOpenDropDown(false);
    }
  };

  return (
    <div ref={wrapperRef}>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="w-36 justify-end text-white focus:ring-4 focus:outline-none rounded-full border-2 border-gray-500 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
        onClick={() => setOpenDropDown(!openDropDown)}
      >
        {sortedBy}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {openDropDown && (
        <div
          id="dropdown"
          className="absolute w-36 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {["Indy", "Adventure"].map((ele: string, index: number) => {
              return (
                <li key={index}>
                  <Link
                    href="#"
                    onClick={() => {
                      setOpenDropDown(false);
                      // @ts-ignore
                      setSortedBy(ele);
                    }}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {ele}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
