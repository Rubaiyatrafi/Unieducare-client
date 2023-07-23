import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { useContext } from "react";
import "./Navbar.css";

import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignout = () => {
    logOut()
      .then((result) => {
        console.log(result);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logout Successfull",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <nav className="navbar md:flex-row  justify-between flex-col rounded mb-10 bg-gradient-to-r from-orange-300">
        <div className="flex flex-col gap-3">
          <img className="w-12 rounded-lg" src={logo} alt="" />
          <h2 className="ml-2 text-4xl font-bold font-serif  title-name">
            <span className=" text-blue-700">
              Uni<span className=" text-red-600">Edu</span>Care
            </span>
          </h2>
        </div>
        <div className="text-1xl font-bold font-sans  md:flex-row flex-col link-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/colleges">Colleges</NavLink>
          <NavLink to="/admission">Admission</NavLink>
          <NavLink to="/mycollege">My College</NavLink>

          {user ? (
            <>
              <span className="navbar md:flex-row  justify-between flex-col ">
                <button onClick={handleSignout}>
                  <NavLink>Signout</NavLink>
                </button>
                <div className=" flex flex-col">
                  <img
                    className="w-10 rounded-full"
                    src={user.photoURL}
                    alt=""
                  />
                  <p className=" text-xs">{user.displayName}</p>
                </div>
              </span>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
