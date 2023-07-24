import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";

const AdmissionForm = () => {
  const loadedData = useLoaderData();
  const { user } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const contact = form.contact.value;
    const address = form.address.value;
    const birth = form.birth.value;
    const collegename = form.collegename.value;
    const photo = form.photo.value;

    const newForm = {
      name,
      email,
      subject,
      contact,
      address,
      birth,
      collegename,
      photo,
    };
    console.log(newForm);
    fetch("http://localhost:5000/admission", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newForm),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Admission Submit Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
    form.reset();
  };
  return (
    <div className="bg-gradient-to-r from-orange-200 via-purple-100 to-orange-100 p-24 mt-10 mb-10 rounded-md">
      <div className=" w-full space-y-5">
        <h1
          data-aos="fade-left"
          data-aos-duration="2000"
          className="text-center"
        >
          <span className=" text-2xl text-orange-500 font-bold">
            Welcome to
          </span>{" "}
          <br />{" "}
          <span className=" text-5xl text-blue-500 font-extrabold">
            Uni <span className=" text-red-500">Edu</span> Care
          </span>
        </h1>
      </div>
      <h2
        data-aos="fade-right"
        data-aos-duration="2000"
        className="text-5xl font-extrabold text-center mb-6 text-orange-500"
      >
        Admission Form
      </h2>
      <hr />
      <p className=" text-center text-stone-500 font-semibold mb-10 mt-10">
        We not only process your admission and visa application but also guide
        you in finding the right subject and the right university.
      </p>
      <hr />
      <hr />

      <form onSubmit={handleSubmit}>
        <div className="flex mb-8 mt-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Your name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered w-full"
                value={user.displayName}
                readOnly
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Your email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="input input-bordered w-full"
                value={user.email}
                readOnly
              />
            </label>
          </div>
        </div>
        <div className="flex mb-8 mt-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Your Subject</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject Name"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Your Contact Number</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="contact"
                placeholder="Mobile"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Your Address</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Date of Birth</span>
            </label>
            <label className="input-group">
              <input
                type="date"
                name="birth"
                placeholder="Ratings"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        <div className="flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">College Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="collegename"
                placeholder="College Name"
                className="input input-bordered w-full"
                value={loadedData.college_name}
                readOnly
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Your Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
                value={user.photoURL}
                readOnly
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Submit"
          className="btn btn-warning btn-block mt-10"
        />
      </form>
    </div>
  );
};

export default AdmissionForm;
