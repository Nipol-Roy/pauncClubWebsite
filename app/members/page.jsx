/** @format */

"use client";
import Image from "next/image";
import DataCollector from "../../model/DB/storeData/dataCollector";
import BgimgTwo from "../../public/assete/images/pagesbg/backgroundThree.png";
import Logo from "../../public/assete/images/paunclogo.png";
import Bar from "./bar";

const Member = () => {
  return (
    <>
      <div className="relative shadow-inner shadow-[#1A3129] w-[90%] m-auto mt-10 min-h-[50vh] rounded-t-xl px-5  md:px-20 py-5  bg-gray-100 flex justify-center ">
        <div className="absolute top-0 h-1/3 lg:h-1/2 w-[95%] md:w-[90%] m-auto bg-[radial-gradient(#cde4a4_2px,transparent_2px)] [background-size:20px_20px] opacity-40"></div>

        <Image
          src={BgimgTwo}
          alt="bacground image "
          className=" absolute right-10  top-0  hidden lg:block "
        />
        <div className="flex flex-col w-full text-center items-center">
          <div className="jd:my-[50px] m-3 z-20">
            <Image width={300} src={Logo} alt="logo" />
          </div>
          <h2 className=" text-[25px] md:text-[40px] my-6 md:my-10 z-20">
            Meet Our Team of Experts
          </h2>
          <p className="md:w-2/3 w-ful text-[13px] md:text-lg text-justify py-5 z-20">
            Our team at Nutritionist is composed of highly skilled professionals
            who are passionate about helping you achieve your health and
            wellness goals. With a diverse range of expertise in nutrition,
            coaching, and support, our team is dedicated to providing you with
            the guidance and personalized care you need. Get to know the experts
            behind our success and discover how they can make a positive impact
            on your journey to better health.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-[90%] pb-10  rounded-b-xl q">
          <Bar />
        </div>
        <div className="w-full m-auto flex justify-center items-center flex-col ">
          <div className="flex justify-center items-center w-full">
            <DataCollector />
          </div>
        </div>
      </div>
    </>
  );
};

export default Member;
