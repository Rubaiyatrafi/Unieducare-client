import images1 from "../../../assets/images/Graduation-1.jpg";
import images2 from "../../../assets/images/Graduation-2.jpg";
import images3 from "../../../assets/images/Graduation-3.jpg";
import images4 from "../../../assets/images/Graduation-4.jpg";
import images5 from "../../../assets/images/Graduation-5.jpg";
import images6 from "../../../assets/images/Graduation-6.jpg";
import images7 from "../../../assets/images/Graduation-7.jpg";
import images8 from "../../../assets/images/Graduation-8.jpg";
import images9 from "../../../assets/images/Graduation-9.jpg";
import images10 from "../../../assets/images/Graduation-10.jpg";
import images11 from "../../../assets/images/Graduation-11.jpg";
import images12 from "../../../assets/images/Graduation-12.jpg";
import images13 from "../../../assets/images/Graduation-13.jpg";
import images14 from "../../../assets/images/Graduation-14.jpg";
import images15 from "../../../assets/images/Graduation-15.jpg";

const Gallery = () => {
  return (
    <div className=" m-10">
      <h1 className=" text-center text-orange-500 text-4xl font-bold m-10">
        {" "}
        <span className=" text-blue-400 font-extrabold text-2xl">
          Our Photo
        </span>{" "}
        <br />G A L L E R Y
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-2 justify-items-center m-1">
        <div data-aos="fade-right" data-aos-duration="2000">
          <img className=" w-screen h-96 rounded-xl" src={images1} alt="" />
        </div>
        <div data-aos="fade-down" data-aos-duration="2000">
          <img className=" w-screen h-96 rounded-xl" src={images2} alt="" />
        </div>
        <div data-aos="fade-left" data-aos-duration="2000">
          <img className=" w-screen h-96 rounded-xl" src={images3} alt="" />
        </div>
        <div data-aos="flip-up" data-aos-duration="2000">
          <img className=" w-screen h-96 rounded-xl" src={images4} alt="" />
        </div>
        <div data-aos="flip-down" data-aos-duration="2000">
          <img className=" w-screen h-96 rounded-xl" src={images5} alt="" />
        </div>
        <div data-aos="flip-up" data-aos-duration="2000">
          <img className=" w-screen h-96 rounded-xl" src={images6} alt="" />
        </div>
        <div>
          <img className=" w-screen h-96 rounded-xl" src={images7} alt="" />
        </div>
        <div data-aos="flip-down" data-aos-duration="2000">
          <img className=" w-screen h-96 rounded-xl" src={images8} alt="" />
        </div>
        <div>
          <img className=" w-screen h-96 rounded-xl" src={images9} alt="" />
        </div>
        <div>
          <img className=" w-screen h-96 rounded-xl" src={images10} alt="" />
        </div>
        <div>
          <img className=" w-screen h-96 rounded-xl" src={images11} alt="" />
        </div>
        <div>
          <img className=" w-screen h-96 rounded-xl" src={images12} alt="" />
        </div>
        <div>
          <img className=" w-screen h-96 rounded-xl" src={images13} alt="" />
        </div>
        <div>
          <img className=" w-screen h-96 rounded-xl" src={images14} alt="" />
        </div>
        <div>
          <img className=" w-screen h-96 rounded-xl" src={images15} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
