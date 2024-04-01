"use client";
import React, { useState, useEffect } from "react";
import { CountUpProps } from "./CountUp.types";

const CountUp = ({ end, duration = 2000, label }: CountUpProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let requestId: number;

    const startCounting = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentCount = Math.floor(progress * end);
      setCount(currentCount);
      if (progress < 1) {
        requestId = requestAnimationFrame(startCounting);
      }
    };

    requestId = requestAnimationFrame(startCounting);

    return () => cancelAnimationFrame(requestId);
  }, [end, duration]);

  return (
    <div className="w-full md:w-auto py-10 flex-1 bg-white hover:scale-110 transition-all duration-300 flex flex-col justify-center items-center rounded-xl">
      <p className="text-[28px] font-black text-secondary text-center">
        {count.toLocaleString()}
      </p>
      <p className="font-semibold text-sm text-secondary text-center">
        {label}
      </p>
    </div>
  );
};

export { CountUp };
