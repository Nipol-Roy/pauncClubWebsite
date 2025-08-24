/** @format */

"use client";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../public/assete/images/paunclogo.png";

const Navbar = () => {
  const [sidbar, setSidbar] = useState(false);

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

              <button className="px-4 py-1 text-xl bg-gray-300 text-black hover:scale-110 hover:shadow-gray-400 hover:shadow-lg transition duration-200 rounded-lg btnItems ">
                Subscrbe
              </button>
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

                <button className="px-4 py-1 text-xl bg-[#cbea75] text-black hover:scale-110 hover:shadow-gray-400 hover:shadow-lg transition duration-200 rounded-lg">
                  Subscrbe
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
