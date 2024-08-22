import React from "react";
import { FaRegTrashAlt, FaEye, FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function ProductInfoBox(props) {
  return (
    <div className="shadow-lg  h-90 rounded-2xl flex justify-between items-center ">
      <img
        src={props.img}
        alt=""
        className="w-48 rounded-lg"
      />
      <div className="flex flex-col">
        <h1 className="text-center text-2xl mb-4">{props.name}</h1>
        <h1 className="text-center text-2xl ">{props.price}</h1>
      </div>
      <div className="ml-2 flex flex-col gap-2">
        <button className="bg-red-400 rounded-full p-2 text-lg text-white hover:bg-violet-800 hover:text-red-400 transition-all">
          <FaRegTrashAlt />
        </button>
        <Link
          to={`/products/${props.id}`}
          className="bg-blue-500 rounded-full p-2 text-lg text-white hover:bg-sky-900 hover:text-blue-500 transition-all"
        >
          <FaEye />
        </Link>
        <Link to={`/addproduct/${props.id}`} className="bg-gray-800 rounded-full p-2 text-lg text-white hover:bg-sky-900 hover:text-blue-500 transition-all">
          <FaPen />
        </Link>
      </div>
    </div>
  );
}
