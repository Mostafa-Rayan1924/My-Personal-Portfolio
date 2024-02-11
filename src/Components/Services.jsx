import MainTitle from "./MainTitle";
import htmlImg from "../assets/html.svg";
import cssImg from "../assets/css.svg";
import reactImg from "../assets/ReactIMG.png";
import nextImg from "../assets/nextIMG.svg";

import js from "../assets/java.png";

import { IoLogoAppleAr } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <div id="Services" className="my-[150px] relative">
      {/* circles to ui */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute w-[8px] blur-[4px] h-[8px] bg-bgGradient top-10 left-10 rounded-full "></motion.div>
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute blur-[5px] w-[10px] h-[10px]  bg-gradient-to-r from-violet-500 to-fuchsia-500 bottom-40 right-40 rounded-full "></motion.div>
      <motion.div
        animate={{
          x: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute blur-sm w-[10px] h-[10px] bg-green-600 bottom-0 left-2 rounded-full "></motion.div>
      <motion.div
        animate={{
          x: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute blur w-[15px] h-[15px] bg-violet-600 top-4 right-5 rounded-full "></motion.div>
      {/* end circles */}
      <MainTitle title={"My Services"} p={"This is what i can do for you"} />
      <div className="container   grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <motion.div
          className="bg-[#b6b6b6]  dark:bg-[#2E2E2E] flex items-center justify-center px-[17px]   flex-col mx-auto text-center rounded-3xl w-[300px] h-[350px] relative before:w-[300px] before:absolute  before:h-[350px] before:bg-teal-800 before:rounded-3xl before:z-[-1] before:transition-all before:duration-300 cardAnimate  "
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.3,
              delay: 0.1,
            },
          }}>
          <div className="">
            <div className="flex items-center justify-center gap-3">
              <img
                className="rotate-[10deg] ssa w-[50px]"
                src={htmlImg}
                alt=""
              />
              <img className="-rotate-[10deg] w-[50px]" src={cssImg} alt="" />
            </div>
            <h2 className="font-bold mt-3 mb-4   text-3xl ">HTML & CSS</h2>
            <p className="text-gray-700 dark:text-gray-400 text-center text-lg">
              I am proficient in creating responsive and visually appealing
              websites using HTML and CSS.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.3,
              delay: 0.3,
            },
          }}
          className="bg-bgGradient text-white dark:bg-[#2E2E2E] flex items-center justify-center px-[17px]   flex-col mx-auto text-center rounded-3xl w-[300px] h-[350px]   ">
          <div className="">
            <div className="flex items-center justify-center gap-3">
              <img className="rounded-xl w-[50px]" src={js} alt="" />
            </div>
            <h2 className="font-bold mt-3 mb-4 text-3xl text-white t ">
              Java Script
            </h2>
            <p className=" text-gray-100 text-center text-lg">
              I have a strong command of JavaScript and can develop interactive
              and dynamic web applications.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.3,
              delay: 0.5,
            },
          }}
          className="bg-[#b6b6b6] dark:bg-[#2E2E2E] flex items-center justify-center px-[17px]   flex-col mx-auto text-center rounded-3xl w-[300px] h-[350px] relative before:w-[300px] before:absolute  before:h-[350px] before:bg-teal-800 before:rounded-3xl before:z-[-1] before:transition-all before:duration-300 cardAnimate   ">
          <div className="">
            <div className="flex items-center justify-center gap-3 ">
              <img
                className="rotate-[18deg]   w-[50px]"
                src={reactImg}
                alt=""
              />
              <img
                className="-rotate-[10deg]  w-[50px] rounded-xl h-[50px]"
                src={nextImg}
                alt=""
              />
            </div>
            <h2 className="font-bold mt-3 mb-4   text-3xl ">React & Next</h2>
            <p className="text-gray-700 dark:text-gray-400 text-center text-lg">
              Create your complex web app for your business using React or
              Next.js framework
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
