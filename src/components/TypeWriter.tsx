import React, { useEffect, useRef, useState } from "react";

export interface TypewriterProps {
  words?: string[];
}

export const Typewriter: React.FC<TypewriterProps> = ({
  words = ["Motiviert", "Lernbereit", "Zuverlässig"],
}) => {
  const pause = 1400;
  const typingSpeed = 100;
  const [text, setText] = useState<string>("");
  const [deleting, setDeleting] = useState<boolean>(false);
  const charIndex = useRef(0); // statement of letter
  const [index, setIndex] = useState<number>(0); // statement of words
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!mounted.current) return;
    const speed = deleting ? Math.max(50, typingSpeed / 2) : typingSpeed;
    const currentWord = words[index % words.length];
    console.log(currentWord);

    const timer = window.setTimeout(() => {
      if (!deleting) {
        charIndex.current = Math.min(currentWord.length, charIndex.current + 1);
        setText(currentWord.slice(0, charIndex.current));
        if (charIndex.current === currentWord.length) {
          setVisible(false);
          setTimeout(() => setVisible(true), 600);
          setVisible(false);
          setTimeout(() => setVisible(true), 600);
          window.setTimeout(() => setDeleting(true), pause);
        }
      } else {
        charIndex.current = Math.max(0, charIndex.current - 1);
        setText(currentWord.slice(0, charIndex.current));
        if (charIndex.current === 0) {
          window.setTimeout(() => {
            setDeleting(false);
            setIndex((prev) => prev + 1);
          }, pause);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [mounted, text, deleting, index, words]);
  return (
    <>
      <span>{text}</span>
      <span
        className={`ml-2 inline-block w-2 h-12 bg-red-500 animate-blink transition ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />
    </>
  );
};

export default Typewriter;
