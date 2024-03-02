import img1 from "../../../assets/icons/check.svg";
import img2 from "../../../assets/icons/deliveryt.svg";
import img3 from "../../../assets/icons/Group 38729.svg";
import img4 from "../../../assets/icons/group.svg";
import img5 from "../../../assets/icons/person.svg";
import img6 from "../../../assets/icons/Wrench.svg";

const Feature = () => {
  return (
    <div className="my-20  ">
      <div className=" text-center my-8">
        <p className="text-[#ff3811] text-2xl font-bold">Core Features</p>
        <h3 className="font-bold text-5xl">Why Choose Us</h3>
        <div className="max-w-xl mx-auto my-4 text-lg">
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or random words which do not look even slightly believable.{" "}
          </p>
        </div>
      </div>
      <div className="flex gap-3 justify-evenly flex-wrap">
        <div className="border  rounded-xl min-w-44 h-44 flex-col flex items-center justify-center">
          <div className="">
            <img src={img1} alt="" />
          </div>
          <p className="mt-2 font-bold">100% Guaranty</p>
        </div>{" "}
        <div className="border  rounded-xl min-w-44 h-44 flex-col flex items-center justify-center">
          <div className="">
            <img src={img2} alt="" />
          </div>
          <p className="mt-2 font-bold">Best Service</p>
        </div>{" "}
        <div className="border  rounded-xl min-w-44  flex-col flex items-center justify-center">
          <div className="bg-[#ff3811] rounded-full">
            <img src={img3} alt="" />
          </div>
          <p className="mt-2 font-bold">Timely Delivery</p>
        </div>{" "}
        <div className="border  rounded-xl min-w-44 h-44 flex-col flex items-center justify-center">
          <div className="">
            <img src={img4} alt="" />
          </div>
          <p className="mt-2 font-bold">Expert Team</p>
        </div>{" "}
        <div className="border  rounded-xl min-w-44 h-44 flex-col flex items-center justify-center">
          <div className="">
            <img src={img5} alt="" />
          </div>
          <p className="mt-2 font-bold">24/7 support</p>
        </div>{" "}
        <div className="border  rounded-xl min-w-44 h-44 flex-col flex items-center justify-center">
          <div className="">
            <img src={img6} alt="" />
          </div>
          <p className="mt-2 font-bold">Best Equipment</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
