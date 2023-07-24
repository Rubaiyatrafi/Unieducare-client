import { Link, useLoaderData } from "react-router-dom";

const Profile = () => {
  const myProfile = useLoaderData();

  return (
    <div className=" m-60">
      <h1 className=" text-center font-extrabold text-orange-500 text-3xl m-10">
        Welcome
      </h1>
      {myProfile.map((profile) => (
        <div key={profile._id}>
          <div className="card w-full bg-gradient-to-r from-orange-200 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={profile.photo}
                alt="Shoes"
                className=" w-40 h-40 rounded-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className=" text-4xl font-bold text-blue-500">
                {profile.name}
              </h2>
              <p className=" text-lg font-semibold text-slate-600">
                {profile.email}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className=" flex justify-center font-bold m-10">
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default Profile;
