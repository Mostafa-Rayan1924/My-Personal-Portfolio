import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { SlMenu } from "react-icons/sl";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", to: "Hero", delay: 0.1 },
  { label: "About me", to: "About", delay: 0.4 },
  { label: "Services", to: "Services", delay: 0.7 },
  { label: "Portfolio", to: "Projects", delay: 1 },
];

// Shared navigation links
const NavLinks = ({ mobile = false, onClick }) => {
  return navLinks.map(({ label, to, delay }) => (
    <motion.li
      key={to}
      className={`relative group ${mobile ? "text-center" : ""}`}
      initial={{ translateY: 40, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ delay }}>
      <Link
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={-200}
        duration={100}
        onClick={onClick}
        className="text-[1.3rem] transition-all duration-300 cursor-pointer">
        {label}
      </Link>

      {!mobile && (
        <HiDotsHorizontal
          size={20}
          className="text-orange-500 absolute opacity-0 -bottom-8
            group-hover:opacity-[1] group-hover:-bottom-4 transition-all
            duration-500 left-1/2 translate-x-[-50%]"
        />
      )}
    </motion.li>
  ));
};

// Shared Dark Mode Button
const ThemeToggle = ({ mode, handleMode, mobile = false }) => {
  return (
    <motion.div
      whileHover={mobile ? { scale: 1.1 } : undefined}
      transition={mobile ? { type: "spring", stiffness: 820 } : { delay: 1.6 }}
      className="bg-bgGradient text-white cursor-pointer w-[35px] h-[35px]
        rounded-lg grid place-items-center">
      {mode === "dark" ? (
        <MdOutlineLightMode
          onClick={() => handleMode("light")}
          size={25}
          className="transition-all p-[1px] duration-100 hover:scale-[1.1]"
        />
      ) : (
        <MdOutlineDarkMode
          onClick={() => handleMode("dark")}
          size={25}
          className="transition-all p-[1px] duration-100 hover:scale-[1.1]"
        />
      )}
    </motion.div>
  );
};

const Navbar = () => {
  const [mode, setMode] = useState("dark");
  const [openNav, setOpenNav] = useState(false);

  // Initialize theme
  useEffect(() => {
    const savedMode = localStorage.getItem("mode") || "dark";

    document.body.classList.toggle("dark", savedMode === "dark");
    setMode(savedMode);
  }, []);

  // Theme handler
  function handleMode(theme) {
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("mode", theme);
    setMode(theme);
  }

  // Close mobile menu after clicking a navigation link
  function closeNav() {
    setOpenNav(false);
  }

  // Scroll to contact section
  function scrollToContact() {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });

    closeNav();
  }

  // Scroll to top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <header
      className="dark:bg-[#1d1d1d] bg-[#e5e5e5] header shadow-md
      shadow-[#f4280d1a] py-3 fixed top-0 left-0 w-full z-[999]">
      <div className="container flex items-center relative justify-between flex-wrap">
        {/* Logo */}
        <a className="cursor-pointer" onClick={scrollToTop}>
          <motion.svg
            initial={{ rotate: -180 }}
            animate={{ rotate: 0, transition: { duration: 1 } }}
            className="h-[50px] sm:h-[60px] object-contain"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 586 677"
            fill="none">
            <motion.path
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{
                opacity: 1,
                pathLength: 1,
                transition: { duration: 2, ease: "easeInOut" },
              }}
              d="M1 1V458.5L241.5 675.5V306.5L293.25 284.136L345 306.5V675.5L585.5 458.5V1L293.25 146.959L1 1Z"
              fill="url(#paint0_linear_183_81)"
            />

            <motion.path
              initial={{ opacity: 0, pathLength: 0 }}
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

        {/* Desktop Links */}
        <ul className="hidden items-center gap-[30px] md:flex">
          <NavLinks />
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-6 md:flex">
          <motion.button
            onClick={scrollToContact}
            initial={{ opacity: 0, translateY: 40 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.1, delay: 1.3 }}
            className="border-2 border-orange-600 py-[2px] rounded px-[25px]
              text-[1.2rem] relative z-10 before:absolute before:top-0
              before:left-0 before:w-0 before:h-full before:bg-bgGradient
              hover:before:w-full before:z-[-1] before:transition-all
              hover:scale-[1.1] hover:border-none before:rounded
              hover:text-white transition-all duration-500 before:duration-500">
            Contact
          </motion.button>

          <ThemeToggle mode={mode} handleMode={handleMode} />
        </div>

        {/* Mobile Navbar */}
        <div className="flex md:hidden">
          {/* Overlay */}
          {openNav && (
            <div
              className="bg-gradient-to-b from-orange-600/40 to-orange-200/40
              backdrop-blur-sm w-full h-screen absolute top-16 left-0 -z-10"
            />
          )}

          <div className="flex items-center gap-3">
            {/* Menu Toggle */}
            {openNav ? (
              <IoIosCloseCircleOutline
                onClick={() => setOpenNav(false)}
                className="w-[30px] h-[30px] text-black dark:text-white
                  hover:text-orange-600 transition-all duration-200 cursor-pointer"
              />
            ) : (
              <SlMenu
                onClick={() => setOpenNav(true)}
                className="w-[25px] h-[25px] text-black dark:text-white
                  hover:text-orange-600 transition-all duration-200 cursor-pointer"
                size={20}
              />
            )}

            {/* Mobile Theme Toggle */}
            <ThemeToggle mode={mode} handleMode={handleMode} mobile />
          </div>

          {/* Mobile Links */}
          {openNav && (
            <motion.ul
              initial={{ opacity: 0, top: -200 }}
              animate={{
                opacity: 1,
                top: "150%",
                transition: { type: "spring", duration: 1 },
              }}
              className="flex items-center flex-col py-8 absolute top-[150%]
                left-[15px] rounded-2xl mobileNav bg-[#eee] dark:bg-[#1b1b1b]
                gap-[30px] md:hidden">
              <NavLinks mobile onClick={closeNav} />

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                onClick={scrollToContact}
                className="py-[4px] rounded-full px-[30px] text-white
                  text-[1.2rem] bg-bgGradient hover:scale-[1.1]
                  transition-all duration-300">
                Contact
              </motion.button>
            </motion.ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
