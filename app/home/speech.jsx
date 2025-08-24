/** @format */

import Image from "next/image";
import presidentImg from "../../public/assete/images/speechImage/WhatsApp Image 2025-08-08 at 03.29.52_a1321caf.jpg";

const Speech = () => {
  return (
    <div className=" w-full py-10 bg-gray-300 ">
      <div>
        <section className="w-full   my-10 ">
          <div className="  w-[90%]  mx-auto">
            <div className="flex justify-center flex-col md:flex-row items-center bg-white shadow-md rounded-xl overflow-hidden">
              <div className=" h-[435px]">
                <Image
                  src={presidentImg}
                  alt="President"
                  className="object-cover w-[600px]  h-full"
                />
              </div>

              <div className="p-6 ">
                <h1 className="md:text-3xl text-xl font-semibold text-[#003366] mb-2 md:mb-4">
                  Senior Advisor’s Special Message
                </h1>
                <div className="md:text-lg text-md text-gray-700 leading-relaxed text-justify">
                  <div className="italic text-[#006400] font-medium py-2">
                    "Good nutrition is not just a personal choice—it is a public
                    responsibility, a foundation for national growth, and a path
                    to a healthier world."
                  </div>

                  <div className="py-2">
                    As the Senior Advisor of the Primeasia University Nutrition
                    Club, I am proud to witness how our students have turned
                    vision into action. What began as a small initiative has now
                    become a vibrant movement—driven by purpose, powered by
                    youth, and guided by knowledge.
                  </div>

                  <div className="py-2">
                    The PAU Nutrition Club represents the heart of student
                    leadership in health awareness. It’s a space where learning
                    meets service, and where passion creates change. <br /> To
                    every member: Keep learning. Keep serving. Keep leading.
                    Your commitment is shaping not just minds, but lives.
                    Together, we are sowing the seeds of a stronger, healthier
                    tomorrow.
                  </div>
                </div>

                <div className="md:mt-6 mt-2">
                  <h2 className="text-xl font-bold text-[#800000]">
                    Anulesh Karmaker
                  </h2>
                  <p className="text-gray-600">
                    Senior Advisor, PAU Nutrition Club <br /> Department Head,
                    Department of Public Health Nutrition
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="w-full   my-10 ">
          <div className="  w-[90%]  mx-auto">
            <div className="flex justify-center flex-col md:flex-row items-center bg-white shadow-md rounded-xl overflow-hidden">
              <div className="md:hidden block h-[435px]">
                <Image
                  src={presidentImg}
                  alt="President"
                  className="object-cover w-[600px]  h-full"
                />
              </div>

              <div className="p-6 ">
                <h1 className="md:text-3xl text-xl font-semibold text-[#003366] mb-2 md:mb-4">
                  President’s Special Message
                </h1>
                <div className="md:text-lg text-md text-gray-700 leading-relaxed text-justify">
                  <div className="italic text-[#006400] font-medium py-2">
                    "Nutrition is the foundation of life—not just in the
                    classroom, but in our communities, our culture, and our
                    future."
                  </div>

                  <div className="py-2">
                    As the President of the Primeasia University Nutrition Club,
                    I believe in the power of awareness, education, and
                    collective action. Every campaign we launch, every step we
                    take, is a reminder that healthy choices lead to a healthier
                    nation.
                  </div>

                  <div className="py-2">
                    This club is not just a team—it’s a family of changemakers,
                    committed to creating impact through knowledge, compassion,
                    and service. Let us lead with purpose. Let us nourish with
                    love. Let us build a tomorrow where wellness is a right, not
                    a privilege. Together, we rise.
                  </div>
                </div>

                <div className="md:mt-6 mt-2">
                  <h2 className="text-xl font-bold text-[#800000]">
                    Anulesh Karmaker
                  </h2>
                  <p className="text-gray-600">President, PAU Nutrition Club</p>
                </div>
              </div>
              <div className="hidden md:block h-[435px]">
                <Image
                  src={presidentImg}
                  alt="President"
                  className="object-cover w-[600px] h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className="w-full   my-10 ">
          <div className="  w-[90%]  mx-auto">
            <div className="flex justify-center flex-col md:flex-row items-center bg-white shadow-md rounded-xl overflow-hidden">
              <div className=" h-[435px] ">
                <Image
                  src={presidentImg}
                  alt="President"
                  className="object-cover w-[600px] h-full"
                />
              </div>

              <div className="p-6 ">
                <h1 className="md:text-3xl text-xl font-semibold text-[#003366] mb-2 md:mb-4">
                  President’s Special Message
                </h1>
                <div className="md:text-lg text-md text-gray-700 leading-relaxed text-justify">
                  <div className="italic text-[#006400] font-medium py-2">
                    "Nutrition is the foundation of life—not just in the
                    classroom, but in our communities, our culture, and our
                    future."
                  </div>
                  <div className="PY-2">
                    As the President of the Primeasia University Nutrition Club,
                    I believe in the power of awareness, education, and
                    collective action. Every campaign we launch, every step we
                    take, is a reminder that healthy choices lead to a healthier
                    nation.
                  </div>

                  <div className="py-2">
                    This club is not just a team—it’s a family of changemakers,
                    committed to creating impact through knowledge, compassion,
                    and service. Let us lead with purpose. Let us nourish with
                    love. Let us build a tomorrow where wellness is a right, not
                    a privilege. Together, we rise.
                  </div>
                </div>

                <div className="md:mt-6 mt-2">
                  <h2 className="text-xl font-bold text-[#800000]">
                    Anulesh Karmaker
                  </h2>
                  <p className="text-gray-600">President, PAU Nutrition Club</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Speech;
