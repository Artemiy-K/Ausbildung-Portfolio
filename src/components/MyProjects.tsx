import ProjectCard from "./ProjectCard";

const MyProjects = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-20 text-[#ffffff] mt-[280px]  pb-[200px]">
      <span className="relative text-5xl font-bold after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-5 after:h-[3px] after:w-1/2 after:rounded-full after:bg-red-500">
        My Projects
      </span>

      <div className="flex w-full h-full gap-10 justify-center">
        <ProjectCard
          title="To do List"
          description="A simple project to increase productivity"
          src="/todolis.png"
        />
        <ProjectCard
          title="Dictionary App"
          description="An app for effective memorization of information using digital flashcards"
          src="/inProgress.png"
        />
        <ProjectCard
          title="History Of Holidays"
          description="an app where you can read about different holidays and their traditions"
          src="/hoh.png"
        />
      </div>
    </div>
  );
};

export default MyProjects;
