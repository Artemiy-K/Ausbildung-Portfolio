import type { ReactNode } from "react";

interface ProjectButtonProps {
  children: ReactNode;
  disabled?: boolean;
  src?: string;
}

const ProjectButton = ({
  children,
  disabled = false,
  src,
}: ProjectButtonProps) => {
  const activeCss =
    "border-red-500/60 text-red-400 cursor-pointer hover:bg-red-500/60 hover:text-white";
  const disabledCss = "border-[#888888] text-[#888888] cursor-not-allowed";
  return (
    <a href={src ? src : ""} target="_blank">
      {" "}
      <button
        className={`border-y-1 border-x-2  rounded-md font-semibold px-4 py-2 texl-lg ${disabled ? disabledCss : activeCss}`}
        disabled={disabled}
      >
        {children}
      </button>
    </a>
  );
};

export default ProjectButton;
