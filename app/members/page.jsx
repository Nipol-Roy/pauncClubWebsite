import Bar from "./bar";

const Member = () => {
  return (
    <>
      <div class="relative shadow-inner shadow-[#dff07e] w-[90%] m-auto mt-10 min-h-[50vh] rounded-t-xl px-20 bg-[#f4f8dc] flex justify-center ">
        <div class="absolute top-0 h-1/3 lg:h-1/2 w-[95%] md:w-[90%] m-auto bg-[radial-gradient(#cde4a4_2px,transparent_2px)] [background-size:20px_20px] opacity-40"></div>
        <div className="flex flex-col w-full text-center items-center">
          <div className="jd:my-[50px] m-3">logo</div>
          <h2 className=" text-[25px] md:text-[40px] my-6 md:my-10">
            Meet Our Team of Experts
          </h2>
          <p className="md:w-2/3 w-ful text-[13px] md:text-lg ">
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
      <div className="w-full flex justify-center items-center">
        <div className="w-[90%] py-4 bg-[rgb(26,49,41)] rounded-b-xl"><Bar/></div>
      </div>
    </>
  );
};

export default Member;
