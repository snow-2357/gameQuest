import Banner from "./components/Banner";
import GameCards from "./components/Card/GameCards";
import NavBar from "./components/Nav/NavBar";

export default function Home() {
  return (
    <main className="">
      <NavBar />
      {/* <h1 className="bold text-5xl font-pressStart">Evolution</h1> */}
      {/* game cards */}
      <Banner url={"/Image/709967.png"}>
        <h1 className="absolute font-heroFont text-5xl w-full top-0 mt-8 text-left ml-8 lg:ml-32 md:mr-4 mr-0 mb-4">
          daysgone
        </h1>
        <div className="absolute w-full bottom-0 text-left ml-8 lg:ml-32 md:mr-4 mr-0 mb-4">
          <button className="text-white bg-yellow-500 px-8 py-4 shadow-md rounded-full font-bold hover:shadow-xl active:scale-90 transition duration-100 cursor-pointer">
            Try For Free
          </button>
          <p className="">Buy now for $40 only</p>
          <p className="mt-4 text-sm flex items-center gap-4">
            <div className="my-2 w-2 h-2 bg-green-500 drop-shadow-smshadow-lg rounded-full" />
            <span>40 of your friends are playing</span>
          </p>
        </div>
      </Banner>
      <GameCards />
      <Banner url={"/Image/1307850.jpg"} />
    </main>
  );
}
