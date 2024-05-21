import React, { useEffect } from "react";
import Card from "../components/card";
import Aos from "aos";
import "aos/dist/aos.css";
import ProgressBar from "@ramonak/react-progress-bar";

import {
  FaCreditCard,
  FaChartBar,
  FaLock,
  FaWallet,
  FaMoneyCheck,
  FaHandHoldingUsd,
  FaStar,
  FaHandshake,
  FaRocket,
} from "react-icons/fa";

import PaymentCard from "../components/payment-card";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const cardDetails = [
    {
      id: 1,
      title: "Payment Solution",
      desc: "Eget felis diam dictumst lorem eros parturient letius morbi metus. Cras suscipit vulputate sollicitudin nullam maximus.",
    },
    {
      id: 2,
      title: "Growth Business",
      desc: "Eget felis diam dictumst lorem eros parturient letius morbi metus. Cras suscipit vulputate sollicitudin nullam maximus.",
    },
    {
      id: 3,
      title: "Connected People",
      desc: "Eget felis diam dictumst lorem eros parturient letius morbi metus. Cras suscipit vulputate sollicitudin nullam maximus.",
    },
  ];

  const features = [
    {
      id: 1,
      title: "Amazing Features",
      description:
        "Dui nam pede mauris mus tellus. Laoreet at sapien praesent magna class aenean dictumst taciti vehicula primis.",
      icon: <FaStar />,
    },
    {
      id: 2,
      title: "Easy Payment",
      description:
        "Dui nam pede mauris mus tellus. Laoreet at sapien praesent magna class aenean dictumst taciti vehicula primis.",
      icon: <FaCreditCard />,
    },
    {
      id: 3,
      title: "Trusted Partner",
      description:
        "Dui nam pede mauris mus tellus. Laoreet at sapien praesent magna class aenean dictumst taciti vehicula primis.",
      icon: <FaHandshake />,
    },
    {
      id: 4,
      title: "Fast Speed Platform",
      description:
        "Dui nam pede mauris mus tellus. Laoreet at sapien praesent magna class aenean dictumst taciti vehicula primis.",
      icon: <FaRocket />,
    },
  ];
  return (
    <main className="w-full  bg-[#EDF4F9] pt-5 md:pt-[50px] lg:pt-[100px] relative overflow-x-hidden">
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(31, 64, 127, 0.8), rgba(31, 64, 127, 0.9)),url(./pattern.png),url(./blue-deep-blue.jpg)",
          backgroundSize: "cover, 50%",
          backgroundPosition: "center, right",
          backgroundRepeat: "no-repeat, no-repeat, no-repeat",
        }}
        className="w-full relative rounded-[20px]"
      >
        <article className="flex flex-col md:flex-row px-10 items-center justify-center py-4">
          <div
            className="flex flex-col gap-3"
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <h3 className="text-[#F9A61A] font-semibold mt-2">
              PAYMENT GATEWAY
            </h3>
            <h1
              className="text-max-80 leading-] font-bold text-white"
              style={{ lineHeight: 1.1 }}
            >
              Make Life Simpler With KenePay
            </h1>
            <p className="text-lg text-gray-300 max-w-[500px]">
              Nibh odio si tristique suscipit turpis. Mauris enim ridiculus
              vehicula efficitur venenatis porttitor aliquet urna. Aenean
            </p>
            <div className="flex gap-5 my-3">
              <button className="btn_color font-semibold text-white bordered text-nowrap btn-max">
                Get Started
              </button>
              <button className=" font-semibold text-white btn_color-trans text-nowrap btn-max">
                Learn more
              </button>
            </div>
          </div>
          <div
            className=" relative"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img
              src="./heroright.png"
              alt="alt"
              className="w-full relative md:-top-2 md:scale-125 md:-right-9 scale-95 -bottom-10"
            />
          </div>
        </article>
      </div>

      <article className="bg-white w-full mt-4 md:mt-[60px] p-10 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {cardDetails.map((card) => (
            <Card {...card} key={card.id} />
          ))}
        </div>

        <section className="w-full min-h-screen py-10 px-1 flex flex-col md:flex-row gap-10 ">
          <div className="md:basis-[60%] w-full flex flex-col justify-center gap-5 md:p-10 p-2">
            <h1>
              <span className="title" data-aos="fade-right">
                Who We Are
              </span>
            </h1>
            <h1
              className="font-bold text-max-48 text-center md:text-left mt-3"
              style={{ lineHeight: 1.1 }}
              data-aos="fade-left"
            >
              We&apos;re A Highly Experienced Online Payment Gateway Agent
            </h1>
            <p className="text-base" data-aos="fade-right">
              Semper quis mus ipsum fringilla vulputate. Parturient class libero
              nostra a sollicitudin consectetuer faucibus.
            </p>
            <p className="text-sm text-justify" data-aos="fade-down">
              Ullamcorper curae dictum ante primis montes bibendum a fames
              tortor imperdiet. Consequat sapien vehicula nascetur finibus
              sodales gravida parturient tempus sem. Facilisi habitasse
              ultricies curae ultrices aptent at hac gravida. Semper nam nulla
              nullam ipsum tempus consequat metus curabitur ridiculus himenaeos.
              Gravida nibh consectetur nam augue facilisi amet parturient.
            </p>
            <div>
              <button className="btn_color" data-aos="flip-right">
                Discover More
              </button>
            </div>
          </div>

          <div
            className="relative w-full h-[365px] md:h-auto  md:basis-[40%] flex items-center justify-center  "
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="400"
          >
            <div className="absolute w-full md:h-[50vh] h-[250px] border-4 border-indigo-700 md:-left-4 -right-4 rounded-3xl"></div>
            <img
              src="phone.png"
              alt=""
              className="relative md:scale-110 w-[308px] h-[365px]  z-10 bottom-0"
            />
            <img
              src="blue-deep-blue.jpg"
              alt=""
              className="absolute w-full rounded-2xl h-[290px] md:h-[60%]"
            />
          </div>
        </section>
        <section className="flex justify-center items-center md:gap-10 gap-2 flex-col md:flex-row mb-10">
          <div className="  md:bg-gray-200 relative  flex sm:flex-row flex-col gap-1 md:flex-col md:after:contents-[''] md:after:w-2 md:after:h-full md:after:bg-yellow-500 md:after:block md:after:absolute text-xl font-semibold shadow-xl p-2 md:p-0">
            <p className="md:pl-4 md:p-2 text-nowrap">
              Trusted by <span className="text-[#3064CB]">175,000+ </span>
            </p>
            <p className="md:pl-4 md:pr-2 md:pb-2 text-nowrap">
              {" "}
              customers worldwide
            </p>
          </div>
          <div className=" md:basis-[70%] overflow-hidden">
            <div className="logos flex ">
              {num.map((item) => (
                <img src={`./flyl${item}.png`} key={item} className="w-48" />
              ))}
            </div>
          </div>
        </section>
      </article>

      <section
        className="flex md:justify-start md:py-20  py-14 bg-cover bg-no-repeat bg-center "
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgba(99, 118, 151,0.9),  rgba(127, 130, 134, 0.5)), url(./person-yellow.jpg)",
        }}
      >
        <div className="md:basis-3/5 basis-4/5 pt-3 pl-10 flex flex-col gap-5">
          <h1 className="text-max-48 text-white md:font-bold font-semibold">
            Enjoy the Convenience of Online Payments
          </h1>
          <p className="text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos, doloribus distinctio asperiores sit eligendi reiciendis
            fugit suscipit corporis unde quasi!
          </p>
          <div>
            <button className="btn_color">Discover More</button>
          </div>
        </div>
      </section>

      <section
        className="my-5 py-24 bg-no-repeat bg-left bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(rgba(237,244,249, 0.8), rgba(237,244,249, 0.8)),url(./pattern.png)",
        }}
      >
        <div className="max-w-[700px] mx-auto flex items-center justify-center flex-col gap-5">
          <p>
            <span className="title !bg-blue-200">What we Offer</span>
          </p>
          <h1 className="text-max-48">Smart Solution for Your Payment</h1>
          <p className="text-md text-center text-gray-400">
            Nibh gravida lacus penatibus lobortis vivamus dis justo ut dolor
            blandit ac. Et dignissim nostra per ac scelerisque nullam fermentum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 mt-10">
          {cardData.map((item) => (
            <PaymentCard {...item} key={item.id} />
          ))}
        </div>
      </section>

      {/* ............................................................................. */}
      <section className="w-full bg-white min-h-screen py-10 px-1 flex flex-col md:flex-row-reverse gap-10 px-10 border-b-1 border-blue-500 ">
        <div className="md:basis-[50%] w-full flex flex-col justify-center gap-5 md:p-10 p-2">
          <h1
            className="font-bold text-max-48 text-center md:text-left mt-3"
            style={{ lineHeight: 1.1 }}
            data-aos="fade-left"
          >
            Our Roadmap To Reach Your Easy Payment Solution
          </h1>
          <p
            className="text-base border-b-2 border-gray-400 pb-3"
            data-aos="fade-right"
          >
            Semper quis mus ipsum fringilla vulputate. Parturient class libero
            nostra a sollicitudin consectetuer faucibus.
          </p>

          <div className="flex flex-col gap-3 ">
            <div data-aos="fade-left">
              <span>Success Payment</span>
              <ProgressBar completed={90} />
            </div>
            <div data-aos="fade-right">
              <span>Secure Transaction</span>
              <ProgressBar completed={80} />
            </div>
            <div data-aos="fade-left">
              <span>Positive Reviews</span>
              <ProgressBar completed={85} />
            </div>
          </div>
        </div>

        <div
          className="relative w-full h-[365px] md:h-auto  md:basis-[50%] flex items-center justify-center  "
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-delay="400"
        >
          <img
            src="design13.jpg"
            alt=""
            className="absolute w-full rounded-2xl h-[290px] md:h-[70%]"
          />

          <div className=" w-64 h-48 md:w-58 md:h-58 bg-white absolute -left-6 rounded-lg  bottom-2 shadow-xl p-3 flex flex-col gap-3">
            <div className="flex justify-center ">
              <FaCreditCard fill="#3064C6" size={52} />
            </div>
            <h1 className="text-center text-xl">40+ Supported Cards</h1>
            <p className="text-sm text-gray-400 text-center">
              Commodo dolor torquent fusce hac cubilia placerat venenatis
              scelerisque ridiculus augue sit
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t-[1px] border-blue-500">
        <div className="flex flex-col gap-8  md:flex-row mt-4 md:gap-5 px-5">
          <div className="basis-[50%]">
            <span className="title inline-block mb-3 md:mb-0">
              Why choose us
            </span>
            <h1 className="text-max-48">
              We will only charge for each successful transaction
            </h1>
          </div>
          <div className="basis-[50%]">
            <p className="text-md">
              Iaculis augue nunc dignissim convallis posuere nullam non
              parturient fringilla. Pede aliquet venenatis vehicula ultricies
              cubilia quis porttitor fermentum. Laoreet congue vulputate ornare
              habitasse si interdum.
            </p>
          </div>
        </div>

        <div className="pricing"></div>
      </section>

      <section
        className="flex md:justify-end md:py-20  pt-14 pb-5 bg-cover bg-no-repeat bg-top "
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgba(99, 118, 151,0.9),  rgba(127, 130, 134, 0.5)), url(./design14.jpg)",
        }}
      >
        <div className="md:basis-3/6 basis-4/5 pt-3 pl-10 flex flex-col gap-5">
          <h1 className="text-max-48 text-white md:font-bold font-semibold">
            Get paid faster and more securely with our payment gateway solution
          </h1>
          <p className="text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos, doloribus distinctio asperiores sit eligendi reiciendis
            fugit suscipit corporis unde quasi!
          </p>
          <div>
            <button className="btn_color">Discover More</button>
          </div>
        </div>
      </section>
      <section className="flex justify-between px-5 py-4 bg-white border-b-2 border-l-gray-500">
        <div className=" pl-4">
          <p className="text-6xl text-blue-500">17K+</p>
          <span>User Download</span>
        </div>
        <div className="border-l-2 border-blue-500 pl-4">
          <p className="text-6xl text-blue-500">12K+</p>
          <span>Active User</span>
        </div>
        <div className="border-l-2 border-blue-500 pl-4">
          <p className="text-6xl text-blue-500">4.8/5</p>
          <span>User Rating</span>
        </div>
        <div className="border-l-2 border-blue-500 pl-4">
          <p className="text-6xl text-blue-500">15+</p>
          <span>Yeasr Experience</span>
        </div>
      </section>
      <section className="w-full min-h-screen py-10 px-1 flex flex-col md:flex-row gap-10 bg-white">
        <div className="md:basis-[60%] w-full flex flex-col justify-center gap-5 md:p-10 p-2">
          <h1>
            <span className="title" data-aos="fade-right">
              Why Choose us
            </span>
          </h1>
          <h1
            className="font-bold text-max-48 text-center md:text-left mt-3"
            style={{ lineHeight: 1.1 }}
            data-aos="fade-left"
          >
            Flexibility, security and speed, all in one
          </h1>
          <p className="text-base" data-aos="fade-right">
            Semper quis mus ipsum fringilla vulputate. Parturient class libero
            nostra a sollicitudin consectetuer faucibus.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex gap-5 rounded-xl p-2  shadow-md"
              >
                <span className="">
                  <span className="inline-block rounded-sm text-2xl p-3 bg-blue-500 text-white">
                    {feature.icon}
                  </span>
                </span>
                <div>
                  {" "}
                  <h3 className="mb-2 text-md font-semibold">
                    {feature.title}
                  </h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div></div>
        </div>

        <div
          className="relative w-full h-[365px] md:h-auto  md:basis-[40%] flex items-center justify-center mt-5 md:mt-0 "
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-delay="400"
        >
          <img
            src="design16.png"
            alt=""
            className="relative  w-[308px] h-[365px]  md:top-0 -top-[38px] z-10 "
          />
          <img
            src="blue-deep-blue.jpg"
            alt=""
            className="absolute w-full rounded-2xl h-[290px]  md:h-[60%]"
          />
        </div>
      </section>

      <section
        className="my-5 py-24 bg-no-repeat bg-left bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(rgba(237,244,249, 0.8), rgba(237,244,249, 0.8)),url(./pattern.png)",
        }}
      >
        <div className="max-w-[700px] mx-auto flex items-center justify-center flex-col gap-5">
          <p>
            <span className="title !bg-blue-200">Testimonials</span>
          </p>
          <h1 className="text-max-48">What Clients Say About Kenepay</h1>
          <p className="text-md text-center text-gray-400">
            (4.8/5) Over 10,000+ reviews from customers!
          </p>
        </div>

        <div className="flex logos gap-5 px-5 mt-10">
          {cardData.map((item) => (
            <PaymentCard {...item} key={item.id} />
          ))}
        </div>
      </section>
    </main>
  );
};

