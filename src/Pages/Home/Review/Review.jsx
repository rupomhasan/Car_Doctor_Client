import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const Review = () => {
  return (
    <div>
      <div className="text-center my-8">
        <p className="text-[#ff3811] text-2xl font-bold">Testimonial</p>
        <h3 className="font-bold text-5xl">What Customer Says</h3>
        <div className="max-w-xl mx-auto my-4 text-lg">
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or random words which do not look even slightly believable.
          </p>
        </div>
      </div>
      <div>
        {/* <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h3>Awlad Hossain</h3>
            <p className="text-gray-500">Businessman</p>
          </div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or random words which do not look even slightly believable.{" "}
          </p>
          <Rating
            initialRating={4.5}
            emptySymbol={<FaRegStar className="text-2xl" />}
            fullSymbol={<FaStar className="text-2xl text-[#FF9529]" />}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Review;
