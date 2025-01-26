import MainTitle from "./MainTitle";
import htmlImg from "../assets/html.svg";
import cssImg from "../assets/css.svg";
import reactImg from "../assets/ReactIMG.png";
import nextImg from "../assets/nextIMG.svg";
import js from "../assets/java.png";
import { motion } from "framer-motion";
const Services = () => {
  const data = [
    {
      id: 1,
      images: [htmlImg, cssImg],
      title: "HTML & CSS",
      desc: "I am proficient in creating responsive and visually appealing websites using HTML and CSS.",
    },
    {
      id: 1,
      images: [js],
      title: "Java Script",
      desc: "I have a strong command of JavaScript and can develop interactive and dynamic web applications.",
    },
    {
      id: 1,
      images: [reactImg, nextImg],
      title: "React & Next",
      desc: "Create your complex web app for your business using React or Next.js framework",
    },
  ];
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
      <MainTitle title={"My Services"} p={"Here’s how I can help you."} />
      <div className="container   grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {data.map((item, index) => (
          <motion.div
            className={`even:bg-bgGradient even:text-white bg-[#b6b6b6]  dark:bg-[#2E2E2E] flex items-center justify-center px-[17px]   flex-col mx-auto text-center rounded-3xl w-[300px] h-[350px] relative before:w-[300px] before:absolute  before:h-[350px] before:bg-teal-800 before:rounded-3xl before:z-[-1] before:transition-all before:duration-300 cardAnimate  `}
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
            <div className="flex items-center gap-3">
              {item.images.map((img, index) => (
                <img
                  className={`w-[50px] rounded-lg ${
                    index == 1 ? "rotate-[-10deg]" : ""
                  } rotate-[10deg] h-[50px] object-contain`}
                  src={img}
                  alt={img.desc}
                />
              ))}
            </div>
            <h2 className="font-bold mt-3 mb-4   text-3xl ">{item.title}</h2>
            <p
              className={` ${
                index == 1
                  ? "dark:text-gray-100"
                  : "text-gray-800 dark:text-gray-300"
              }  text-center text-lg`}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
