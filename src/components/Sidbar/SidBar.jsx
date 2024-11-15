import {
  FaHome,
  FaChartLine,
  FaUsers,
  FaUser,
  FaShoppingBag,
} from "react-icons/fa";
import { IoCash } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoMdCash, IoIosMan } from "react-icons/io";
import { TbReportSearch } from "react-icons/tb";
import { MdEmail, MdReport } from "react-icons/md";
import { FaSquarePollVertical, FaMessage } from "react-icons/fa6";
import TopBar from "../TopBar/TopBar";

export default function SidBar() {
  return (
    <div className="sidbar flex bg-slate-200 sticky mt-20 right-0 ">

      <div className="sidBarWropper p-5 text-gray-900 divide-y-4 divide-lime-900">
        <div className="sidbarmenu mb-3">
          <h3 className="sidbarTitle ">داشبورد</h3>
          <ul className="sidebarList ">
            <Link to="/">
              <li className="sidebarListItem ">
                <FaHome className="sidebaricon" />
                خانه
              </li>
            </Link>
            <Link to="/analysis">
              <li className="sidebarListItem">
                <FaChartLine className="sidebaricon" />
                آنالیز
              </li>
            </Link>
            <li className="sidebarListItem">
              <IoMdCash className="sidebaricon" />
              فروش
            </li>
          </ul>
        </div>
        <div className="sidbarmenu">
          <h3 className="sidbarTitle">دسترسی سریع</h3>
          <ul className="sidebarList">
            <a to="/users">
              <li className="sidebarListItem">
                <FaUsers className="sidebaricon" />
                کاربران
              </li>
            </a>
            <a to="/newuser">
              <li className="sidebarListItem">
                <FaUser className="sidebaricon" />
                کاربران جدید
              </li>
            </a>

            <Link to="/products">
              <li className="sidebarListItem">
                <FaShoppingBag className="sidebaricon" />
                محصولات
              </li>
            </Link>
            <li className="sidebarListItem">
              <IoCash className="sidebaricon" />
              تراکنشات
            </li>
            <li className="sidebarListItem">
              <TbReportSearch className="sidebaricon" />
              گزارشات
            </li>
          </ul>
        </div>
        <div className="sidbarmenu">
          <h3 className="sidbarTitle">پیام رسانی</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MdEmail className="sidebaricon" />
              پست الکترونیکی
            </li>
            <li className="sidebarListItem">
              <FaSquarePollVertical className="sidebaricon" />
              بازخورد
            </li>
            <li className="sidebarListItem">
              <FaMessage className="sidebaricon" />
              پیام ها
            </li>
          </ul>
        </div>
        <div className="sidbarmenu">
          <h3 className="sidbarTitle">کارکنان</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <IoIosMan className="sidebaricon" />
              مدیریت
            </li>
            <li className="sidebarListItem">
              <FaChartLine className="sidebaricon" />
              آنالیز
            </li>
            <li className="sidebarListItem">
              <MdReport className="sidebaricon" />
              گزارش حطا
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
