import profileImg from "../../assets/images/2.jpg";
import logoImg from "../../assets/images/app-logo.png";

import { IoMdNotifications, IoMdSettings } from "react-icons/io";
import { MdOutlineLanguage } from "react-icons/md";

export default function TopBar() {
  return (
    <>
      <div className="w-full flex-row justify-between fixed bg-slate-200 top-0 h-20 z-50 ">
        <div className="h-full px-5 flex justify-between items-center">
          <div className="left flex items-center ">
            <img
              className="w-12 h-12 mr-4 rounded-full cursor-pointer border-2 border-gray-100 "
              src={profileImg}
              alt="profiles images"
            />
            <div className="container-icons relative curser-pointer mr-2 text-gray-700 text-lg">
              <IoMdNotifications className="text-2xl cursor-pointer hover:text-green-600" />
              <span className="topIconBadge"> 2</span>
            </div>
            <div className="container-icons container-icons relative curser-pointer mr-2 text-gray-700 text-lg">
              <MdOutlineLanguage className="text-2xl cursor-pointer hover:text-green-600 " />
              <span className="topIconBadge"> 2</span>
            </div>
            <div className="container-icons container-icons relative curser-pointer mr-2 text-gray-700 text-lg">
              <IoMdSettings className="text-2xl cursor-pointer hover:text-green-600" />
            </div>
          </div>
          <div className="right">
            <span className="m-2 mt-5 cursor-pointer">
              <img src={logoImg} className="logo-img" alt="" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
