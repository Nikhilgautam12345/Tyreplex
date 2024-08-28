import { useState } from "react";

const ReviewComponent =()=> {
  const [showAllReviews, setShowAllReviews] = useState(false);

  const reviews = [
    {
      name: "Md Nasir",
      date: "08 Aug 2024",
      image:
        "https://lh3.googleusercontent.com/a/AATXAJwZ5yHTyhlbUnanuJwLGdscP95OtAMhFGiAD8Bf=s128-c0x00000000-cc-rp-mo",
      text: "Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service. We were delighted with your...",
    },
    {
      name: "Rohit Bhati",
      date: "08 Aug 2024",
      image:
        "https://lh3.googleusercontent.com/a/AATXAJxi1FTLTnIbF-wcCFLUqffCFFV07qiTPPBbLVaO=s128-c0x00000000-cc-rp-mo",
      text: "Went for Tyre change. Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend",
    },
    {
      name: "Pradeep Kumar",
      date: "08 Aug 2024",
      image:
        "https://lh3.googleusercontent.com/a/AATXAJwahszZQxSMoUOJ3FOQwAgtMOeWI7bFaQnSRl1a=s128-c0x00000000-cc-rp-mo",
      text: "Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here. Price also reasonable. Overall good experience",
    },
  ];

  return (
    <div className="my-3 flex justify-center">
      <div className="reviewContainer w-10/12">
        <div className="bg-white p-4 rounded-lg shadow-md overflow-hidden">
          <div className="font-semibold mb-2 sm:text-lg poppins">Google Reviews</div>
          <div className="review-list">
            {/* Reviews List */}
            {reviews.slice(0, showAllReviews ? reviews.length : 2).map((review, index) => (
              <div key={index} className="py-2 border-b border-gray-200">
                <div className="flex items-center mb-1">
                  <div className="h-9 w-9 mr-3">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="h-full w-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{review.name}</div>
                    <div className="text-gray-500 text-xs font-circular">{review.date}</div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm py-1 font-[sans-serif]">{review.text}</p>
              </div>
            ))}
          </div>
          {/* Show More Button */}
          {!showAllReviews && (
            <div className="mt-3">
              <span
                onClick={() => setShowAllReviews(true)}
                className="cursor-pointer text-blue-600 hover:underline font-semibold"
              >
                Show More
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default ReviewComponent
