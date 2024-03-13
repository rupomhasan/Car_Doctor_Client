import Navbar from "../Shared/Navbar/Navbar";
import error from "../../assets/images/Error/404.json";
import Lottie from "lottie-react";

const ErrorPage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="max-w-screen-sm mx-auto ">
        <Lottie animationData={error}></Lottie>
      </div>
    </div>
  );
};

export default ErrorPage;
