import { useState } from "react";
import { LuUser2 } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
const NavBar = () => {
  const [showHamburgerMenu,setShowHamburgerMenu]=useState(false)
  return (
    <>
      <div className="navBar flex items-center justify-between bg-white shadow-md lg:px-12 xl:px-28 sm:px-5 px-4 py-2 md:py-0">
        {/* Logo Container */}
        <div className="logo flex items-center">
          {/* Hamburger Menu */}
          <span className="hamburgerMenu block md:hidden pr-2 sm:pr-4" onClick={()=>setShowHamburgerMenu(!showHamburgerMenu)}>
          <RxHamburgerMenu className=" size-6" />
          </span>
          {/* Logo Image */}
          <div className="mainLogo cursor-pointer sm:h-10">
            <img
              src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60"
              className="w-full h-full "
              alt="Logo"
            />
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="navHeadingContainer lg:text-base text-sm hidden md:flex font-semibold items-center relative">
          <div className="navHeading mx-1.5 lg:mx-3 relative cursor-pointer transition-colors duration-300 group">
            <div className="text-black no-underline py-4 ">Car Tyres</div>
            <div className="navSubHeadingContainer z-10 w-max absolute hidden group-hover:flex flex-col top-full left-0 bg-white border border-gray-200">
              <div className="text-red-600 px-2 font-thin">
                Popular Car Tyre Brands
              </div>
              {[
                "MRF Tyres",
                "CEAT Tyres",
                "Goodyear Tyres",
                "Apollo Tyres",
                "Bridgestone Tyres",
                "JK Tyres",
                "Michelin Tyres",
                "All Car Tyres",
              ].map((tyre, index) => (
                <div
                  key={index}
                  className="navSubHeading px-2 py-1 hover:bg-gray-100"
                >
                  {tyre}
                </div>
              ))}
            </div>
          </div>

          <div className="navHeading  mx-1.5 lg:mx-3 relative cursor-pointer transition-colors duration-300 group">
            <div className="text-black no-underline py-4">Bike Tyres</div>
            <div className="navSubHeadingContainer z-10 w-max absolute hidden group-hover:flex flex-col top-full left-0 bg-white border border-gray-200">
              <div className="text-red-600 px-2 font-thin">
                Popular Bike Tyre Brands
              </div>
              {[
                "MRF Tyres",
                "CEAT Tyres",
                "Apollo Tyres",
                "Bridgestone Tyres",
                "JK Tyres",
                "Michelin Tyres",
                "Pirelli Tyres",
                "All Bike Tyres",
              ].map((tyre, index) => (
                <div
                  key={index}
                  className="navSubHeading px-2 py-1 hover:bg-gray-100"
                >
                  {tyre}
                </div>
              ))}
            </div>
          </div>

          <div className="navHeading mx-1.5 lg:mx-3 relative cursor-pointer transition-colors duration-300">
            <div className="text-black no-underline py-4">Tyre Pressure</div>
          </div>

          <div className="navHeading mx-1.5 lg:mx-3 relative cursor-pointer transition-colors duration-300 group">
            <div className="text-black no-underline py-4">Commercial Tyres</div>
            <div className="navSubHeadingContainer z-10 w-max absolute hidden group-hover:flex flex-col top-full left-0 bg-white border border-gray-200">
              <div className="navSubHeading px-2 py-1 hover:bg-gray-100">
                All Commercial Tyres
              </div>
            </div>
          </div>

          <div className="navHeading mx-1.5 lg:mx-3 relative cursor-pointer transition-colors duration-300 group">
            <div className="text-black no-underline py-4">Accessories</div>
            <div className="navSubHeadingContainer z-10 w-max absolute hidden group-hover:flex flex-col top-full left-0 bg-white border border-gray-200">
              {["Accessories", "Batteries", "Alloys Wheels"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="navSubHeading px-2 py-1 hover:bg-gray-100"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="navHeading mx-1.5 lg:mx-3 relative cursor-pointer transition-colors duration-300 group">
            <div className="text-black no-underline py-4">More</div>
            <div className="navSubHeadingContainer z-10 w-max absolute hidden group-hover:flex flex-col top-full left-0 bg-white border border-gray-200">
              {[
                "CashBack Offer",
                "Find Tyre Dealers",
                "Compare Tyres",
                "Are you a Tyre Dealer",
                "Wheel balancing",
                "Wheel Alignment",
              ].map((item, index) => (
                <div
                  key={index}
                  className="navSubHeading px-2 py-1 hover:bg-gray-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Login */}
        <div className="authenticationContainer cursor-pointer font-semibold flex items-center">
          <div className="border border-black rounded-full">
            <LuUser2 className="sm:size-6 md:size-4 lg:size-5 size-7"/>
          </div>
          <div className="loginHeading pl-1 hidden sm:block md:text-sm lg:text-base">Login</div>
        </div>
      </div>
      {showHamburgerMenu && <HamburgerMenu showHamburgerMenu={showHamburgerMenu} setShowHamburgerMenu={setShowHamburgerMenu} />}
    </>
  );
};

export default NavBar;
