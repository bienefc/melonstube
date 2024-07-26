import React from "react";
import headerlogo from "../assets/logo.png";
import { FaVenusMars } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { ImCogs } from "react-icons/im";
import { SlGlobe } from "react-icons/sl";

const PageHeader = () => {
  //mobile:block desktop:justify-between align-items-center mobile:justify-around px-2 mobile:p-1 grid grid-cols-2 max-w-[1536px] mx-auto w-full
  return (
    <div className="grid grid-cols-2 p-2">
      <div>
        <img src={headerlogo} alt="" className="max-w-[350px] max-h-[65px]" />
      </div>
      <div className="flex justify-center items-center ">
        <input
          type="text"
          className="rounded-md px-2 py-1 w-full bg-white border border-grey focus:ring-1 focus:ring-red-500 focus:outline-none text-sm"
          placeholder="Search 45,930,687 videos ..."
        />
        <div>gayge</div>
        <div>setting</div>
        <div>languange</div>
      </div>
    </div>
  );
};

export default PageHeader;
