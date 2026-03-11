import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-4 bg-white">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-1">
        <h2 className="text-center text-base sm:text-lg md:text-xl font-semibold text-gray-700">
          Made with <span className="text-red-500">❤️</span> by
          <span className="font-bold ml-1 text-[#A4161A] hover:underline transition-colors duration-300 cursor-pointer">
            Shankar Pattanaik
          </span>
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
