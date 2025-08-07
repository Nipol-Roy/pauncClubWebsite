/** @format */
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const MemberCard = ({ session }) => {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await fetch(
          `api/getMembers/findBySession?session=${session}`
        );
        if (!res.ok) throw new Error("API call failed");

        const result = await res.json();
        setMembers(result.message);
      } catch (err) {
        console.error("Failed to fetch members:", err);
        setError("Something went wrong");
      }
    };

    if (session) fetchMembers();
  }, [session]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5    justify-center    max-w-[1700px] gap-2 p-4">
      {members.map((member, index) => (
        <div key={index} className=" relative    w-full ">
          <div className="bg-[#c7e678]  rounded-xl shadow-lg">
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

            <div className="font-semibold absolute text-center bottom-0 left-0 line text-base/5 bg-amber-50  px-3 py-2 rounded-tr-xl rounded-bl-md   text-[14px]  ">
              <div className="">
                <div className="text-[15px] uppercase font-bold">
                  {member.fullName}
                </div>
                <div className=" capitalize">{member.designation}</div>
                <div className="uppercase text-sm">ID: {member.memberId}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {error && (
        <div className="text-red-600 text-center col-span-full">{error}</div>
      )}

      {!error && members.length === 0 && (
        <div className="text-center col-span-full text-gray-600">
          No members found for session {session}.
        </div>
      )}
    </div>
  );
};

export default MemberCard;
