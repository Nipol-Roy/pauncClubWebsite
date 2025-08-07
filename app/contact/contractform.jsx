/** @format */

"use client";

import { useState } from "react";

const contractform = () => {
  const [state, setState] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.fullName || !form.email || !form.phone || !form.message) {
      setState("Please Fill in All Fields");
    }

    if (form.message.length > 250) {
      setState("Message must be under 250 characters");
    }

    try {
      const res = await fetch("/api/connection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setState(data.message);
      if (res.ok) {
        console.log("hello world i am nipol");
        setForm({ fullName: "", email: "", phone: "", message: "" });
      }
    } catch (err) {
      setState("Something was wrong");
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex w-full justify-center items-center">
            <div className="w-full lg:p-20 p-3 ">
              <div className="flex flex-col gap-4 justify-between lg:flex-row">
                <div className="lg:w-1/2">
                  <label className="text-md font-semibold my-3  ">
                    Full Name
                  </label>
                  <input
                    type="text"
                    title="Full name"
                    onChange={handleChange}
                    name="fullName"
                    className=" shadow-inner shadow-[#eefaa8] bg-[#eef8d3] p-3 outline-none rounded-xl w-full "
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="lg:w-1/2 ">
                  <label className="text-md font-semibold my-5 ">Email</label>
                  <br />
                  <input
                    onChange={handleChange}
                    type="email"
                    title="Email"
                    name="email"
                    placeholder="Enter your valid mail`"
                    className="shadow-inner shadow-[#eefaa8] bg-[#eef8d3] p-3 outline-none w-full rounded-xl "
                  />
                </div>
              </div>

              <div>
                <label className="text-mb font-semibold my-5">Phone</label>
                <br />
                <input
                  onChange={handleChange}
                  type="number"
                  title="Number"
                  name="phone"
                  placeholder="enter your phone number"
                  className="shadow-inner shadow-[#eefaa8] bg-[#eef8d3] w-full outline-none p-3 rounded-xl"
                />
              </div>
              <div>
                <label className="text-mb font-semibold my-5">Message</label>
                <br />
                <textarea
                  title="Message"
                  onChange={handleChange}
                  name="message"
                  id=""
                  maxLength={250}
                  className="shadow-inner shadow-[#eefaa8] outline-none bg-[#eef8d3] h-20 w-full rounded-xl p-3 "
                ></textarea>
              </div>
              <div className="w-full flex justify-center items-center ">
                <button
                  type="submit"
                  className=" active:scale-95 duration-500 w-full cursor-pointer py-3 rounded-xl font-semibold shadow-inner shadow-[#dff07e]   bg-[#cbea7b]"
                >
                  Send
                </button>
              </div>
              {state && (
                <p className="text-center text-sm mt-2 text-green-700 font-medium">
                  {state}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default contractform;
