/** @format */
import Speech from "./speech";
const Home = () => {
  return (
    <div>
      <div className="relative h-screen w-full overflow-hidden">
        <video
          src="/assete/video/background.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        ></video>

        <div className="relative z-10 flex items-center justify-center h-full bg-black/50 text-white text-center px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold">
              Welcome to the PAU Nutrition Club
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              A vibrant student community dedicated to promoting nutritional
              education, wellness, and healthy lifestyle practices at Primeasia
              University.
            </p>
            <button className="mt-6 px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded-lg shadow-lg transition">
              <a href="https://www.facebook.com/share/1CqCzvrT2q/"> Join Us</a>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Speech />
      </div>
    </div>
  );
};

export default Home;
