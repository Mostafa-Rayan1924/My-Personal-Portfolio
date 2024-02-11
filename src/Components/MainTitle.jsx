const MainTitle = ({ title, p }) => {
  return (
    <div className="container text-center mb-10">
      <h2 className="text-[2.5rem] text-main capitalize font-bold">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl">{p}</p>
    </div>
  );
};

export default MainTitle;
