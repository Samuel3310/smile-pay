import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
const storedData = localStorage.getItem("store");
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegSmileWink } from "react-icons/fa";
import {
  FaTachometerAlt,
  FaExchangeAlt,
  FaUser,
  FaUsers,
  FaLifeRing,
  FaCog,
} from "react-icons/fa";

const menuItems = [
  { name: "Dashboard", icon: <FaTachometerAlt size={20} />, to: "/dashboard" },
  { name: "Trades", icon: <FaExchangeAlt size={20} />, to: "trades" },
  { name: "Profile", icon: <FaUser size={20} />, to: "profile" },
  { name: "Referrals", icon: <FaUsers size={20} />, to: "referrals" },
  { name: "Support", icon: <FaLifeRing size={20} />, to: "support" },
  { name: "Setting", icon: <FaCog size={20} />, to: "setting" },
];
const mobile = [
  { name: "Dashboard", icon: <FaTachometerAlt size={20} />, to: "/dashboard" },
  { name: "Trades", icon: <FaExchangeAlt size={20} />, to: "trades" },
  { name: "Profile", icon: <FaUser size={20} />, to: "profile" },
  { name: "Referrals", icon: <FaUsers size={20} />, to: "referrals" },
  //   { name: "Support", icon: <FaLifeRing size={20} />, to: "support" },
  //   { name: "Setting", icon: <FaCog size={20} />, to: "setting" },
];

const Dashboard = () => {
  const [getData, setGetData] = useState({ name: "" });
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (!storedUser) {
      navigate("/login");
    } else {
      const parsedData = JSON.parse(storedData);
      setGetData({ name: parsedData.fullName });
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/login");
  };

  const [hide, setHide] = useState(false);

  const handleHide = () => {
    setHide(!hide);
  };
  return (
    <div className="relative">
      <nav className="w-full flex justify-between items-center py-4 px-10 shadow-md fixed z-10 bg-white top-0 gap-3">
        <div className="flex items-center gap-5">
          <FaRegSmileWink size={24} className="text-purple-700" />
          <span className="cursor-pointer hidden md:inline-block">
            <GiHamburgerMenu size={24} />
          </span>
        </div>
        <div>
          <p className="text-[12px] md:text-base">
            You are welcome, Mr.{" "}
            <span className="text-purple-500 font-semibold">
              {getData.name ? getData.name.split(" ")[0] : ""}
            </span>
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="py-2 hidden md:inline-block px-8 bg-red-500 rounded-md text-white "
        >
          Logout
        </button>
        <span className="cursor-pointer md:hidden relative">
          <FaUser
            size={20}
            className="text-purple-600 cursor-pointer"
            onClick={handleHide}
          />
          <span
            className={` right-0 bg-white p-4 shadow-xl flex flex-col gap-3 ${
              hide ? "absolute" : "hidden"
            } top-10 rounded-lg`}
          >
            <p className="p-2 border-2   rounded-lg border-purple-300">
              Profile
            </p>
            <div className="w-full h-[1px] bg-slate-300" />
            <button
              onClick={handleLogout}
              className="py-2 inline-block px-3 bg-red-500 rounded-md text-white min-w-[200px] "
            >
              Logout
            </button>
          </span>
        </span>
      </nav>

      <main className="downside flex relative">
        <section className="sidenav sm:basis-[250px] sm:border-r-[1px] sm:border-r-blue-600  sm:h-full sm:pt-[10px] hidden sm:flex sm:flex-col sm:overflow-hidden sm:justify-between sm:pb-4">
          <ul className="flex flex-col gap-4 px-3">
            {menuItems.map((item, index) => (
              <Link
                to={item.to}
                key={index}
                className={`w-full flex py-3 items-center gap-3 ${
                  pathname === `/dashboard/${item.to}` || pathname === item.to
                    ? "bg-blue-500 text-white "
                    : "bg-blue-300 text-white"
                }  text-nowrap min-w-[80px] px-3 rounded-lg`}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </ul>

          <div className="flex justify-center px-4 ">
            <button
              onClick={handleLogout}
              className="w-full  flex  gap-3  items-center py-2 px-4 bg-red-500  rounded-md text-white "
            >
              <FaCog size={20} className="animate-spin" /> Logout
            </button>
          </div>
        </section>
        <div className="sm:hidden fixed bottom-0 flex w-full justify-between  py-3 px-3">
          {mobile.map((item) => (
            <Link
              to={item.to}
              key={item.name}
              className="flex flex-col items-center "
            >
              <span
                className={`text-[12px] p-1 text-blue-500 ${
                  pathname === `/dashboard/${item.to}` || pathname === item.to
                    ? " upper translate-y-[-15px] text-white font-semibold"
                    : "translate-y-[-3px] "
                } text-purple-500 shadow-md  rounded-full transition-[transform, box-shadow, color] duration-500 `}
              >
                {item.name}
              </span>
              <span className="text-purple-500 bg-white p-2 rounded-full shadow-md">
                {item.icon}
              </span>
            </Link>
          ))}
        </div>
        <section className="sidenav p-4 md:basis-full">{<Outlet />}</section>
      </main>
    </div>
  );
};

export default Dashboard;
