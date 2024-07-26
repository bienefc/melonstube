import React from "react";
import headerlogo from "../assets/logo.png";

const PageHeader = () => {
  //mobile:block desktop:justify-between align-items-center mobile:justify-around px-2 mobile:p-1 grid grid-cols-2 max-w-[1536px] mx-auto w-full
  return (
    <div className="grid grid-cols-2 p-2">
      <div>
        <img src={headerlogo} alt="" className="max-w-[350px] max-h-[65px]" />
      </div>
      <div>searchbar</div>
    </div>
  );
};

export default PageHeader;
