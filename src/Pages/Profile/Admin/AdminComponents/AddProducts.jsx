import axios from "axios";
import Swal from "sweetalert2";

const AddProducts = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);

    const product = {
      title: form.name.value,
      img: form.url.value,
      rating: form.rating.value,
      price: form.price.value,
      ratingCount: form.ratingCount.value,
    };
    console.log(product);
    axios.post("https://recap-car-doctor-server-kq91fhz4b-rupomhasans-projects.vercel.app/products", product).then((res) => {
      console.log(res.data);
      if (res.data.acknowledged === true) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <div className="relative ">
        <p className=" text-4xl  font-bold opacity-20">Add Products</p>
        <p className="absolute  top-4 left-4  text-3xl font-bold font-serif ">
          Add Products
        </p>
      </div>
      <div className="bg-base-200 py-12 px-5 rounded-xl my-20">
        <form onSubmit={handleAddProduct}>
          <div className=" space-y-7">
            <div className="flex gap-3 ">
              <div className="w-full space-y-3">
                <p className="text-xl font-bold text-gray-500"> Name</p>
                <input
                  type="text"
                  name="name"
                  className="w-full px-5 py-2 rounded-bl-3xl rounded-tr-3xl"
                  placeholder="Product title"
                />
              </div>
              <div className="w-full space-y-3">
                <p className="text-xl font-bold text-gray-500"> Price</p>
                <input
                  type="Price"
                  name="price"
                  className="w-full px-5 py-2 rounded-bl-3xl rounded-tr-3xl"
                  placeholder="Product Price"
                />
              </div>
            </div>
            <div className="flex gap-3 ">
              <div className="w-full space-y-3">
                <p className="text-xl font-bold text-gray-500"> Rating</p>
                <input
                  type="text"
                  name="rating"
                  className="w-full px-5 py-2 rounded-bl-3xl rounded-tr-3xl"
                  placeholder="Product Rating of 5"
                />
              </div>
              <div className="w-full space-y-3">
                <p className="text-xl font-bold text-gray-500">
                  {" "}
                  Review Amount
                </p>
                <input
                  type="text"
                  name="ratingCount"
                  className="w-full px-5 py-2 rounded-bl-3xl rounded-tr-3xl"
                  placeholder="Product Rating Count"
                />
              </div>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-500 mb-2">PhotoURL</p>
              <input
                type="src"
                alt="image"
                name="url"
                placeholder="Photo url"
                className="w-full py-2  rounded-bl-3xl rounded-tr-3xl px-5"
              />
            </div>
            <input
              type="submit"
              className="btn w-full bg-white hover:text-white hover:bg-[#ff3811] rounded-tl-[30px] rounded-br-[30px]"
              value="Add Product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
