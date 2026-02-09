import AboutMe from "./AboutMe";
import GetInTouchPage from "./GetInTouchPage";
import GreetingPart from "./Greeting";
import MyProjects from "./MyProjects";

function MainContent() {
  return (
    <div className="w-full h-full">
      <GreetingPart />
      <AboutMe />
      <MyProjects />
      <GetInTouchPage />
    </div>
  );
}

export default MainContent;
