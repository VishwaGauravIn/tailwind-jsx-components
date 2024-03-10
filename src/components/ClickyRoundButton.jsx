import React from "react";
import { FaHeart } from "react-icons/fa6";

export default function ClickyRoundButton() {
  return (
    <div className="flex gap-4 justify-center items-center">
      <div className="flex relative group h-max">
        <div className="absolute w-max bottom-1 left-1 p-2 px-3 border-2 border-blue-500 text-2xl rounded-2xl font-semibold bg-gradient-to-b from-blue-50 to-blue-200 cursor-pointer group-active:bottom-0 group-active:left-0 transition-all ease-in-out select-none duration-75 text-blue-600">
          5 000+
        </div>
        <div className="p-2 w-max h-max px-3 border-2 border-blue-500 text-2xl rounded-2xl font-semibold -z-10 bg-gradient-to-b from-blue-50 to-blue-200 shadow-md text-transparent">
          5 000+
        </div>
      </div>
      <div className="flex relative group h-max">
        <div className="absolute w-max bottom-1 left-1 p-2 border-2 border-rose-500 text-2xl rounded-2xl font-semibold bg-gradient-to-b from-rose-50 to-rose-200 cursor-pointer group-active:bottom-0 group-active:left-0 transition-all ease-in-out select-none duration-75 text-rose-600">
          <FaHeart />
        </div>
        <div className="p-2 w-max h-max border-2 border-rose-500 text-2xl rounded-2xl font-semibold -z-10 bg-gradient-to-b from-rose-50 to-rose-200 shadow-md text-transparent">
          <FaHeart />
        </div>
      </div>
    </div>
  );
}
