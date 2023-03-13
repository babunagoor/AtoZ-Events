import React from "react";
import SideNavbar from "../../Components/SideNav/SideNav";
import ProfileDetails from "../ProfileDetails/ProfileDetails";
import { useLocation } from "react-router-dom";

export default function VendorDahboard() {
  const location = useLocation();

  return (
    <div className="flex">
      <SideNavbar />
      <div className="flex flex-row justify-between space-x-10 pl-[40px]">
      {/* <div className="bg-white w-[400px] h-[500px] rounded-xl text-center justify-center items-center p-2 shadow-2xl">
          <p className="flex flex-row items-center justify-center text-[#767676] font-semibold text-[32px]">
            Upload Images
          </p>
        </div>
      <div className="bg-white w-[400px] h-[500px] rounded-xl text-center justify-center items-center p-2 shadow-2xl">
          <p className="flex flex-row items-center justify-center text-[#767676] font-semibold">
            
            {" "}
            Customer quotation
            <span className="h-[20px] w-[20px] rounded-full text-center text-white bg-red-500">
              <span className="-mt-2">2</span>
              </span>
          </p>
        </div>
      </div> */}
      </div>
    </div>
  );
}
