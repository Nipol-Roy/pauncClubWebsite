/** @format */
"use client";

const ErrorAlert = ({ message, type = "error", onClose }) => {
  if (!message) return null;

  const baseStyle =
    "p-4 my-4 rounded-lg text-sm flex justify-between items-center transition duration-300";

  const variants = {
    error: "bg-red-100 text-red-800 border border-red-400",
    warning: "bg-yellow-100 text-yellow-800 border border-yellow-400",
    success: "bg-green-100 text-green-800 border border-green-400",
    info: "bg-blue-100 text-blue-800 border border-blue-400",
  };

  return (
    <div className={`${baseStyle} ${variants[type]}`}>
      <span>{message}</span>
      {onClose && (
        <button
          className="text-xl font-bold ml-4 hover:text-black"
          onClick={onClose}
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default ErrorAlert;
