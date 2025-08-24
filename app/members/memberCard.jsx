/** @format */
"use client";

import AcUnitTwoToneIcon from "@mui/icons-material/AcUnitTwoTone";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import CardbgImg from "../../public/assete/images/paunclogo.png";

const MemberCard = ({ session }) => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await fetch(
          `/api/getMembers/findBySession?session=${session}`
        );
        if (!res.ok) throw new Error("API request failed");

        const data = await res.json();
        setMembers(data.message);
      } catch (err) {
        console.error("Error fetching members:", err);
        setError("Something went wrong while loading members");
      } finally {
        setLoading(false);
      }
    };

    if (session) fetchMembers();
  }, [session]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 max-w-[1700px] mx-auto">
      {loading && Array.from({ length: 5 }).map((_, i) => <Loading key={i} />)}

      {!loading &&
        members.map((member, index) => (
          <div key={index} className="relative my-4 w-full">
            <Image
              src={CardbgImg}
              alt="background"
              className="absolute top-5 left-0 opacity-20 scale-110"
            />

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {member.image && (
                <div className="relative w-full h-[270px]">
                  <Image
                    src={member.image}
                    alt={member.fullName}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="flex justify-between items-center text-center w-full bg-[#1a3129] text-white p-3 rounded-b-md">
                <div className="w-full">
                  <div className="text-lg font-bold capitalize">
                    {member.fullName}
                  </div>
                  <div className="capitalize">{member.designation}</div>
                  <div className="uppercase text-sm">ID: {member.memberId}</div>
                </div>

                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex justify-center items-center mb-2
                      ${
                        member.rank === "green"
                          ? "text-[#08CB00]"
                          : member.rank === "blue"
                          ? "text-[#0046FF]"
                          : member.rank === "gold"
                          ? "text-[#FFC900]"
                          : member.rank === "silver"
                          ? "text-[#DDDAD0]"
                          : ""
                      }`}
                  >
                    {member.rank === "executive member" ? (
                      <AcUnitTwoToneIcon />
                    ) : (
                      <PersonOutlineTwoToneIcon fontSize="large" />
                    )}
                  </div>

                  <button className="px-5 py-1 border rounded-lg hover:bg-white hover:text-[#1a3129] text-sm transition">
                    <Link href={`/members/${member._id}`}>Visit</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

      {error && (
        <div className="text-red-600 text-center col-span-full">{error}</div>
      )}

      {!loading && !error && members.length === 0 && (
        <div className="text-center col-span-full text-gray-600">
          No members found for session {session}.
        </div>
      )}
    </div>
  );
};

export default MemberCard;
