import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import logo from "../../Assets/Images/AtoZ1.png";
import Chef from "../../Assets/Images/cooking.jpg";
import flowerVendor from "../../Assets/Images/flowers.avif";
import Photographer from "../../Assets/Images/night-photography.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";
import { useNavigate } from 'react-router-dom';
import  SliderCard from '../../Pages/SliderCard/SliderCard'
import { Footer } from "../Footer/Footer";

export default function Header() {
  const navigateTo = useNavigate();

  const [isVendorList, setIsVendorList] = useState(false);

  const handleVendorList = () => {
    setIsVendorList((prev) => !prev);
  };

  return (
    <div className="flex flex-col">
      <div className="bg-[#9a10e9] h-[80px] rounded-t-3xl items-center">
        <div className="flex items-center justify-between pt-[14px] px-6">
          <p>
            <img src={logo} alt="AtoZ" className="w-[88px]" />
          </p>
          <div className="flex flex-row items-center space-x-2">
            <div className="flex text-[20px] font-[500] gap-x-4 text-[#fff]">
              <p
                className="flex flex-col "
                onClick={handleVendorList}
              >
                <span className="hover:text-[#444b0f] cursor-pointer">Retailers</span>
                {isVendorList && (
                  <div className="absolute mt-8 text-sm font-semibold cursor-pointer hover:underline"
                  onClick={() => navigateTo('/vendor-registration')}
                  >
                    Are You A Vendor?
                  </div>
                )}
              </p>
              {isVendorList && (
                <div className="absolute top-[90px] min-h-auto w-[300px] -ml-[21px] rounded-b-2xl z-50 vendorlist">
                  <div className="flex flex-col space-y-[10px] px-[10px] py-2">
                    {VendorList.map((item, index) => {
                      return (
                        <div key={index}>
                          <p className="text-base cursor-pointer hover:text-[#f5897e]">
                            {item.vendor}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              <p className="cursor-pointer hover:text-[#444b0f]"
              //  onClick={()=> navigateTo('/Login/authenticate')}
              >Log In</p>
            </div>

            <div>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
      <Carousel
        axis="horizontal"
        showIndicators={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={1500}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        // centerMode={true}
      >
        <img src={Chef} alt="Chefs Vendor" />
        <img src={flowerVendor} alt="Chefs Vendor" />
        <img src={Photographer} alt="Chefs Vendor" />
      </Carousel>
      <div>
         <SliderCard />
         <Footer />
      </div>
    </div>
  );
}

const VendorList = [
  {
    vendor: "Designer",
  },
  {
    vendor: "Makeup Artists",
  },
  {
    vendor: "Caterers",
  },
  {
    vendor: "Hospitality Management",
  },
  {
    vendor: "Live Entertaiment",
  },
  {
    vendor: "Photoshoot",
  },
  {
    vendor: "Equipmental Rentals",
  },
  {
    vendor: "florist",
  },
  {
    vendor: "Audio-visual",
  },
  {
    vendor: "Fabricator",
  },
  {
    vendor: "Banquet Halls",
  },
  {
    vendor: "Kalyana Mandapams",
  },
];
