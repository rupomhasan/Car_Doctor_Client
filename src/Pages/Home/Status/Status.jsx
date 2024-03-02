import { FcOvertime } from "react-icons/fc";
import { GrMapLocation } from "react-icons/gr";
import { TbPhoneCalling } from "react-icons/tb";

const Status = () => {
  return (
    <div className="bg-[#151515] text-white md:flex justify-between py-16 rounded-md mx-2 my-10 px-5 space-y-5">
      <div className="flex items-center gap-3">
        <FcOvertime className="text-4xl" />
        <div>
          <p>We are open monday-friday</p>
          <p className="font-extrabold text-2xl">7:00 am - 9:00pm</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <TbPhoneCalling className="text-4xl text-green-500" />
        <div>
          <p>Have a question?</p>
          <p className="font-extrabold text-2xl">01318044328</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <GrMapLocation className="text-4xl text-[#ff3811]" />
        <div>
          <p>Need a repair?</p>
          <p className="font-extrabold text-2xl">Liza Street</p>
        </div>
      </div>
    </div>
  );
};

export default Status;
