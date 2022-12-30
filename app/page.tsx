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
import iconClose from "/public/icon-close-menu.svg";
import iconMenu from "/public/icon-menu.svg";
import imageHeroDesktop from "/public/image-hero-desktop.png";
import imageHeroMobile from "/public/image-hero-mobile.png";
import logo from "/public/logo.svg";

export default function Page() {
  const [openMenu, setOpenMenu] = useState(false);

  const open = () => setOpenMenu(true);
  const close = () => setOpenMenu(false);

  return (
    <>
      <nav className="flex items-center justify-between p-6">
        <Link href="#">
          <Image src={logo} alt="" />
        </Link>
        <button onClick={open}>
          <Image src={iconMenu} alt="" />
        </button>

        <ul
          className={clsx(
            { "-z-50 translate-x-full opacity-0": !openMenu, "z-20": openMenu },
            "fixed top-0 bottom-0 right-0 flex w-72 flex-col gap-4 bg-almost-white p-6 pt-20 text-medium-gray transition-transform xl:hidden"
          )}
        >
          <li>Features</li>
          <li>Company</li>
          <li>Careers</li>
          <li>About</li>
          <li className="mt-4">
            <button className="w-full rounded-xl py-2">Login</button>
          </li>
          <li>
            <button className="w-full rounded-xl border border-black py-2">
              Register
            </button>
          </li>

          <button
            onClick={close}
            className="absolute top-0 right-0 m-6 xl:hidden"
          >
            <Image src={iconClose} alt="" />
          </button>
        </ul>
      </nav>

      <div
        onClick={close}
        className={clsx(
          { hidden: !openMenu },
          "absolute inset-0 z-10 cursor-pointer bg-almost-black/50 transition-opacity xl:hidden"
        )}
      ></div>

      <Container className="text-center">
        <ImageSwitch
          mobileSrc={imageHeroMobile}
          desktopSrc={imageHeroDesktop}
        />

        <h1 className="mt-12 text-4xl font-bold text-almost-black">
          Make remote work
        </h1>
        <p className="mt-6 text-medium-gray">
          Get your tema in sync, no matter your location. Streamline precesses,
          create team rituals, and watch productivity soar.
        </p>

        <button className="mt-6 rounded-xl bg-almost-black py-3 px-6 text-almost-white">
          Learn more
        </button>

        <div className="mt-12 flex items-center justify-between gap-8">
          <Image src={clientDatabiz} alt="" className="w-20" />
          <Image src={clientAudiophile} alt="" className="w-14" />
          <Image src={clientMeet} alt="" className="w-16" />
          <Image src={clientMaker} alt="" className="w-16" />
        </div>
      </Container>
    </>
  );
}
