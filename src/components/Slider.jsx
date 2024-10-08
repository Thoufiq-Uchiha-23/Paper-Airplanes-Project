import { useState } from "react";
import { people } from "../constants/data";
import { motion } from "framer-motion";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 200 }}
      transition={{ duration: 1.5 }}
      className="flex mt-10 float-left flex-col md:flex-row lg:mx-12 md:text-center md:items-center"
    >
      <motion.div whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }} className="md:w-[500px] text-start mb-12 md:mb-0">
        <h2 className="mb-5 lg:text-[35px]">
          Serving a Diverse Range of Nationalities
        </h2>
        <p className="text-sm lg:text-base text-[#F5F5F5]">
          {people[currentIndex].text}
        </p>
        <div className="flex gap-2 text-center items-center">
          {people.map((_, slideIndex) => {
            return (
              <div
                key={slideIndex}
                onClick={() => getSlide(slideIndex)}
                className={`mt-5 transition-all ease-in-out duration-500 cursor-pointer rounded-full 
                                ${
                                  currentIndex === slideIndex
                                    ? "h-[13px] w-[13px] bg-orange-400 md:h-4 md:w-4"
                                    : "bg-white h-2 w-2 md:h-[10px] md:w-[10px]"
                                }`}
              ></div>
            );
          })}
        </div>
      </motion.div>
      <motion.img
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="rounded-xl md:ml-10 border-white border-2 md:w-[400px] lg:w-[500px]"
        src={people[currentIndex].image}
        alt="Student"
      />
    </motion.div>
  );
};

export default Slider;
