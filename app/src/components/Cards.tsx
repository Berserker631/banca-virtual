import Image from "next/image";
import logo from "../../../public/images/logo-lafise.svg";
import watermark from "../../../public/images/wm-lafise.svg";

interface CardProps {
  color: string;
}

export default function Cards({ color }: CardProps) {
  return (
    <div className="relative">
      <Image
        className="absolute z-10 top-0 -right-15 opacity-100"
        src={watermark}
        width={200}
        height={200}
        alt="water-mark"
      />
      <div
        className={`flex flex-col justify-around w-[353px] h-52 ${color} rounded-2xl px-4 py-3 gap-2`}
      >
        <Image src={logo} alt="Logo" width={86} height={28} />
        <div>
          <h1 className="text-xl font-semibold text-white">
            5325 ***** ***** 9033
          </h1>
        </div>
        <div>
          <h3 className="font-extralight text-white">Mike Smith</h3>
        </div>
      </div>
    </div>
  );
}
