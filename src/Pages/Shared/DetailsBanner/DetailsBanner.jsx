import { Link } from "react-router-dom";
import img from "../../../assets/images/checkout/checkout.png";

const DetailsBanner = ({ routeName }) => {
  return (
    <div className="">
      <div className="relative rounded-xl">
        <div className="">
          <img src={img} alt="banner" className="w-full" />
        </div>
        <div className="absolute h-full top-0 w-full flex  items-center  bg-gradient-to-r from-[#151515] rounded-xl to-[rgba(21 , 21 , 21,0)]">
          <p className="text-3xl ml-10 font-extrabold text-white">
            {routeName}
          </p>
          <div className="absolute bottom-0 flex  justify-center w-full  text-white text-xl font-bold ">
            <div className="flex bg-[#ff3811] px-10 py-3 rounded-t-full">
              <Link to="/">Home</Link>
              <span>/</span>
              <p>{routeName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsBanner;
