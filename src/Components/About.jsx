import { useState } from "react";
import data from "../Components/data";
import { motion } from "framer-motion";
const About = () => {
  let [type, setType] = useState("skills");
  let filterByTools = data.filter((item) => {
    return item.filter == "tools";
  });
  let filterBySkills = data.filter((item) => {
    return item.filter == "skills";
  });
  function handleFilter(event) {
    if (event == "skills") {
      setType("skills");
    } else if (event == "tools") {
      setType("tools");
    }
  }
  return (
    <div id="About" className="mt-[100px] lg:mt-[196px] mb-[100px]">
      <div className="container text-center md:text-start grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
            transition: {
              duration: 0.8,
            },
          }}>
          <h3 className="text-main font-bold text-3xl">About Me</h3>
          <h2 className="text-[25px] md:text-[32px] lg:text-[40px] md:leading-[54.6px] my-3">
            What My Programming <br /> {type == "skills" ? "Skills " : "Tools "}
            Include?
          </h2>
          <p
            className=" text-xl sm:text-[24px] text-gray-700
           dark:text-gray-400 leading-[31.2px] mb-8">
            this is my {type == "skills" ? "Skills" : "Tools"} which i used
            <br /> in my programming life
          </p>
          <div className="flex overflow-hidden mx-auto md:mx-0 w-fit bg-[#9e9e9e] text-white  dark:bg-[#2E2E2E] rounded-[20px]">
            <button
              onClick={(e) => {
                handleFilter(e.target.id);
              }}
              id="skills"
              className={`${
                type == "skills" ? "bg-bgGradient" : ""
              } text-lg w-1/2 py-[5px] px-4`}>
              skills
            </button>
            <button
              onClick={(e) => {
                handleFilter(e.target.id);
              }}
              id="tools"
              className={`${
                type == "tools" ? "bg-bgGradient" : ""
              } text-lg w-1/2 py-[5px] px-4`}>
              tools
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
            transition: {
              duration: 0.8,
            },
          }}
          className="grid parentOfSkills grid-cols-4 lg:grid-cols-5 place-content-center gap-4 mt-10 lg:mt-0">
          {type == "skills"
            ? filterBySkills.map((item) => {
                return (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 0.3,
                        stiffness: 120,
                        damping: 5,
                      },
                    }}
                    key={item.id}
                    className="dark:bg-[#2E2E2E] bg-[#b6b6b6] group grid place-items-center border-2 border-transparent rounded w-[70px] h-[70px] hover:border-2 hover:shadow-[0px_0px_20px_orange]  hover:shadow-orange-600  transition-all duration-300 hover:rounded-full hover:border-orange-600  ">
                    <img
                      className="w-[40px] group-hover:w-[35px] transition-all duration-300 group-hover:h-[35px] h-[40px] rounded"
                      src={item.img}
                      alt=""
                    />
                  </motion.div>
                );
              })
            : filterByTools.map((item) => {
                return (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 0.1,
                        stiffness: 120,
                        damping: 5,
                      },
                    }}
                    key={item.id}
                    className="dark:bg-[#2E2E2E] bg-[#b6b6b6] group grid place-items-center border-2 border-transparent rounded w-[70px] h-[70px] hover:border-2 hover:shadow-[0px_0px_20px_orange]  hover:shadow-orange-600  hover:rounded-full hover:border-orange-600  transition-all duration-500">
                    <img
                      className="w-[40px] group-hover:w-[35px] transition-all duration-300 group-hover:h-[35px] h-[40px] rounded"
                      src={item.img}
                      alt=""
                    />
                  </motion.div>
                );
              })}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
