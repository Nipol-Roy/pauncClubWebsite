const contractform = () => {
  return (
    <>
      <div>
        <form action="post" className="w-full">
          <div className="flex w-full justify-center items-center">
            <div>
              <div>
                <label className="text-md font-semibold mb-1 ">Full Name</label>
                <br />
                <input
                  type="text"
                  title="Full name"
                  name="userName"
                  className="lg:w-1/2"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="text-md font-semibold mb-1">Email</label>
                <br />
                <input
                  type="email"
                  title="Email"
                  name="Email"
                  placeholder="Enter your valid mail`"
                />
              </div>
              <div>
                <label className="text-mb font-semibold mb-1">Phone</label>
                <br />
                <input
                  type="number"
                  title="Number"
                  name="Number"
                  placeholder="enter your phone number"
                />
              </div>
              <div>
                <label className="text-mb font-semibold mb-1">Message</label>
                <br />
                <textarea
                  name="message"
                  id=""
                  maxLength={250}
                  className="border h-20 lg:h-32 w-full rounded-xl  "
                ></textarea>
              </div>
              <div className="w-full flex justify-center items-center ">
                <button className=" w-full lg:w-1/2 border py-3 rounded-xl font-semibold text-white  bg-amber-600">Send</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default contractform;
