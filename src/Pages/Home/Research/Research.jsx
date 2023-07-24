import { useEffect, useState } from "react";

const Research = () => {
  const [nextItems, setNextItems] = useState(4);
  const [research, setResearch] = useState([]);

  const seeMoreHandler = () => {
    setNextItems((prev) => prev + 4);
  };

  useEffect(() => {
    fetch("http://localhost:5000/research")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setResearch(data);
      });
  }, []);
  return (
    <div className=" mt-10">
      <h1
        data-aos="fade-right"
        data-aos-duration="2500"
        className=" text-center m-10 text-3xl font-bold text-blue-400"
      >
        Here some research paper link for your information
      </h1>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-5 justify-items-center m-1">
        {research.slice(0, nextItems).map((rscdata) => (
          <div key={rscdata._id}>
            <div className="card w-96 bg-gradient-to-r from-orange-100 shadow-xl">
              <div className="card-body">
                <h2 className="text-lg font-bold">
                  Research Name:{" "}
                  <span className=" text-base text-slate-600">
                    {rscdata.name}
                  </span>
                </h2>
                <p className=" text-sm font-semibold text-blue-700">
                  <span className=" text-base font-bold text-slate-500">
                    Research Link:
                  </span>{" "}
                  {rscdata.url}
                </p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex justify-center m-10">
        {nextItems < research.length && research.length > 3 && (
          <button
            onClick={seeMoreHandler}
            className="btn btn-active btn-warning btn-sm"
          >
            See More
          </button>
        )}
      </div>
    </div>
  );
};

export default Research;
