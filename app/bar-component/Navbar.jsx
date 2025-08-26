/** @format */

"use client";

import CloseIcon from "@mui/icons-material/Close";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../../public/assete/images/paunclogo.png";
import subscribebgImg from "../../public/subscriebgImage.jpg";

const Navbar = () => {
  const [sidbar, setSidbar] = useState(false);
  const [subscribeBox, setSubscribeBox] = useState(false);

  useEffect(() => {
    document.body.style.overflow = subscribeBox ? "hidden" : "auto";
  });

  // useGSAP(() => {
  //   const tl = gsap.timeline();
  //   tl.from(".navContainer", {
  //     y: -80,
  //     opacity: 0,
  //     duration: 0.5,
  //   });
  //   tl.from(".imageBox", {
  //     y: -80,
  //     opacity: 0,
  //     duration: 0.5,
  //     stagger: 0.2,
  //   });
  //   tl.from(".boxItems", {
  //     y: -80,
  //     opacity: 0,
  //     duration: 0.5,
  //     stagger: 0.2,
  //   });
  //   tl.from(
  //     ".btnItems",
  //     {
  //       y: yvalue,
  //       opacity: 0,
  //       duration: 0.5,
  //       delay: 2,
  //       stagger: 0.2,
  //     },
  //     { scope: buttonRef, dependencies: yvalue }
  //   );
  // });

  return (
    <>
      <div className="bg-[rgb(26,49,41)] sticky shadow-2xl z-50  top-0 py-3 md:py-4 text-white max-w-[1920px] navContainer">
        <div className="flex   w-full lg:w-full xl:w-[95%] 2xl:w-[90%] m-auto px-10 justify-between  ">
          <div className="hover:scale-110 duration-200 flex justify-center items-center ">
            <Image height={50} src={Logo} alt="logo" className="imageBox" />
            <span className="text-lg md:text-2xl">PAUNC</span>
          </div>
          <nav className="md:flex hidden ">
            <div className="flex items-center  text-md sm:text-lg md:gap-6 gap-5 xl:gap-10 justify-around ">
              <Link
                href="/"
                className="focus:text-[#cbea75] md:text-xl active:text-[#cbea75] hover:scale-125 duration-200 hover:text-[#cbea75] boxItems "
              >
                Home
              </Link>
              <Link
                href="/about"
                className="focus:text-[#cbea75] md:text-xl active:text-[#cbea75] hover:scale-125 duration-200 hover:text-[#cbea75] boxItems  "
              >
                About
              </Link>
              <Link
                href="/contact"
                className="focus:text-[#cbea75] md:text-xl active:text-[#cbea75] hover:scale-125 duration-200 hover:text-[#cbea75] boxItems "
              >
                Contact
              </Link>
              <Link
                href="/members"
                className="focus:text-[#cbea75] md:text-xl active:text-[#cbea75] hover:scale-125 duration-200 hover:text-[#cbea75] boxItems "
              >
                {" "}
                Members
              </Link>
              <Link
                href="/events"
                className="focus:text-[#cbea75] md:text-xl active:text-[#cbea75] hover:scale-125 duration-200 hover:text-[#cbea75] boxItems  "
              >
                Event
              </Link>

              <button
                onClick={() => {
                  setSubscribeBox(true);
                }}
                className="px-4 py-1 text-xl bg-gray-300 text-black hover:scale-110 hover:shadow-gray-400 hover:shadow-lg transition duration-200 rounded-lg btnItems "
              >
                Subscrbe
              </button>
              <div
                className={`w-full h-full  fixed backdrop-blur-3xl top-0 left-0 flex justify-center items-center ${
                  subscribeBox == true ? "block" : "hidden"
                } `}
              >
                <div className="xl:w-[60%] xl:h-[80%] lg:h-[75%] lg:w-[75%] h-[80%]  w-[90%]   rounded-2xl relative">
                  <div className="  h-full  rounded-2xl ">
                    <Image
                      src={subscribebgImg}
                      alt="subscrib background  image"
                      className="object-cover  h-full w-full rounded-2xl"
                    />

                    <div className="w-full h-full flex justify-center items-start mt-10 absolute top-0">
                      <div className="text-black w-[80%] lg:w-[60%] flex flex-col justify-around ">
                        <h2 className="text-[50px] py-5 text-[#f7aa77] font-bold text-center">
                          <span className=" text-[60px] lg:text-[80px] block text-[#cf351b]">
                            Subscribe
                          </span>{" "}
                          to our Newsletter
                        </h2>
                        <p className="py-5 text-lg lg:text-2xl text-justify">
                          Subscribe to the Primeasia University Nutrition Club
                          and never miss out on our latest events, wellness
                          tips, and healthy lifestyle updates. Join our
                          community and fuel your journey toward better health.
                        </p>
                        <div className="relative ">
                          <input
                            type="text"
                            className=" py-4 w-full px-5  mt-5 text-xl text-white bg-[#528934] outline-none border-[#E0B596] border-2 rounded-xl"
                            placeholder="Enter Your Email"
                          />
                          <div className=" flex justify-center items-center absolute bottom-[2px] right-0  ">
                            <button className="px-10 py-[16px]  text-white font-bold  text-xl font-mono  cursor-pointer duration-400 bg-[#E0B596] rounded-r-xl">
                              Send
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-full">
                    <button
                      onClick={() => {
                        setSubscribeBox(false);
                      }}
                      className=" absolute top-5 cursor-pointer hover:scale-125 text-black  transition duration-400 ease-in-out right-5 "
                    >
                      <CloseOutlinedIcon sx={{ fontSize: 40 }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="md:hidden  flex  text-md sm:text-lg ">
            <button
              onClick={() => setSidbar(!sidbar)}
              className="cursor-pointer "
            >
              {sidbar ? (
                <CloseIcon sx={{ fontSize: "30px" }} />
              ) : (
                <MenuIcon sx={{ fontSize: "30px" }} />
              )}
            </button>
            {sidbar && (
              <div className="z-50 absolute bg-[rgb(26,49,41)] flex flex-col items-center gap-10 py-6 top-[73px] right-0 w-2/3 h-screen backdrop-blur-2xl">
                <Link
                  href="/"
                  className="focus:text-[#cbea75] focus:border focus:px-16 focus:rounded-md active:text-[#cbea75] hover:scale-125 duration-200 hover:text-[#cbea75] "
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="focus:text-[#cbea75] focus:border focus:px-16 focus:rounded-md active:text-[#cbea75] hover:scale-125 duration-200 hover:text-[#cbea75] "
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="focus:text-[#cbea75] focus:border focus:px-16 focus:rounded-md active:text-[#cbea75] hover:scale-125 duration-200 hover:text-[#cbea75] "
                >
                  Contact
                </Link>
                <Link
                  href="/members"
                  className="focus:text-[#cbea75] focus:border focus:px-16 focus:rounded-md active:text-[#cbea75] hover:scale-125 duration-200 hover:text-[#cbea75] "
                >
                  {" "}
                  Members
                </Link>
                <Link
                  href="/events"
                  className="focus:text-[#cbea75] focus:border focus:px-16 focus:rounded-md active:text-[#cbea75] hover:scale-125 duration-200 hover:text-[#cbea75] "
                >
                  Event
                </Link>

                <button
                  onClick={() => {
                    setSubscribeBox(true);
                    setSidbar(false);

                    document.body.style.overflow = "hidden";
                  }}
                  className="px-4 py-1 text-xl bg-gray-300 text-black hover:scale-110 hover:shadow-gray-400 hover:shadow-lg transition duration-200 rounded-lg btnItems "
                >
                  Subscrbe
                </button>
              </div>
            )}
          </div>

          <div
            className={`w-full h-full md:hidden fixed backdrop-blur-3xl top-0 left-0 flex justify-center items-center ${
              subscribeBox == true ? "block" : "hidden"
            } `}
          >
            <div className="w-[90%] h-[80%]">
              <div className="h-full relative rounded-xl">
                <Image
                  src={subscribebgImg}
                  alt="subscrib background image"
                  className="object-cover  h-full w-full rounded-2xl"
                />
                <div className="w-full absolute flex justify-center items-center top-0 h-full">
                  <button
                    onClick={() => {
                      setSubscribeBox(false);
                    }}
                    className=" absolute top-5 cursor-pointer hover:scale-125 text-black  transition duration-400 ease-in-out right-5 "
                  >
                    <CloseOutlinedIcon sx={{ fontSize: 40 }} />
                  </button>

                  <div className="text-black w-[95%] flex flex-col justify-around ">
                    <h2 className="text-[30px] py-3 text-[#f7aa77] font-bold text-center">
                      <span className=" text-[50px] block text-[#cf351b]">
                        Subscribe
                      </span>
                      to our Newsletter
                    </h2>
                    <p className=" text-md py-5 px-3 text-justify">
                      Subscribe to the Primeasia University Nutrition Club and
                      never miss out on our latest events, wellness tips, and
                      healthy lifestyle updates. Join our community and fuel
                      your journey toward better health.
                    </p>
                    <div className="relative ">
                      <input
                        type="text"
                        className=" py-3 w-full px-3  mt-3 text-xl text-white bg-[#528934] outline-none border-[#E0B596] border-2 rounded-xl"
                        placeholder="Enter Your Email"
                      />
                    </div>
                    <div className=" flex justify-center items-center   ">
                      <button className="px-5 py-3  text-white font-bold w-[50%] mt-5 mb-10  text-xl font-mono  cursor-pointer duration-400 bg-[#E0B596] rounded-xl">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
