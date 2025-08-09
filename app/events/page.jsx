/** @format */
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import bglogo from "../../public/assete/images/paunclogo.png";

const Event = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#1A3129] to-[#CBEA75] flex flex-col justify-center items-center text-center px-4 py-10 overflow-hidden font-serif">
      <div className="text-white absolute top-20 right-20 text-xl sm:text-2xl md:text-3xl bg-black/20 px-6 py-2 rounded-full backdrop-blur-sm border border-white/20 shadow-md">
        {formatTime(time)}
      </div>

      <div className="absolute inset-0 flex justify-center items-center opacity-10">
        <Image
          src={bglogo}
          alt="PAUNC Logo Background"
          className="w-[350px] sm:w-[450px] md:w-[550px]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-10 w-full">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide drop-shadow-lg">
          Coming Soon
        </h1>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl px-6 sm:px-10 py-10 w-[90%] sm:w-[80%] md:w-[60%] shadow-2xl space-y-6">
          <p className="text-white text-base sm:text-lg leading-relaxed">
            Join us as we prepare to unveil a new chapter in health and
            wellness.
          </p>

          <button className="bg-[#cbea75] text-[#1A3129] font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-[#003366] transition duration-300 shadow-md uppercase tracking-wider text-sm sm:text-base">
            <a href="https://www.facebook.com/share/1CqCzvrT2q/">Join Us</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
