import React from "react";
import Banner from "./Banner";

type GameDetailsType = {
  name: string;
  details: string;
  release_date: string;
  price: number;
};
const gameDetails: GameDetailsType[] = [
  {
    name: "Valorant",
    details:
      "Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games, for Windows. Teased under the codename Project A in October 2019, the game began a closed beta period with limited access on April 7, 2020, followed by a release on June 2, 2020.",
    release_date: "30th Dec",
    price: 40,
  },
  {
    name: "League of Legends",
    details:
      "League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements. Two teams of powerful champions, each with a unique design and playstyle, battle head-to-head across multiple battlefields and game modes.",
    release_date: "27th Oct",
    price: 0,
  },
  {
    name: "Baldur's Gate 3",
    details:
      "Baldur's Gate 3 is a role-playing video game that is the sequel to Baldur's Gate II: Shadows of Amn and is based on the Dungeons & Dragons 5th edition ruleset. Developed by Larian Studios, it offers a deep and immersive RPG experience with a rich narrative and strategic gameplay.",
    release_date: "6th Oct",
    price: 60,
  },
];

export default function GamePortfolio() {
  return (
    <div className="flex flex-col gap-16">
      <Banner url={"/Image/1307850.jpg"}>
        <div className="relative left-0 xl:left-1/2">
          <Content data={gameDetails[0]} />
        </div>
      </Banner>
      <Banner url={"/Image/1335459.jpeg"}>
        <div className="relative left-0 xl:left-1/3">
          <Content data={gameDetails[1]} />
        </div>
      </Banner>
      <Banner url={"/Image/bg3.jpg"}>
        <div className="relative left-0">
          <Content data={gameDetails[2]} />
        </div>
      </Banner>
    </div>
  );
}

interface ContentProps {
  data: GameDetailsType;
}

const Content: React.FC<ContentProps> = ({ data }) => {
  return (
    <div className="absolute fw-full top-0 mt-8 text-left ml-4 lg:ml-32 md:mr-4 mr-0 mb-4 my-0 md:my-24">
      <div className="relative w-full md:w-1/2 lg:w-2/6 xl:w-2/12 pr-4 flex flex-col gap-2 mb-4 xl:mb-16">
        <h1 className="font-aoboshi text-2xl md:text-5xl">{data.name}</h1>
        <div className="bg-gray-800 flex justify-end items-center">
          <h1 className="text-sm px-4">REALASE DATE : {data.release_date}</h1>
        </div>
      </div>
      <p className="w-full text-sm md:text-lg lg:w-4/6 xl:w-5/12 mb-4 xl:mb-8">
        {data.details}
      </p>
      <button className="text-white text-sm md:text-lg bg-buttonMain px-8 py-2 shadow-md rounded-full font-bold hover:shadow-xl active:scale-90 transition duration-100 cursor-pointer">
        Play Now
      </button>
      <p className="text-sm md:text-lg lg:my-4 mt-2">
        {data.price
          ? "Buy now for $" + data.price + " " + "only"
          : "Play for free"}
      </p>
    </div>
  );
};
