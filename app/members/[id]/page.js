/** @format */
"use client";

import AcUnitTwoToneIcon from "@mui/icons-material/AcUnitTwoTone";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import bglogo from "../../../public/paunclogo.png";

import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CompostOutlinedIcon from '@mui/icons-material/CompostOutlined';
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";

const MemberDetailsPage = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const res = await fetch(
          `/api/getMembers/findByMemberDetailsBy?id=${id}`
        );

        if (!res.ok) throw new Error("Failed to fetch member details");

        const data = await res.json();
        setMember(data.message);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Something went wrong");
        setLoading(false);
      }
    };
    if (id) fetchMember();
  }, []);

  if (loading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="text-center text-5xl py-10">Loading...</div>
      </div>
    );
  if (error)
    return (
      <div className="text-red-600 text-center w-full h-screen">
        chata matha error{" "}
      </div>
    );

  return (
    <>
      <div className="w-full max-w-[2600px] h-full m-auto bg-gray-50">
        <div className="md:h-[50vh] h-[58vh] w-full md:m-auto flex relative justify-center md:justify-between ">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 L100,0 L100,100 L0,100 Z"
                fill="none"
                stroke="#e0e0e0"
                strokeWidth="0.5"
              />
              <path d="M0,20 L80,20" stroke="#a3b18a" strokeWidth="0.5" />
              <path d="M20,0 L20,80" stroke="#a3b18a" strokeWidth="0.5" />
              <path d="M0,40 L60,40" stroke="#a3b18a" strokeWidth="0.5" />
              <path d="M40,0 L40,60" stroke="#a3b18a" strokeWidth="0.5" />
            </svg>
          </div>
          <div className="absolute top-2 left-2 md:top-8 md:left-8 ">
            <button
              onClick={() => router.back()}
              className="px-5 py-2 border-2 hover:border-[#236456] rounded-lg  bg-[#236456] text-white hover:bg-white hover:text-[#236456] transition cursor-pointer"
            >
              ← Back
            </button>
          </div>

          <div className="w-full  sm:w-[90%] md:w-[85%]  m-auto  p-5 z-10 flex flex-col md:flex-row justify-center md:justify-between items-center">
            <div className="w-[300px] h-[300px] rounded-full block lg:hidden relative overflow-hidden">
              {member?.image && (
                <div className=" bg-white relative border-double rounded-full border-4 border-[#236456] overflow-hidden ">
                  <Image
                    src={bglogo}
                    alt="bglogo"
                    className=" opacity-20 "
                  ></Image>
                  <Image src={member.image} alt={member.fullName} fill />
                </div>
              )}
            </div>

            <div className="p-5 text-center">
              <div className="text-4xl text-[#588157]  md:text-5xl lg:text-7xl font-bold  p-2">
                {member.fullName}
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl capitalize text-[#588157] ">
                {member.designation}
              </div>

              <div
                className={`capitalize mb-1   py-1 ${
                  member.rank === "green"
                    ? "text-[#08CB00]"
                    : member.rank === "blue"
                    ? "text-[#0046FF]"
                    : member.rank === "gold"
                    ? "text-[#FFC900]"
                    : member.rank === "silver"
                    ? "text-[#DDDAD0]"
                    : ""
                }
                        `}
              >
                {member.rank === "executive member" ? (
                  <AcUnitTwoToneIcon sx={{ fontSize: 40 }} />
                ) : (
                  <PersonOutlineTwoToneIcon sx={{ fontSize: 40 }} />
                )}
              </div>
            </div>

            <div className="w-[450px] hidden lg:block h-[450px] rounded-full relative overflow-hidden">
              {member?.image && (
                <div className=" bg-white relative border-double rounded-full border-4 border-[#236456] overflow-hidden ">
                  <Image
                    src={bglogo}
                    alt="bglogo"
                    className=" opacity-20 "
                  ></Image>
                  <Image src={member.image} alt={member.fullName} fill />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className=" h-full w-full bg-gray-300 flex md:flex-row flex-col justify-between relative ">
          <div className="lg:w-1/2 w-full h-full  px-5  xl:px-32 py-5 md:py-10">
            <div className=" text-4xl text-[#236456] font-bold flex items-center">
            
              <ContactEmergencyOutlinedIcon
                sx={{ fontSize: 30, marginLeft: 5, marginRight: 2 }}
              />
              <h2 className="px-4">Information</h2>
            </div>
            <div className="w-full my-5 flex flex-col gap-5">
              <div className="w-full border py-2 md:py-5 md:px-3 px-0 rounded-xl bg-white text-[#236456] flex items-center justify-start">
                <BadgeOutlinedIcon sx={{ fontSize: 30 }} className="m-5" />
                <div className="px-5 border-l-2 border-[#236456] border-dashed text-md">
                  <h2>Member ID</h2>
                  <p className=" text-xl">{member.memberId}</p>
                </div>
              </div>
              <div className="w-full border py-2 md:py-5 md:px-3 px-0 rounded-xl bg-white text-[#236456] flex items-center justify-start">
                <AlternateEmailRoundedIcon
                  sx={{ fontSize: 30 }}
                  className="m-5"
                />
                <div className="px-5 border-l-2 border-[#236456] border-dashed text-md">
                  <h2>Email</h2>
                  <p className=" text-xl">{member.email}</p>
                </div>
              </div>
              <div className="w-full border py-2 md:py-5 md:px-3 px-0 rounded-xl bg-white text-[#236456] flex items-center justify-start">
                <CalendarMonthOutlinedIcon
                  sx={{ fontSize: 30 }}
                  className="m-5"
                />
                <div className="px-5 border-l-2 border-[#236456] border-dashed text-md">
                  <h2>Session</h2>
                  <p className=" text-xl">{member.session}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full h-full px-5 xl:px-26  py-5 md:py-10 relative">
            
           <div className=" text-4xl text-[#236456] font-bold flex items-center">
            
              <CompostOutlinedIcon
                sx={{ fontSize: 30,  marginRight: 1 }}
              />
              <h2 className="px-2 lg:py-5 ">Bio</h2>
            </div>
            <div className=" text-xl text-[#236456] bg-white p-5 rounded-xl md:text-2xl md:mt-15 sm:mt-10 mt-5 text-justify ">
                {member.speech} Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure accusantium suscipit, veritatis placeat voluptate, eveniet consectetur asperiores dignissimos nam maiores qui molestiae officiis expedita adipisci accusamus pariatur laudantium repellat assumenda.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberDetailsPage;

// <div className="w-1/2 h-[90%] bg-[#1a3129] absolute bottom-0 left-0 rounded-tr-[30px]"></div>

//  <div className="w-[5px] h-[90%] bg-linear-to-b from-[#cbea75] to-[#1a3129]"></div>

{
  /* <div className={`capitalize mb-1   py-1 ${
                  member.rank === "green"
                    ? "text-[#08CB00]"
                    : member.rank === "blue"
                    ? "text-[#0046FF]"
                    : member.rank === "gold"
                    ? "text-[#FFC900]"
                    : member.rank === "silver"
                    ? "text-[#DDDAD0]"
                    : ""
                }
                        `}
                  >
                    {member.rank === "executive member" ? (
                      <AcUnitTwoToneIcon sx={{ fontSize: 40 }} />
                    ) : (
                      <PersonOutlineTwoToneIcon sx={{ fontSize: 40 }} />
                    )}
                  </div> */
}

//  <Image
//         src={bglogo}
//         alt="bglogo"
//         className=" absolute top-10 opacity-20  "
//       ></Image>
//       <div className="p-2 absolute top-0 z-40 left-0">
// <button
//   onClick={() => router.back()}
//   className="px-5 py-2 border rounded-lg  bg-[#236456] text-white hover:bg-white hover:text-[#1a3129] transition cursor-pointer"
// >
//   ← Back
// </button>

//  <div className="absolute inset-0 z-0 overflow-hidden">
//   <svg
//     className="w-full h-full"
//     viewBox="0 0 100 100"
//     preserveAspectRatio="none"
//   >
//     <path
//       d="M0,0 L100,0 L100,100 L0,100 Z"
//       fill="none"
//       stroke="#e0e0e0"
//       strokeWidth="0.5"
//     />
//     <path d="M0,20 L80,20" stroke="#a3b18a" strokeWidth="0.5" />
//     <path d="M20,0 L20,80" stroke="#a3b18a" strokeWidth="0.5" />
//     <path d="M0,40 L60,40" stroke="#a3b18a" strokeWidth="0.5" />
//     <path d="M40,0 L40,60" stroke="#a3b18a" strokeWidth="0.5" />
//   </svg>
// </div>;
