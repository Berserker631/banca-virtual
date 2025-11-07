import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <div className="w-full bg-white h-[800px] flex flex-col justify-center items-center">
        <Image width={800} height={800} src="/images/404.gif" alt="404" />
      </div>
    </>
  );
}
