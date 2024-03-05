import { useState, useContext } from "react";
import img from "../../assets/images/login/login.svg";
import SocialLogin from "../Shared/Social/SocialLogin";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { manageUser } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const handleUser = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    manageUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate(location?.state ? location.state : "/");
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="hero  my-40">
      <div className="hero-content flex-col w-full justify-evenly md:flex-row">
        <div className="text-center lg:text-left">
          <img src={img} alt="login" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold pt-10">Login</h1>

          <form onSubmit={handleUser} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={`${showPassword === false ? "text" : "password"}`}
                  placeholder="password"
                  name="password"
                  className="input input-bordered w-full"
                  required
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4"
                >
                  {showPassword ? (
                    <FaEye className="text-2xl" />
                  ) : (
                    <FaEyeSlash className="text-2xl" />
                  )}
                </div>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn text-white text-lg bg-[#ff3811]"
                value="Login"
              />
            </div>
          </form>
          <SocialLogin />
          <p className="text-xl my-4 pb-4 text-center">
            New to Cars Doctor{" "}
            <Link to="/signup" className="text-[#ff3811]">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
