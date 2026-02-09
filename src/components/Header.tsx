import { useEffect, useRef, useState } from "react";

function Header() {
  const header = ["Home", "About", "Projects", "Contact"];
  const sectionHeight = 1000;

  const [active, setActive] = useState<string>("Home");
  const isAutoScrolling = useRef(false);

  const activeCss =
    "relative text-[#F9F6EE] cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-red-500 after:w-full";

  const defaultCss =
    "relative text-[#9E9E9E] hover:text-[#F9F6EE] cursor-pointer transition after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full";

  const scrollToTop = (punkt: string) => {
    const targetIndex = header.indexOf(punkt);
    const targetScroll = targetIndex * sectionHeight;

    setActive(punkt);
    isAutoScrolling.current = true;

    const startScroll = window.scrollY;
    const distance = targetScroll - startScroll;
    const duration = 1200;
    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (!startTime) startTime = currentTime;

      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      window.scrollTo(0, startScroll + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        isAutoScrolling.current = false;
      }
    };

    requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    const onScroll = () => {
      if (isAutoScrolling.current) return;

      const scrollY = window.scrollY;

      const index = Math.min(
        header.length - 1,
        Math.floor((scrollY + sectionHeight / 2) / sectionHeight),
      );

      setActive(header[index]);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-10 flex justify-center gap-[500px] py-8 border-b border-white bg-[#200000]/50 backdrop-blur-lg">
      <div className="text-[#F9F6EE] font-mono text-xl font-bold">
        Porfolio-<span className="text-[#CF0202]">Web</span>
      </div>

      <ul className="flex gap-8 text-lg font-medium">
        {header.map((punkt) => (
          <button
            key={punkt}
            onClick={() => scrollToTop(punkt)}
            className={punkt === active ? activeCss : defaultCss}
          >
            {punkt}
          </button>
        ))}
      </ul>
    </div>
  );
}

export default Header;
