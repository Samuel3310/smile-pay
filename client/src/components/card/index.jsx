import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Card = ({ title, desc, id }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        // data-aos-duration="500"
        data-aos-delay={`${id === 1 ? "50" : id === 2 ? "400" : "500"}`}
        className="card bg-[#EDF4F9] overflow-x-hidden rounded-lg py-5 px-10 flex flex-col gap-2.5 relative  after::content-[''] after:bg-gradient-to-br after:from-indigo-600 after:to-pink-600 after:w-[20px] after:rounded-r-2xl after:hover:bg-gradient-to-tr after:hover:from-indigo-600 after:hover:to-pink-500 cursor-pointer transition-[background] dur after:h-[70%]  after:block after:absolute after:top-[50%] after:translate-y-[-50%] after:-left-2 "
      >
        <h1 className="font-semibold text-xl text-center">{title}</h1>
        <p className="text-base text-left text-gray-500">{desc}</p>
      </div>
    </>
  );
};

export default Card;
