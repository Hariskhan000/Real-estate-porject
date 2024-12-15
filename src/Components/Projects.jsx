import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "motion/react";

const Projects = () => {
  // slider functionality
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardToShow] = useState(1);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };
  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardToShow(projectsData.length);
      } else {
        setCardToShow(1);
      }
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="Projects"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
          Projects{" "}
          <span className="underline underline-offset-4 decoration-1 font-light">
            Completed
          </span>
        </h1>
        <p className="text-gray-500 max-w-80 mb-8 text-center">
          Crafting Spaces, Building Legacies—Explore Our Portfolio.
        </p>
      </div>

      {/* Slider Button Container */}
      <div className="flex justify-end items-center mb-8">
        <button
          className="p-3 bg-gray-200 rounded mr-3"
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} onClick={prevProject} alt="Previous" />
        </button>
        <button className="p-3 bg-gray-200 rounded" aria-label="Next Project">
          <img src={assets.right_arrow} onClick={nextProject} alt="Next" />
        </button>
      </div>
      {/* projets cards */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-14"
              />
              <div className="absolute  left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semi-bold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {project.price} <span className="px-0.5"> | </span>{" "}
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
