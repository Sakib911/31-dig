"use client"
import { useState, useEffect } from "react";

const TrafficCard = () => {
  const bars = [
    { value: 70, color: "bg-[#DEF4FE]", text: "text-[#2F8EAA]" },
    { value: 85, color: "bg-[#2F8EAA]", text: "text-white" },
    { value: 100, color: "bg-[#5927E5]", text: "text-white" },
  ];

  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    // Trigger animation on page load
    const timer = setTimeout(() => {
      setAnimateBars(true);
    }, 200); // Delay for smooth animation start
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex bg-black-texture bg-cover rounded-3xl  text-white overflow-hidden ">
      {/* Left Section */}
      <div className="flex-1 p-6 pb-16">
        <p className="text-sm font-medium">Drive More Traffic and Sales</p>
        <h3 className="text-xl sm:text-2xl font-bold mt-2 leading-tight">
          Drive more traffic<br />& product sales
        </h3>
      </div>

      {/* Right Section - Bars */}
      <div className="flex items-end gap-4 pr-10">
        {bars.map(({ value, color, text }) => (
          <div key={value} className="text-center">
            {/* Bar with animation */}
            <div
              className={`w-10 sm:w-14 rounded-t-full ${color} ${text} flex items-end justify-center pb-4 transition-transform duration-[1.5s] ease-out ${
                animateBars ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
              }`}
              style={{
                transformOrigin: "bottom",
                height: `${value * 1.5}px`, // Scales based on percentage
              }}
            >
              <div className="transform -rotate-90 text-sm sm:text-base font-semibold whitespace-nowrap">
                {value}
                <span className="text-xs">&nbsp;%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrafficCard;
