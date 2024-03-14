"use client";

import React, { useEffect, useState } from "react";
import { FaPause, FaPlay, FaX } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

export default function AppleTimer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`.split("");
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };
  return (
    <div className="w-96 h-20 rounded-full p-4 flex justify-between items-center bg-black shadow-md">
      <div className="flex gap-2 h-full">
        <button
          className="h-full group aspect-square bg-yellow-600/40 hover:bg-yellow-600/50 rounded-full flex justify-center items-center transition-all ease-in-out duration-300"
          onClick={() => {
            isRunning ? handlePause() : handleStart();
          }}
        >
          <div className="group-active:scale-90 transition-all ease-in-out duration-300">
            {isRunning ? (
              <FaPause className="text-yellow-400 h-6" />
            ) : (
              <FaPlay className="text-yellow-400 h-6 -mr-0.5" />
            )}
          </div>
        </button>
        <button
          className="h-full aspect-square bg-zinc-500/40 hover:bg-zinc-500/50 rounded-full flex justify-center items-center group transition-all ease-in-out duration-300"
          onClick={handleReset}
        >
          <FaX className="text-zinc-100 h-6 group-active:scale-90 transition-all ease-in-out duration-300" />
        </button>
      </div>
      <div className="flex items-end gap-2 text-yellow-500 w-44 h-full">
        <span className="text-lg font-medium mb-1">Timer</span>
        <p className="text-[44px] leading-[1] font-thin flex overflow-hidden w-[110px] h-full justify-center">
          {formatTime(time).map((digit, index) => (
            <AnimatePresence mode="wait">
              <motion.p
                key={`${digit}-${index}`}
                initial={{ y: 5, opacity: 0, color: "rgb(254 252 232)" }}
                animate={{ y: 0, opacity: 1, color: "rgb(234 179 8)" }}
                exit={{ y: -5, opacity: 0, color: "rgb(254 252 232)" }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  exit: { duration: 1, ease: "easeInOut" },
                }}
              >
                {digit}
              </motion.p>
            </AnimatePresence>
          ))}
        </p>
      </div>
    </div>
  );
}
