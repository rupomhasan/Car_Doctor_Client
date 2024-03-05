import { useContext, useState } from "react";
import img from "../../../assets/images/login/login.svg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Shared/Social/SocialLogin";
import { AuthContext } from "../../../Provider/AuthProvider";

const SignUp = () => {
  const { newUser } = useContext(AuthContext);
  const location = useLocation;
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleNewUser = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    console.log(name, password, email);
    newUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        navigate(location?.state ? location.state : "/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(error.message, errorCode);
      });
  };

  return (
    <div className="hero  my-40">
      <div className="hero-content flex-col w-full justify-evenly md:flex-row">
        <div className="text-center lg:text-left">
          <img src={img} alt="login" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold pt-10">Sign Up</h1>

          <form onSubmit={handleNewUser} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
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
                  type={`${showPassword === false ? "password" : "text"}`}
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
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn text-white text-lg bg-[#ff3811]"
                value="Sign Up"
              />
            </div>
          </form>
          <SocialLogin />
          <p className="text-xl my-4 pb-4 text-center">
            Already Have Account{" "}
            <Link to="/login" className="text-[#ff3811]">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
