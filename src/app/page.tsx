// import Image from "next/image";
import SideBar from "./components/Nav/SideBar";
import Topnav from "./components/Nav/Topnav";

export default function Home() {
  return (
    <main className="">
      <SideBar />
      <div className="ml-20">
        <Topnav />
      </div>
    </main>
  );
}
