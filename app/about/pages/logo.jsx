/** @format */
import Image from "next/image";
import img from "../../../public/assete/images/logo.png";

const Logo = () => {
  return (
    <>
      <div className=" w-full  relative flex justify-center items-start">
        <div className="w-[90%] flex justify-center items-center rounded-xl">
          <div className=" w-full flex  ">
            <div className="w-1/3   ">
              <div className="lg:m-3 m-1 sm:-2 flex gap-1 sm:gap-2  lg:gap-5">
                <div className="p-5 bg-lime-200 rounded-xl sm:h-32 lg:h-40 h-20 w-1/2"></div>
                <div className="p-5 bg-lime-200 rounded-xl w-1/2"></div>
              </div>
              <div className="lg:m-3 m-1 sm:-2 flex gap-1 sm:gap-2  lg:gap-5">
                <div className="p-5 bg-lime-200 rounded-xl sm:h-32 lg:h-40 h-20 w-1/2"></div>
                <div className="p-5 bg-lime-200 rounded-xl w-1/2"></div>
              </div>
            </div>

            <div className="w-1/3 lg:m-3 m-1 h-40 sm:h-64  lg:h-[330px] bg-lime-200 rounded-xl flex justify-center items-center">
              <Image
                src={img}
                alt="logo"
                className="w-28 md:w-40 lg:w-60 xl:w-80"
              />
            </div>

            <div className="w-1/3   ">
              <div className="lg:m-3 m-1 sm:-2 flex gap-1 sm:gap-2  lg:gap-5">
                <div className="p-5 bg-lime-200 rounded-xl sm:h-32 lg:h-40 h-20 w-1/2"></div>
                <div className="p-5 bg-lime-200 rounded-xl w-1/2"></div>
              </div>
              <div className="lg:m-3 m-1 sm:-2 flex gap-1 sm:gap-2  lg:gap-5">
                <div className="p-5 bg-lime-200 rounded-xl sm:h-32 lg:h-40 h-20 w-1/2"></div>
                <div className="p-5 bg-lime-200 rounded-xl w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
