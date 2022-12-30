import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Dropdown from "/app/dropdown";
import DropdownItem from "/app/dropdown-item";

import iconCalendar from "/public/icon-calendar.svg";
import iconClose from "/public/icon-close-menu.svg";
import iconMenu from "/public/icon-menu.svg";
import iconPlanning from "/public/icon-planning.svg";
import iconReminders from "/public/icon-reminders.svg";
import iconTodo from "/public/icon-todo.svg";
import logo from "/public/logo.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="flex w-full items-center justify-between px-6 py-6 xl:justify-start xl:gap-16 xl:px-10 xl:text-base">
        <Link href="#">
          <Image src={logo} alt="" />
        </Link>
        <button onClick={openMenu} className="xl:hidden">
          <Image src={iconMenu} alt="" />
        </button>

        <div
          className={clsx(
            {
              "-z-50 translate-x-full opacity-0": !isMenuOpen,
              "z-20": isMenuOpen,
            },
            "fixed top-0 bottom-0 right-0 flex w-72 flex-1 flex-col bg-almost-white p-6 pt-20 text-medium-gray transition xl:relative xl:top-auto xl:bottom-auto xl:right-auto xl:z-0 xl:w-auto xl:translate-x-0 xl:flex-row xl:items-center xl:justify-between xl:p-0 xl:opacity-100"
          )}
        >
          <ul className="flex flex-col gap-6 xl:flex-row xl:items-center xl:gap-12">
            <li>
              <Dropdown title="Features" position="right">
                <DropdownItem>
                  <Image src={iconTodo} alt="" width={22} /> Todo List
                </DropdownItem>
                <DropdownItem>
                  <Image src={iconCalendar} alt="" width={22} /> Calendar
                </DropdownItem>
                <DropdownItem>
                  <Image src={iconReminders} alt="" width={22} /> Reminders
                </DropdownItem>
                <DropdownItem>
                  <Image src={iconPlanning} alt="" width={22} /> Planning
                </DropdownItem>
              </Dropdown>
            </li>
            <li>
              <Dropdown title="Company" position="left">
                <DropdownItem>History</DropdownItem>
                <DropdownItem>Our Team</DropdownItem>
                <DropdownItem>Blog</DropdownItem>
              </Dropdown>
            </li>
            <li>
              <button className="hover:text-almost-black">Careers</button>
            </li>
            <li>
              <button className="hover:text-almost-black">About</button>
            </li>
          </ul>

          <ul className="flex flex-col gap-4 xl:flex-row">
            <li className="mt-4 xl:mt-0">
              <button className="w-full rounded-xl py-2 px-6 hover:text-almost-black">
                Login
              </button>
            </li>
            <li>
              <button className="w-full rounded-xl border border-medium-gray px-6 py-2 hover:border-almost-black hover:text-almost-black">
                Register
              </button>
            </li>
          </ul>

          <button
            onClick={closeMenu}
            className="absolute top-0 right-0 m-6 xl:hidden"
          >
            <Image src={iconClose} alt="" />
          </button>
        </div>
      </nav>
      <div
        onClick={closeMenu}
        className={clsx(
          { hidden: !isMenuOpen },
          "absolute inset-0 z-10 cursor-pointer bg-almost-black/50 transition-opacity xl:hidden"
        )}
      ></div>
    </>
  );
}
