import Navbar from "../Shared/Navbar/Navbar";
import img from "../../assets/404.jpg";

const ErrorPage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <img src={img} alt="404" />
      </div>
    </div>
  );
};

export default ErrorPage;
