import { useContext, useEffect, useState } from "react";
import DetailsBanner from "../Shared/DetailsBanner/DetailsBanner";
import { AuthContext } from "../../Provider/AuthProvider";
import { MdDeleteForever } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { PiArrowBendUpLeftBold } from "react-icons/pi";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import axios from "axios";

const Bookings = () => {
  const routeName = "Cart Details";
  const { user, admin } = useContext(AuthContext);
  const [bookings, setBookings] = useState();
  const url = `https://recap-car-doctor-server-kq91fhz4b-rupomhasans-projects.vercel.app/bookings?email=${user?.email}`;
  console.log(bookings);
  useEffect(() => {
    axios.get(url).then((res) => {
      setBookings(res.data);
    });
  }, [url]);

  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://recap-car-doctor-server-kq91fhz4b-rupomhasans-projects.vercel.app/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const newBookings = bookings.filter((data) => data?._id !== id);
              setBookings(newBookings);
            }
          });
      }
    });
  };

  const handleRemoveAll = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://recap-car-doctor-server-kq91fhz4b-rupomhasans-projects.vercel.app/bookings`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              setBookings([]);
            }
          });
      }
    });
  };
  const handleStatus = (id) => {
    console.log("ok");
    fetch(`https://recap-car-doctor-server-kq91fhz4b-rupomhasans-projects.vercel.app/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          //update state
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          (updated.status = "confirm"), setBookings([updated, ...remaining]);
        }
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto">
      <div>
        <DetailsBanner routeName={routeName} />
      </div>
      <div className="my-20">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-xl">
                <th>Delete</th>
                <th>Service</th>
                <th>Email</th>
                <th>Due</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings?.map((data, idx) => (
                <tr key={idx}>
                  <td>
                    <MdCancel
                      onClick={() => handleRemove(data?._id)}
                      className="text-3xl"
                    />
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="rounded w-24">
                          <img
                            src={data.serviceImg}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{data.serviceName}</div>
                        <div className="text-sm opacity-50">{data.type}</div>
                      </div>
                    </div>
                  </td>
                  <td>{data.email}</td>
                  <td>${data.service_due}</td>
                  <td className=" text-end ">
                    {data?.status === "confirm" ? (
                      <button className="btn btn-outline hover:text-white btn-success text-white  btn-sm">
                        Approved
                      </button>
                    ) : (
                      <div>
                        {admin ? (
                          <button
                            onClick={() => handleStatus(data._id)}
                            className="btn bg-[#ff3811] text-white btn-sm"
                          >
                            Pending
                          </button>
                        ) : (
                          <button className="btn bg-[#ff3811] text-white btn-sm">
                            Pending
                          </button>
                        )}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-5">
          <Link to="/" className="flex text-xl items-center">
            <PiArrowBendUpLeftBold className="text-2xl" />
            Continue Shopping
          </Link>
          <p
            onClick={handleRemoveAll}
            className="flex hover:cursor-pointer text-xl items-center"
          >
            <MdDeleteForever className="text-2xl " />
            Clear All Service
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
