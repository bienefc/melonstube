import React from "react";
import headerlogo from "../assets/logo.png";
import { FaVenusMars } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { ImCogs } from "react-icons/im";
import { SlGlobe } from "react-icons/sl";

const PageHeader = () => {
  //mobile:block desktop:justify-between align-items-center mobile:justify-around px-2 mobile:p-1 grid grid-cols-2 max-w-[1536px] mx-auto w-full
  return (
    <>
      <div className="grid grid-cols-2 p-2 max-w-[1536px] mx-auto w-full">
        <div>
          <img src={headerlogo} alt="" className="max-w-[350px] max-h-[65px]" />
        </div>
        <div className="flex justify-center items-center gap-1">
          <input
            type="text"
            className="rounded-md px-2 py-1 w-full bg-white border border-grey focus:ring-1 focus:ring-red-500 focus:outline-none text-sm"
            placeholder="Search 45,930,687 videos ..."
          />
          <div className="px-2 py-2 bg-[#b50f17] hover:bg-[#b50f17]/80 rounded-md text-white cursor-pointer">
            <FaVenusMars />
          </div>
          <div className="px-2 py-2 bg-[#b50f17] hover:bg-[#b50f17]/80 rounded-md text-white cursor-pointer">
            <ImCogs />
          </div>
          <div className="flex justify-center items-center px-2 py-2 bg-[#b50f17] hover:bg-[#b50f17]/80 rounded-md text-white cursor-pointer text-xs gap-1">
            <SlGlobe size={15} />
            <span className="capitalize">english</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
