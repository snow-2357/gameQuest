import Image from "next/image";
import React from "react";

type SideBarProps = {
  popUp: boolean;
  handlePopUp: () => void;
};

type IconType = {
  title: string;
  icon: string;
};

const SideBar: React.FC<SideBarProps> = ({ popUp, handlePopUp }) => {
  const icons: IconType[] = [
    { title: "Home", icon: "akar-icons_home" },
    { title: "Messahes", icon: "basil_envelope-outline" },
    { title: "Game Store", icon: "ri_store-2-line" },
    { title: "Payments", icon: "fluent_payment-32-regular" },
    { title: "App Store", icon: "uiw_appstore-o" },
    { title: "Leaderboard", icon: "teenyicons_trophy-outline" },
    { title: "Settings", icon: "solar_settings-outline" },
    { title: "Logout", icon: "material-symbols_logout-rounded" },
  ];

  return (
    <div className="sticky top-0 z-50 ">
      {/* sliding nav */}
      <div
        className={`fixed h-[120vh] z-50 bg-gray-500 w-64 top-[-40px] ease-in-out p-0 sm:hidden ${
          !popUp ? "  left-[-500px]" : "left-0"
        } `}
      >
        <div className="relative flex justify-between pt-20 pb-4">
          <h1 className="font-pressStart text-xl px-6">GameQuest</h1>
          <button
            onClick={handlePopUp}
            className="absolute right-2 flex flex-col gap-2 font-pressStart"
          >
            x
          </button>
        </div>

        {icons.slice(0, 6).map((icon: IconType, index: number) => {
          return (
            <div
              className="flex gap-4 p-6 hover:bg-gray-600 cursor-pointer"
              key={index}
            >
              <Icon src={icon.icon} />
              <h1>{icon.title}</h1>
            </div>
          );
        })}
        <hr className="px-0 my-16 bg-gray-500 border-1 dark:bg-gray-700 rounded-full" />

        {icons.slice(6, icons.length).map((icon: IconType, index) => {
          return (
            <div
              className="flex gap-4 p-4 py-6 hover:bg-gray-600 cursor-pointer"
              key={index}
            >
              <Icon src={icon.icon} />
              <h1>{icon.title}</h1>
            </div>
          );
        })}
      </div>
      <div
        id="sidebar-mini"
        className="fixed hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform  top-0 start-0 bottom-0 z-[60] w-24 border-r-2 border-gray-500 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0"
      >
        <div className="my-4 flex flex-col justify-center items-center gap-y-2 py-4">
          <div className="mb-4">
            <h1 className="font-pressStart text-3xl">GQ</h1>
          </div>

          {icons.slice(0, 6).map((icon: IconType, index) => {
            return (
              <div className="relative group my-8" key={index}>
                <Icon src={icon.icon} />
                <span className="absolute w-24 flex justify-center top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                  {icon.title}
                </span>
              </div>
            );
          })}

          {icons.slice(6, icons.length).map((icon: IconType, index) => {
            return (
              <div className="relative group my-8" key={index}>
                <Icon src={icon.icon} />
                <span className="absolute w-24 flex justify-center top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                  {icon.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;

interface IconProps {
  src: string;
}

export const Icon: React.FC<IconProps> = ({ src }) => {
  return (
    <Image src={`/icons/${src}.svg`} width={24} height={24} alt="side icons" />
  );
};
