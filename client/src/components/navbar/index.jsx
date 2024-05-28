import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import usePageWidth from "../../hooks/useWidth";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

function Navbar() {
  const { pathname } = useLocation();
  console.log(pathname);
  const components = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "/",
    },
    {
      title: "Services",
      href: "/",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Contact Us",
      href: "/",
    },
    {
      title: "Pages",
      href: "/",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
  ];

  const pageWidth = usePageWidth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#1F407F] sticky z-50 w-full top-0  flex items-center text-white p-4 md:rounded-none rounded-b-xl md:py-8 md:px-10 justify-between gap-10">
      <img
        src="./logo-white.png"
        alt="logo-white"
        className="md:w-[200px] w-24"
      />
      {pageWidth < 1250 && (
        <div className="flex-1 flex items-center">
          <button
            onClick={toggleMenu}
            className="text-2xl text-white focus:outline-none"
          >
            <GiHamburgerMenu size={20} />
          </button>

          <div
            className={`w-full h-screen flex  flex-col gap-4 fixed bg-transparent z-20 ${
              isMenuOpen
                ? "left-0 transition-[left] duration-1000"
                : "-left-[2000px]"
            }  top-0 transition-[left] duration-1000    pt-24 `}
          >
            <div
              className={`${
                isMenuOpen ? "transit2" : " transitout"
              }  bg-[#1F407F]/[0.6] h-screen w-full fixed top-0 z-[-1] `}
            ></div>

            <div
              className={`${
                isMenuOpen ? "transit" : " transitout2"
              } max-w-[400px] min-w-[300px] relative rounded-r-2xl h-full left-[-1000px]  bg-white text-black `}
            >
              <div className="p-5 flex justify-between gap-4 border-b-2">
                <img
                  src="./logo-black.png"
                  alt=""
                  className="w-36 cursor-pointer"
                />
                <span
                  className="md:p-3 p-2 rounded-xl bg-gradient-to-r from-[#1F407F]  to-pink-500 cursor-pointer flex items-center justify-center"
                  onClick={toggleMenu}
                >
                  <FaTimes
                    size={24}
                    fill="#fff"
                    className="hover:rotate-90 transition-[transform] duration-500 inline-block w-full h-full"
                  />
                </span>
              </div>
              <div className="flex flex-col">
                {components.map(({ title, href }, i) => (
                  <NavLink
                    to={href}
                    key={i}
                    className={`${
                      pathname === href ? "text-[#1F407F] " : ""
                    } hover:text-[#1F407F] text-nowrap px-5 py-4 border- border-b-2`}
                    onClick={toggleMenu}
                  >
                    <h3>{title}</h3>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {pageWidth >= 1250 && (
        <ul className="flex font-semibold gap-10 text-xl">
          {components.map(({ title, href }, i) => (
            <Link
              to={href}
              key={i}
              className={`${
                pathname === href ? "text-blue-200 " : ""
              } hover:text-gray-200 text-nowrap`}
            >
              <h3>{title}</h3>
            </Link>
          ))}
        </ul>
      )}
      <div className="flex gap-10">
        {pageWidth > 761 && (
          <Link
            to="/login"
            className="uppercase bg-transparent py-3 px-6 font-semibold rounded-lg"
          >
            <span>Login</span>
          </Link>
        )}
        <Link to="/signup" className="btn_color">
          <span className="text-nowrap">Sign Up now</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
