import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="w-full h-screen bg-cover flex flex-col justify-center items-center overflow-hidden bg-center"
      style={{ backgroundImage: "url(/background.png)" }}
    >
      <div className="relaitve">
        <Image
          src={"/Single Line With Smoke.png"}
          width="1440"
          height="900"
          alt="logo"
          className="lg:-translate-y-1/4 xs:-translate-y-1/2"
        />
        <Link
          href="/home"
          className="absolute bottom-0 left-1/2 -translate-x-[20%] w-[330px] h-[313px] xs:h-[228px] flex items-center justify-center pl-4 pt-12 -translate-y-1/4 xs:fixed xs:top-1/2 xs:left-1/2 xs:-translate-x-1/2 xs:-translate-y-1/2 lg:-translate-y-full md:-translate-y-1/2 xs:w-60"
        >
          <Image
            src="/saying.png"
            width={330}
            height={313}
            alt="saying"
            className="rotate-180 absolute inset-0"
          />
          <h2 className="text-6xl font-bold text-center relative z-10 xs:text-4xl xs:-pt-20">
            Enter Presale
          </h2>
        </Link>
      </div>
    </main>
  );
}
