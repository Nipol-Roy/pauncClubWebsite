/** @format */

import Logo from "./pages/logo";
import Story from "./pages/story";

const About = () => {
  return (
    <>
      <div className="bg-[#fafdf2] w-full">
        <Logo />
        <div className="w-full flex justify-center  items-center   ">
          <div className=" md:p-10 w-[90%] bg-[#f6fbe9] rounded-xl flex flex-col justify-center items-center">
            <div className=" text-2xl  font-bold my-8 text-center lg:text-3xl  xl:text-5xl  flex justify-center items-center ">
              <p> About Primeasia University Nutrition Club</p>
            </div>
            <div className="   w-full  text-justify flex justify-center items-center p-5 text-lg md:text-lg xl:text-xl">
              <p>
                Primeasia University Nutrition Club (PAUNC) is a student-driven
                organization committed to promoting health, nutrition education,
                and community well-being. Since 2017, under the Department of
                Public Health Nutrition, PAUNC has grown into a vibrant
                community of students and faculty dedicated to empowering
                healthier lives through knowledge, service, and leadership.
              </p>
            </div>
          </div>
        </div>

        <Story />
      </div>
    </>
  );
};

export default About;
