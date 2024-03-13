import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SocialLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { socialUser } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const socialLogin = (provider) => {
    console.log("ok");
    socialUser(provider)
      .then((result) => {
        const loadedUser = result.user;
        const user = {
          name: loadedUser.displayName,
          email: loadedUser.email,
        };
        axios.post("https://recap-car-doctor-server-kq91fhz4b-rupomhasans-projects.vercel.app/users", user).then((res) => {
          console.log(res.data);
        });
        console.log(user);

        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        const email = error.customData.email;
        console.log(error);
        console.log(email);
      });
  };

  return (
    <div>
      <p className="text-xl text-center">Or Sign in With</p>
      <div className="flex justify-center gap-3 my-5">
        <div
          onClick={() => socialLogin(facebookProvider)}
          className="p-3 hover:link bg-base-200 rounded-full"
        >
          <FaFacebookF className="text-2xl text-sky-700" />
        </div>
        <div className="p-3  hover:link bg-base-200 rounded-full">
          <FaLinkedinIn className="text-2xl text-sky-600" />
        </div>{" "}
        <div
          onClick={() => socialLogin(googleProvider)}
          className="p-3  hover:link bg-base-200 rounded-full"
        >
          <FcGoogle className="text-2xl " />
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
