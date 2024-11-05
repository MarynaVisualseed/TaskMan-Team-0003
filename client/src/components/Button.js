import React from "react";
import clsx from "clsx";

// const Button = ({ icon, label, type, className, onClick = () => {} }) => {
//   return (
//     <button
//       type={type || "button"}
//       className={clsx("px-3 py-2 outline-none", className)}
//     >
//       <span>{label}</span>
//       {icon && icon}
//     </button>
//   );
// };

const Button = ({ children, gradientDuoTone, type, className }) => {
  const gradientClasses = {
    purpleToPink:
      "text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",
    greenToBlue:
      "text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",
    purpleToBlue:
      "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",
    cyanToBlue:
      "text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",
    oinkToOrange:
      "text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",
    tealToLime:
      "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",
    redToYellow:
      "text-gray-900 bg-gradient-to-r from-red-400 via-red-500 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",
  };

  return (
    <button
      type={type}
      className={clsx(
        "px-4 py-2 rounded-full text-white",
        gradientClasses[gradientDuoTone],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
