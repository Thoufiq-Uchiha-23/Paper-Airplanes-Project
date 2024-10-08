import wavesIcon from "/icons/waves.svg";
import wavyIcon from "/icons/wavy-shape.svg";
import hatIcon from "/icons/hat.svg";
import boxIcon from "/icons/box-shape.svg";
import starIcon from "/icons/star.svg";
import blurredIcon from "/icons/blurred-shape.svg";
import Button from "./Button";
import ScrollToTop from "./ScrollToTop";
import React from "react";
import { motion } from "framer-motion";

// InfoItem Component
const InfoItem = ({ value, label }) => (
  <motion.div
    whileInView={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.5, delay: 1 }}
    className="text-center"
  >
    <h3 className="text-lg md:text-3xl text-gray-300">{value}</h3>
    <p className="text-[9px] text-gray-400 md:text-sm">{label}</p>
  </motion.div>
);

const Hero = () => {
  const infoData = [
    { value: "8.5K", label: "Reviews" },
    { value: "100K+", label: "Users" },
    { value: "15K", label: "Trust Partners" },
  ];
  return (
    <main className="bg-primary flex h-screen overflow-hidden" id="hero">
      {/* Hero Content */}
      <section className="container mx-auto pt-40 px-2 text-center text-white relative">
        <img
          src={blurredIcon}
          className="absolute w-96 -top-9 -left-20 sm:left-20"
          alt=""
        />
        {/* Hero Text */}
        <div className="relative">
          <img
            src={starIcon}
            className="absolute w-3 -top-5 left-10 md:w-5"
            alt=""
          />
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-3xl font-bold sm:text-3xl md:text-4xl overflow-hidden lg:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50"
          >
            Unlock Your Potential With <br /> World-Class{" "}
            <span className="text-secondary">Education</span>
          </motion.h1>

          <img
            src={wavyIcon}
            className="absolute right-5 top-14 md:w-14 lg:w-20 lg:right-10"
            alt="wavy"
          />
          <img
            src={hatIcon}
            className="absolute left-8 w-7 bottom-0 md:w-16"
            alt="small hat"
          />

          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="overflow-hidden text-[10.5px] mt-4 sm:text-sm md:text-lg text-white leading-5"
          >
            Join our vibrant community of learners and access a wide range of{" "}
            <br />
            courses designed to inspire and empower you
          </motion.p>
          <img
            src={boxIcon}
            className="absolute right-10 -bottom-20 md:w-7"
            alt=""
          />
        </div>

        {/* Call to action buttons */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 1.7 }}
          className="flex justify-center items-center gap-4 mt-7"
        >
          <Button className="bg-secondary hover:border hover:border-orange-500 hover:bg-transparent text-white transition duration-500">
            Get Started
          </Button>
          <Button className="bg-transparent border border-gray-500 hover:border-none hover:bg-orange-500 transition duration-500">
            Learn More
          </Button>
        </motion.div>

        {/* Infos */}
        <div className="flex justify-center text-5xl items-center text-white gap-2 mt-16">
          {infoData.map((info, index) => (
            <React.Fragment key={index}>
              <InfoItem value={info.value} label={info.label} />
              {index < infoData.length - 1 && (
                <div className="w-px h-8 bg-gray-600 mx-4"></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Shapes */}
        <div className="w-full relative -top-24 sm:-top-60 md:-top-96">
          <motion.img 
            whileInView={{ opacity: 1}}
            initial={{ opacity: 0}}
            transition={{ duration: 1.5, delay: 1 }}
            src={wavesIcon}
            alt="waves"
            className="scale-x-[-1] absolute -left-20 md:w-[900px] 2xl:w-[1000px]"
          />
          <motion.img
            whileInView={{ opacity: 1}}
            initial={{ opacity: 0}}
            transition={{ duration: 1.5, delay: 1 }}
            src={wavesIcon}
            alt="waves"
            className="absolute -right-20 lg:w-[900px] 2xl:w-[1000px]"
          />
        </div>
      </section>
      <ScrollToTop />
    </main>
  );
};

export default Hero;
