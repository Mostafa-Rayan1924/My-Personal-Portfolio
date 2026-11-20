import { useEffect, useState } from "react";
import axios from "axios";
import MainTitle from "./MainTitle";
import ProjectBox from "./ProjectBox";
import { TbArrowBackUp } from "react-icons/tb";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import loadingAnimation from "../../public/animation lottie/loading.json";

const API_URL = "https://mr-portfolio1.onrender.com/mr/project";

const tabs = [
  { label: "Favorite", value: "fav" },
  { label: "Html&Css", value: "Html&Css" },
  { label: "Javascript", value: "JS" },
  { label: "ReactJs", value: "React&Tailwind" },
  { label: "NextJs", value: "NextJs" },
];

const Projects = ({ AllBtn = false, moreBtn = true, backBtn = false }) => {
  const [activeBtn, setActiveBtn] = useState("fav");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchProjects(filter = "fav") {
    setActiveBtn(filter);
    setLoading(true);
    setError(null);

    try {
      const params =
        filter === "fav"
          ? { status: "favourite" }
          : filter === "All"
            ? {}
            : { tech: filter };

      const response = await axios.get(API_URL, { params });

      setProjects(response.data.data.result);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
      setError("Failed to load projects. Please try again.");
      setProjects([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  const projectsMap = projects.map((item) => (
    <ProjectBox key={item._id || item.id} item={item} />
  ));

  const tabClass = (value) =>
    `cursor-pointer hover:shadow-[0_0_40px_5px_rgba(255,68,0,0.292)]
    hover:text-white text-[1.2rem] sm:text-[1.4rem]
    transition-all duration-300 hover:bg-bgGradient
    flex items-center justify-center w-[136px] h-[40px]
    ${activeBtn === value ? "activeTab" : ""}`;

  return (
    <div className="py-[100px]" id="Projects">
      <MainTitle
        title={"Portfolio"}
        p={"Here you will see my projects ... Enjoy"}
      />

      <div className="container relative">
        <ul
          className="flex tabs items-center w-fit mx-auto rounded-lg
          gap-y-2 gap-x-[1px] sm:gap-[1px] justify-center flex-wrap mb-10">
          {backBtn && (
            <li
              className="bg-bgGradient absolute left-2 -top-8 sm:top-0
              w-10 h-10 rounded-full grid place-items-center sm:left-10">
              <Link className="text-white text-3xl" to="/">
                <TbArrowBackUp />
              </Link>
            </li>
          )}

          {AllBtn && (
            <li
              id="All"
              onClick={() => fetchProjects("All")}
              className={tabClass("All")}>
              All
            </li>
          )}

          {tabs.map(({ label, value }) => (
            <li
              key={value}
              onClick={() => fetchProjects(value)}
              className={tabClass(value)}>
              {label}
            </li>
          ))}
        </ul>

        <div
          className={`grid ${
            projects.length === 0
              ? "flex items-center justify-center"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          }`}>
          {loading ? (
            <div className="col-span-full w-full min-h-[300px] flex justify-center items-center">
              <Lottie className="w-[200px]" animationData={loadingAnimation} />
            </div>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : projects.length === 0 ? (
            <p>No projects found.</p>
          ) : (
            projectsMap
          )}
        </div>

        {moreBtn && (
          <Link
            to="/allprojects"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="bg-bgGradient w-[120px] text-center leading-[40px]
              h-[40px] text-white transition-all duration-300
              hover:shadow-[0_0_40px_5px_rgba(255,68,0,0.292)]
              hover:w-[140px] mt-10 mx-auto block">
            See More
          </Link>
        )}
      </div>
    </div>
  );
};

export default Projects;
