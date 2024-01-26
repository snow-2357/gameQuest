import Link from "next/link";
import React from "react";
import { LuFacebook, LuInstagram, LuTwitter } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="mt-8 ml-2 lg:ml-28 md:mr-4 mr-0">
      <div className="">
        <ul className="flex flex-wrap gap-8 text-xl justify-center items-center   font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="#" className="hover:underline me-4 md:me-6">
              Privacy Notice
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline me-4 md:me-6">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline me-4 md:me-6">
              Cookie Policy
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Company Information
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Cookie Perferences
            </Link>
          </li>
        </ul>
      </div>
      <hr className="px-0 my-4 bg-gray-500 border-1 dark:bg-gray-700 rounded-full" />
      <div className="flex flex-col mb-4 items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Copyright © GameQuest, Inc. All rights reserved
        </span>
        <div className="flex m-2 sm:justify-center gap-2">
          <Link href="#" className="border-2 border-gray-500 rounded-lg p-1">
            <LuTwitter size={24} />
            <span className="sr-only">Twitter page</span>
          </Link>
          <Link href="#" className="border-2 border-gray-500 rounded-lg p-1">
            <LuFacebook size={24} />
            <span className="sr-only">Facebook page</span>
          </Link>
          <Link href="#" className="border-2 border-gray-500 rounded-lg p-1">
            <LuInstagram size={24} />
            <span className="sr-only">Instagram page</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
