/** @format */

const Map = () => {
  return (
    <>
      <div className="text-center lg:w-1/2 text-lg mb-6 p-2  text-gray-700">
        <div className="w-full m p-5 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Google Maps Location"
            className="w-full h-64 md:h-96 "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.306117646653!2d90.42332927420474!3d23.80767228619067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7f9e292b5e7%3A0xf512d0b2c643e9d9!2sPrimeasia%20University!5e0!3m2!1sen!2sbd!4v1691121888888!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Map;
