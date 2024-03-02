import { FaArrowRightLong } from "react-icons/fa6";
import PropTypes from "prop-types";
const ServiceCard = ({ service }) => {
  const { img, title, price } = service;
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
          <div className="card-actions justify-end">
            <button>
              <FaArrowRightLong className="text-2xl text-[#ff3811]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.obj,
};
export default ServiceCard;
