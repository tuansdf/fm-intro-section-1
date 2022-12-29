import { ReactNode } from "react";
import "/styles/globals.css";

interface IProps {
  children: ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <html lang="en">
      <head>
        <title>Intro Section - Frontend Mentor - Tuan Nguyen</title>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
