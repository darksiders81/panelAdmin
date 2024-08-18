import React from "react";
import imgProfiler from "../../assets/images/2.jpg";
export default function UserBox(props) {
  return (
    <div className="flex items-center justify-between rounded-xl border py-1 px-2">
      <img
        src={imgProfiler}
        alt=""
        className="w-24 h-24 mr-4 rounded-full cursor-pointer border-2 border-gray-100 "
      />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl">{props.username}</h1>
        <h3 className="tex-lg">{props.price} تومان</h3>
      </div>
      {/* <button className="bg-green-600 py-2 px-6 rounded-full text-yellow-50 hover:bg-blue-600">
        فعال
      </button>
       */}
      {props.isActive ? (
        <button className="bg-green-600 py-2 px-6 rounded-full text-yellow-50 hover:bg-blue-600">
          فعال
        </button>
      ) : (
        <button className="bg-red-400 py-2 px-6 rounded-full text-yellow-50 hover:bg-slate-800 ">
          غیر فعال
        </button>
      )}
    </div>
  );
}
