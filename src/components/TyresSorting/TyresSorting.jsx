import { useState } from "react";
import SortingDropwdown from "../SortingDropwdown/SortingDropwdown";
import { IoChevronDownOutline } from "react-icons/io5";
const TyresSorting = () => {
 const [brandIsOpen, setBrandIsOpen] = useState(false);
 const [priceIsOpen, setPriceIsOpen] = useState(false);
 const [vehicleIsOpen, setVehicleIsOpen] = useState(false);
 const [vehicleBrandsIsOpen, setVehicleBrandsIsOpen] = useState(false);
 const [modelIsOpen, setModelIsOpen] = useState(false);
 const [variantIsOpen, setVariantIsOpen] = useState(false);
 const [advancedfeature,setAdvancedfeature]=useState(false)

  const brands = ["Apollo", "BEDROCK", "Birla", "Bridgestone", "CEAT"];
  const priceFilter =["Most Popular","Price High to Low","Price Low to High"]
  const vehicle =["Car","Bike", "Scooter"]
  const vehicleBrands = ["Honda","Hero","Suzuki","TVS","Royal Enfield","Bajaj","JAWA","Mahindra","Yamaha","Kawasaki","Ducati","KTM","Vespa","Triumph","BMW","Benelli","Aprilia","Okinawa","Force","Hindustan Motors","Ather","EVeium","Hero Electric","Deltic","Silence","Peugeot","Boom Motors","GT Force","Indus","Greta Electric","Kyte Energy","Lohia","Evolet","Hero Honda","iGowise","DAO Electric","Kinetic","River EV","Bounce","Polaris","BNC","Gemopai","EeVe","Rajdoot","Energy Automobile","Palatino","One Moto","22Motors","ADMS","Enigma","YOBykes","Stella Automobili","Husqvarna","Revolt Motors","Lectrix","sokudo","Benling India","M2GO","Gowel","Joy E-bike","Herald E Bike","BGauss","HCD India","Komaki","Fujiyama","Li-ions","Super Eco","Moto Guzzi","Quantum Energy","Avon","Avan Motors","One Electric","Detel EV"];
  const model =[]
  const variant=[]
  return (
    <div className="tyreSortingContainer my-4">
      <div className="ml-2 poppins sm:text-lg mb-2 font-semibold">Tyres sold by this Dealer</div>
      <div className="flex flex-end justify-end space-x-2 sm:space-x-5">
      <SortingDropwdown  isOpen={brandIsOpen} FilterHeading="Filter By" setIsOpen={setBrandIsOpen} dropdownItem={brands}/>
      <SortingDropwdown isOpen={priceIsOpen} FilterHeading="Most Popular" setIsOpen={setPriceIsOpen} dropdownItem={priceFilter}/>
      <div className="flex items-center poppins sm:text-base text-xs underline text-blue-500 cursor-pointer" onClick={()=>setAdvancedfeature(!advancedfeature)}> Advanced<IoChevronDownOutline /></div>
      </div>
      {advancedfeature &&
      <div className="flex justify-end space-x-2 sm:space-x-5 mt-2 sm:mt-4">
      <SortingDropwdown isOpen={vehicleIsOpen} FilterHeading="Bike" setIsOpen={setVehicleIsOpen} dropdownItem={vehicle}/>
      <SortingDropwdown isOpen={vehicleBrandsIsOpen} FilterHeading="Choose Brand" setIsOpen={setVehicleBrandsIsOpen} dropdownItem={vehicleBrands}/>
      <SortingDropwdown isOpen={modelIsOpen} FilterHeading="Choose Model" setIsOpen={setModelIsOpen} dropdownItem={model}/>
      <SortingDropwdown isOpen={variantIsOpen} FilterHeading="Choose Variant" setIsOpen={setVariantIsOpen} dropdownItem={variant}/>
      </div>
      }
    </div>
  );
};

export default TyresSorting;
