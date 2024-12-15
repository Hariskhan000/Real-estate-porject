import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useEffect } from "react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <>
      <div className="absolute top-0 left-0 z-10 w-full">
        {/* Desktop and Mobile Navbar */}
        <div className="container mx-auto flex items-center justify-between bg-transparent py-5 px-8 md:px-8 lg:px-28">
          {/* Logo */}
          <img src={assets.logo} alt="Logo" />

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 md:gap-7 text-white">
            <a
              className="cursor-pointer text-[18px] hover:text-gray-400"
              href="#Home"
            >
              Home
            </a>
            <a
              className="cursor-pointer text-[18px] hover:text-gray-400"
              href="#About"
            >
              About
            </a>
            <a
              href="#Projects"
              className="cursor-pointer text-[18px] hover:text-gray-400"
            >
              Projects
            </a>
            <a
              className="cursor-pointer text-[18px] hover:text-gray-400"
              href="#Testimonials"
            >
              Testimonials
            </a>
          </ul>

          {/* Desktop Signup Button */}
          <button className="hidden md:block md:px-5 md:py-2 bg-white px-7 py-3 rounded-full">
            Sign up
          </button>

          {/* Mobile Menu Icon */}
          <img
            src={assets.menu_icon}
            alt="Menu Icon"
            onClick={() => setShowMobileMenu(true)}
            className="md:hidden w-7 cursor-pointer"
          />
        </div>

        {/* Mobile Navbar */}
        <div
          className={`fixed inset-0 z-20 bg-white transition-transform transform ${
            showMobileMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Cross Icon */}
          <div className="absolute top-5 right-5 cursor-pointer">
            <img
              src={assets.cross_icon}
              alt="Close Icon"
              onClick={() => setShowMobileMenu(false)}
              className="w-6"
            />
          </div>

          {/* Mobile Menu Links */}
          <ul className="flex flex-col items-center gap-5 mt-10 text-lg font-medium">
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#Home"
              className="px-4 py-2 rounded-full inline-block hover:bg-gray-100"
            >
              Home
            </a>
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#About"
              className="px-4 py-2 rounded-full inline-block hover:bg-gray-100"
            >
              About
            </a>
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#Projects"
              className="px-4 py-2 rounded-full inline-block hover:bg-gray-100"
            >
              Projects
            </a>
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#Testimonials"
              className="px-4 py-2 rounded-full inline-block hover:bg-gray-100"
            >
              Testimonials
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
