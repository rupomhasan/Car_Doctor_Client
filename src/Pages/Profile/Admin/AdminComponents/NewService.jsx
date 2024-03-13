// import { data } from "autoprefixer";
import axios from "axios";
import Swal from "sweetalert2";

const NewService = () => {
  const handleAddNewService = (e) => {
    e.preventDefault();
    const from = e.target;

    const title = from.serviceName?.value;
    const price = from.price?.value;
    const description = from.description?.value;
    const img = from.image?.value;

    const facility = [
      {
        name: from.name1?.value,
        details: from.details1?.value,
      },
      {
        name: from.name2?.value,
        details: from.details2?.value,
      },
      {
        name: from.name3?.value,
        details: from.details3?.value,
      },
      {
        name: from.name4?.value,
        details: from.details4?.value,
      },
    ];
    const service = {
      title,
      price,
      img,
      description,
      facility,
    };
    console.log(service);
    axios.post("https://recap-car-doctor-server-kq91fhz4b-rupomhasans-projects.vercel.app/services", service).then((res) => {
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
    <div className="max-w-screen-xl mx-auto">
      <div className="relative ">
        <p className=" text-4xl  font-bold opacity-20">Add Service</p>
        <p className="absolute  top-4 left-4  text-3xl font-bold font-serif ">
          Add Service
        </p>
      </div>
      <div className=" my-20">
        <form
          onSubmit={handleAddNewService}
          className="bg-base-200 mx-2 rounded-xl py-16 flex  justify-center"
        >
          <div className=" mx-auto px-2 md:px-16  space-y-5 max-w-screen-lg w-full">
            <div className="md:flex  gap-10 space-y-5 md:space-y-0">
              <div className="w-full">
                <p className="text-lg ml-1 mb-1">Service Title</p>
                <input
                  type="text"
                  name="serviceName"
                  className="px-5 py-2 rounded-lg w-full bg-base-100"
                  placeholder="Service Name"
                />
              </div>
              <div className="w-full">
                <p className="text-lg mb-1 ml1">Service Price</p>
                <input
                  type="text"
                  name="price"
                  className="px-5 py-2 rounded-lg w-full bg-base-100"
                  placeholder="Service Price"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2  gap-x-10 gap-y-3  w-full">
              <div>
                <p className="text-lg mb-1 ml-1">facility...1</p>
                <input
                  type="text"
                  name="name1"
                  className="px-5 py-2 rounded-lg w-full bg-base-100"
                  placeholder="facility Name"
                />
                <textarea
                  className="rounded-lg py-3 w-full px-5 mt-4"
                  placeholder="facility Details"
                  rows={4}
                  name="details1"
                />
              </div>{" "}
              <div>
                <p className="text-lg mb-1 ml-1">facility...2</p>
                <input
                  type="text"
                  name="name2"
                  className="px-5 py-2 rounded-lg w-full bg-base-100"
                  placeholder="facility Name"
                />
                <textarea
                  className="rounded-lg py-3 w-full px-5 mt-4"
                  placeholder="facility Details"
                  rows={4}
                  name="details2"
                />
              </div>{" "}
              <div>
                <p className="text-lg mb-1 ml-1">facility...3</p>
                <input
                  type="text"
                  name="name3"
                  className="px-5 py-2 rounded-lg w-full bg-base-100"
                  placeholder="facility Name"
                />
                <textarea
                  className="rounded-lg  py-3 px-5 w-full mt-4"
                  placeholder="facility Details"
                  name="details3"
                  rows={4}
                />
              </div>{" "}
              <div>
                <p className="text-lg mb-1 ml-1">facility...4</p>
                <input
                  type="text"
                  name="name4"
                  className="px-5 py-2 rounded-lg w-full bg-base-100"
                  placeholder="facility Name"
                />
                <textarea
                  className="rounded-lg py-3 w-full px-5 mt-4"
                  placeholder="facility Details"
                  rows={4}
                  name="details4"
                />
              </div>
            </div>

            <div>
              <textarea
                name="description"
                className="w-full rounded-lg py-3 px-5"
                rows={7}
                placeholder="Product Description"
              />
            </div>
            <div>
              <p className="text-lg ml-1 mb-1">Photo URL</p>
              <input
                type="url"
                name="image"
                className="px-5 py-2 rounded-lg w-full bg-base-100"
                placeholder="Text here"
              />
            </div>
            <input
              type="submit"
              className="btn w-full bg-[#ff3811] hover:bg-[#ff3811] border-none text-white"
              value="Submit "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewService;
