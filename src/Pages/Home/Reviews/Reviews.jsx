import { useEffect, useState } from "react";
const Reviews = () => {
  const [nextItems, setNextItems] = useState(4);
  const [reviews, setReviews] = useState([]);

  const seeMoreHandler = () => {
    setNextItems((prev) => prev + 4);
  };

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setReviews(data);
      });
  }, []);
  return (
    <div className=" mt-10">
      <h1
        data-aos="fade-left"
        data-aos-duration="2500"
        className=" text-center text-4xl text-blue-400 font-bold m-10"
      >
        Student Reviews and Feedback
      </h1>
      <p className=" text-center text-base font-semibold text-slate-500 m-10">
        It is commonly used to introduce a section that contains reviews and
        feedback from students or alumni about a specific college, university,
        or educational institution. It sets the context for the following
        content, which typically includes individual reviews, testimonials, or
        comments from people who have firsthand experience with the institution.
        The section aims to provide potential students or interested parties
        with insights into the overall experiences and opinions of others who
        have been associated with the college.
      </p>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-5 justify-items-center m-1">
        {reviews.slice(0, nextItems).map((review) => (
          <div key={review._id}>
            <div className="card w-96 bg-slate-100 shadow-xl">
              <div className="card-body">
                <h2 className="text-lg font-bold">
                  College Name:{" "}
                  <span className=" text-base text-orange-500">
                    {review.college_name}
                  </span>
                </h2>
                <p className=" text-sm font-semibold text-slate-500">
                  <span className=" text-base font-bold text-slate-700">
                    Review:
                  </span>{" "}
                  {review.review}
                </p>
                <p className=" text-sm font-semibold text-slate-500">
                  <span className=" text-base font-bold text-slate-700">
                    Feedback:
                  </span>{" "}
                  {review.feedback}
                </p>
                <p className=" text-sm font-semibold text-red-500">
                  <span className=" text-base font-bold text-slate-700">
                    Ratings:
                  </span>{" "}
                  {review.ratings}
                </p>

                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex justify-center m-10">
        {nextItems < reviews.length && reviews.length > 3 && (
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

export default Reviews;
