import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <div className="hero my-20">
        <div className="hero-content flex-col gap-10 lg:flex-row">
          <div className=" relative lg:w-1/2">
            <img src={person} className="w-4/5 rounded-lg shadow-2xl" />{" "}
            <img
              src={parts}
              className="absolute w-1/2 right-2 top-2/3
               border-8 border-white rounded-lg shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 space-y-5 p-5 mt-20 lg:mt-0">
            <h1 className="text-2xl font-bold  text-[#ff3811]">About Us</h1>
            <h1 className="text-3xl md:text-6xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <div className="space-y-3 text-lg">
              <p className="">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or random words which do not look even slightly
                believable.
              </p>{" "}
              <p className="">
                the majority have suffered alteration in some form, by injected
                humour, or random words which do not look even slightly
                believable.
              </p>
            </div>
            <button className="btn hover:bg-[#ff3811] bg-[#ff3811] text-white">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
