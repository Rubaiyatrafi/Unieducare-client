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
          <p>Admission Date: {loadedCollege.admission_dates}</p>
          <p>Admission Process: {loadedCollege.admission_process}</p>
          <div className=" flex gap-10">
            <div>
              <h2>Events:</h2>
              <li>{loadedCollege.events[0]}</li>
              <li>{loadedCollege.events[1]}</li>
              <li>{loadedCollege.events[2]}</li>
            </div>
            <div>
              <h2>Research Work:</h2>
              <li>{loadedCollege.research_works[0]}</li>
              <li>{loadedCollege.research_works[1]}</li>
              <li>{loadedCollege.research_works[2]}</li>
            </div>
          </div>
          <div className=" flex gap-10">
            <div>
              <h2>Sports Categories:</h2>
              <li>{loadedCollege.sports_categories[0]}</li>
              <li>{loadedCollege.sports_categories[1]}</li>
              <li>{loadedCollege.sports_categories[2]}</li>
            </div>
            <div>
              <h2>Sports:</h2>
              <li>{loadedCollege.sports[0]}</li>
              <li>{loadedCollege.sports[1]}</li>
              <li>{loadedCollege.sports[2]}</li>
            </div>
          </div>
          <p>{loadedCollege.research_history}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
