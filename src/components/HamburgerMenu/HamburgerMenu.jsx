import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";

const HamburgerMenu = () => {
  const [showCarTyre,setShowCarTyre]=useState(false)
  const [showBikeTyre,setShowBikeTyre]=useState(false)
  const [showCommercialTyre,setShowCommercialTyre]=useState(false)
  const [showAccessories,setShowAccessories]=useState(false)
  const [showMore,setShowMore]= useState(false)
  return (
    <>
      <div className='w-full h-full flex flex-col bg-white mt-1'>
        <div className="flex items-center poppins text-sm px-2 cursor-pointer" onClick={()=>setShowCarTyre(!showCarTyre)}>Car Tyres <MdNavigateNext /></div>
        {showCarTyre && <div className="px-6 text-sm poppins">
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
                  className="navSubHeading cursor-pointer px-2 hover:bg-gray-100"
                >
                  {tyre}
                </div>
              ))}
        </div>}
        <div className="flex items-center poppins cursor-pointer text-sm px-2" onClick={()=>setShowBikeTyre(!showBikeTyre)}>Bike Tyres <MdNavigateNext /></div>
        {showBikeTyre && <div className="px-6 text-sm poppins">
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
                  className="navSubHeading cursor-pointer px-2 hover:bg-gray-100"
                >
                  {tyre}
                </div>
              ))}
        </div>}
        <div className="flex items-center poppins text-sm px-2 cursor-pointer">Tyre Pressure </div>
        <div className="flex items-center poppins text-sm px-2 cursor-pointer" onClick={()=>{setShowCommercialTyre(!showCommercialTyre)}}>Commercial Tyres <MdNavigateNext /></div>
        {showCommercialTyre && <div className="px-6 text-sm poppins">
        <div className="navSubHeading cursor-pointer px-2 hover:bg-gray-100">All Commercial Tyres</div>
        </div>}
        <div className="flex items-center poppins text-sm px-2 cursor-pointer" onClick={()=>setShowAccessories(!showAccessories)}>Accessories <MdNavigateNext /></div>
        {showAccessories && <div className="px-6 text-sm poppins">
        {["Accessories", "Batteries", "Alloys Wheels"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="navSubHeading px-2 hover:bg-gray-100"
                  >
                    {item}
                  </div>
                )
              )}
        </div>}
        <div className="flex items-center poppins text-sm px-2 cursor-pointer" onClick={()=>setShowMore(!showMore)}>More <MdNavigateNext /></div>
        {showMore && <div className="px-6 text-sm poppins">
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
                  className="navSubHeading px-2 hover:bg-gray-100"
                >
                  {item}
                </div>
              ))}
        </div>}
      </div>
    </>
  );
};

export default HamburgerMenu;
