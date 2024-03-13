import { TbCurrencyTaka } from "react-icons/tb";
import { IoPaperPlaneOutline } from "react-icons/io5";
import CountUp  from "react-countup";
import { FiBox } from "react-icons/fi";
import { IoChatboxOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
const Count = () => {
    return (
        <div className="my-5  ">
        <div className="grid xl:grid-cols-2 gap-5">
          <div className=" flex items-center  justify-between px-5 bg-[#ffbc58] rounded-3xl py-4 ">
            <div className="rounded-full p-4  bg-white">
              <IoPaperPlaneOutline className="text-2xl text-[#ffbc58]" />
            </div>
            <div className="text-left text-white pr-10">
              <p className="font-semibold py-1 ml-3">Earnings</p>
              <div className="flex items-center ">
                <p className="text-2xl">$ </p>
                <CountUp className="text-3xl mr-1" end={6433} />
                <p>This month</p>
              </div>
            </div>
          </div>
          <div className=" flex items-center  justify-between px-5 bg-[#13c9ca] rounded-3xl py-4 ">
            <div className="rounded-full p-4  bg-white">
              <FiBox className="text-2xl text-[#13c9ca]" />
            </div>
            <div className="text-left text-white pr-10">
              <p className="font-semibold py-1 ml-3">Products & Services</p>
              <div className="flex items-center ">
                <p className="text-2xl">$ </p>
                <CountUp className="text-3xl mr-1" end={9784} />
                <p>This month</p>
              </div>
            </div>
          </div>
          <div className=" flex items-center  justify-between px-5 bg-[#ff8089] rounded-3xl py-4 ">
            <div className="rounded-full p-4  bg-white">
              <IoChatboxOutline className="text-2xl text-[#ff8089]" />
            </div>
            <div className="text-left text-white pr-10">
              <p className="font-semibold py-1 ml-3">Messages</p>
              <div className="flex items-center ">
                <p className="text-2xl">$ </p>
                <CountUp end={893} className="text-3xl mr-1" />
                <p>This month</p>
              </div>
            </div>
          </div>
          <div className=" flex items-center  justify-between px-5 bg-[#a5a5a5] rounded-3xl py-4 ">
            <div className="rounded-full p-4  bg-white">
              <FiUsers className="text-2xl text-[#a5a5a5]" />
            </div>
            <div className="text-left text-white pr-10">
              <p className="font-semibold py-1 ml-3">New Vendors</p>
              <div className="flex items-center ">
                <p className="text-2xl">$ </p>
                <CountUp className="text-3xl mr-1" end={46433} />
                <p>This month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Count;