import img1 from "../assets/edu.png";
import img2 from "../assets/design-tool_2062942.png";
import img3 from "../assets/exp.png";
import img4 from "../assets/job.png";
import img5 from "../assets/ReactIMG.png";
import MainTitle from "./MainTitle";
import { FaLink } from "react-icons/fa";
import cert from "../assets/react شهاده.jpg";
import { motion } from "framer-motion";
const Journey = () => {
  return (
    <div className="my-[150px]">
      <MainTitle
        title={"My Journey"}
        p={"My programming journey from my college years to the present"}
      />
      <div className="mt-[50px] mx-auto md:m-0  relative after:absolute after:w-[5px] after:top-0 after:h-full dark:after:bg-[#2E2E2E]  after:bg-[#b6b6b6] after:left-[31px] md:after:left-1/2 after:ml-[-3px] after:z-[-1] ">
        <div className="container">
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.3,
                duration: 0.5,
              },
            }}
            className="relative group leftContainer  pl-[80px] pr-[25px] md:px-[50px]  md:py-[10px] w-full md:w-1/2 mb-10 md:mb-0   ">
            <img
              className="absolute  border-[3px] border-[#969696] dark:border-[#484848] group-hover:scale-[1.2] group-hover:shadow-[0_0_40px_0_rgba(100,57,199,.2)] group-hover:border-[3px] group-hover:border-[#f4280dc5] transition-all duration-300 w-[50px] h-[50px] object-contain rounded-full left-[-25px] md:left-auto p-1  md:right-[-25px] top-[22px] z-10"
              src={img1}
              alt=""
            />
            <div className="px-[30px] transition-all duration-300 border-2 border-[#969696] dark:border-[#484848] group hover:border-2 dark:hover:border-[#f4280dc5] hover:border-[#f4280dc5] py-[20px] bg-[#b6b6b6] dark:bg-[#2E2E2E] rounded-lg text-[13px] md:text-[15px] left-0">
              <h2 className="text-3xl">Education</h2>
              <small className="inline-block mb-[15px] text-[15px] text-main font-bold">
                2020 - 2024
              </small>
              <p className="text-gray-700 dark:text-gray-300">
                I am a graduate of the College of Computers and Information,
                specializing in the Information Systems department.
              </p>
              <span className="h-0 w-0  sm:group-hover:border-l-[#f4280dc5] dark:md:border-r-transparent group-hover:border-r-[#f4280dc5] sm:group-hover:border-r-transparent transition-all duration-300 absolute top-[35px] z-[1] border-[15px] border-transparent border-r-[#b6b6b6]  dark:border-r-[#2E2E2E] md:border-r-transparent  md:border-l-[#b6b6b6] md:dark:border-l-[#2E2E2E] left-[50.5px] md:left-auto md:right-[21px]"></span>
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
                delay: 0.3,
                duration: 0.5,
              },
            }}
            className="relative group rightContainer pl-[80px] pr-[25px] md:px-[50px]  md:py-[10px] w-full md:w-1/2 mb-10  left-0 md:mb-0  md:left-1/2">
            <img
              className=" absolute p-1 border-[3px] border-[#969696] dark:border-[#484848]  group-hover:scale-[1.2] group-hover:shadow-[0_0_40px_0_rgba(100,57,199,.2)] group-hover:border-[3px] group-hover:border-[#f4280dc5] transition-all duration-300 w-[50px] h-[50px] object-contain  rounded-full left-[-25px] top-[22px] z-10"
              src={img2}
              alt=""
            />
            <div className="px-[30px] dark:hover:border-[#f4280dc5]  transition-all duration-300 border-2 border-[#969696] dark:border-[#484848] group hover:border-2 hover:border-[#f4280dc5] py-[20px] bg-[#b6b6b6] dark:bg-[#2E2E2E] rounded-lg text-[13px] md:text-[15px]">
              <h2 className="text-[24px] sm:text-3xl">Responsive Design</h2>
              <small className="inline-block text-[15px] mb-[15px] text-main font-bold">
                Html-Css-Js
              </small>
              <p className="text-gray-700 dark:text-gray-300">
                I built a strong foundation in Front-End development through my
                college studies and summer training with top programmers in the
                field.
              </p>
              <span className="h-0 w-0 group-hover:border-r-[#f4280dc5] transition-all duration-300 absolute top-[35px] z-[1] border-[15px] border-transparent border-r-[#b6b6b6] dark:border-r-[#2E2E2E] left-[50.5px] md:left-[22px]"></span>
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
                delay: 0.3,
                duration: 0.5,
              },
            }}
            className="relative group leftContainer  pl-[80px] pr-[25px] md:px-[50px]  md:py-[10px] w-full md:w-1/2 mb-10 md:mb-0   ">
            <img
              className="absolute  border-[3px] border-[#969696] dark:border-[#484848] group-hover:scale-[1.2] group-hover:shadow-[0_0_40px_0_rgba(100,57,199,.2)] group-hover:border-[3px] group-hover:border-[#f4280dc5] transition-all duration-300 w-[50px] h-[50px] object-contain rounded-full left-[-25px] md:left-auto p-1  md:right-[-25px] top-[22px] z-10"
              src={img3}
              alt=""
            />
            <div className="px-[30px] dark:hover:border-[#f4280dc5] transition-all duration-300 border-2 border-[#969696] dark:border-[#484848] group hover:border-2 hover:border-[#f4280dc5] py-[20px] bg-[#b6b6b6] dark:bg-[#2E2E2E] rounded-lg text-[13px] md:text-[15px] left-0">
              <h2 className="text-3xl">Experience</h2>
              <small className="inline-block text-[15px] mb-[15px] text-main font-bold">
                +3 Years
              </small>
              <p className="text-gray-700 dark:text-gray-300">
                I have over three years of experience in front-end development
                and programming, during which I've successfully implemented
                large-scale projects.
              </p>
              <span className="h-0 w-0  sm:group-hover:border-l-[#f4280dc5] dark:md:border-r-transparent group-hover:border-r-[#f4280dc5] sm:group-hover:border-r-transparent transition-all duration-300 absolute top-[35px] z-[1] border-[15px] border-transparent border-r-[#b6b6b6]  dark:border-r-[#2E2E2E] md:border-r-transparent  md:border-l-[#b6b6b6] md:dark:border-l-[#2E2E2E] left-[50.5px] md:left-auto md:right-[21px]"></span>
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
                delay: 0.3,
                duration: 0.5,
              },
            }}
            className="relative group rightContainer pl-[80px] pr-[25px] md:px-[50px]  md:py-[10px] w-full md:w-1/2 mb-10  left-0 md:mb-0  md:left-1/2">
            <img
              className="absolute p-1 border-[3px] border-[#969696] dark:border-[#484848]  group-hover:scale-[1.2] group-hover:shadow-[0_0_40px_0_rgba(100,57,199,.2)] group-hover:border-[3px] group-hover:border-[#f4280dc5] transition-all duration-300 w-[50px] h-[50px] object-contain  rounded-full left-[-25px] top-[22px] z-10"
              src={img4}
              alt=""
            />
            <div className="px-[30px] dark:hover:border-[#f4280dc5] transition-all duration-300 border-2 border-[#969696] dark:border-[#484848] group hover:border-2 hover:border-[#f4280dc5] py-[20px] bg-[#b6b6b6] dark:bg-[#2E2E2E] rounded-lg text-[13px] md:text-[15px]">
              <h2 className="text-3xl">The Job</h2>
              <small className="inline-block text-[15px] mb-[15px] text-main font-bold">
                Workplaces
              </small>
              <p className="text-gray-700 dark:text-gray-300">
                I have been working at MG General Contracting Company since
                <span className=" font-mono text-orange-600 font-bold">
                  {" "}
                  2022
                </span>
                , and I created an ERP system for the company that organizes all
                its work entities.
              </p>
              <span className="h-0 w-0 group-hover:border-r-[#f4280dc5] transition-all duration-300 absolute top-[35px] z-[1] border-[15px] border-transparent border-r-[#b6b6b6] dark:border-r-[#2E2E2E] left-[50.5px] md:left-[22px]"></span>
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
                delay: 0.3,
                duration: 0.5,
              },
            }}
            className="relative group leftContainer  pl-[80px] pr-[25px] md:px-[50px]  md:py-[10px] w-full md:w-1/2 mb-10 md:mb-0   ">
            <img
              className="absolute  border-[3px] border-[#969696] dark:border-[#484848] group-hover:scale-[1.2] group-hover:shadow-[0_0_40px_0_rgba(100,57,199,.2)] group-hover:border-[3px] group-hover:border-[#f4280dc5] transition-all duration-300 w-[50px] h-[50px]  rounded-full left-[-25px] md:left-auto p-1  md:right-[-25px] top-[22px] z-10"
              src={img5}
              alt=""
            />
            <a
              className="absolute certLink top-3 right-8 sm:top-8 animate-pulse hover:animate-none sm:right-[70px] bg-bgGradient w-[30px] h-[30px] rounded-full grid place-items-center"
              target="_blank"
              href={cert}>
              <FaLink className="text-white text-[16px]" />
            </a>
            <div className="px-[30px] dark:hover:border-[#f4280dc5] transition-all duration-300 border-2 border-[#969696] dark:border-[#484848] group hover:border-2 hover:border-[#f4280dc5] py-[20px] bg-[#b6b6b6] dark:bg-[#2E2E2E] rounded-lg text-[13px] md:text-[15px] left-0">
              <h2 className="text-3xl">FrameWork</h2>
              <small className=" inline-block mb-[15px] text-[15px] text-main font-bold">
                React & Next
              </small>
              <p className="text-gray-700 dark:text-gray-300">
                I use both React.js and Next.js to build my projects, and I have
                earned a certified certificate from Udemy. I've successfully
                developed large-scale projects using these technologies.
              </p>

              <span className="h-0 w-0  sm:group-hover:border-l-[#f4280dc5] dark:md:border-r-transparent group-hover:border-r-[#f4280dc5] sm:group-hover:border-r-transparent transition-all duration-300 absolute top-[35px] z-[1] border-[15px] border-transparent border-r-[#b6b6b6]  dark:border-r-[#2E2E2E] md:border-r-transparent  md:border-l-[#b6b6b6] md:dark:border-l-[#2E2E2E] left-[50.5px] md:left-auto md:right-[21px]"></span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
