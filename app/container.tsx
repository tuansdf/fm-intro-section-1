import { HTMLAttributes } from "react";

export default function Container({
  children,
  className,
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={"mx-auto max-w-sm xl:max-w-6xl " + className}>
      {children}
    </div>
  );
}
