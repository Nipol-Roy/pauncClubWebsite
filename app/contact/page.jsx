/** @format */

import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import Contractform from "./contractform";
import Joinus from "./pages/join";
import Map from "./pages/map";

const Contact = () => {
  return (
    <>
      <div className="relative shadow-inner shadow-[#dff07e] w-[90%] m-auto mt-10 min-h-[50vh] rounded-t-xl px-20 bg-[#f7fbf2] flex justify-center ">
        <div className="absolute top-0 h-1/3 lg:h-1/2 w-[95%] md:w-[90%] m-auto bg-[radial-gradient(#cde4a4_2px,transparent_2px)] [background-size:20px_20px] opacity-40"></div>
        <div className="flex flex-col w-full text-center items-center">
          <div className="jd:my-[50px] mt-10">logo</div>
          <h2 className=" text-[25px] md:text-[45px] my-10">Contact US</h2>
          <p className="md:w-2/3 w-ful text-lg lg:text-xl ">
            Already a member or planning to join? Have suggestions or feedback?
            Drop us a message! We’re here to support your journey toward better
            health and learning.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[90%] flex flex-col sm:flex-row justify-center  items-center gap-2 sm:gap-5 lg:gap-20 xl:gap-30 2xl:gap-40 md:py-6 px-6 py-5 bg-[rgb(26,49,41)] rounded-b-xl">
          <div className="bg-[#234338] py-4 md:w-[310px] w-[300px]  md:gap-3 rounded-xl flex flex-col justify-center items-center">
            <EmailIcon fontSize="large" className=" text-[#dff07e]" />{" "}
            <div className="text-white">abcd1234@gmail.com</div>
          </div>
          <div className="bg-[#234338] py-3 md:w-[310px] w-[300px] rounded-xl  gap-3  flex flex-col justify-center items-center">
            <PhoneIcon fontSize="large" className="text-[#dff07e]" />
            <div className=" text-white">+0123456789</div>
          </div>
          <div className="bg-[#234338] py-3 md:w-[310px] w-[300px] rounded-xl gap-3  flex flex-col justify-center items-center">
            <FacebookIcon fontSize="large" className="text-[#dff07e]" />
            <div className="text-white">@pau Nutrition Club</div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center ">
        <div className="lg:w-[90%] sm:p-10 bg-[#eef1e6] sm:m-10 m-5 rounded-xl flex-col sm:flex-row  flex justify-center items-center gap-5 ">
          <div className="2xl:w-1/2 ">
            <Contractform />
          </div>
          <Map />
        </div>
      </div>
      <Joinus />
    </>
  );
};

export default Contact;
