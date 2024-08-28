import TyreCard from '../TyreCard/TyreCard';
import TyresSorting from '../TyresSorting/TyresSorting';
import { IoChevronDownOutline } from "react-icons/io5";

const TyreCardListing = () => {
  return (
    <div className="tyreContainerWrapper mt-3 my-3 flex justify-center">
      <div className="tyreContainer w-10/12">
        <TyresSorting/>
        <div className="tyreList  xl:justify-center 2xl:justify-start flex lg:justify-start justify-center flex-wrap">
          <TyreCard />
          <TyreCard />
          <TyreCard />
          <TyreCard />
          <TyreCard />
          <TyreCard />
          <TyreCard />
          <TyreCard />
        </div>
        <div className='flex justify-center'><button className='border px-2 py-1 lg:text-base text-sm flex items-center text-gray-500 bg-white border-gray-300'>View More<IoChevronDownOutline/></button></div>
      </div>
    </div>
  );
};

export default TyreCardListing;
