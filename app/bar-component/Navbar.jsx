"use client";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Navbar = () => {
  const [sidbar, setSidbar] = useState(false);
  return (
    <>
      <div className="bg-[rgb(26,49,41)] sticky shadow-2xl z-50  top-0 py-3 md:py-4 text-white max-w-[1920px] ">
        <div className="flex w-full lg:w-full xl:w-[95%] 2xl:w-[90%] m-auto px-10 justify-between ">
          <div className="hover:scale-125 duration-200">logo</div>
          <nav className="md:flex hidden ">
            <div className="flex items-center  text-md sm:text-lg md:gap-6 gap-5 xl:gap-10 justify-around ">
              <Link
                href="/"
                className="focus:text-[#cbea75] active:text-[#cbea75] hover:scale-125 duration-200 hover:text-[#cbea75] "
              >
                Home
              </Link>
              <Link
                href="/about"
                className="focus:text-[#cbea75] active:text-[#cbea75] hover:scale-125 duration-200 hover:text-[#cbea75] "
              >
                About
              </Link>
              <Link
                href="/contact"
                className="focus:text-[#cbea75] active:text-[#cbea75] hover:scale-125 duration-200 hover:text-[#cbea75] "
              >
                Contact
              </Link>
              <Link
                href="/members"
                className="focus:text-[#cbea75] active:text-[#cbea75] hover:scale-125 duration-200 hover:text-[#cbea75] "
              >
                {" "}
                Members
              </Link>
              <Link
                href="/events"
                className="focus:text-[#cbea75] active:text-[#cbea75] hover:scale-125 duration-200 hover:text-[#cbea75] "
              >
                Event
              </Link>
              <Link
                href="/blog"
                className="focus:text-[#cbea75] active:text-[#cbea75] hover:scale-125 duration-200 hover:text-[#cbea75] "
              >
                Blog
              </Link>
              <button className="px-4 py-1 text-xl bg-[#cbea75] text-black hover:scale-110 hover:shadow-gray-400 hover:shadow-lg transition duration-200 rounded-lg">
                Subscrbe
              </button>
            </div>
          </nav>
          <div className="md:hidden text-md sm:text-lg">
            <button
              onClick={() => setSidbar(!sidbar)}
              className="cursor-pointer active:text-[#cbea75] focus:text-[#cbea75] hover:text-[#cbea75]"
            >
              {sidbar ? <CloseIcon /> : <MenuIcon />}
            </button>
            {sidbar && (
              <div className="z-50 absolute bg-[rgb(26,49,41)] flex flex-col items-center gap-10 py-6 top-[49px] right-0 w-2/3 h-screen backdrop-blur-2xl">
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
                <Link
                  href="/blog"
                  className="focus:text-[#cbea75] focus:border focus:px-16 focus:rounded-md active:text-[#cbea75] hover:scale-125 duration-200 hover:text-[#cbea75] "
                >
                  Blog
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
