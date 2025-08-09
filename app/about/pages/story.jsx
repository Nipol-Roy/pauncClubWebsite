/** @format */
"use client";
import Image from "next/image";
import celiandcol from "../../../public/assete/images/aboutImage/Celebrating.png";
import comunity from "../../../public/assete/images/aboutImage/Community.png";
import futur from "../../../public/assete/images/aboutImage/Global.png";
import imageOne from "../../../public/assete/images/aboutImage/imageOne.png";
import imageTwo from "../../../public/assete/images/aboutImage/imageTwo.png";
import education from "../../../public/assete/images/aboutImage/Nutrition.png";
import movementforhelth from "../../../public/assete/images/aboutImage/Unidos.png";

const Story = () => {
  return (
    <>
      <div className="w-full flex justify-center  items-center">
        <div className="w-[90%]  my-5 ">
          <div className="flex justify-center   items-center w-full ">
            <div className=" w-full lg:flex justify-center items-center lg:flex-col p-2 sm:p-10 ">
              <h3 className="  text-2xl font-bold p-5 text-center">
                Our Story
              </h3>
              <div className="text-justify text-xl lg:w-3/4 p-5">
                The Journey of Primeasia University Nutrition Club: Empowering
                Health and Wellness In the bustling corridors of Primeasia
                University, a vision was quietly taking shape in 2017...
                (Include the full story text exactly as you wrote it here)
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center flex-col md:flex-row ">
            <div className=" w-full md:w-1/2">
              <div className="w-full rounded-tl-xl   bg-[#feebc4] flex justify-center items-center border-[#d8f999] border-r-5">
                <Image
                  className=" w-full h-[450px] md:h-[600px] 2xl:h-[420px]"
                  src={imageOne}
                  alt="history"
                />
              </div>
            </div>

            <div className=" w-full bg-[#f6fbe9] md:w-1/2 md:h-[600px] 2xl:h-[420px] xl:p-10   rounded-tr-xl ">
              <div className=" w-full md:text-xl text-2xl lg:text-2xl text-center font-bold p-5 md:p-3  ">
                Our Beginning: A Vision Born in 2017
              </div>
              <div className=" p-5 text-[17px]  xl:text-xl   text-justify ">
                In the bustling corridors of Primeasia University, a vision was
                quietly taking shape in 2017. Under the nurturing guidance of
                the Department of Public Health Nutrition, a group of passionate
                students and faculty came together to lay the foundation of what
                would become the Primeasia University Nutrition Club (PAUNC). It
                wasn’t just another student organization—it was a dream to build
                a vibrant community dedicated to promoting health and wellness.
                These early days were filled with brainstorming sessions,
                countless meetings, and the shared excitement of creating
                something meaningful. The founding members were driven by a
                simple yet profound idea: to make a difference through the power
                of nutrition education and community service. Little did they
                know, this humble initiative would grow into a force of change,
                uniting people in their journey towards healthier, happier
                lives.
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center  flex-col md:flex-row items-center ">
            <div className=" w-full block md:hidden  md:w-1/2 md:h-[600px]">
              <div className="w-full bg-[#271b0f] flex justify-center items-center ">
                <Image
                  className=" w-full h-[500px]  "
                  src={imageTwo}
                  alt="history"
                />
              </div>
            </div>
            <div className=" w-full  bg-[#f6fbe9] xl:p-10  md:w-1/2 md:h-[500px] 2xl:h-[400px] md:border-r-5 border-[#d8f999]">
              <div className=" w-full p-5  md:p-6  text-2xl font-bold text-center ">
                Our Foundation and Principles
              </div>
              <div className="text-lg xl:text-xl     p-5 text-justify ">
                PAUNC’s foundation rests on the principles of service,
                knowledge-sharing, and leadership. From its inception, the club
                has been guided by a well-structured constitution, ensuring its
                members operate cohesively and purposefully. This foundational
                document reflects the club’s commitment to integrity,
                transparency, and long-term sustainability.
              </div>
            </div>
            <div className=" w-full hidden md:block  md:w-1/2 md:h-[500px] 2xl:h-[400px]">
              <div className="w-full  bg-[#271b0f] flex justify-center items-center ">
                <Image
                  className=" w-full h-[500px] md:h-[500px] 2xl:h-[400px]"
                  src={imageTwo}
                  alt="history"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center  flex-col md:flex-row items-center ">
            <div className=" w-full  md:w-1/2 md:h-[600px] 2xl:h-[400px] md:border-r-5 border-[#d8f999]">
              <div className="w-full bg-[#271b0f] flex justify-center items-center ">
                <Image
                  className=" w-full h-[500px] md:h-[600px] 2xl:h-[400px]"
                  src={education}
                  alt="history"
                />
              </div>
            </div>
            <div className=" w-full  bg-[#f6fbe9] xl:p-10  md:w-1/2 md:h-[500px] 2xl:h-[400px] ">
              <div className=" w-full p-5  md:p-6  text-2xl font-bold text-center ">
                Academic Activities
              </div>
              <div className="text-lg xl:text-xl  h-auto md:[600px] 2xl:h-[400px]   p-5 text-justify ">
                Over the years, PAUNC has undertaken a plethora of impactful
                activities. On the academic front, the club organizes seminars,
                workshops, and symposiums featuring renowned experts in the
                field of nutrition and public health. These events provide
                students with invaluable insights into the latest trends,
                research, and practices in the nutrition field. One of PAUNC’s
                signature initiatives includes nutrition counseling programs,
                where club members, under the guidance of professionals, assist
                individuals in understanding and addressing their dietary needs
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center  flex-col md:flex-row items-center ">
            <div className=" w-full block md:hidden   sm:h-[620px] ">
              <div className="w-full bg-[#271b0f] flex justify-center items-center ">
                <Image
                  className=" w-full h-[500px] "
                  src={comunity}
                  alt="history"
                />
              </div>
            </div>
            <div className=" w-full  bg-[#f6fbe9] xl:p-10  md:w-1/2 h-auto sm:h-[620px]  xl:h-[550px] md:border-r-5 border-[#d8f999]">
              <div className=" w-full p-3  md:p-6  text-2xl font-bold text-center ">
                Community and Social Impact
              </div>
              <div className="text-lg xl:text-lg   p-3  md:p-5  text-justify ">
                In addition to academic ventures, PAUNC has successfully
                completed several community-driven projects. These include food
                distribution drives for underprivileged communities, awareness
                campaigns on balanced diets, and health screenings in rural
                areas. Most recently, the club has placed special emphasis on
                its social and humanitarian efforts. PAUNC organized a futsal
                tournament to promote physical activity and team spirit among
                students, extending its mission of overall health and wellness
                beyond nutrition. The club also worked tirelessly during the
                recent floods, providing aid and nutritional support to affected
                communities. Furthermore, PAUNC conducted winter clothing drives
                to bring warmth to those in need and hosted a heartfelt iftar
                program with street children, fostering a sense of togetherness
                and compassion.
              </div>
            </div>
            <div className=" w-full hidden md:block  md:w-1/2  xl:h-[550px]">
              <div className="w-full bg-[#271b0f] flex justify-center items-center ">
                <Image
                  className=" w-full h-[600px]  xl:h-[550px]"
                  src={comunity}
                  alt="history"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center  flex-col md:flex-row items-center ">
            <div className=" w-full  md:w-1/2 md:h-[500px] lg:h-[400px] md:border-r-5 border-[#d8f999]">
              <div className="w-full bg-[#271b0f] flex justify-center items-center ">
                <Image
                  className=" w-full h-[500px] lg:h-[400px]"
                  src={futur}
                  alt="history"
                />
              </div>
            </div>
            <div className=" w-full  bg-[#f6fbe9] xl:p-10  md:w-1/2 md:h-[500px] lg:h-[400px] ">
              <div className=" w-full p-5  md:p-6  text-2xl font-bold text-center ">
                Future Vision
              </div>
              <div className="text-lg xl:text-xl     p-5 text-justify ">
                Looking ahead, PAUNC aims to foster even greater collaborations
                with national and international organizations to further its
                impact. By building these bridges, the club envisions expanding
                its reach, bringing innovative health and nutrition programs to
                diverse communities.
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center  flex-col md:flex-row items-center ">
            <div className=" w-full md:hidden block  md:w-1/2  ">
              <div className="w-full bg-[#271b0f] flex justify-center items-center ">
                <Image
                  className=" w-full h-[500px] "
                  src={celiandcol}
                  alt="history"
                />
              </div>
            </div>
            <div className=" w-full  bg-[#f6fbe9] xl:p-10  md:w-1/2 md:h-[600px]  2xl:h-[400px] md:border-r-5 border-[#d8f999]">
              <div className=" w-full p-5  md:p-6  text-2xl font-bold text-center ">
                Celebrations and Collaborations
              </div>
              <div className="text-lg xl:text-xl  md:h-[600px]   2xl:h-[400px] p-5 text-justify ">
                PAUNC’s social activities are no less remarkable. The club
                actively celebrates World Food Day, Nutrition Week, and other
                globally recognized health-related occasions. These celebrations
                often involve vibrant competitions, such as healthy recipe
                contests, poster presentations, and quiz programs, designed to
                engage and educate participants in an interactive manner. The
                club also collaborates with NGOs and government bodies to
                amplify its reach and impact. These partnerships have enabled
                PAUNC to extend its services beyond the university and into
                communities that need them the most. By addressing issues such
                as malnutrition, anemia, and obesity, the club has become a
                trusted ally in promoting public health.
              </div>
            </div>
            <div className=" w-full hidden md:block  md:w-1/2 md:h-[600px] 2xl:h-[400px]">
              <div className="w-full bg-[#271b0f] flex justify-center items-center ">
                <Image
                  className=" w-full  md:h-[600px] 2xl:h-[400px]"
                  src={celiandcol}
                  alt="history"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center  flex-col md:flex-row items-center ">
            <div className=" w-full xl: md:w-1/2 md:h-[500px] lg:h-[400px] md:border-r-5 border-[#d8f999]">
              <div className="w-full bg-[#271b0f] flex justify-center items-center ">
                <Image
                  className=" w-full h-[500px] lg:h-[400px]"
                  src={movementforhelth}
                  alt="history"
                />
              </div>
            </div>
            <div className=" w-full  bg-[#f6fbe9] xl:p-10  md:w-1/2 md:h-[500px] lg:h-[400px] ">
              <div className=" w-full p-5  md:p-6  text-2xl font-bold text-center ">
                A Movement for a Healthier Tomorrow
              </div>
              <div className="text-lg xl:text-xl     p-5 text-justify ">
                As PAUNC strides into the future, its mission remains steadfast.
                It is not merely a club but a movement—a movement to inspire and
                create a healthier generation through knowledge, compassion, and
                action. Guided by its constitution and driven by the passion of
                its members, PAUNC stands as a testament to the power of
                youth-led initiatives in shaping a better tomorrow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
