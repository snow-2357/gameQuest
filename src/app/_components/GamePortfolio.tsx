import React from "react";
import Banner from "./Banner";

export default function GamePortfolio() {
  return (
    <div className="flex flex-col gap-16">
      <Banner url={"/Image/1307850.jpg"}>
        <div className="relative left-0 xl:left-1/2">
          <div className="absolute fw-full top-0 mt-8 text-left ml-4 lg:ml-32 md:mr-4 mr-0 mb-4 my-0 md:my-24">
            <div className="relative w-full md:w-1/2 lg:w-2/6 xl:w-2/12 pr-4 flex flex-col gap-2 mb-4 xl:mb-16">
              <h1 className="font-aoboshi text-2xl md:text-5xl">Valorant</h1>
              <div className="bg-gray-800 flex justify-end items-center">
                <h1 className="text-sm px-4">REALASE DATE : 30 TH DEC</h1>
              </div>
            </div>
            <p className="w-full text-sm md:text-lg lg:w-4/6 xl:w-5/12 mb-4 xl:mb-8">
              Valorant is a free-to-play first-person tactical hero shooter
              developed and published by Riot Games, for Windows. Teased under
              the codename Project A in October 2019, the game began a closed
              beta period with limited access on April 7, 2020, followed by a
              release on June 2, 2020.
            </p>
            <button className="text-white text-sm md:text-lg bg-buttonMain px-8 py-2 shadow-md rounded-full font-bold hover:shadow-xl active:scale-90 transition duration-100 cursor-pointer">
              Play Now
            </button>
            <p className="text-sm md:text-lg">Buy now for $40 only</p>
          </div>
        </div>
      </Banner>
      <Banner url={"/Image/1335459.jpeg"} />
      <Banner url={"/Image/bg3.jpg"} />
    </div>
  );
}
