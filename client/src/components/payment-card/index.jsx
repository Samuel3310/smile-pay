import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const PaymentCard = ({ title, description, icon, id }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="bg-white p-2 rounded-lg flex items-center justify-center"
      data-aos={`${id % 2 === 0 ? "fade-left" : "fade-up"}`}
      data-aos-easing="linear"
      // data-aos-duration="500"
      data-aos-delay={`${
        id === 1
          ? "50"
          : id === 2
          ? "200"
          : id === 3
          ? "300"
          : id === 4
          ? "400"
          : id === 5
          ? "500"
          : "600"
      }`}
    >
      <div className="flex flex-col gap-4 p-2">
        <div className="flex justify-between items-center py-2 px-4 rounded-md font-semibold bg-[#EDF4F9]">
          <p className="text-nowrap">{title}</p>
          <span>{icon}</span>
        </div>
        <p>{description}</p>

        <button className="btn_color"> Learn More</button>
      </div>
    </div>
  );
};

export default PaymentCard;
