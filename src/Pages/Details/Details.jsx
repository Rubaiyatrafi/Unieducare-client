import { useLoaderData } from "react-router-dom";

const Details = () => {
  const loadedCollege = useLoaderData();
  console.log(loadedCollege);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl w-full">
        <figure>
          <img
            className=" w-1/2 h-1/2 rounded-md"
            src={loadedCollege.college_image}
            alt="college"
          />
        </figure>
        <h2 className="font-extrabold text-4xl text-orange-500 text-center mt-2">
          {loadedCollege.college_name}
        </h2>
        <div className="card-body">
          <p className=" text-xl font-bold">
            Admission Date:{" "}
            <span className=" text-base text-slate-500">
              {loadedCollege.admission_dates}
            </span>
          </p>
          <p className=" text-xl font-bold">
            Admission Process:{" "}
            <span className=" text-base text-slate-500">
              {loadedCollege.admission_process}
            </span>
          </p>
          <div className=" flex gap-10">
            <div>
              <h2 className=" text-lg font-bold">Events:</h2>
              <li className=" font-bold text-sm text-slate-500">
                {loadedCollege.events[0]}
              </li>
              <li className=" font-bold text-sm text-slate-500">
                {loadedCollege.events[1]}
              </li>
              <li className=" font-bold text-sm text-slate-500">
                {loadedCollege.events[2]}
              </li>
            </div>
            <div>
              <h2 className=" text-lg font-bold">Research Work:</h2>
              <li className=" font-bold text-sm text-slate-500">
                {loadedCollege.research_works[0]}
              </li>
              <li className=" font-bold text-sm text-slate-500">
                {loadedCollege.research_works[1]}
              </li>
              <li className=" font-bold text-sm text-slate-500">
                {loadedCollege.research_works[2]}
              </li>
            </div>
          </div>
          <div className=" flex gap-10">
            <div>
              <h2 className=" text-lg font-bold">Sports Categories:</h2>
              <li className=" font-bold text-sm text-slate-500">
                {loadedCollege.sports_categories[0]}
              </li>
              <li className=" font-bold text-sm text-slate-500">
                {loadedCollege.sports_categories[1]}
              </li>
              <li className=" font-bold text-sm text-slate-500">
                {loadedCollege.sports_categories[2]}
              </li>
            </div>
            <div>
              <h2 className=" text-lg font-bold">Sports:</h2>
              <li className=" font-bold text-sm text-slate-500">
                {loadedCollege.sports[0]}
              </li>
              <li className=" font-bold text-sm text-slate-500">
                {loadedCollege.sports[1]}
              </li>
              <li className=" font-bold text-sm text-slate-500">
                {loadedCollege.sports[2]}
              </li>
            </div>
          </div>
          <p className=" text-base font-semibold text-slate-600">
            {loadedCollege.research_history}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
