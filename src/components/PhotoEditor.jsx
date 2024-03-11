"use client";

import React, { useState } from "react";
import { FaWandMagicSparkles } from "react-icons/fa6";
import {
  CgEditContrast,
  CgEditExposure,
  CgEditHighlight,
  CgEditNoise,
  CgEditShadows,
  CgEditStraight,
} from "react-icons/cg";
import { Tooltip } from "react-tooltip";

export default function PhotoEditor() {
  return (
    <div className="w-80 aspect-square bg-[#121212] rounded-[3rem] p-2 text-white">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1702909359652-460a6259dbd5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=288&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlIGRhcmsgZ3JlZW58fHx8fHwxNzEwMDgxMjc4&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480"
          alt=""
          className="w-full h-60 rounded-[2rem] overflow-hidden -mt-2 z-10 relative object-cover brightness-90"
        />
        <button
          className="absolute border w-10 h-10 rounded-full right-3 bottom-3 z-10 backdrop-blur-sm border-white/20 flex justify-center items-center bg-black/20"
          data-tooltip-id="photo-editor"
          data-tooltip-content="Auto Filter!"
        >
          <FaWandMagicSparkles className="scale-x-[-1]" />
        </button>
      </div>
      <div className="w-full mt-2.5 px-3 flex gap-[13.5px] overflow-y-auto [&::-webkit-scrollbar]:hidden transition-all ease-in-out">
        {EditValues.map((value, index) => (
          <EditButton key={index} {...value} />
        ))}
      </div>
      <Tooltip
        id="photo-editor"
        variant="dark"
        className="z-30 scale-75 mt-2"
      />
    </div>
  );
}

function EditButton({ label, icon, defValue }) {
  const [value, setValue] = useState(defValue);
  const [isRangeVisible, setIsRangeVisible] = useState(false);
  return (
    <div className="flex justify-center items-center transition-all ease-in-out">
      <button
        className="flex flex-col justify-center items-center gap-0.5 aspect-square outline-none"
        onClick={() =>
          setIsRangeVisible((prev) => {
            return !prev;
          })
        }
      >
        <span
          className="rounded-full bg-white/15 h-10 w-10 flex justify-center items-center"
          data-tooltip-id="photo-editor"
          data-tooltip-content={label}
        >
          {React.createElement(icon, { className: "h-5 w-5 opacity-90" })}
        </span>
        <code className="text-xs">{value}</code>
      </button>
      <div
        className={`overflow-hidden ${
          isRangeVisible ? "w-24 ml-2" : "w-0 -ml-1"
        } transition-all ease-in-out duration-300`}
      >
        <input
          type="range"
          name=""
          id=""
          value={value}
          onChange={(e) => setValue(e.target.value)}
          min={-100}
          max={100}
          className={`accent-zinc-600 h-0.5 relative mb-8  w-full outline-none`}
        />
      </div>
    </div>
  );
}

// Edit your values here
const EditValues = [
  {
    label: "Exposure",
    icon: CgEditExposure,
    defValue: "-3",
  },
  {
    label: "Contrast",
    icon: CgEditContrast,
    defValue: "-15",
  },
  {
    label: "Shadows",
    icon: CgEditShadows,
    defValue: "-30",
  },
  {
    label: "Highlights",
    icon: CgEditHighlight,
    defValue: "-18",
  },
  {
    label: "Noise",
    icon: CgEditNoise,
    defValue: "-13",
  },
  {
    label: "Straight",
    icon: CgEditStraight,
    defValue: "-8",
  },
  {
    label: "Straight",
    icon: CgEditStraight,
    defValue: "-2",
  },
  {
    label: "Straight",
    icon: CgEditStraight,
    defValue: "-3",
  },
];
