import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { img, title, price, _id } = service;
  return (
    <div>
      <div className="card p-4 border">
        <div className="">
          <img className="rounded-xl " src={img} alt="service" />
        </div>
        <div className=" py-4 space-y-2">
          <h2 className="card-title">{title}</h2>
          <p className="text-lg text-[#ff3811] font-semibold">
            Price : ${price}
          </p>
          <Link to={`/service/${_id}`} className="card-actions justify-end">
            <button>
              <FaArrowRightLong className="text-2xl text-[#ff3811]" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default ServiceCard;
