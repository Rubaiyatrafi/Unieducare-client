import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CollegeInfo = () => {
  const [nextItems, setNextItems] = useState(3);
  const [collegeinfo, setCollegeinfo] = useState([]);
  const [srcResult, setSrcResult] = useState([]);
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    fetch("http://localhost:5000/colleges")
      .then((res) => res.json())
      .then((json) => {
        const results = json.filter((colleges) => {
          return (
            value &&
            colleges &&
            colleges.college_name &&
            colleges.college_name.toLowerCase().includes(value)
          );
        });
        setSrcResult(results);
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
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
    <div data-aos="fade-up" data-aos-duration="2000">
      <h1 className=" text-center font-bold text-4xl text-blue-500">
        Find Your Desire University in the World
      </h1>
      <div className="flex justify-center items-center m-5">
        <input
          type="text"
          placeholder="Search Your Favorite University"
          className="input input-bordered input-warning w-full max-w-xs"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div>
        {srcResult.map((college) => (
          <div key={college._id}>
            <Link to={`details/${college._id}`} className=" hover:bg-slate-300">
              <p className=" text-center">{college.college_name}</p>
            </Link>
          </div>
        ))}
      </div>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-5 justify-items-center m-1">
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
                <div className="flex justify-center">
                  <Link to={`details/${college._id}`}>
                    <button className="btn btn-warning">View Details</button>
                  </Link>
                </div>
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

export default CollegeInfo;
