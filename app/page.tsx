"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Container from "/app/container";
import ImageSwitch from "/app/image-switch";

import clientAudiophile from "/public/client-audiophile.svg";
import clientDatabiz from "/public/client-databiz.svg";
import clientMaker from "/public/client-maker.svg";
import clientMeet from "/public/client-meet.svg";
import iconArrowDown from "/public/icon-arrow-down.svg";
import iconArrowUp from "/public/icon-arrow-up.svg";
import iconCalendar from "/public/icon-calendar.svg";
import iconClose from "/public/icon-close-menu.svg";
import iconMenu from "/public/icon-menu.svg";
import iconPlanning from "/public/icon-planning.svg";
import iconReminders from "/public/icon-reminders.svg";
import iconTodo from "/public/icon-todo.svg";
import imageHeroDesktop from "/public/image-hero-desktop.png";
import imageHeroMobile from "/public/image-hero-mobile.png";
import logo from "/public/logo.svg";

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleFeatures = () => setIsFeaturesOpen((prev) => !prev);
  const toggleCompany = () => setIsCompanyOpen((prev) => !prev);

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-6 xl:justify-start xl:gap-16 xl:px-10 xl:text-base">
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
          <ul className="flex flex-col gap-8 xl:flex-row xl:items-center xl:gap-12">
            <li className="relative">
              <button
                onClick={toggleFeatures}
                className={clsx(
                  { "mb-8": isFeaturesOpen },
                  "flex items-center gap-4 xl:mb-0"
                )}
              >
                Features
                {isFeaturesOpen ? (
                  <Image src={iconArrowUp} alt="" />
                ) : (
                  <Image src={iconArrowDown} alt="" />
                )}
              </button>
              <ul
                className={clsx(
                  { hidden: !isFeaturesOpen },
                  "ml-6 space-y-6 overflow-hidden bg-almost-white transition-all xl:absolute xl:right-0 xl:top-full xl:mt-4 xl:ml-0 xl:w-max xl:rounded-xl xl:p-8 xl:drop-shadow-2xl"
                )}
              >
                <li className="flex items-center gap-4">
                  <Image src={iconTodo} alt="" width={22} /> Todo List
                </li>
                <li className="flex items-center gap-4">
                  <Image src={iconCalendar} alt="" width={22} /> Calendar
                </li>
                <li className="flex items-center gap-4">
                  <Image src={iconReminders} alt="" width={22} /> Reminders
                </li>
                <li className="flex items-center gap-4">
                  <Image src={iconPlanning} alt="" width={22} /> Planning
                </li>
              </ul>
            </li>
            <li>
              <button
                onClick={toggleCompany}
                className={clsx(
                  { "mb-8": isCompanyOpen },
                  "flex items-center gap-4 xl:mb-0"
                )}
              >
                Company
                {isCompanyOpen ? (
                  <Image src={iconArrowUp} alt="" />
                ) : (
                  <Image src={iconArrowDown} alt="" />
                )}
              </button>
              <ul
                className={clsx(
                  { hidden: !isCompanyOpen },
                  "ml-6 space-y-6 overflow-hidden bg-almost-white transition-all xl:absolute xl:top-full xl:ml-0 xl:mt-4 xl:w-max xl:rounded-xl xl:p-8 xl:drop-shadow-2xl"
                )}
              >
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
              </ul>
            </li>
            <li>Careers</li>
            <li>About</li>
          </ul>

          <ul className="flex flex-col gap-4 xl:flex-row">
            <li className="mt-4 xl:mt-0">
              <button className="w-full rounded-xl py-2 px-6">Login</button>
            </li>
            <li>
              <button className="w-full rounded-xl border border-black px-6 py-2">
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

      <Container className="xl:grid xl:grid-cols-2 xl:gap-48">
        <ImageSwitch
          mobileSrc={imageHeroMobile}
          desktopSrc={imageHeroDesktop}
        />

        <div className="text-center xl:order-first xl:flex xl:flex-col xl:justify-end xl:text-start">
          <h1 className="mt-12 text-4xl font-bold text-almost-black xl:mt-0 xl:text-7xl">
            Make <br className="hidden xl:inline" /> remote work
          </h1>
          <p className="mt-6 text-medium-gray xl:mt-12">
            Get your team in sync, no matter your location. Streamline
            precesses, create team rituals, and watch productivity soar.
          </p>

          <button className="mt-6 w-max rounded-xl bg-almost-black py-3 px-6 text-almost-white xl:mt-12">
            Learn more
          </button>

          <div className="mt-12 flex items-center justify-between gap-8 xl:mr-8 xl:mt-24">
            <Image src={clientDatabiz} alt="" className="w-20 xl:w-24" />
            <Image src={clientAudiophile} alt="" className="w-14 xl:w-16" />
            <Image src={clientMeet} alt="" className="w-16 xl:w-20" />
            <Image src={clientMaker} alt="" className="w-16 xl:w-20" />
          </div>
        </div>
      </Container>
    </>
  );
}
