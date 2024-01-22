"use client";
import React, { useState } from "react";
import SideBar from "./SideBar";
import Topnav from "./Topnav";

export default function NavBar() {
  const [openPopUp, setOpenPopUp] = useState(false);
  console.log(openPopUp);
  return (
    <div className="relative">
      <SideBar
        popUp={openPopUp}
        handlePopUp={() => {
          setOpenPopUp((prev) => !prev);
        }}
      />
      <div className="ml-2 lg:ml-28 md:mr-4 mr-0">
        <Topnav
          popUp={openPopUp}
          handlePopUp={() => {
            setOpenPopUp((prev) => !prev);
          }}
        />
      </div>
    </div>
  );
}
