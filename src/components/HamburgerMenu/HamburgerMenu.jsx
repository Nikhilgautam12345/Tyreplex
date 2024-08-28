import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
const HamburgerMenu = ({showHamburgerMenu,setShowHamburgerMenu}) => {
  const [showCarTyre,setShowCarTyre]=useState(false)
  const [showBikeTyre,setShowBikeTyre]=useState(false)
  const [showCommercialTyre,setShowCommercialTyre]=useState(false)
  const [showAccessories,setShowAccessories]=useState(false)
  const [showMore,setShowMore]= useState(false)
  
  return (
    <>
    <div className="fixed top-0 left-0 w-8/12 h-fit items-center flex justify-end bg-black bg-opacity-50 z-50">
      <div className='w-full h-screen flex flex-col bg-white overflow-y-scroll '>
      <div className="w-full"><div className="py-1 bg-violet-200 flex items-center justify-between px-2"><img className="h-6" src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo-mbl.png?tr=w-150,q-60"/><div onClick={()=>setShowHamburgerMenu(!showHamburgerMenu)}><IoIosClose className="size-6"/></div>  </div></div>
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
      </div>
    </>
  );
};

export default HamburgerMenu;
