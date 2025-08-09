/** @format */

"use client";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assete/images/paunclogo.png";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[rgb(26,49,41)] text-lg text-white  md:p-10 relative flex flex-col justify-center items-center ">
        <div className="md:flex justify-between  items-center w-full  lg:w-[95%] py-3 px-2 sm:text-lg text-sm">
          <div className=" m-2 flex gap-3  justify-start  items-center">
            <Image height={100} src={Logo} alt="" />
          </div>

          <div className="flex justify-center sm:px-5 md:px-0  items-center gap-[15px]  sm:gap-5  lg:gap-9">
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
              href="/events"
              className="focus:text-[#cbea75] active:text-[#cbea75] hover:scale-125 duration-200 hover:text-[#cbea75] "
            >
              Event
            </Link>
            <Link
              href="/members"
              className="focus:text-[#cbea75] active:text-[#cbea75] hover:scale-125 duration-200 hover:text-[#cbea75] "
            >
              Member
            </Link>
          </div>
          <div className="md:relative absolute mx-3 text-center right-0 top-10  sm:right-8 md:top-0 md:right-0">
            Go To Top{" "}
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="px-4 py-3 sm:m-4 rounded-full bg-[#234338] cursor-pointer"
            >
              <ArrowUpwardIcon />
            </button>
          </div>
        </div>
        <div className="w-[95%]  rounded-xl m-3 bg-[#234338]  xl:flex gap-3 text-md  duration-300 justify-between py-4 px-3 items-center">
          <div className="sm:flex justify-center items-center gap-5 ">
            <div className="border rounded-xl p-3 my-2  w-full md:w-[200px] hover:text-[#cbea75] flex items-center justify-center gap-3 bg-[#234338]  border-[#3c6154]">
              <EmailIcon className="text-[#cbea75]" /> <p>paunc.gmail.com</p>
            </div>
            <div className="border rounded-xl p-3 my-2   w-full md:w-[200px] hover:text-[#cbea75] flex items-center justify-center gap-3 bg-[#234338]  border-[#3c6154]">
              <PhoneIcon className="text-[#cbea75]" /> <p>+880123456789</p>
            </div>
            <div className="border cursor-pointer rounded-xl p-3 my-2 w-full md:w-[200px] hover:text-[#cbea75] flex items-center justify-center gap-3 bg-[#234338]  border-[#3c6154]">
              <FacebookIcon className="text-[#cbea75]" />{" "}
              <a href="https://www.facebook.com/share/1CqCzvrT2q/">PAUNC</a>
            </div>
          </div>
          <div className="md:text-lg flex justify-center items-center  text-sm py-3 px-4">
            <div>
              {" "}
              © 2023 Nutritionist. All rights reserved. Powerd By Anulesh{" "}
              <Link
                href=" "
                className=" cursor-pointer p-3 hover:text-[#cbea75] capitalize"
              >
                {" "}
                dev: Nipol
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
