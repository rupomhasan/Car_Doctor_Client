import Count from "./CountUp";
import ProvidedService from "./ProvidedService";
import Revenue from "./Revenue";

const DashBoard = () => {
  return (
    <div>
      <div className="relative ">
        <p className=" text-4xl  font-bold opacity-20">DashBoard</p>
        <p className="absolute  top-4 left-4  text-3xl font-bold font-serif ">
          DashBoard
        </p>
      </div>
      <div className="my-10">
        <Count />
        <Revenue />
      <ProvidedService />


      </div>
    </div>
  );
};

export default DashBoard;
