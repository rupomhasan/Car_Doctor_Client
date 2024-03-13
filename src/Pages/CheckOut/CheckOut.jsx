import { useLoaderData, useNavigate } from "react-router-dom";
import DetailsBanner from "../Shared/DetailsBanner/DetailsBanner";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { title, price, _id, img } = service;
  const navigate = useNavigate();
  const handleBookingService = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const date = from.date.value;
    const phone = from.phone.value;
    const email = from.email.value;
    const serviceName = from.serviceName.value;
    const price = from.price.value;
    const newPrice = parseFloat(price);
    const message = from.message.value || "No message";
    const service_id = _id;
    const bookings = {
      type: "service",
      phone,
      customerName: name,
      date,
      email,
      message,
      service_id,
      serviceImg: img,
      serviceName,
      service_due: newPrice,
    };

    fetch("https://recap-car-doctor-server-kq91fhz4b-rupomhasans-projects.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookings),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      });
  };

  const routeName = "Check Out";
  return (
    <div className="max-w-screen-xl mx-auto">
      <div>
        <DetailsBanner routeName={routeName} />
      </div>
      <div className=" my-20">
        <form
          onSubmit={handleBookingService}
          className="bg-base-300 mx-2 rounded-xl py-16 flex  justify-center"
        >
          <div className=" mx-auto px-16  space-y-5 max-w-screen-lg w-full">
            <div className="flex gap-10">
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                className="px-5 py-2 rounded-lg w-full bg-base-100"
                placeholder="Your Name"
                required
              />
              <input
                type="date"
                name="date"
                required
                className="px-5 py-2 rounded-lg w-full bg-base-100"
              />
            </div>
            <div className="md:flex gap-10">
              <input
                type="tel"
                name="phone"
                required
                defaultValue={user?.phoneNumber}
                className="px-5 py-2 rounded-lg w-full bg-base-100"
                placeholder="Your Phone"
              />
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                readOnly
                className="px-5 py-2 rounded-lg w-full bg-base-100"
                placeholder="Your Email"
              />
            </div>
            <div className="md:flex gap-10">
              <input
                defaultValue={title}
                type="text"
                readOnly
                name="serviceName"
                className="px-5 py-2 rounded-lg w-full bg-base-100"
                placeholder="Service Name"
              />
              <input
                type="number"
                name="price"
                readOnly
                defaultValue={price}
                className="px-5 py-2 rounded-lg w-full bg-base-100"
                placeholder="Service Due"
              />
            </div>
            <div>
              <textarea
                className="w-full rounded-lg py-3 px-5"
                name="message"
                rows={7}
                placeholder="Your Message"
              />
            </div>
            <input
              type="submit"
              className="btn w-full bg-[#ff3811] hover:bg-[#ff3811] border-none text-white"
              value="Confirm Order "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
