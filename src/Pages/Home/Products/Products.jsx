import Rating from "react-rating";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://recap-car-doctor-server-kq91fhz4b-rupomhasans-projects.vercel.app/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const handleAddToCart = (price, title, img) => {
    if (!user) {
      navigate("/login");
    }

    const bookings = {
      phone: "",
      type: "products",
      customerName: user?.displayName || "",
      date: "",
      email: user?.email,
      message: "",
      serviceImg: img || "",
      serviceName: title || "",
      service_due: price || "",
    };
    axios.post("https://recap-car-doctor-server-kq91fhz4b-rupomhasans-projects.vercel.app/bookings", bookings).then((res) => {
      console.log(res.data);
      if (res.data.acknowledged === true) {
        toast("Product added to cart");
      }
    });
  };
  return (
    <div id="product" className="my-32">
      <div className=" text-center my-8">
        <p className="text-[#ff3811] text-2xl font-bold">Popular Products</p>
        <h3 className="font-bold text-5xl">Browse Our Products</h3>
        <div className="max-w-xl mx-auto my-4 text-lg">
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or random words which do not look even slightly believable.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-3">
        {/* Products 1 */}

        {products.map((product, idx) => (
          <div key={idx}>
            <div className="card p-5  bg-base-100 shadow-md">
              <figure className="bg-base-200 rounded-2xl ">
                <img src={product.img} alt="" className="" />
              </figure>
              <div className="card-body items-center text-center">
                <Rating
                  initialRating={product.rating}
                  emptySymbol={<FaRegStar className="text-2xl" />}
                  fullSymbol={<FaStar className="text-2xl text-[#FF9529]" />}
                />
                <h2 className="card-title">{product.title}</h2>
                <p className="text-xl font-extrabold text-red-500">
                  Price : ${product.price}
                </p>
                <button
                  onClick={() =>
                    handleAddToCart(product.price, product.title, product.img)
                  }
                  className="btn btn-sm mt-2 hover:bg-[#ff3811] hover:text-white"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Products;
