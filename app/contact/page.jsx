import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import Contractform from "./contractform";

const Contact = () => {
  return (
    <>
      <div className="relative shadow-inner shadow-[#dff07e] w-[90%] m-auto mt-10 min-h-[50vh] rounded-t-xl px-20 bg-[#f4f8dc] flex justify-center ">
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
      <div className="flex justify-center items-center w-full  ">
        <div className="w-[90%] flex justify-center items-center gap-5 ">
          <div className="w-1/2">
            <Contractform />
          </div>
          <div className="text-center w-1/2 text-lg mb-6 p-2  text-gray-700">
            <div className="w-full max-w-4xl mx-auto p-5 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Google Maps Location"
                className="w-full h-64 md:h-96 "
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.306117646653!2d90.42332927420474!3d23.80767228619067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7f9e292b5e7%3A0xf512d0b2c643e9d9!2sPrimeasia%20University!5e0!3m2!1sen!2sbd!4v1691121888888!5m2!1sen!2sbd"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
