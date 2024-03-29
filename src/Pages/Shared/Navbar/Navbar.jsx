import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
const Navbar = () => {
  const { user, logOut , admin } = useContext(AuthContext);
  const [item, setItem] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const navigate = useNavigate();
  const url = `https://recap-car-doctor-server-kq91fhz4b-rupomhasans-projects.vercel.app/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.length);

        const total = data.reduce((acc, current) => {
          return acc + current.service_due;
        }, 0);
        setSubtotal(total);
      });
  }, [url, user]);

  const handleLogOut = () => {
    console.log("ok");
    logOut().then(() => {
      navigate("/");
      window.location.reload();
    });
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a onClick={() => scrollToSection("service")}>Services</a>
      </li>
      <li>
        <a onClick={() => scrollToSection("product")}>Products</a>
      </li>
      <li>
        <Link>Contact</Link>
      </li>
    </>
  );
  return (
    <div className=" ">
      <div className="navbar max-w-screen-xl  mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{item}</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{item} Items</span>
                <span className="text-info">Subtotal: {subtotal}$</span>
                {user ? (
                  <Link to="/myCart" className="card-actions">
                    <button className="btn  bg-[#ff3811] hover:bg-[#ff3811]  text-white btn-block">
                      View cart
                    </button>
                  </Link>
                ) : (
                  <Link to="/login" className="card-actions">
                    <button className="btn bg-[#ff3811] hover:bg-[#ff3811] text-white btn-block">
                      Login
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {user?.photoURL ? (
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                ) : (
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                {admin ? <Link to="/admin" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link> : <Link to="/userProfile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link> }
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                {user ? (
                  <button onClick={handleLogOut}>Logout</button>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </li>
            </ul>
          </div>
          <div className="hidden md:flex">
            <button className="btn btn-outline px-8  hover:bg-[#ff3811] hover:border-[#ff3811] border-[#ff3811]">
              Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
