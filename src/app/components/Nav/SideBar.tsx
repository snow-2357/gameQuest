import Image from "next/image";
import React from "react";

type SideBarProps = {
  popUp: boolean;
  handlePopUp: () => void;
};

const SideBar: React.FC<SideBarProps> = ({ popUp, handlePopUp }) => {
  const icons: string[] = [
    "akar-icons_home",
    "basil_envelope-outline",
    "ri_store-2-line",
    "fluent_payment-32-regular",
    "uiw_appstore-o",
    "teenyicons_trophy-outline",
    "solar_settings-outline",
    "material-symbols_logout-rounded",
  ];

  return (
    <div className="">
      {/* sliding nav */}
      <div
        className={`absolute z-50 bg-gray-900 w-48 top-[-42px] ease-in-out p-4 ${
          !popUp ? "  left-[-200px]" : "left-0"
        } `}
      >
        <button onClick={handlePopUp} className="flex flex-col gap-2 md:hidden">
          close
        </button>
        <h1>h1</h1>
        <h1>hellow</h1>
      </div>
      <div
        id="sidebar-mini"
        className=" hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform  fixed top-0 start-0 bottom-0 z-[60] w-24 border-r-2 border-gray-500 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0"
      >
        <div className=" my-8 flex flex-col justify-center items-center gap-y-2 py-4">
          <div className="mb-4">
            <h1 className="font-pressStart text-3xl">GQ</h1>
          </div>

          {icons.slice(0, 6).map((icon, index) => {
            return (
              <div className="my-4" key={index}>
                <Icon src={icon} />
              </div>
            );
          })}

          {icons.slice(6, icons.length).map((icon, index) => {
            return (
              <div className="my-4" key={index}>
                <Icon src={icon} />
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
