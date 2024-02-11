import Projects from "../Components/Projects";

const AllPro = () => {
  return (
    <div className="pt-[50px]">
      <Projects AllBtn={true} moreBtn={false} backBtn={true} />
    </div>
  );
};

export default AllPro;
