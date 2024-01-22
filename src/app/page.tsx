// import Image from "next/image";
import SideBar from "./components/Nav/SideBar";
import Topnav from "./components/Nav/Topnav";

export default function Home() {
  return (
    <main className="">
      <SideBar />
      <div className="ml-4 lg:ml-24 md:mr-4 mr-0">
        <Topnav />
      </div>
      <h1 className="bold text-5xl font-heroFont">Evolution</h1>
    </main>
  );
}
