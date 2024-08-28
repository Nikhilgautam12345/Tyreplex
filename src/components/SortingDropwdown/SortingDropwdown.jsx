import { FaChevronDown } from "react-icons/fa6";
const SortingDropwdown = ({isOpen,FilterHeading,setIsOpen,dropdownItem}) => {
  return (
    <>
        <div className="filterContainer relative inline-block text-left w-fit">
        <div className="poppins cursor-pointer flex sm:px-2 px-1 py-1 border border-gray-300 bg-white items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
        >
        <div className="sm:text-sm text-xs pr-1">{FilterHeading}</div>
          <div className="">
            <FaChevronDown className="sm:size-3 text-gray-600 size-2"/>
          </div>
        </div>

        {isOpen && (
          <div className="absolute mt-1 w-fit rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
            <div className="py-1">
            <div className="flex justify-center mb-8">
              <input type="text" placeholder="Search" className="w-[-webkit-fill-available] absolute block px-2 rounded mx-1 py-1 sm:text-sm text-xs border-gray-300 focus:outline-none border"/>
              </div>
              <div className="max-h-44 overflow-y-scroll poppins" style={{scrollbarWidth:"none"}}>
              {dropdownItem.length>0 ?
              dropdownItem.map((brand, index) => (
                <div key={index} className="cursor-pointer sm:text-sm text-xs block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white">
                  {brand}
                </div>
              ))
              :
              <div className="text-center py-2 px-2 text-gray-500 sm:text-sm text-xs">
                No items found
              </div>
              }
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default SortingDropwdown