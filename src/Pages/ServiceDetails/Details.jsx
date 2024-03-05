import { Link, useLoaderData } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFilePdf } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import logo from "../../assets/logo.svg";
import DetailsBanner from "../Shared/DetailsBanner/DetailsBanner";
import { useEffect, useState } from "react";

const Details = () => {
  const [serviceList, setServiceList] = useState([]);

  const service = useLoaderData();
  const { facility, title, img, price, description, _id } = service;

  useEffect(() => {
    fetch("http://localhost:2500/services")
      .then((res) => res.json())
      .then((data) => setServiceList(data));
  }, []);
  const routeName = "Service Details";

  return (
    <div className="max-w-screen-xl mx-auto">
      <DetailsBanner routeName={routeName} />
      <div className="flex md:gap-5 lg:gap-10 mx-4 my-20 ">
        <div className="w-2/3">
          <div>
            <img src={img} alt="service" className="rounded-xl w-full" />
          </div>
          <div>
            <p className="mb-2 mt-10 text-3xl  font-extrabold">{title}</p>
            <p className="text-gray-500 font-semibold">{description}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5 my-10">
            {facility.map((data, idx) => (
              <div key={idx}>
                <div className="card  bg-base-200 shadow-xl border-t-[#ff7357] border-t-[7px]">
                  <div className="card-body">
                    <h2 className="card-title">{data.name}</h2>
                    <p>{data.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Aside details */}
        <div className="w-1/3 space-y-8">
          {/* service List */}
          <div className="bg-base-200 py-5 px-8 rounded-xl ">
            <p className="text-2xl font-bold my-2 ">Service</p>

            {serviceList.map((data, idx) => (
              <div key={idx}>
                <Link to={`/service/${data._id}`} className="menu">
                  <button className="btn flex justify-between bg-white hover:text-white hover:bg-[#ff3811] ">
                    {data.title} <FaArrowRightLong className="text-xl" />
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* Download */}
          <div className="bg-black py-10 px-8 rounded-xl text-white space-y-5">
            <p className="text-2xl font-bold mb-2">Download</p>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <div>
                  <FaFilePdf className="text-3xl" />
                </div>
                <div>
                  <h3 className="xl font-bold">Our Brochure</h3>
                  <p className="text-gray-200">Download</p>
                </div>
              </div>
              <button className="btn hover:bg-[#ff3811] border-none">
                <FaArrowDown className="text-xl  hove:text-white" />
              </button>
            </div>{" "}
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <div>
                  <FaFilePdf className="text-3xl" />
                </div>
                <div>
                  <h3 className="xl font-bold">Company Details</h3>
                  <p className="text-gray-200">Download</p>
                </div>
              </div>
              <button className="btn hover:bg-[#ff3811] border-none">
                <FaArrowDown className="text-xl  hove:text-white" />
              </button>
            </div>
          </div>
          {/* help dex */}
          <div className="bg-[rgba(10,10,10,0.88)] pb-14 pt-8  px-8 rounded-xl text-white space-y-5">
            <div className="flex text-white justify-center">
              <img src={logo} alt="logo" />
            </div>
            <div className="text-xl font-bold text-center">
              Need Help? We Are Here To Help You
            </div>
            <div className="bg-white px-3 pb-8 pt-5 text-center rounded-xl relative">
              <p className="text-red-500">
                Car Doctor <span className="text-black">Special</span>
              </p>
              <p className="text-xs text-red-500">
                Save up <span className="text-black">60% off</span>
              </p>
              <div className="flex justify-center">
                <button className="absolute btn  hover:bg-[#ff3811] rounded -bottom-2  hover:text-white border-none btn-sm">
                  Get A Quote
                </button>
              </div>
            </div>
          </div>
          <div className="text-4xl font-bold">
            <p>Price : ${price} </p>
          </div>
          <Link to={`/checkout/${_id}`}>
            <button
              className="btn text-white hover:text-white w-full
             hover:bg-[#ff3811] bg-[#ff3811]"
            >
              Proceed Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
