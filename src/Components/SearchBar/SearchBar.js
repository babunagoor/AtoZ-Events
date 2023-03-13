import React from "react";
import SearchIcon from '../../Assets/Images/SearchIcon.png'
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="shadow-xl searchLabel">
      <div className="flex flex-row items-center pl-1 space-x-1">
        <input placeholder="Search For" className="searchfor rounded-2xl text-[16px] font-semibold text-[#767676]" />
      </div>
      <p className="hline" />
      <div className="flex flex-row items-center pl-1 space-x-1">
        <span>In</span>
        <input placeholder="(E.g. Hyderabad)" className="focus:outline-none h-[45px] border-none rounded-2xl text-[16px] text-[#555454] font-semibold" />
        <img src={SearchIcon}  className={`w-[25px] h-[25px] cursor-pointer`} alt="Icon"/>
      </div>
    </div>
  );
}
