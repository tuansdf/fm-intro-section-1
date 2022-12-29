import Image from "next/image";

interface IProps {
  mobileSrc: any;
  desktopSrc: any;
}

export default function ImageSwitch({ mobileSrc, desktopSrc }: IProps) {
  return (
    <div>
      <Image src={mobileSrc} alt="" className="xl:hidden" />
      <Image src={desktopSrc} alt="" className="hidden xl:block" />
    </div>
  );
}
