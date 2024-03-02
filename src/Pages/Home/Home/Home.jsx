import About from "../Banner/About";
import Banner from "../Banner/Banner";
import Feature from "../Feature/Feature";
import Products from "../Products/Products";
import Service from "../Service/Service";
import Status from "../Status/Status";
import Tem from "../Team/Team";

const Home = () => {
  return (
    <div className="max-w-screen-xl overflow-hidden mx-auto ">
      <Banner />
      <About />
      <Service />
      <Status />
      <Products />
      <Tem />
      <Feature />
    </div>
  );
};

export default Home;
