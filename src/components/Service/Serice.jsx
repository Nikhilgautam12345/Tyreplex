const Serice = () => {
  return (
   <>
    <div className="my-3 flex justify-center">
      <div className="bg-white rounded p-3  w-10/12">
        <div className="font-semibold mb-3 sm:text-lg poppins ">Services offered by this dealer</div>
        <div className="flex overflow-x-scroll" style={{ scrollbarWidth: "none" }}>
          <div className="py-4 mx-3 flex-shrink-0 flex flex-col items-center shadow-md px-12"> {/* Updated to use shadow and padding */}
            <img 
              src="https://cdn.tyreplex.net/images/wheel-alignment-bal.png?tr=w-100" 
              alt="Wheel Balancing" 
              className="mb-2"
            />
            <span className="font-semibold">Wheel Balancing</span>
            <button className="bg-[#ed1c24] w-fit text-white py-1 px-4 rounded mt-2 border-none lg:text-base text-sm">
              Book Now
            </button>
          </div>
          <div className="py-4 mx-3 flex-shrink-0 flex flex-col items-center shadow-md px-12"> {/* Updated to use shadow and padding */}
            <img 
              src="https://cdn.tyreplex.net/images/wheel-alignment.png?tr=w-100" 
              alt="Wheel Alignment" 
              className="mb-2"
            />
            <span className="font-semibold">Wheel Alignment</span>
            <button className="bg-[#ed1c24] text-white py-1 px-4 rounded mt-2 border-none lg:text-base text-sm">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Serice