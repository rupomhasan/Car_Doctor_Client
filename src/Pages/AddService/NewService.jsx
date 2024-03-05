import DetailsBanner from "../Shared/DetailsBanner/DetailsBanner";

const NewService = () => {
  const handleAddNewService = (e) => {
    e.preventDefault();
    const from = e.target;
    console.log(from);
    const serviceName = from.serviceName.value;
    const servicePrice = from.servicePrice.value;
    const description = from.description.value;

    const service = {
      serviceName,
      servicePrice,
      description,
    };
  };

  const routeName = "Add New Service";
  return (
    <div className="max-w-screen-xl mx-auto">
      <div>
        <DetailsBanner routeName={routeName} />
      </div>
      <div className=" my-20">
        <form
          onSubmit={handleAddNewService}
          className="bg-base-300 mx-2 rounded-xl py-16 flex  justify-center"
        >
          <div className=" mx-auto px-16  space-y-5 max-w-screen-lg w-full">
            <div className="flex gap-10">
              <input
                type="text"
                name="serviceName"
                className="px-5 py-2 rounded-lg w-full bg-base-100"
                placeholder="Service Name"
              />
              <input
                type="text"
                name="price"
                className="px-5 py-2 rounded-lg w-full bg-base-100"
                placeholder="Service Price"
              />
            </div>
            <div className="md:flex gap-10">
              <input
                type="text"
                name="text"
                className="px-5 py-2 rounded-lg w-full bg-base-100"
                placeholder="Text here"
              />
              <input
                type="text"
                name="type"
                className="px-5 py-2 rounded-lg w-full bg-base-100"
                placeholder="Service Type"
              />
            </div>
            <div>
              <textarea
                className="w-full rounded-lg py-3 px-5"
                rows={7}
                placeholder="Product Description"
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
