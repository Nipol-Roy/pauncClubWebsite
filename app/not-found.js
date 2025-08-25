/** @format */
import Image from "next/image";
import Link from "next/link";
import notFoundImg from "../public/Gemini_Generated_Image_3fv8lw3fv8lw3fv8.png";

const NotFound = () => {
  return (
    <div className="flex max-w-[2000px] max-h-[1000px] m-auto flex-col items-center justify-center relative bg-gradient-to-br from-gray-50 to-blue-100 text-center ">
      <div className="relative w-full h-[100vh]   ">
        <Image
          src={notFoundImg}
          alt="404 illustration"
          fill
          className="object-cover "
          priority
        />
      </div>
      <div className=" top-[13%]  right-[15%] sm:right-[30%] md:right-[34%] lg:top-[34%] lg:left-[5%]  lg:text-left xl:top-[55%] xl:right-[60%]     text-[34px]  xl:text-[60px] font-mono absolute  font-bold text-[#314E5F]">
        Page Not Found
      </div>

      <div className="  inline  top-[32%]  right-[17%] sm:right-[27%] md:right-[32%]  lg:top-[50%]  lg:left-[35%] xl:top-[40%]  xl:right-[25%]  lg:rotate-0 rotate-[30deg] xl:rotate-12 text-[40px] md:text-[60px] lg:text-[60px] xl:text-[120px] text-[#355264] md:text-[#86A863]  absolute w-20 h-20  font-mono font-extrabold ">
        404
      </div>

      <Link
        href="/"
        className=" bottom-[15%] left-[30%] sm:left-[38%] md:left-[42%] xl:bottom-[20%] xl:left-[55%]  mt-6 absolute font-bold inline-block bg-[#a1cde3] font-mono text-[#355264] px-6 py-3 rounded-lg shadow-md hover:bg-[#C7E08D] hover:text-[#935F36] transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
