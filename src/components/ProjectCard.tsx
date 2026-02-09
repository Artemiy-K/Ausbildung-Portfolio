import ProjectButton from "./ui/ProjectButton";
import TechStack from "./TechStack";

interface ProjectCardProps {
  title: string;
  description: string;
  src: string;
}

const ProjectCard = ({ title, description, src }: ProjectCardProps) => {
  const usedTechStack = ["typescript", "tailwind", "React"];
  return (
    <div className="w-[360px] bg-gradient-to-r from-[#210000]  to-[#280000] to-90% rounded-lg shadow-[#ffffff]/30 shadow-xs translation-all duration-300 easy-out hover:scale-110 hover:shadow-xl/50 hover:shadow-red-600/30">
      <div className="flex justify-center bg-[#ffffff] w-full h-[200px] rounded-t-lg ">
        <img src={src} alt="face" className=" h-full rounded-lg" />
      </div>
      <div className="flex flex-col gap-5 p-7 ">
        <span className="cursor-default font-bold text-2xl">{title}</span>
        <span className="cursor-default text-white/80 text-base">
          {description}
          <p className="text-white">(in progress)</p>
        </span>
        <div className="flex gap-2 cursor-default">
          <TechStack skills={usedTechStack} reduced />
        </div>
        <div className="flex gap-4">
          <ProjectButton disabled> Live Demo</ProjectButton>
          <ProjectButton disabled> GitHub</ProjectButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
