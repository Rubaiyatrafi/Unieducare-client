import { useLoaderData } from "react-router-dom";

const MyCollege = () => {
  const myCollege = useLoaderData();
  return (
    <div className=" grid sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-5 justify-items-center mt-10 mb-12">
      {myCollege.map((college) => (
        <div key={college._id}>
          <div className="card bg-base-100 shadow-xl w-full">
            <figure>
              <img className=" w-14 h-14" src={college.photo} alt="college" />
            </figure>
            <div className=" flex justify-center">
              <p className=" text-xs font-bold text-slate-500">
                ({college.email})
              </p>
            </div>
            <div className=" flex justify-center mt-3">
              <h2 className="card-title font-extrabold text-base text-blue-500">
                {college.name}
              </h2>
            </div>
            <div className="card-body">
              <p className=" font-extrabold text-center text-orange-500 text-xl">
                <span className=" text-slate-800 text-xl ">College Name:</span>{" "}
                {college.collegename}
              </p>
              <p className=" text-lg font-bold text-center">
                Subject:{" "}
                <span className=" text-slate-500">{college.subject}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCollege;