const num = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

const cardData = [
  {
    id: 1,
    title: "Payment Methods",
    description:
      "Consectetur sem proin mollis mauris ornare facilisi si netus. Egestas iaculis erat dui ornare hendrerit conubia convallis dolor ut sociosqu quis. Urna platea ligula leo auctor morbi libero interdum hendrerit.",
    icon: <FaCreditCard fill="#3064C6" />,
  },
  {
    id: 2,
    title: "Report And Analytics",
    description:
      "Consectetur sem proin mollis mauris ornare facilisi si netus. Egestas iaculis erat dui ornare hendrerit conubia convallis dolor ut sociosqu quis. Urna platea ligula leo auctor morbi libero interdum hendrerit.",
    icon: <FaChartBar fill="#3064C6" />,
  },
  {
    id: 3,
    title: "Secure Payments",
    description:
      "Consectetur sem proin mollis mauris ornare facilisi si netus. Egestas iaculis erat dui ornare hendrerit conubia convallis dolor ut sociosqu quis. Urna platea ligula leo auctor morbi libero interdum hendrerit.",
    icon: <FaLock fill="#3064C6" />,
  },
  {
    id: 4,
    title: "E-Wallet",
    description:
      "Consectetur sem proin mollis mauris ornare facilisi si netus. Egestas iaculis erat dui ornare hendrerit conubia convallis dolor ut sociosqu quis. Urna platea ligula leo auctor morbi libero interdum hendrerit.",
    icon: <FaWallet fill="#3064C6" />,
  },
  {
    id: 5,
    title: "Payment Request",
    description:
      "Consectetur sem proin mollis mauris ornare facilisi si netus. Egestas iaculis erat dui ornare hendrerit conubia convallis dolor ut sociosqu quis. Urna platea ligula leo auctor morbi libero interdum hendrerit.",
    icon: <FaMoneyCheck fill="#3064C6" />,
  },
  {
    id: 6,
    title: "Split Payments",
    description:
      "Consectetur sem proin mollis mauris ornare facilisi si netus. Egestas iaculis erat dui ornare hendrerit conubia convallis dolor ut sociosqu quis. Urna platea ligula leo auctor morbi libero interdum hendrerit.",
    icon: <FaHandHoldingUsd fill="#3064C6" />,
  },
];

export default Home;
