import { FaStar } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
const TyreCard = () => {
  return (
    <div className="tyreCard mx-2 my-2 lg:mx-2 md:mx-7 flex border xl:grow-0 w-[-webkit-fill-available] bg-white rounded relative sm:w-min md:grow  overflow-hidden">
      <div className="tyreInfo flex-grow mr-4 ps-3 pt-3">
        <div className="brandLogoTyre">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Apollo_Tyres_logo.svg" alt="Brand Logo" style={{height:"27px", width:"100px"}}/>
        </div>
        <div className="m-name mt-2 text-sm">AMAZER 4G LIFE</div>
        <div className="v-name my-3 text-gray-700">145/80 R12</div>
        <div className="tyreReviewsContainer flex items-center">
          <span className="tyreReviewsIcon px-1 rounded bg-green-600 flex items-center">
            <FaStar className="text-white"/>
            <span className="tyreReviews text-white pl-1">4</span>
          </span>
          <span className="tyreReviewNumber ml-2 text-xs text-gray-700">320 Reviews</span>
        </div>
        <div className="product-price mt-2">₹ 3,136</div>
        <div className="offer-text my-2 text-green-600 poppins text-xs">Offer available</div>
        <div className="product-feature px-0 mt-1 mb-4 poppins text-xs">Tube Type</div>
      </div>
      <div className="tyreImageContainer">
        <div className="warrantyTag top-0 right-0 py-0.5 px-1 text-sm bg-gray-200 rounded flex items-center warrantyTagColor" >
          <span className="verified-icon">
            <MdVerifiedUser/>
          </span>
          <span className="text-sm w-max">5 Year Warranty</span>
        </div>
        <div className="tyreImage">
          <img src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60" alt="Tyre" />
        </div>
      </div>
    </div>
  );
};

export default TyreCard;
