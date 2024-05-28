import React from "react";

const Footer = () => {
  return (
    <section className="flex justify-center items-center">
      <div
        className="w-full bg-[rgb(2,67,138)] p-8 rounded-md bg-cover bg-no-repeat flex justify-between flex-col md:flex-row gap-4 md:items-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgba(2,67,138,0.6), rgba(2,67,138,0.8) ), url(./blue-deep-blue.jpg)",
        }}
      >
        <div className="flex flex-col gap-3 basis-full md:basis-[50%]">
          <h1 className="font-semibold text-2xl md:text-left text-center">
            Subscribe Our Newsletter
          </h1>
          <p className="text-center md:text-left">
            Commodo sollicitudin faucibus magnis quam urna. Iaculis fermentum
            morbi lectus tempus praesent integer tellus.
          </p>
        </div>
        <div className=" md:basis-[50%] basis-full flex md:justify-end">
          <form className="w-full relative py-1 px-2 gap-1 pr-1 rounded-md bg-white flex md:w-[80%] lg:w-[70%]  h-12 overflow-hidden">
            <input
              type="text"
              className="outline-none inline-block text-black flex-1 pr-28"
            />
            <span className="text-gray-600 flex p-2 rounded-md px-4 bg-black color_btn text-nowrap absolute right-1">
              Sign Up
            </span>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Footer;
