import { Link, NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { IoBagAdd } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";

import { GrServices } from "react-icons/gr";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { FaUserSecret } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { FaUsersCog } from "react-icons/fa";

const AsideNav = () => {
  const { user, admin, logOut } = useContext(AuthContext);
  console.log(user, admin);

  const list = (
    <>
      <NavLink
        to="/admin/dashboard"
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-[#ff3811] rounded-bl-3xl rounded-tr-3xl text-white "
              : "bg-gray-200"
          } flex gap-3 items-center justify-center w-full  text-center py-2  rounded-md
         `
        }
      >
        <MdDashboard className="text-lg" />
        DashBoard
      </NavLink>
      <NavLink
        to="/admin/addService"
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-[#ff3811] rounded-bl-3xl rounded-tr-3xl text-white"
              : "bg-gray-200"
          } flex gap-3 items-center justify-center w-full  text-center py-2  rounded-md
         `
        }
      >
        <IoBagAdd className="text-lg" />
        Add Service
      </NavLink>
      <NavLink
        to="/admin/manageService"
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-[#ff3811] rounded-bl-3xl rounded-tr-3xl text-white"
              : "bg-gray-200"
          } flex gap-3 items-center justify-center w-full text-center py-2  rounded-md
         `
        }
      >
        <GrServices className="text-lg" />
        Manage Service
      </NavLink>
      <NavLink
        to="/admin/addProducts"
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-[#ff3811] rounded-bl-3xl rounded-tr-3xl text-white"
              : "bg-gray-200"
          } flex gap-3 items-center justify-center w-full text-center py-2  rounded-md
         `
        }
      >
        <IoBagAdd className="text-lg" />
        Add Products
      </NavLink>
      <NavLink
        to="/admin/manageProducts"
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-[#ff3811] rounded-bl-3xl rounded-tr-3xl text-white"
              : "bg-gray-200"
          } flex gap-3 items-center justify-center w-full text-center py-2  rounded-md
         `
        }
      >
        <GrServices className="text-lg" />
        Manage Product
      </NavLink>

      <NavLink
        to="/admin/settings"
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-[#ff3811] rounded-bl-3xl rounded-tr-3xl text-white"
              : "bg-gray-200"
          } flex gap-3 items-center justify-center w-full text-center py-2  rounded-md
         `
        }
      >
        {" "}
        <IoSettings className="text-xl  " />
        settings
      </NavLink>
      <div
        onClick={logOut}
        className="flex items-center w-full btn btn-sm gap-4"
      >
        <TbLogout2 />
        <button>Logout</button>
      </div>
    </>
  );

  return (
    <div>
      <Link to="/admin" className="mb-5">
        <div className="flex justify-center">
          {user?.photoURL ? (
            <img src={user?.photoURL} alt="admin" className="rounded-full " />
          ) : (
            <Link className="flex justify-center">
              <FaUserSecret className="text-8xl p-3 bg-gray-200 rounded-full" />
            </Link>
          )}
        </div>
        <p className="text-center mt-2">
          {user?.displayName ? user?.displayName : user?.email}
        </p>
      </Link>
      <div className=" md:grid  menu space-y-5">{list}</div>
    </div>
  );
};

export default AsideNav;
