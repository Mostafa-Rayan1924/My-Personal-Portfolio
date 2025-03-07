import HeroImg from "../assets/hero img.png";
import { motion } from "framer-motion";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";

const Hero = () => {
  // array of social icons
  let dataSocial = [
    {
      id: 1,
      link: "https://www.facebook.com/tata.rayan.5",
      icon: <FaFacebookF />,
      bgColor: "#1877f2",
      show: 2.7,
    },
    {
      id: 2,
      link: "https://github.com/Mostafa-Rayan1924",
      icon: <FaGithub />,
      bgColor: "#6e5494",
      show: 2.9,
    },
    {
      id: 3,
      link: "https://www.instagram.com/mostafarayan7/",
      icon: <IoLogoInstagram />,
      bgColor: "#fe3e78",
      show: 3.1,
    },
    {
      id: 4,
      link: "https://wa.me/+2001156581025",
      icon: <FaWhatsapp />,
      bgColor: "#25d366",
      show: 3.3,
    },
    {
      id: 5,
      link: "https://www.linkedin.com/in/mostafa-rayan-86305b247/?fbclid=IwAR0PKgq_1wc3l0TJMIoH6AK9lxbVVgeUZRbrQrXEZuu_bYssTZNhtViJTcM",
      icon: <FaLinkedinIn />,
      bgColor: "#0a66c2",
      show: 3.5,
    },
  ];
  let spanVar = {
    initial: {
      y: 40,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 2.3,
        staggerChildren: 0.05,
      },
    },
  };
  let smallSpan = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,

      transition: {
        duration: 2.9,
        repeat: Infinity,
      },
    },
  };
  let textOfAutoWriting = "A Front-End-Developer.";
  return (
    <div id="Hero" className="relative pb-10">
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
        className="absolute w-[18px] blur-md h-[18px] bg-bgGradient top-0 left-6  rounded-full "></motion.div>
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
        className="absolute blur-sm w-[10px] h-[10px] bg-rose-600 bottom-0 left-2 rounded-full "></motion.div>
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
      <div className="container items-center  flex flex-col-reverse justify-center  lg:flex-row gap-5  mt-[124px] md:mt-[180px] ">
        {/* left  */}
        <div className="lg:w-1/2 w-full hero">
          <motion.h3
            initial={{
              y: 40,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 1.9,
              },
            }}
            className="text-gray-600 dark:text-gray-300 h3OfHero text-[24px]">
            Welcome To My Portfolio,
          </motion.h3>
          <motion.h2
            initial={{
              y: 40,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 2.1,
              },
            }}
            className="capitalize font-bold text-[28px] my-2 sm:my-4  md:text-[2.8rem] heroName ">
            hello i'm <span className="text-main">mostafa rayan</span>,
          </motion.h2>
          <motion.span
            className="capitalize font-bold autoWritingJop text-3xl md:text-[2.8rem] underline underColor"
            variants={spanVar}
            initial="initial"
            animate="animate">
            {textOfAutoWriting.split("").map((letter, index) => {
              return (
                <motion.span variants={smallSpan} key={index}>
                  {letter}
                </motion.span>
              );
            })}
          </motion.span>
          <motion.p
            initial={{
              y: 40,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 2.5,
              },
            }}
            className="text-gray-600 dark:text-gray-300 leading-relaxed sm:text-lg my-6">
            I am a graduate of the College of Computers and Information. During
            my studies, I focused on website programming, complementing it with
            personal learning. With over two years of experience in the field, I
            aspire to be the expert who brings your front-ends to life.
          </motion.p>
          <div className="flex items-center gap-3 mb-6 cursor-pointer">
            {dataSocial.map((item) => {
              return (
                <motion.a
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: item.show,
                    },
                  }}
                  whileHover={{
                    x: [0, -1, 1, 0, -1, 1, 0],
                    rotate: [1, 6, 1, -6, 1],
                    transition: {
                      duration: 0.4,
                      type: "mirror",
                      ease: "easeInOut",
                      repeat: Infinity,
                    },
                  }}
                  style={{ background: item.bgColor }}
                  className={`w-[35px] text-white  h-[35px] rounded-lg grid place-content-center text-2xl `}
                  href={item.link}
                  target="_blank"
                  key={item.id}>
                  <span>{item.icon}</span>
                </motion.a>
              );
            })}
          </div>
          <motion.a
            target="_blank"
            href={
              "https://drive.google.com/file/d/18B5EwBUDyJi_v4GudxJpW38iHgqk8Awn/view?usp=drive_link"
            }
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 3.9,
              },
            }}
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 220,
                damping: 6,
              },
            }}
            className="flex cursor-pointer text-white   group bg-bgGradient w-fit px-6 py-[6px] rounded-full items-center gap-2 text-lg capitalize">
            My Resume
            <FaCloudDownloadAlt className="group-hover:animate-bounce" />
          </motion.a>
          <a
            href="#About"
            className="absolute left-1/2 -translate-x-1/2 bottom-0 cursor-pointer hidden lg:block ">
            <FaAngleDoubleDown className="animate-bounce text-3xl text-orange-600 " />
          </a>
        </div>

        {/* right */}
        <motion.img
          loading="lazy"
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
            transition: {
              duration: 1,
              delay: 1,
            },
          }}
          className="w-[270px] heroIphone  h-[270px] sm:w-[430px] lg:ml-auto sm:h-[430px] object-cover"
          src={HeroImg}
          alt="profile img for hero"
        />
      </div>
    </div>
  );
};

export default Hero;
