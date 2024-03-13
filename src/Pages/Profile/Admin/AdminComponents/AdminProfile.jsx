import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const AdminProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="mx-2 space-y-10">
      <div className="relative ">
        <p className=" text-4xl  font-bold opacity-20">Profile</p>
        <p className="absolute  top-4 left-4  text-3xl font-bold font-serif ">
          Profile
        </p>
      </div>
      <div className="lg:flex mt-20 gap-10 space-y-10 md:space-y-0">
        <div className="shadow-xl py-10 pt-16 px-7 rounded-xl w-full h-fit">
          <div className="">
            <figure className="flex justify-center mb-3">
              <img className="rounded-full " src={user.photoURL} alt="admin" />
            </figure>
            <p className="text-lg font-bold text-center">Chief Technology Officer (CTO)</p>
          </div>
          <div className="flex gap-2 items-center justify-center mt-2">
            <FaFacebookF className="text-4xl text-white bg-blue-600 p-1 rounded-full" />
            <FaTwitter className="text-4xl text-white bg-blue-400 p-1 rounded-full" />
            <FaInstagram className="text-5xl text-orange-500 p-1 rounded-full" />
          </div>
          <div className="mt-6 border-y-2 py-3 ">
            <div>
              <p className="text-lg font-bold text-gray-500">Performance</p>
              <progress
                className="progress progress-success"
                value={85}
                max="100"
              ></progress>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-500">
                Project Completion Rate
              </p>
              <progress
                className="progress progress-info"
                value={95}
                max="100"
              ></progress>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-500">Leave Taken</p>
              <progress
                className="progress progress-error"
                value={15}
                max="100"
              ></progress>
            </div>
          </div>
        </div>
        <div className="shadow-xl py-16 px-7 rounded-xl w-full space-y-7">
          <div className="text-lg font-bold text-gray-600 border-b-2 pb-1">
            <p>Name</p>
            <p className="text-sm mt-2">{user.displayName}</p>
          </div>
          <div className="text-lg font-bold text-gray-600 border-b-2 pb-1">
            <p>Email</p>
            <p className="text-sm mt-2">{user.email}</p>
          </div>{" "}
          <div className="text-lg font-bold text-gray-600 border-b-2 pb-1">
            <p>Phone</p>
            <p className="text-sm mt-2">
              {user.phoneNumber || "Not Provided "}{" "}
            </p>
          </div>{" "}
          <div className="text-lg font-bold text-gray-600 border-b-2 pb-1">
            <p>Password</p>
            <p>. . . . . . . . . . .</p>
          </div>
          <div className="text-lg font-bold text-gray-600 border-b-2 pb-1">
            <p>Message</p>
            <p className="text-sm mt-1">Think logical and work hard</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
