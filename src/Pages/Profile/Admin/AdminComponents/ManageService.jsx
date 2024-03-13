import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { MdCancel, MdDeleteForever } from "react-icons/md";
import { PiArrowBendUpLeftBold } from "react-icons/pi";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ManageService = () => {
  const loadedService = useLoaderData();
  const [service, setService] = useState(loadedService);

  //   const {  data } = useQuery({
  //     queryKey: ["services"],
  //     queryFn: async () => {
  //       const data = (await fetch("https://recap-car-doctor-server-kq91fhz4b-rupomhasans-projects.vercel.app/services")).json();
  //       return data;
  //     },
  //   });
  //   console.log(data);

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
      console.log(result);
      if (result.isConfirmed) {
        axios.delete(`https://recap-car-doctor-server-kq91fhz4b-rupomhasans-projects.vercel.app/service/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            const newService = loadedService.filter((data) => data?._id !== id);
            setService(newService);
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
      console.log(result);
      // if (result.isConfirmed) {

      axios.delete("https://recap-car-doctor-server-kq91fhz4b-rupomhasans-projects.vercel.app/services").then((res) => {
        console.log(res.data);
        if (res.data) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          setService([]);
        }
      });
    });
  };

  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <div className="relative ">
          <p className=" text-4xl  font-bold opacity-20">Manage Service</p>
          <p className="absolute  top-4 left-4  text-3xl font-bold font-serif ">
            Manage Service
          </p>
        </div>
        <div className="my-20">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-xl">
                  <th>Delete</th>
                  <th>Service</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {service?.map((data, idx) => (
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
                              src={data.img}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{data.title}</td>
                    <td>${data.price}</td>
                    <td className="">
                      <p>Edit</p>
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
    </div>
  );
};

export default ManageService;
