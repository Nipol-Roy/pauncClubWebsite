/** @format */
"use client";

import AcUnitTwoToneIcon from "@mui/icons-material/AcUnitTwoTone";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import CardbgImg from "../../public/assete/images/paunclogo.png";

const MemberCard = ({ session }) => {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await fetch(
          `api/getMembers/findBySession?session=${session}`
        );
        if (!res.ok) throw new Error("API call failed");

        const result = await res.json();
        setMembers(result.message);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch members:", err);
        setError("Something went wrong");
        setLoading(false);
      }
    };

    if (session) fetchMembers();
  }, [session]);
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3   xl:grid-cols-4 2xl:grid-cols-5    justify-center    max-w-[1700px] gap-2 ">
      {loading
        ? Array.from({ length: 5 }).map((_, i) => <Loading key={i} />)
        : members.map((member, index) => (
            <div key={index} className=" relative  my-3   w-full ">
              <Image
                src={CardbgImg}
                alt="background image"
                className=" absolute top-5 opacity-20 scale-110 left-0"
              />
              <div className="bg-white   rounded-xl shadow-lg">
                {member.image && (
                  <div className="relative w-full mb-10  h-[300px]">
                    <Image
                      src={member.image}
                      alt={member.fullName}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                )}

                <div className=" flex justify-between items-center mb-10  font-semibold  text-center w-full absolute bottom-[-40px] box-border text-base/5 bg-[#1a3129] text-white px-2 py-2  rounded-b-md   text-[14px]  ">
                  <div className="  w-full">
                    <div className="text-[15px] capitalize font-bold">
                      {member.fullName}
                    </div>
                    <div className=" capitalize">{member.designation}</div>
                    <div className="uppercase text-sm">
                      ID: {member.memberId}
                    </div>
                  </div>
                  <div className="flex flex-col  justify-center items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex justify-center items-center    ${
                        member.rank == "green"
                          ? "text-[#08CB00]"
                          : member.rank == "blue"
                          ? "text-[#0046FF]"
                          : member.rank == "gold"
                          ? "text-[#FFC900]"
                          : member.rank == "silver"
                          ? "text-[#DDDAD0]"
                          : ""
                      }  `}
                    >
                      {member.rank == "executive member" ? (
                        <AcUnitTwoToneIcon />
                      ) : (
                        <PersonOutlineTwoToneIcon fontSize="large" />
                      )}
                    </div>
                    <div className="px-7 py-2 border rounded-xl hover:bg-white text-sm cursor-pointer duration-300 hover:text-[#1a3129]">
                      Visit
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

      {error && (
        <div className="text-red-600 text-center col-span-full">{error}</div>
      )}

      {!error && !loading && members.length === 0 && (
        <div className="text-center col-span-full text-gray-600">
          No members found for session {session}.
        </div>
      )}
    </div>
  );
};

export default MemberCard;
