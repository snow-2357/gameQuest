import Banner from "./components/Banner";
import GameCards from "./components/Card/GameCards";
import NavBar from "./components/Nav/NavBar";

export default function Home() {
  return (
    <main className="">
      <NavBar />
      {/* <h1 className="bold text-5xl font-pressStart">Evolution</h1> */}
      {/* game cards */}
      <Banner />
      <GameCards />
    </main>
  );
}
