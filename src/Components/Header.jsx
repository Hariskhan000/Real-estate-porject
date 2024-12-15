import React from "react";
import Navbar from "./Navbar";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div
      className="w-full min-h-screen mb-4 bg-cover bg-center flex items-center overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-36 text-white"
      >
        <h2 className="text-7xl sm:text-6xl md:text-[82px] font-semibold inline-block max-w-3xl pt-20">
          Explore homes that fit your dreams.
        </h2>
        <div className="space-x-10 mt-16">
          <a
            href="#Projects"
            className="border border-white px-8 py-3  rounded font-semibold"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="border border-white px-8 py-3 rounded bg-blue-600 font-semibold"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
