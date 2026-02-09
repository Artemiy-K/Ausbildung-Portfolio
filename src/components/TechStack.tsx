interface TechStackProps {
  skills: string[];
  reduced?: boolean;
}

const TechStack = ({ skills, reduced = false }: TechStackProps) => {
  const padding = reduced ? "px-3 py-2" : "px-4 py-3";
  return (
    <div className="flex flex-wrap gap-3 w-[500px]">
      {skills.map((skill) => (
        <span
          key={skill}
          className={`
              rounded-full
              border border-red-500/30
              bg-red-900/30 
              ${padding} 
              text-sm
              text-red-200
              shadow-[0_0_15px_rgba(255,0,0,0.15)]
              transition
              hover:bg-red-500/80
              hover:text-white
              text-red-400
              hover:shadow-[0_0_25px_rgba(255,0,0,0.5)]
              cursor-default
            `}
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

export default TechStack;
