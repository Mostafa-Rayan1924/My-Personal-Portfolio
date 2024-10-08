import { useEffect, useState } from "react";
import MainTitle from "./MainTitle";
import axios from "axios";
import ProjectBox from "./ProjectBox";
import { TbArrowBackUp } from "react-icons/tb";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import loading from "../../public/animation lottie/loading.json";

const Projects = ({ AllBtn = false, moreBtn = true, backBtn = false }) => {
  let [activeBtn, setActiveBtn] = useState("fav");
  let [projects, setProjects] = useState([]);
  function getAllProjects(e) {
    setActiveBtn(e);
    axios
      .get("https://mr-portfolio1.onrender.com/mr/project")
      .then((response) => {
        // Handle successful response
        setProjects(response.data.data.result);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  }
  function getAllFavsProjects() {
    axios
      .get("https://mr-portfolio1.onrender.com/mr/project?status=favourite")
      .then((response) => {
        // Handle successful response
        setProjects(response.data.data.result);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  }
  useEffect(() => {
    getAllFavsProjects();
  }, []);
  function getFavProjects() {
    setActiveBtn("fav");
    getAllFavsProjects();
  }
  let projectsMap = projects.map((item, i) => {
    return <ProjectBox key={i} item={item} />;
  });
  function handleFilter(e) {
    setActiveBtn(e);
    axios
      .get(`https://mr-portfolio1.onrender.com/mr/project?tech=${e}`)
      .then((response) => {
        // Handle successful response
        setProjects(response.data.data.result);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  }
  return (
    <div className="py-[100px]" id="Projects">
      <MainTitle
        title={"Portfolio"}
        p={"Here you will see my projects ... Enjoy"}
      />

      <div className="container relative">
        <ul className="flex tabs items-center  w-fit mx-auto rounded-lg gap-y-2 gap-x-[1px] sm:gap-[1px] justify-center flex-wrap mb-10">
          {backBtn ? (
            <li className="bg-bgGradient absolute left-2 -top-8 sm:top-0 w-10 h-10 rounded-full grid place-items-center sm:left-10 ">
              <Link className="text-white text-3xl" to={"/"}>
                <TbArrowBackUp />
              </Link>
            </li>
          ) : (
            ""
          )}
          {AllBtn ? (
            <li
              id="All"
              onClick={(e) => {
                getAllProjects(e.target.id);
              }}
              className={`${
                activeBtn == "All" ? "activeTab" : ""
              }   cursor-pointer hover:shadow-[0_0_40px_5px_rgba(255,68,0,0.292)] hover:text-white text-[1.2rem] sm:text-[1.4rem] transition-all duration-300 hover:bg-bgGradient flex items-center justify-center  w-[136px] h-[40px]  `}>
              All
            </li>
          ) : (
            ""
          )}
          <li
            onClick={getFavProjects}
            className={`${
              activeBtn == "fav" ? "activeTab" : ""
            }   cursor-pointer hover:shadow-[0_0_40px_5px_rgba(255,68,0,0.292)] hover:text-white text-[1.2rem] sm:text-[1.4rem] transition-all duration-300 hover:bg-bgGradient flex items-center justify-center  w-[136px] h-[40px]  `}>
            Favorite
          </li>
          <li
            id="Html&Css"
            onClick={(e) => {
              handleFilter(e.target.id);
            }}
            className={`${
              activeBtn == "Html&Css" ? "activeTab" : ""
            }   cursor-pointer hover:shadow-[0_0_40px_5px_rgba(255,68,0,0.292)] hover:text-white text-[1.2rem] sm:text-[1.4rem] transition-all duration-300 hover:bg-bgGradient flex items-center justify-center  w-[136px] h-[40px]  `}>
            Html&Css
          </li>
          <li
            id="JS"
            onClick={(e) => {
              handleFilter(e.target.id);
            }}
            className={`${
              activeBtn == "JS" ? "activeTab" : ""
            }   cursor-pointer hover:shadow-[0_0_40px_5px_rgba(255,68,0,0.292)] hover:text-white text-[1.2rem] sm:text-[1.4rem] transition-all duration-300 hover:bg-bgGradient flex items-center justify-center  w-[136px] h-[40px]  `}>
            Javascript
          </li>
          <li
            id="React&Tailwind"
            onClick={(e) => {
              handleFilter(e.target.id);
            }}
            className={`${
              activeBtn == "React&Tailwind" ? "activeTab" : ""
            }   cursor-pointer hover:shadow-[0_0_40px_5px_rgba(255,68,0,0.292)] hover:text-white text-[1.2rem] sm:text-[1.4rem] transition-all duration-300 hover:bg-bgGradient flex items-center justify-center  w-[136px] h-[40px]  `}>
            ReactJs
          </li>
          <li
            id="NextJs"
            onClick={(e) => {
              handleFilter(e.target.id);
            }}
            className={`${
              activeBtn == "NextJs" ? "activeTab" : ""
            }   cursor-pointer hover:shadow-[0_0_40px_5px_rgba(255,68,0,0.292)] hover:text-white text-[1.2rem] sm:text-[1.4rem] transition-all duration-300 hover:bg-bgGradient flex items-center justify-center  w-[136px] h-[40px]  `}>
            NextJs
          </li>
        </ul>
        <div
          className={`grid ${
            projects.length == 0
              ? "grid-cols-1 place-items-center"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          }  `}>
          {projects.length == 0 ? (
            <div className="">
              <Lottie className="w-[200px]" animationData={loading} />
            </div>
          ) : (
            projectsMap
          )}
        </div>
        {moreBtn ? (
          <Link
            to={"/allprojects"}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className=" bg-bgGradient w-[120px] text-center leading-[40px] h-[40px] text-white transition-all duration-300 hover:hover:shadow-[0_0_40px_5px_rgba(255,68,0,0.292)] hover:w-[140px] mt-10 mx-auto block">
            See More
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Projects;
