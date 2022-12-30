import clsx from "clsx";
import Image from "next/image";
import { ReactNode, useState } from "react";

import iconArrowDown from "/public/icon-arrow-down.svg";
import iconArrowUp from "/public/icon-arrow-up.svg";

interface IProps {
  title: string;
  children: ReactNode;
  position?: "left" | "right";
}

export default function Dropdown({
  title,
  children,
  position = "left",
}: IProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative">
      <button
        onClick={toggleOpen}
        className={clsx(
          { "mb-4": isOpen },
          "flex items-center gap-4 hover:text-almost-black xl:mb-0"
        )}
      >
        {title}
        {isOpen ? (
          <Image src={iconArrowUp} alt="" />
        ) : (
          <Image src={iconArrowDown} alt="" />
        )}
      </button>
      <ul
        className={clsx(
          {
            "xl:left-0": position === "left",
            "xl:right-0": position === "right",
            hidden: !isOpen,
          },
          "overflow-hidden transition-all xl:absolute xl:top-full xl:mt-4 xl:ml-0 xl:w-max xl:rounded-xl xl:bg-white xl:py-4 xl:drop-shadow-2xl"
        )}
      >
        {children}
      </ul>
    </div>
  );
}
