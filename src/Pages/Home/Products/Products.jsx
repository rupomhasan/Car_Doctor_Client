import Rating from "react-rating";
import img1 from "../../../assets/images/products/1.png";
import img2 from "../../../assets/images/products/2.png";
import img3 from "../../../assets/images/products/3.png";
import img4 from "../../../assets/images/products/4.png";
import img5 from "../../../assets/images/products/5.png";
import img6 from "../../../assets/images/products/6.png";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Products = () => {
  return (
    <div className="my-32">
      <div className=" text-center my-8">
        <p className="text-[#ff3811] text-2xl font-bold">Popular Products</p>
        <h3 className="font-bold text-5xl">Browse Our Products</h3>
        <div className="max-w-xl mx-auto my-4 text-lg">
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or random words which do not look even slightly believable.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-3">
        {/* Products 1 */}
        <div className="card p-5  bg-base-100 shadow-md">
          <figure className="bg-base-200 rounded-2xl ">
            <img src={img1} alt="Shoes" className="" />
          </figure>
          <div className="card-body items-center text-center">
            <Rating
              initialRating={4.5}
              emptySymbol={<FaRegStar className="text-2xl" />}
              fullSymbol={<FaStar className="text-2xl text-[#FF9529]" />}
            />
            <h2 className="card-title">Electric Vehicle Brake Pads</h2>
            <p className="text-xl font-extrabold text-red-500">Price : $299</p>
          </div>
        </div>
        {/* products 2 */}
        <div className="card p-5  bg-base-100 shadow-md">
          <figure className="bg-base-200 rounded-2xl ">
            <img src={img2} alt="Shoes" className="" />
          </figure>
          <div className="card-body items-center text-center">
            <Rating
              initialRating={3.3}
              emptySymbol={<FaRegStar className="text-2xl" />}
              fullSymbol={<FaStar className="text-2xl text-[#FF9529]" />}
            />
            <h2 className="card-title">Car Suspension</h2>
            <p className="text-xl font-extrabold text-red-500">Price : $500</p>
          </div>
        </div>
        {/* products 3 */}
        <div className="card p-5  bg-base-100 shadow-md">
          <figure className="bg-base-200 rounded-2xl ">
            <img src={img3} alt="Shoes" className="" />
          </figure>
          <div className="card-body items-center text-center">
            <Rating
              initialRating={3.9}
              emptySymbol={<FaRegStar className="text-2xl" />}
              fullSymbol={<FaStar className="text-2xl text-[#FF9529]" />}
            />
            <h2 className="card-title">Car Air Filter</h2>
            <p className="text-xl font-extrabold text-red-500">Price : $390</p>
          </div>
        </div>
        {/* Products 4 */}
        <div className="card p-5  bg-base-100 shadow-md">
          <figure className="bg-base-200 rounded-2xl ">
            <img src={img4} alt="Shoes" className="" />
          </figure>
          <div className="card-body items-center text-center">
            <Rating
              initialRating={4}
              emptySymbol={<FaRegStar className="text-2xl" />}
              fullSymbol={<FaStar className="text-2xl text-[#FF9529]" />}
            />
            <h2 className="card-title">Car Battery</h2>
            <p className="text-xl font-extrabold text-red-500">Price : $290</p>
          </div>
        </div>
        {/* products 5 */}
        <div className="card p-5  bg-base-100 shadow-md">
          <figure className="bg-base-200 rounded-2xl ">
            <img src={img5} alt="Shoes" className="" />
          </figure>
          <div className="card-body items-center text-center">
            <Rating
              initialRating={4.6}
              emptySymbol={<FaRegStar className="text-2xl" />}
              fullSymbol={<FaStar className="text-2xl text-[#FF9529]" />}
            />
            <h2 className="card-title">Car tyres</h2>
            <p className="text-xl font-extrabold text-red-500">Price : $165</p>
          </div>
        </div>
        {/* products 6 */}
        <div className="card p-5  bg-base-100 shadow-md">
          <figure className="bg-base-200 rounded-2xl ">
            <img src={img6} alt="Shoes" className="" />
          </figure>
          <div className="card-body items-center text-center">
            <Rating
              initialRating={4.5}
              emptySymbol={<FaRegStar className="text-2xl" />}
              fullSymbol={<FaStar className="text-2xl text-[#FF9529]" />}
            />
            <h2 className="card-title">Car Engine Plug</h2>
            <p className="text-xl font-extrabold text-red-500">Price : $240</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
