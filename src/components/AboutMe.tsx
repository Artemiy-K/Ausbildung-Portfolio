import TechStack from "./TechStack";

const AboutMe = () => {
  const developer = {
    name: "Artem",
    role: "Aspiring Front-End Developer",
  };
  const skills: string[] = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Git",
    "Responsive Design",
    "Teamwork",
    "Motivation To Learn",
    "Attention To Detail",
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-20 text-[#ffffff] mt-[200px]  pb-[200px]">
      <span className="relative after:content-[''] after:absolute after:left-14 after:-bottom-5 after:h-[3px] after:rounded-full after:bg-red-500 after:w-1/2 text-5xl font-bold">
        About Me
      </span>
      <div className="flex w-full h-full gap-28 justify-center">
        <div className="flex flex-col">
          <span className="w-[620px] text-lg tracking-wide text-white/80 mb-6">
            I’m Artem, interested in front-end development and web technologies.
            I look forward to learning, developing my skills, and contributing
            to practical projects during an Ausbildung.
          </span>
          <span className="text-xl font-bold mb-4">Skills & Technologies</span>
          <TechStack skills={skills} />
        </div>
        <div className="bg-[#000000]/50 px-10  py-7 font-mono  text-red-300/60 border-3 border-red-900/40 text-2xl w-[680px] rounded-xl leading-loose shadow-xl">
          const developer = &#x7B; <br />
          <span className="inline-block pl-7">
            name: &apos;{developer.name}&apos;,
            <br />
            role: &apos;{developer.role}&apos;,
            <br />
            passion: 'Gaining front-end skills through Ausbildung for
            interactive web apps.'
          </span>
          &#125;;
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
