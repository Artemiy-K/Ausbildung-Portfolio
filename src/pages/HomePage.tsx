import Header from "../components/Header";
import MainContent from "../components/MainContent";

function HomePage() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <Header />
      <div className="fixed inset-0 -z-10 bg-radial-[at_50%_5%] from-black from-0% to-[#630000]" />
      <div className="w-full h-full flex items-center justify-center relative">
        <MainContent />
      </div>
    </div>
  );
}

export default HomePage;
