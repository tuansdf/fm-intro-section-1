import Image from "next/image";
import Container from "/app/container";
import ImageSwitch from "/app/image-switch";

import clientAudiophile from "/public/client-audiophile.svg";
import clientDatabiz from "/public/client-databiz.svg";
import clientMaker from "/public/client-maker.svg";
import clientMeet from "/public/client-meet.svg";
import imageHeroDesktop from "/public/image-hero-desktop.png";
import imageHeroMobile from "/public/image-hero-mobile.png";

export default function Page() {
  return (
    <Container className="xl:grid xl:grid-cols-2 xl:gap-48">
      <ImageSwitch mobileSrc={imageHeroMobile} desktopSrc={imageHeroDesktop} />

      <div className="text-center xl:order-first xl:flex xl:flex-col xl:justify-end xl:text-start">
        <h1 className="mt-12 text-4xl font-bold text-almost-black xl:mt-0 xl:text-7xl">
          Make <br className="hidden xl:inline" /> remote work
        </h1>
        <p className="mt-6 text-medium-gray xl:mt-12">
          Get your team in sync, no matter your location. Streamline precesses,
          create team rituals, and watch productivity soar.
        </p>

        <button className="mt-6 w-max rounded-xl border border-almost-black bg-almost-black py-3 px-6 text-almost-white transition-colors hover:bg-almost-white hover:text-almost-black xl:mt-12">
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
  );
}
