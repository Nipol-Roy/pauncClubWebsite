/** @format */

"use client";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import MembeCard from "./memberCard";

const Bar = () => {
  const [showCard, setShowCard] = useState(true);
  const [showSession, setShowSession] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [selectdSession, setSelectedSession] = useState("2023-2024");

  const [searchID, setSearchID] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [showRes, setShowRes] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setError("");
    setShowRes(false);

    if (!searchID.trim()) {
      setError("ID is required.");
      setSearchData(null);
      setShowRes(true);
      return;
    }

    try {
      const res = await fetch(`/api/getMembers/findById?memberId=${searchID}`);
      const data = await res.json();

      if (!data || !data.member || data.member.memberId !== searchID) {
        setError("Member not found ID mismatch.");
        setSearchData(null);
      } else {
        setSearchData(data);
      }
    } catch (err) {
      setError("An error occurred while fetching data.");
      setSearchData(null);
    }

    setShowRes(true);
  };

  return (
    <>
      <div className="bg-[rgb(26,49,41)] rounded-b-xl">
        {showSearch && (
          <div className="absolute w-[90%] pt-5 pb-4 z-30 bg-[#1A3129]  rounded-b-xl flex justify-center items-center flex-col">
            <div className="w-full flex justify-end sm:justify-center sm:hidden">
              <button
                onClick={() => setShowSearch(false)}
                className="rounded-xl hover:scale-125 py-1 px-2"
              >
                <CloseIcon className="text-[#CBEA75]" />
              </button>
            </div>

            <div className="flex justify-center items-start">
              <div className="py-2">
                <div className="flex justify-center items-center  border border-[#CBEA75] rounded-xl">
                  <input
                    value={searchID}
                    onChange={(e) => setSearchID(e.target.value.toUpperCase())}
                    type="text"
                    placeholder="Enter your ID"
                    className="px-4 md:px-10 py-2 text-sm md:text-xl text-[#CBEA75] rounded-xl outline-none"
                  />
                  <button
                    onClick={() => {
                      handleSearch();
                    }}
                    className="px-6 text-[#1A3129] text-xl rounded-r-lg hover:scale-105 py-3 bg-[#CBEA75] "
                  >
                    Find
                  </button>
                </div>

                {showRes && (
                  <>
                    {searchData && (
                      <div className="w-full cursor-pointer max-w-xl mt-2 rounded-xl bg-white p-4 flex items-center gap-4 shadow-md hover:shadow-lg transition">
                        <img
                          src={searchData.member.image}
                          alt="Profile"
                          className="w-16 h-16 rounded-full border-2 bg-[#CBEA75] border-[#CBEA75] object-cover"
                        />
                        <div className="text-left text-[#1A3129]">
                          <div className="text-lg font-semibold">
                            {searchData.member.fullName}
                          </div>
                          <div className="text-sm text-[#555]">
                            {searchData.member.designation}
                          </div>
                          <div className="text-xs text-gray-600">
                            {searchData.member.memberId}
                          </div>
                        </div>
                      </div>
                    )}
                    {error && (
                      <div className="px-5 w-full py-3 text-md md:text-xl capitalize text-red-700">
                        {error}
                      </div>
                    )}
                  </>
                )}
              </div>

              <div className="w-full hidden sm:flex justify-end  px-10">
                <button
                  onClick={() => {
                    setShowSearch(false);
                    setShowRes(false);
                  }}
                  className="rounded-xl hover:scale-125 py-1"
                >
                  <CloseIcon
                    className="text-[#CBEA75] duration-700 "
                    sx={{ fontSize: 30 }}
                  />
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="w-full border-[#1A3129] p-2 sm:p-5">
          <div className="text-center w-full flex justify-center text-white gap-1 sm:gap-8 items-center">
            <div className="rounded-xl text-sm sm:text-xl">
              <div
                onClick={() => setShowSession(!showSession)}
                className="flex flex-col border sm:text-[17px] text-[13px] px-3 py-2 sm:px-3 sm:py-3 cursor-pointer rounded-xl active:scale-95 hover:bg-[#F4F8DC] hover:text-black"
              >
                {selectdSession}
              </div>
              {showSession && (
                <div className="relative ">
                  <div className="absolute top-5 p-5  bg-[#CBEA75] text-[#1A3129] w-[315px] rounded-xl sm:left-[-20px] left-[-10px] flex flex-col gap-3 z-20">
                    {[
                      "2020-2021",
                      "2021-2022",
                      "2022-2023",
                      "2023-2024",
                      "2024-2025",
                    ].map((session) => (
                      <div
                        key={session}
                        onClick={() => {
                          setSelectedSession(session);
                          setShowCard(true);
                          setShowSession(false);
                        }}
                        className="px-5 py-2 border duration-300 hover:bg-[#f4f8dc] hover:text-[#1A3129]  hover:scale-105 cursor-pointer border-[#1A3129] rounded-xl"
                      >
                        Session {session}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="border py-2 px-3 sm:px-5 sm:py-3 sm:text-[17px] text-[13px] cursor-pointer active:scale-95 hover:bg-[#F4F8DC] hover:text-black sm:text-xl rounded-xl">
              Advisor
            </div>
            <div className="border py-2 px-3 text-[13px] sm:px-5 sm:py-3 sm:text-[17px] cursor-pointer active:scale-95 hover:bg-[#F4F8DC] hover:text-black sm:text-xl rounded-xl">
              Facilitators
            </div>

            <div
              className="px-5 sm:px-10 py-2 text-[10px] material-icons text-icon-custom-medium   border rounded-xl hover:bg-[#f4f8dc]   hover:text-black border-white"
              onClick={() => {
                setShowSearch(true);
                setShowSession(false);
              }}
            >
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>

      {showCard && <MembeCard session={selectdSession} />}
    </>
  );
};

export default Bar;
