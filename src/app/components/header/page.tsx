import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="bg-[#A29875] h-[50px] mb-6 p-4 flex items-center justify-between ">
      {/* Title */}
      <h1 className="text-white font-mono text-[50px] p-[0] leading-[93.75px] text-left py-2  hover:text-gray-600">
        Purity
      </h1>
      <div className="nav">
        <ul className=" md:flex-items-center space-x-4 rounded-md text-size-1px bg-slate-50 text-slate-500 p-1  hover:text-gray-600">
          <li>
            <a href="/" className="flex items-center space-x-2">
             <span> Search for Gold Jewelry, Download Jewellary, and more...</span>
              <CiSearch className="text-black text-xl md:text-2xl" />
            </a>
          </li>
        </ul>
      </div>

      {/* Icons Section */}
      <div className="flex space-x-4 items-center">
        <IoMdHeartEmpty className="text-white md:text-3xl  hover:text-gray-600" />
        <FiUser className="text-white md:text-3xl  hover:text-gray-600" />
        <LuShoppingCart className="text-white md:text-3xl hover:text-gray-600" />
      </div>
    </div>
  );
};

export default Header;
