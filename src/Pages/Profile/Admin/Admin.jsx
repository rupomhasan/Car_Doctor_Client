import { Outlet } from "react-router-dom";
import AsideNav from "./NavList/AsideNav";

const Admin = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <div className="md:flex  mx-1  gap-10">
        <div className=" md:w-1/4 h-full rounded-xl">
          <AsideNav />
        </div>
        <div className=" w-full  min-h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
