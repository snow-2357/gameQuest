import Banner from "./_components/Banner";
import GameCards from "./_components/Card/GameCards";
import GamePortfolio from "./_components/GamePortfolio";
import Hero from "./_components/Hero";
import NavBar from "./_components/Nav/NavBar";

export default function Home() {
  return (
    <main className="">
      {/* <h1 className="bold text-5xl font-pressStart">Evolution</h1> */}
      {/* game cards */}
      <Hero />
      <GameCards />
      <GamePortfolio />
    </main>
  );
}
