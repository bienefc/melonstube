import React from "react";
import headerlogo from "../assets/logo.png";

const PageHeader = () => {
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
