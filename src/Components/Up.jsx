import { useEffect, useRef } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
const Up = () => {
  let arrowUp = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        arrowUp.current.style.opacity = "1";
      } else {
        arrowUp.current.style.opacity = "0";
      }
    });
  }, []);
  return (
    <div
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      ref={arrowUp}
      className="fixed bottom-[20px] text-white  transition-all duration-300 hidden   opacity-0  rounded-full cursor-pointer right-[40px] animate-bounce bg-bgGradient w-[33px] h-[33px] md:grid place-items-center">
      <FaLongArrowAltUp className="text-2xl " />
    </div>
  );
};

export default Up;
