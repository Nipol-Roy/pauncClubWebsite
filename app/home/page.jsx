/** @format */

"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Speech from "./speech";

const Home = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".titleBox", {
      y: -50,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    tl.from(".descriptionBox", {
      y: -50,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });
    tl.from(".btnBox", {
      y: -30,
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: "back.out(1.7)",
    });
  });

  return (
    <div>
      <div className="relative h-screen w-full overflow-hidden mt-[-83px]">
        <video
          src="/assete/video/background.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-screen object-cover bg-center z-[-1]"
        ></video>

        <div className="relative z-10 flex items-center justify-center h-full bg-black/50 text-white text-center px-4">
          <div className="overflow-hidden box">
            <h1 className=" titleBox text-4xl md:text-6xl font-bold ">
              Welcome to the PAU Nutrition Club
            </h1>
            <p className="mt-4 text-lg md:text-xl overflow-hidden descriptionBox">
              A vibrant student community dedicated to promoting nutritional
              education, wellness, and healthy lifestyle practices at Primeasia
              University.
            </p>
            <div>
              <button className=" btnBox mt-6 px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded-lg shadow-lg transition ">
                <a href="">Join Us</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Speech />
      </div>
    </div>
  );
};

export default Home;
