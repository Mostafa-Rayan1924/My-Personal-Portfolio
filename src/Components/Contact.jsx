import MainTitle from "./MainTitle";
import { RiFacebookFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import done from "../../public/animation lottie/lottie.json";
const Contact = () => {
  const [state, handleSubmit] = useForm("mrgnerga");
  return (
    <div className="my-[150px] relative" id="contact">
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
        className="absolute w-[22px] blur-md h-[22px] bg-bgGradient top-10 left-10 rounded-full "></motion.div>
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute blur-[5px] w-[14px] h-[14px]  bg-gradient-to-r from-violet-500 to-fuchsia-500 bottom-40 right-40 rounded-full "></motion.div>
      <motion.div
        animate={{
          x: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute blur-sm w-[16px] h-[16px] bg-green-600 bottom-[-50px] md:bottom-0 left-2 rounded-full "></motion.div>
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
      <MainTitle title={"Contact"} p={"Let’s Work Together"} />
      <div className="container">
        <div className="flex-col relative  sm:flex sm:flex-row  gap-10 justify-center ">
          <div className="flex items-center sm:flex-col justify-center gap-5 sm:gap-[25px] flex-wrap">
            <motion.a
              target="_blank"
              href="https://github.com/Mostafa-Rayan1924"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                transition: {
                  delay: 0.2,
                },
              }}
              className=" w-[60px] h-[60px] rounded-2xl text-gray-600 dark:text-white  bg-[#b6b6b6] dark:bg-[#2E2E2E]   dark:hover grid place-items-center transition-all duration-300 cursor-pointer hover:text-white hover:bg-[#6e5494] dark:hover:bg-[#6e5494] ">
              <FaGithub size={30} />
            </motion.a>
            <motion.a
              target="_blank"
              href="https://wa.me/+2001156581025"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              }}
              className=" w-[60px] h-[60px] rounded-2xl text-gray-600 dark:text-white  bg-[#b6b6b6] dark:bg-[#2E2E2E]   dark:hover grid place-items-center transition-all duration-300 cursor-pointer hover:text-white hover:bg-[#25d366] dark:hover:bg-[#25d366]">
              <FaWhatsapp size={30} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mostafa-rayan-86305b247/?fbclid=IwAR0PKgq_1wc3l0TJMIoH6AK9lxbVVgeUZRbrQrXEZuu_bYssTZNhtViJTcM"
              target="_blank"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                transition: {
                  delay: 0.6,
                },
              }}
              className=" w-[60px] h-[60px] rounded-2xl text-gray-600  dark:text-white bg-[#b6b6b6] dark:bg-[#2E2E2E]   dark:hover grid place-items-center transition-all duration-300 cursor-pointer hover:text-white hover:bg-[#0a66c2] dark:hover:bg-[#0a66c2]">
              <FaLinkedinIn size={30} />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/tata.rayan.5"
              target="_blank"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                transition: {
                  delay: 0.8,
                },
              }}
              className=" w-[60px] h-[60px] rounded-2xl text-gray-600 dark:text-white  bg-[#b6b6b6] dark:bg-[#2E2E2E]   dark:hover grid place-items-center transition-all duration-300 cursor-pointer hover:text-white hover:bg-[#1877f2] dark:hover:bg-[#1877f2]">
              <RiFacebookFill size={30} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/mostafarayan7/"
              target="_blank"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                transition: {
                  delay: 1,
                },
              }}
              className=" w-[60px] h-[60px] rounded-2xl text-gray-600 dark:text-white  bg-[#b6b6b6] dark:bg-[#2E2E2E]   dark:hover grid place-items-center transition-all duration-300 cursor-pointer hover:text-white hover:bg-[#fe3e78] dark:hover:bg-[#fe3e78]">
              <FaInstagram size={30} />
            </motion.a>
          </div>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.2,
              },
            }}
            className="w-full sm:w-[450px] mt-10 sm:mt-0 flex flex-col gap-4">
            <motion.input
              required
              autoComplete="off"
              id="name"
              type="text"
              whileFocus={{
                boxShadow: "0 0 6px orangered ",
              }}
              placeholder="Full Name"
              className="w-full h-[50px] placeholder:text-gray-600 dark:placeholder:text-gray-400 text-xl bg-[#b6b6b6] dark:bg-[#2E2E2E] outline-none rounded pl-4 caret-orange-600"
            />
            <ValidationError prefix="name" field="name" errors={state.errors} />
            <motion.input
              required
              autoComplete="off"
              whileFocus={{
                boxShadow: "0 0 6px orangered ",
              }}
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              className="w-full  h-[50px] text-xl placeholder:text-gray-600 dark:placeholder:text-gray-400 bg-[#b6b6b6] dark:bg-[#2E2E2E] outline-none rounded pl-4 caret-orange-600"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <motion.textarea
              required
              id="message"
              name="message"
              whileFocus={{
                boxShadow: "0 0 6px orangered ",
              }}
              placeholder="Your Message "
              className="h-[200px] w-full placeholder:text-gray-600 dark:placeholder:text-gray-400 pt-4 text-xl resize-none bg-[#b6b6b6] dark:bg-[#2E2E2E] outline-none rounded pl-4 caret-orange-600"></motion.textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <motion.button
              type="submit"
              disabled={state.submitting}
              whileHover={{
                scale: 1.04,
                transition: {
                  type: "spring",
                  stiffness: 220,
                  damping: 6,
                },
              }}
              className="w-full disabled:opacity-50 bg-bgGradient text-white  h-[50px] text-2xl rounded">
              {state.submitting ? "sending ..." : "Send"}
            </motion.button>
            {state.succeeded && (
              <p
                className="absolute -bottom-16 text-center sm:text-lg  flex items-center
              ">
                <Lottie style={{ height: "55px" }} animationData={done} />
                Your Message Send Successfully
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
