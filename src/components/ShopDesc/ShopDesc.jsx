import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdVerifiedUser } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
const ShopDesc = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    "https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300",
    "https://lh3.googleusercontent.com/places/AAcXr8ryfQqAWHDmAPXAuK5o1Sk81OiWbLXHHNRm8OTBLFZE41-3arlK-Q7aMXjXp106o8p8Dca6OTnSTynW6ykkg86zy1-j4JRkpXI=s1600-w300",
    "https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300",
  "https://lh3.googleusercontent.com/places/AAcXr8ryfQqAWHDmAPXAuK5o1Sk81OiWbLXHHNRm8OTBLFZE41-3arlK-Q7aMXjXp106o8p8Dca6OTnSTynW6ykkg86zy1-j4JRkpXI=s1600-w300",
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="showDescriptionWrapper flex justify-center">
      <div className="shopDescription md:[280px] bg-white p-3 mt-4 flex rounded w-10/12  md:flex-row flex-col">
      {/* carousel component */}
        <div id="default-carousel"className="relative flex justify-center" data-carousel="slide">
          <div className="relative h-64 md:w-64 w-full overflow-hidden rounded-lg">
            {items.map((src, index) => (
              <div
                key={index}
                className={`${
                  currentIndex === index ? "block" : "hidden"
                } duration-700 ease-in-out`}
                data-carousel-item
              >
                <img
                  src={src}
                  className="absolute object-fill block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <div className="absolute z-30 flex -translate-x-1/2 bottom-4 left-1/2 space-x-3 rtl:space-x-reverse">
            {items.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-2 h-2 rounded-full ${
                  currentIndex === index ? "bg-white" : "bg-gray-400"
                }`}
                aria-current={currentIndex === index}
                aria-label={`Slide ${index + 1}`}
                data-carousel-slide-to={index}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-2 cursor-pointer group focus:outline-none"
            data-carousel-prev
            onClick={handlePrev}
          >
            <IoIosArrowBack className="text-white bg-black bg-opacity-40 hover:bg-opacity-50 size-8 p-2 rounded-full"/>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-2 cursor-pointer group focus:outline-none"
            data-carousel-next
            onClick={handleNext}
          >
            <IoIosArrowForward className="text-white bg-black bg-opacity-40 hover:bg-opacity-50 size-8 p-2 rounded-full"/>
          </button>
        </div>

        <div className="shopInfo flex flex-col xl:ml-8 md:ml-4">
          <div className="shopName sm:flex poppins">
          <div className="pr-3 xl:text-3xl sm:text-xl font-medium mt-2 sm:mt-0">
              SHREE HEMKUNT TYRES AND SERVICES
            </div>
            <span className="verificationContainer flex pt-1 mr-4 text-green-600 text-sm">
              <span className="verified-icon relative">
              <MdVerifiedUser className="size-6"/>
              </span>
              <span className="verifiedUser ml-1 font-medium"> Verified </span>
            </span>
          </div>
          <div className="ratingContainer sm:flex items-center xl:mt-2 ">
            <div className="flex items-center my-0.5">
            <div className="ratingNumber w-fit text-white text-sm sm:text-base bg-green-600 rounded sm:px-2 px-1 xl:py-0.5 sm:mr-3 mr-1">
              4.8
            </div>
            <div className="starContainer flex sm:mr-3 mr-2">
            <FaStar className="text-yellow-400 sm:mx-0.5"/>
            <FaStar className="text-yellow-400 sm:mx-0.5"/>
            <FaStar className="text-yellow-400 sm:mx-0.5"/>
            <FaStar className="text-yellow-400 sm:mx-0.5"/>
            <FaStar className="text-yellow-400 sm:mx-0.5" />
            </div>
            <div className="underline italic mr-3 sm:text-base text-sm text-gray-600">
              2278 Reviews
            </div>
            </div>
            <div className="rateButton">
              <button className="rounded text-sm sm:text-base bg-white border border-gray-300 px-2 xl:py-px hover:bg-gray-300 hover:text-gray-600">
                Rate
              </button>
            </div>
          </div>
         
          <div className="shopAddressContainer xl:mt-3 lg:text-base text-sm poppins">
            <div className="shopAddress xl:py-1 pt-1 flex ">
              <span className="pt-1"><FaLocationDot /></span>
              <span className="xl:ml-2 ml-1">
                PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02
                INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
              </span>
            </div>
            <div className="shopTimingsContainer pt-0.5 pb-1  flex items-center ">
             <span className="pt-0.5"><FaClock/></span>
              <span className="xl:ml-2 ml-1">
                Open - Monday to Sunday - 10:00AM to 8:00PM
              </span>
            </div>
          </div>
          <div className="directionButton ml-3 sm:ml-0 flex-grow flex items-end xl:mt-3 mt-2" >
            <button className=" py-1 px-2 text-sm xl:px-4 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-3xl font-medium  ">
              Get Direction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDesc;
