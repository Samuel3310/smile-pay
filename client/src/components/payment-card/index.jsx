import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaQuoteRight } from "react-icons/fa";

const PaymentCard = ({ title, description, icon, id }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-white p-2 rounded-lg flex items-center justify-center min-w-[400px]">
      <div className="flex flex-col gap-4 p-2">
        <p className="rounded-full  text-center flex items-center justify-center">
          <span className="w-10 h-10  bg-blue-500 rounded-full flex items-center justify-center">
            <FaQuoteRight fill="#fff" />
          </span>
        </p>

        <p>{description}</p>
        <div className="text-center flex flex-col items-center justify-center">
          <p className="text-nowrap font-semibold">{title}</p>
          <span className="inline text-center">{icon}</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
