import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full ">
      {/* Slider 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full max-h-[80vh] min-h-[60vh]" />
        <div className="absolute h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21 , 21 , 21,0)] ">
          <div className="text-white space-y-4 md:w-1/2 px-3 md:pl-10  ">
            <h2 className="md:text-6xl text-3xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="md:w-80">
              There are many variations fo passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-success text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-error mt-5 ml-1 md:ml-5">
                Next Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between right-5 bottom-5 gap-10 ">
          <a
            href="#slide6"
            className="btn btn-circle hover:bg-error border-none"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle hover:bg-error border-none"
          >
            ❯
          </a>
        </div>
      </div>
      {/* Slider 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full max-h-[80vh] min-h-[60vh]" />
        <div className="absolute h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21 , 21 , 21,0)] ">
          <div className="text-white space-y-4 w-1/2 px-3 md:pl-10  ">
            <h2 className="md:text-6xl text-3xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="w-80">
              There are many variations fo passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-success text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-error mt-5 ml-1 md:ml-5">
                Next Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex  right-5 bottom-5 gap-10 ">
          <a
            href="#slide1"
            className="btn btn-circle hover:bg-error border-none"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle hover:bg-error border-none"
          >
            ❯
          </a>
        </div>
      </div>
      {/* Slider 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full max-h-[80vh] min-h-[60vh]" />
        <div className="absolute h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21 , 21 , 21,0)] ">
          <div className="text-white space-y-4 w-1/2 px-3 md:pl-10  ">
            <h2 className="md:text-6xl text-3xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="w-80">
              There are many variations fo passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-success text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-error mt-5 ml-1 md:ml-5">
                Next Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex  right-5 bottom-5 gap-10 ">
          <a
            href="#slide2"
            className="btn btn-circle hover:bg-error border-none"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle hover:bg-error border-none"
          >
            ❯
          </a>
        </div>
      </div>
      {/* Slider 4 */}
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full max-h-[80vh] min-h-[60vh]" />
        <div className="absolute h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21 , 21 , 21,0)] ">
          <div className="text-white space-y-4 w-1/2 px-3 md:pl-10  ">
            <h2 className="md:text-6xl text-3xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="w-80">
              There are many variations fo passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-success text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-error mt-5 ml-1 md:ml-5">
                Next Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex  right-5 bottom-5 gap-10 ">
          <a
            href="#slide3"
            className="btn btn-circle hover:bg-error border-none"
          >
            ❮
          </a>
          <a
            href="#slide5"
            className="btn btn-circle hover:bg-error border-none"
          >
            ❯
          </a>
        </div>
      </div>
      {/* Slider 5 */}
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full max-h-[80vh] min-h-[60vh]" />
        <div className="absolute h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21 , 21 , 21,0)] ">
          <div className="text-white space-y-4 w-1/2 px-3 md:pl-10  ">
            <h2 className="md:md:text-6xl text-3xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="w-80">
              There are many variations fo passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-success text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-error mt-5 ml-1 md:ml-5">
                Next Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex  right-5 bottom-5 gap-10 ">
          <a
            href="#slide4"
            className="btn btn-circle hover:bg-error border-none"
          >
            ❮
          </a>
          <a
            href="#slide6"
            className="btn btn-circle hover:bg-error border-none"
          >
            ❯
          </a>
        </div>
      </div>
      {/* Slider 6 */}
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full max-h-[80vh] min-h-[60vh]" />
        <div className="absolute h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21 , 21 , 21,0)] ">
          <div className="text-white space-y-4 w-1/2 px-3 md:pl-10  ">
            <h2 className="md:text-6xl text-3xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="w-80">
              There are many variations fo passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-success text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-error mt-5 ml-1 md:ml-5">
                Next Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex  right-5 bottom-5 gap-10 ">
          <a
            href="#slide5"
            className="btn btn-circle hover:bg-error border-none"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle hover:bg-error border-none"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
