import { FaLink } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IoIosList } from "react-icons/io";
import { MdFavorite } from "react-icons/md";

const ProjectBox = ({ item }) => {
  return (
    <div className="rounded-lg relative overflow-hidden  hover:-translate-y-2.5 projectParent group transition-all duration-300">
      {item.status == "favourite" ? (
        <MdFavorite
          className="absolute top-8 shadow-lg my-2   right-0 w-24 z-10 bg-bgGradient text-white text-center font-bold transform rotate-45 translate-x-6 -translate-y-6"
          size={20}
        />
      ) : (
        ""
      )}

      <div className="relative imgParent before:transition-all duration-300 before:absolute before:top-0 before:left-0 before:w-full before:h-full">
        <img
          src={item.projectImage}
          className="max-w-full w-full h-[170px] object-cover"
          alt=""
        />
        <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex gap-2 items-center flex-wrap">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bgGradient relative -left-6 group-hover:left-0 transition-all duration-300 w-[45px] h-[45px] text-xl grid place-items-center text-white rounded-full"
            href={item.linkProject}>
            <FaLink />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r relative left-6 group-hover:left-0 transition-all duration-300 from-cyan-500 to-blue-500 w-[45px] h-[45px] text-xl grid place-items-center text-white rounded-full"
            href={item.linkProjectGH}>
            <FaCode />
          </a>
        </div>
      </div>
      <div className="bg-[#c8c8c8] capitalize dark:bg-[#2E2E2E] p-2">
        <div className="flex items-center border-b border-[#adadad] dark:border-[#484848] pb-[15px] mb-3 flex-wrap justify-between">
          <h2 className="text-lg ProName ">{item.name}</h2>
          <div className="flex items-center gap-2">
            {item.techImage.map((tech, index) => (
              <img
                key={index}
                className="w-[25px] h-[25px] grayscale group-hover:grayscale-0 object-contain bg-transparent"
                src={tech}
                alt=""
              />
            ))}
          </div>
        </div>
        <p className="dark:text-[#a8b3cf] text-slate-700 font-bold text-center flex justify-center items-center gap-1">
          <IoIosList
            className="text-slate-500 dark:text-orange-500 font-bold"
            size={20}
          />
          {item.tech === "JS" ? "Javascript" : item.tech}
        </p>
      </div>
    </div>
  );
};

export default ProjectBox;
