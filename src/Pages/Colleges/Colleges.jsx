import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

const Colleges = () => {
  const [nextItems, setNextItems] = useState(3);
  const [collegeinfo, setCollegeinfo] = useState([]);

  const seeMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };
  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCollegeinfo(data);
      });
  }, []);
  return (
    <div>
      <h1 className=" text-center font-bold text-2xl text-red-400 mb-10">
        <span
          data-aos="fade-right"
          data-aos-duration="3000"
          className=" text-4xl text-blue-600"
        >
          Uni
          <span
            data-aos="fade-left"
            data-aos-duration="3000"
            className=" text-red-600"
          >
            Edu
          </span>
          Care
        </span>{" "}
        <br />A Path to your Study abroad Dream <br />
        Study abroad thorugh us
      </h1>
      <div
        data-aos="fade-down"
        data-aos-duration="3000"
        className=" grid sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-5 justify-items-center m-1"
      >
        {collegeinfo.slice(0, nextItems).map((college) => (
          <div key={college._id}>
            <div className="card bg-base-100 shadow-xl w-full">
              <figure>
                <img
                  className=" w-full h-80"
                  src={college.college_image}
                  alt="college"
                />
              </figure>
              <h2 className="font-extrabold text-3xl text-center text-orange-500 mt-5">
                {college.college_name}
              </h2>
              <div className="card-body">
                <p className=" text-xl font-bold">
                  Admission Date:{" "}
                  <span className=" text-lg font-bold text-slate-500">
                    {college.admission_dates}
                  </span>
                </p>
                <div className=" flex justify-between">
                  <div>
                    <h2 className=" text-xl font-bold">Events:</h2>
                    <li className=" text-sm font-bold text-slate-500">
                      {college.events[0]}
                    </li>
                    <li className=" text-sm font-bold text-slate-500">
                      {college.events[1]}
                    </li>
                    <li className=" text-sm font-bold text-slate-500">
                      {college.events[2]}
                    </li>
                  </div>
                  <div>
                    <h2 className=" text-xl font-bold">Sports:</h2>
                    <li className=" text-sm font-bold text-slate-500">
                      {college.sports[0]}
                    </li>
                    <li className=" text-sm font-bold text-slate-500">
                      {college.sports[1]}
                    </li>
                    <li className=" text-sm font-bold text-slate-500">
                      {college.sports[2]}
                    </li>
                  </div>
                </div>
                <p className=" font-medium text-slate-700">
                  {college.research_history}
                </p>
                {/* <div className="flex justify-center">
                  <Link to={`details/${college._id}`}>
                    <button className="btn btn-outline btn-warning">
                      View Details
                    </button>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=" flex justify-center m-10">
        {nextItems < collegeinfo.length && collegeinfo.length > 3 && (
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

export default Colleges;
