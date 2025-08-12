/** @format */

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DataCollector = () => {
  const [position, setPosition] = useState("bottom");

  const [successMessage, setSuccessMessage] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    memberId: "",
    email: "",
    designation: "",
    speech: "",
    session: "",
    image: "",
    rank: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({ ...formData, [name]: reader.result });
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.fullName ||
      !formData.memberId ||
      !formData.email ||
      !formData.designation ||
      !formData.session ||
      !formData.image
    ) {
      setError("All field Is Required");
      setSuccessMessage("");
      return;
    }

    const res = await fetch("/api/submitForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    let data;
    try {
      data = await res.json();
    } catch (err) {
      console.log("Response is not valid JSON:", err);
      const text = await res.text();
      return;
    }
    console.log(data);

    setSuccessMessage("Form Submit Successful ");
    setError("");
    setFormData({
      fullName: "",
      memberId: "",
      email: "",
      designation: "",
      speech: "",
      session: "",
      image: "",
      rank: "",
    });
  };

  return (
    <>
      <div className="flex justify-center items-center w-[90%] flex-col  bg-[#f9f9f9]  ">
        <div className=" text-md sm:text-lg w-full text-left py-4 px-2 ">
          Create a Profile As a Comittee Member &nbsp;
          <button
            onClick={() => setShowForm(!showForm)}
            className="text-blue-600 sm:text-xl text-lg font-bold hover:underline hover:scale-105 duration-500 cursor-pointer"
          >
            Create Profile
          </button>
        </div>
        {showForm && (
          <div
            className={` ${
              successMessage ? "hidden" : "block  "
            } border rounded-xl w-[90%] md:w-[w-60%] lg:w-[70%] mt-5 p-5 md:p-10 `}
          >
            <h1 className="w-full text-center text-3xl">Create A Profile</h1>
            <form
              onSubmit={handleSubmit}
              className="flex md:gap-5 flex-col w-full "
            >
              <div className="flex flex-col">
                <label className="my-3 font-semibold">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter Your Full Name"
                  className=" py-3 px-3 border rounded-xl outline-[#CBEA75] "
                />
              </div>
              <div className="flex flex-col  gap-4 md:flex-row w-full ">
                <div className="flex flex-col md:w-1/2  flex-1 font-semibold">
                  <label className="m-2"> Email</label>
                  <input
                    placeholder="Enter Your Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className=" p-3 border rounded-xl outline-[#CBEA75]  "
                  />
                </div>
                <div className="md:w-1/2">
                  <div className=" flex flex-col font-semibold">
                    <label className="m-2">ID</label>
                    <input
                      placeholder="Enter Your ID"
                      value={formData.memberId.toUpperCase()}
                      onChange={handleChange}
                      type="text"
                      name="memberId"
                      className=" py-3 px-3 border rounded-xl outline-[#CBEA75] "
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 w-full font-semibold justify-center items-start">
                <div className="flex flex-col flex-1 gap-4 w-full">
                  <div className="flex flex-col">
                    <label htmlFor="designation">Designation</label>
                    <input
                      id="designation"
                      name="designation"
                      type="text"
                      onChange={handleChange}
                      value={formData.designation}
                      placeholder="Enter Your Designation"
                      className="p-3 border rounded-xl  outline-[#CBEA75] "
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <label htmlFor="session">Session</label>
                    <input
                      id="session"
                      name="session"
                      type="text"
                      value={formData.session}
                      onChange={handleChange}
                      placeholder="Enter Session Like (2024-2025)"
                      className="p-3 border rounded-xl outline-[#CBEA75] "
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="image">Upload your Picture</label>
                  <input
                    id="image"
                    type="file"
                    name="image"
                    accept="image"
                    onChange={handleChange}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                 file:rounded-xl file:border-0 file:text-sm file:font-semibold
                 file:bg-[#1A3129] file:text-[#CBEA75] hover:file:bg-[#274D40]"
                  />
                  <div className="mt-5 text-center md:text-left   py-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          className="py-6 w-[264px] text-center text-md"
                        >
                          {formData.rank
                            ? formData.rank.charAt(0).toUpperCase() +
                              formData.rank.slice(1)
                            : "MemberShif Type"}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[270px] ">
                        <DropdownMenuLabel>Select Your Type</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup
                          value={formData.rank}
                          onValueChange={(value) =>
                            setFormData({ ...formData, rank: value })
                          }
                        >
                          <DropdownMenuRadioItem value="gold">
                            Gold
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="silver">
                            Silver
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="executive member">
                            Executive Member
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="blue">
                            Blue
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="green">
                            Green
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
              <div>
                <div className=" flex flex-col">
                  <label>write your speech</label>
                  <textarea
                    name="speech"
                    id=""
                    value={formData.speech}
                    onChange={handleChange}
                    placeholder="Enter Your Special Speech"
                    className="border rounded-xl p-3 font-semibold outline-[#CBEA75]"
                    rows={6}
                  ></textarea>
                </div>
              </div>
              <div className="w-full flex justify-center sm:justify-start items-center">
                <button
                  type="submit"
                  className="w-full cursor-pointer sm:w-1/2 flex justify-center items-center py-3 border rounded-xl bg-[#274D40] text-white active:scale-95 mt-3"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
        {successMessage && (
          <div className="text-green-600 font-semibold text-center m-10 text-2xl">
            {successMessage}
          </div>
        )}
        {error && (
          <div className="text-red-600 font-semibold text-center m-10 text-sm md:text-2xl">
            {error}
          </div>
        )}
      </div>
    </>
  );
};

export default DataCollector;
