import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col justify-center items-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className=" underline underline-offset-4 decoration-1 under font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 mb-8 text-center">
        Passionate About Properties, Dedicated to Your Vision
      </p>
      <div className="flex flex-col md:gap-20 items-center md:flex-row md:items-start">
        <img
          src={assets.brand_img}
          className="w-full sm:w-1/2 max-w-lg"
          alt=""
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full text-2xl pr-28">
            <div>
              <p className="font-medium text-gray-800 text-4xl mb-2">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="font-medium text-gray-800 text-4xl mb-2">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="font-medium text-gray-800 text-4xl mb-2">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="font-medium text-gray-800 text-4xl mb-2">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className="bg-blue-600 text-white px-8 py-2 rounded">
            Learn More.
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
