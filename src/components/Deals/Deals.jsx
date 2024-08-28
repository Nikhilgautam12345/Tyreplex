

const Deals = () => {
  const items = [
    { src: "https://via.placeholder.com/160x30", label: "MRF" },
    { src: "https://via.placeholder.com/160x30", label: "CEAT" },
    { src: "https://via.placeholder.com/160x30", label: "Goodyear" },
    { src: "https://via.placeholder.com/160x30", label: "Apollo" },
    { src: "https://via.placeholder.com/160x30", label: "Bridgestone" },
    { src: "https://via.placeholder.com/160x30", label: "JK Tyre" },
    { src: "https://via.placeholder.com/160x30", label: "Michelin" },
    { src: "https://via.placeholder.com/160x30", label: "VK Tyres" },
  ];

  return (
    <div className="my-3 flex justify-center">
      <div className="bg-white w-10/12 rounded p-3">
        <div className="dealsContainer">
          <div className="font-semibold mb-3 sm:text-lg poppins">Deals In</div>
          <div className="flex mx-3 overflow-x-auto lg:text-base text-sm -normal poppins text-gray-700 space-x-2"style={{ scrollbarWidth: "none" }}>
            {items.map((item, index) => (
              <div key={index} className="flex-shrink-0 cursor-pointer" >
                <div className="mb-2">
                  <img src={item.src} alt={`Deal ${index + 1}`} className="h-8 w-40 object-cover" />
                </div>
                <div className="py-2 text-center">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
