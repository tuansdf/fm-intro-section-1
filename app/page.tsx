"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "/app/container";
import ImageSwitch from "/app/image-switch";

import clientAudiophile from "/public/client-audiophile.svg";
import clientDatabiz from "/public/client-databiz.svg";
import clientMaker from "/public/client-maker.svg";
import clientMeet from "/public/client-meet.svg";
import iconMenu from "/public/icon-menu.svg";
import imageHeroDesktop from "/public/image-hero-desktop.png";
import imageHeroMobile from "/public/image-hero-mobile.png";
import logo from "/public/logo.svg";

export default function Page() {
  return (
    <>
      <nav className="flex items-center justify-between p-4">
        <Link href="#">
          <Image src={logo} alt="" />
        </Link>
        <button>
          <Image src={iconMenu} alt="" />
        </button>
      </nav>

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
