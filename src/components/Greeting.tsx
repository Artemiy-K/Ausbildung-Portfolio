import ContactApps from "./ContactApps";
import Typewriter from "./TypeWriter";
import CVDownloadButton from "./ui/CVDownloadButton";

const GreetingPart = () => {
  return (
    <div className="w-full h-full">
      <div className="flex justify-evenly w-full h-full items-center">
        {" "}
        <div className="flex flex-col gap-6">
          <span className="text-[#D4BDB4] text-xl">Hello, I'm Artem 👋</span>
          <span className="text-[#FFF5EE] font-bold text-7xl w-[550px]">
            <Typewriter />
          </span>
          <span className="text-[#D4BDB4] text-lg">
            I am eager to learn, grow, and become a valuable member of your
            team.
          </span>
          <CVDownloadButton />

          <ContactApps />
        </div>
        <div className="w-[300px] h-[300px] rounded-full overflow-hidden border-3 border-yellow-300 shadow-[0_5px_95px_rgba(0,0,0,0.25)] shadow-yellow-300">
          <img
            src="/myphoto.png"
            alt="face"
            className="w-full h-full object-cover scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default GreetingPart;
