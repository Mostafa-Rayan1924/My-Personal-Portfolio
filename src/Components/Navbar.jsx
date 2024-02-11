import { Link } from "react-scroll";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { SlMenu } from "react-icons/sl";
import { motion } from "framer-motion";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
const Navbar = () => {
  let [mode, setMode] = useState();
  let [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    if (window.localStorage.getItem("mode") == null) {
      document.body.classList.add("dark");
      setMode("dark");
    } else {
      document.body.classList.add(window.localStorage.getItem("mode"));
      setMode(window.localStorage.getItem("mode"));
    }
  }, []);
  function handleMode(e) {
    if (e == "dark") {
      document.body.classList.add("dark");
      localStorage.setItem("mode", "dark");
      setMode("dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("mode", "light");
      setMode("light");
    }
  }
  return (
    <header className="dark:bg-[#1d1d1d] bg-[#e5e5e5] header shadow-md shadow-[#f4280d1a] py-3 fixed top-0 left-0 w-full z-[999]">
      <div className="container flex items-center relative justify-between flex-wrap">
        {/* logo */}
        <a
          className="cursor-pointer"
          onClick={() => {
            scrollTo({ top: 0 });
          }}>
          <motion.svg
            initial={{
              rotate: -180,
            }}
            animate={{
              rotate: 0,
              transition: {
                duration: 1,
              },
            }}
            className="h-[50px] sm:h-[60px] object-contain "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 586 677"
            fill="none">
            <motion.path
              initial={{
                opacity: 0,
                pathLength: 0,
              }}
              animate={{
                opacity: 1,
                pathLength: 1,
                transition: { duration: 2, ease: "easeInOut" },
              }}
              // fill-rule="evenodd"
              // clip-rule="evenodd"
              d="M1 1V458.5L241.5 675.5V306.5L293.25 284.136L345 306.5V675.5L585.5 458.5V1L293.25 146.959L1 1Z"
              fill="url(#paint0_linear_183_81)"
            />
            <motion.path
              initial={{
                opacity: 0,
                pathLength: 0,
              }}
              animate={{
                opacity: 1,
                pathLength: 1,
                transition: { duration: 2, ease: "easeInOut" },
              }}
              d="M1 458.5H0.5V458.722L0.665049 458.871L1 458.5ZM1 1L1.2234 0.552685L0.5 0.191395V1H1ZM241.5 675.5L241.165 675.871L242 676.625V675.5H241.5ZM241.5 306.5L241.302 306.041L241 306.171V306.5H241.5ZM293.25 284.136L293.448 283.677L293.25 283.591L293.052 283.677L293.25 284.136ZM345 306.5H345.5V306.171L345.198 306.041L345 306.5ZM345 675.5H344.5V676.625L345.335 675.871L345 675.5ZM585.5 458.5L585.835 458.871L586 458.722V458.5H585.5ZM585.5 1H586V0.191395L585.277 0.552685L585.5 1ZM293.25 146.959L293.027 147.406L293.25 147.518L293.473 147.406L293.25 146.959ZM1.5 458.5V1H0.5V458.5H1.5ZM241.835 675.129L1.33495 458.129L0.665049 458.871L241.165 675.871L241.835 675.129ZM241 306.5V675.5H242V306.5H241ZM293.052 283.677L241.302 306.041L241.698 306.959L293.448 284.595L293.052 283.677ZM293.052 284.595L344.802 306.959L345.198 306.041L293.448 283.677L293.052 284.595ZM344.5 306.5V675.5H345.5V306.5H344.5ZM345.335 675.871L585.835 458.871L585.165 458.129L344.665 675.129L345.335 675.871ZM586 458.5V1H585V458.5H586ZM585.277 0.552685L293.027 146.511L293.473 147.406L585.723 1.44732L585.277 0.552685ZM0.776597 1.44732L293.027 147.406L293.473 146.511L1.2234 0.552685L0.776597 1.44732Z"
              fill="black"
            />
            <defs>
              <linearGradient
                id="paint0_linear_183_81"
                x1="293.25"
                y1="1"
                x2="293.25"
                y2="675.5"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF4305" />
                <stop offset="1" stopColor="#F58700" />
              </linearGradient>
            </defs>
          </motion.svg>
        </a>
        {/* links on laptop */}
        <ul className="hidden items-center gap-[30px] md:flex">
          <motion.li
            initial={{
              translateY: 40,
              opacity: 0,
            }}
            animate={{
              translateY: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.1,
            }}>
            <Link
              activeClass="active"
              to="Hero"
              spy={true}
              smooth={true}
              offset={-200}
              duration={100}
              className="text-[1.3rem] transition-all  duration-300  cursor-pointer">
              Home
            </Link>
          </motion.li>
          <motion.li
            initial={{
              translateY: 40,
              opacity: 0,
            }}
            animate={{
              translateY: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
            }}>
            <Link
              activeClass="active"
              to="About"
              smooth={true}
              spy={true}
              offset={-200}
              duration={100}
              className="text-[1.3rem]   transition-all duration-300 cursor-pointer">
              About me
            </Link>
          </motion.li>
          <motion.li
            initial={{
              translateY: 40,
              opacity: 0,
            }}
            animate={{
              translateY: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.7,
            }}>
            <Link
              activeClass="active"
              to="Services"
              smooth={true}
              offset={-200}
              spy={true}
              duration={100}
              className="text-[1.3rem] transition-all duration-300 cursor-pointer">
              Services
            </Link>
          </motion.li>
          <motion.li
            initial={{
              translateY: 40,
              opacity: 0,
            }}
            animate={{
              translateY: 0,
              opacity: 1,
            }}
            transition={{
              delay: 1,
            }}>
            <Link
              activeClass="active"
              to="Projects"
              smooth={true}
              offset={-200}
              spy={true}
              duration={100}
              className="text-[1.3rem] transition-all duration-300 cursor-pointer">
              Portfolio
            </Link>
          </motion.li>
        </ul>
        {/* btns and dark on laptop */}
        <div className="hidden items-center gap-8 md:flex">
          <motion.button
            onClick={() => {
              document.getElementById("contact").scrollIntoView({
                smooth: true,
              });
            }}
            initial={{
              opacity: 0,
              translateY: 40,
            }}
            animate={{
              opacity: 1,
              translateY: 0,
            }}
            transition={{
              duration: 0.1,
              delay: 1.3,
            }}
            className="border-2 border-orange-600 py-[2px] rounded px-[25px] text-[1.2rem] relative z-10 before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-bgGradient hover:before:w-full before:z-[-1] before:transition-all hover:scale-[1.1] hover:border-none before:rounded hover:text-white transition-all duration-500 before:duration-500 ">
            Contact
          </motion.button>
          <motion.div
            initial={{
              translateY: 40,
              opacity: 0,
            }}
            animate={{
              translateY: 0,
              opacity: 1,
            }}
            transition={{
              delay: 1.6,
            }}
            className="bg-bgGradient text-white  cursor-pointer w-[35px] h-[35px] rounded-lg grid place-items-center">
            {mode == "dark" ? (
              <MdOutlineLightMode
                onClick={() => {
                  handleMode("light");
                }}
                size={25}
                className="transition-all p-[1px] duration-100 hover:scale-[1.1] "
              />
            ) : (
              <MdOutlineDarkMode
                onClick={() => {
                  handleMode("dark");
                }}
                size={25}
                className="transition-all p-[1px] duration-100 hover:scale-[1.1] "
              />
            )}
          </motion.div>
        </div>
        {/* links on phone */}
        <div className="flex md:hidden">
          {/* open and close the orange overlay */}
          {openNav ? (
            <>
              <div className="flex  md:hidden bg-gradient-to-b from-orange-600/40 to-orange-200/40 backdrop-blur-sm w-full h-screen absolute top-16 left-0 -z-10"></div>
            </>
          ) : (
            ""
          )}
          {/* toggle icon and dark mode icon */}
          <div className="flex items-center gap-3">
            {openNav ? (
              <IoIosCloseCircleOutline
                onClick={() => {
                  setOpenNav((prev) => !prev);
                }}
                className="w-[30px] h-[30px] text-black dark:text-white hover:text-orange-600 transition-all duration-200 cursor-pointer"
              />
            ) : (
              <SlMenu
                onClick={() => {
                  setOpenNav((prev) => !prev);
                }}
                className="w-[25px] h-[25px]  text-black dark:text-white hover:text-orange-600 transition-all duration-200 cursor-pointer"
                size={20}
              />
            )}
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                type: "spring",
                stiffness: 820,
              }}
              className="bg-bgGradient text-white  cursor-pointer w-[35px] h-[35px] rounded-lg grid place-items-center">
              {mode == "dark" ? (
                <MdOutlineLightMode
                  onClick={() => {
                    handleMode("light");
                  }}
                  size={25}
                  className="transition-all p-[1px] duration-100 hover:scale-[1.1] "
                />
              ) : (
                <MdOutlineDarkMode
                  onClick={() => {
                    handleMode("dark");
                  }}
                  size={25}
                  className="transition-all p-[1px] duration-100 hover:scale-[1.1] "
                />
              )}
            </motion.div>
          </div>
          {openNav ? (
            <motion.ul
              initial={{
                opacity: 0,
                top: -200,
              }}
              animate={{
                opacity: 1,
                top: "150%",
                transition: {
                  type: "spring",
                  duration: 1,
                },
              }}
              className="flex items-center  flex-col py-8 absolute top-[150%] left-[15px] rounded-2xl  mobileNav bg-[#eee]  dark:bg-[#1b1b1b] gap-[30px] md:hidden">
              <motion.li
                initial={{
                  translateY: 40,
                  opacity: 0,
                }}
                animate={{
                  translateY: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.1,
                }}
                className="w-[95%] text-center  ">
                <Link
                  activeClass="active"
                  to="Hero"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={100}
                  className="text-[1.3rem]   transition-all duration-300  cursor-pointer">
                  Home
                </Link>
              </motion.li>
              <motion.li
                initial={{
                  translateY: 40,
                  opacity: 0,
                }}
                animate={{
                  translateY: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.4,
                }}
                className=" text-center ">
                <Link
                  activeClass="active"
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={100}
                  className="text-[1.3rem] transition-all duration-300 cursor-pointer">
                  About me
                </Link>
              </motion.li>
              <motion.li
                initial={{
                  translateY: 40,
                  opacity: 0,
                }}
                animate={{
                  translateY: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.7,
                }}>
                <Link
                  activeClass="active"
                  to="Services"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={100}
                  className="text-[1.3rem] transition-all duration-300 cursor-pointer">
                  Services
                </Link>
              </motion.li>
              <motion.li
                initial={{
                  translateY: 40,
                  opacity: 0,
                }}
                animate={{
                  translateY: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 1,
                }}>
                <Link
                  activeClass="active"
                  to="Projects"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={100}
                  className="text-[1.3rem] transition-all duration-300 cursor-pointer">
                  Portfolio
                </Link>
              </motion.li>
              <motion.button
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 1.3,
                }}
                onClick={() => {
                  document.getElementById("contact").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className=" py-[4px] rounded-full px-[30px] text-white  text-[1.2rem] bg-bgGradient   hover:scale-[1.1]   transition-all duration-300 ">
                Contact
              </motion.button>
            </motion.ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
