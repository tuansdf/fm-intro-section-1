import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function DropdownItem({ children }: IProps) {
  return (
    <li>
      <button className="flex w-full items-center gap-4 py-2.5 px-8 hover:text-almost-black">
        {children}
      </button>
    </li>
  );
}
