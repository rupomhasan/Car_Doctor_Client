import { useEffect, useState } from "react";
import "../../../../public/team.json";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Tem = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("team.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  var settings = {
    infinity: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          className: "center",
          centerMode: true,
          centerPadding: "50px",
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="my-12">
      <div className=" text-center my-8">
        <p className="text-[#ff3811] text-2xl font-bold">Team</p>
        <h3 className="font-bold text-5xl">Meet Our Team</h3>
        <div className="max-w-xl mx-auto my-4 text-lg">
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or random words which do not look even slightly believable.{" "}
          </p>
        </div>
      </div>
      <Slider {...settings} className="">
        {members.map((member, idx) => (
          <div key={idx}>
            <div className="card p-5 mx-1  bg-base-100 shadow-md">
              <figure className="bg-base-200 rounded-2xl ">
                <img src={member.img} alt="team member" className="" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{member.expertise}</h2>
                <p className="text-gray-500 text-lg font-semibold">
                  {member.name}
                </p>
                <div className="flex gap-1">
                  <div className="bg-[#395185] p-2 rounded-full">
                    <FaFacebookF className="text-xl text-white " />
                  </div>
                  <div className="bg-sky-500 p-2 rounded-full">
                    <FaTwitter className="text-xl text-white " />
                  </div>
                  <div className="bg-[#0a66c2] p-2 rounded-full">
                    <FaLinkedinIn className="text-xl text-white " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Tem;
