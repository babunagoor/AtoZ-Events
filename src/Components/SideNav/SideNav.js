import React, { useEffect, useState } from "react";
import signOut from "../../Assets/Images/signOut.png";


const options = [
  {
    label: "Profile Details",
    link: "/vendor-profiledetails",
  },
  {
    label: "Customer Quotations",
    link: "/",
  },
  {
    label: "Transactions",
    link: "/transactions",
  },
  {
    label: "Past Orders",
    link: "/past-orders",
  },
];

function SideNavbar() {
  
  const [vendorDetails,setVendorDetails] = useState('')

  useEffect(() => {
    setVendorDetails(JSON.parse(localStorage.getItem("VendorDetails")))
  }, []);



  return (
    <div>
      <div className="flex flex-col justify-between h-screen bg-[#f5897e] w-[15vw] py-4 px-2 rounded-lg">
      <div>
        <div className="flex flex-col items-center mb-3 text-center">
          <div className="flex items-center justify-center mt-4 mb-3 bg-white border rounded-full w-28 h-28">
            <p className="p-5 text-[50px] font-bold text-black">{vendorDetails?.userName?.charAt(0)}</p>
          </div>
          <div className="flex space-x-2">
            <p className="text-sm font-semibold text-white">
              {vendorDetails.userName}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">
              {vendorDetails.email}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">
              {vendorDetails.phonenumber}
            </p>
          </div>
        </div>
        {options.map((option, index) => (
          <div key={index}>
            <button
              type="button"
              className="w-full p-3 my-3 text-black bg-white border border-white rounded-md"
            >
              <p className="text-lg font-semibold">
                <a href={option.link}>{option.label}</a>
              </p>
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <p className="flex p-3 font-semibold text-black bg-white border border-white rounded-md">
          Sign Out
          <span>
            <img src={signOut} alt="" className="w-6 h-6" />
          </span>
        </p>
      </div>
    </div>
    </div>
    
  );
}

export default SideNavbar;
