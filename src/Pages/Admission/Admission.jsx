import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admission = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setColleges(data);
      });
  }, []);
  return (
    <div className=" grid sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-5 justify-items-center m-1">
      {colleges.map((college) => (
        <div key={college._id}>
          <div className="card bg-base-100 shadow-xl w-full">
            <figure>
              <img
                className=" w-screen h-96"
                src={college.college_image}
                alt="college"
              />
            </figure>
            <div className=" flex justify-center mt-3">
              <h2 className="card-title font-extrabold text-3xl text-orange-500">
                {college.college_name}
              </h2>
            </div>
            <div className="card-body">
              <p className=" font-semibold text-center text-slate-600">
                <span className=" text-slate-800 text-base font-extrabold">
                  Admission Date:
                </span>{" "}
                {college.admission_dates}
              </p>

              <div className="flex justify-center">
                <Link to={`/admissionform/${college._id}`}>
                  <button className="btn  btn-warning">Admission Form</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Admission;
