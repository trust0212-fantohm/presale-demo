"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function Homepage() {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  useEffect(() => {
    setAudio(new Audio("/music.mp3"));
  }, []);

  useEffect(() => {
    if (!audio) return;
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("0xBE20ed1dE3eE3d4E43B0fF783e51F92D6885D232");
    alert("Address copied to clip board");
  };

  return (
    <div
      className="w-full h-screen relative flex items-end justify-end bg-bottom p-5 flex-col bg-cover bg-[#c2ffff]"
      style={{
        backgroundImage: "url(/SBF_Background_Image.png)",
        backgroundPositionX: "40%",
      }}
    >
      <Image
        src="/Blue Multi-Line Logo.png"
        alt="Smoke"
        width={985}
        height={556}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 sm:w-[800px]"
      />
      <button
        className="absolute top-16 right-16 sm:top-7 sm:right-7 z-10"
        onClick={() => setIsPlaying((prev) => !prev)}
      >
        {!isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 42 47"
            className="w-14 h-14 sm:w-7 sm:h-7"
          >
            <path fill="#1A6AFF" d="M0 47V0l42 23.5z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 29 38"
            className="h-14 w-14 sm:h-7 sm:w-7"
          >
            <path
              fill="#1A6AFF"
              d="M18.869 38H29V0H18.869v38zM0 38h10.131V0H0v38z"
            ></path>
          </svg>
        )}
      </button>
      <div className="pb-20 pr-10 md:flex md:flex-col md:items-end sm:pb-[10vh] sm:pr-0">
        <p className="text-5xl font-bold md:text-[40px] md:w-52 md:text-right md:backdrop-blur-sm sm:absolute sm:top-44 sm:leading-tight">
          Get rugged in a new way
        </p>
        <p className="text-3xl font-bold pl-20 md:text-2xl sm:text-2xl md:w-52 md:pl-2 mt-3 md:text-right md:bg-white md:mt-5 sm:absolute sm:top-64">
          Send payment here to join presale
        </p>
        <div
          className="rounded-full border-2 border-blue-500 bg-white flex py-2 items-center px-5 gap-5 w-fit cursor-pointer sm:py-8 md:mt-[10vh] mt-3 sm:absolute sm:top-80"
          title="Click to copy the address"
          onClick={handleCopyAddress}
        >
          <Image
            src="/Ethereum Logo .png"
            alt="Ethereum"
            width={25}
            height={40}
            className="md:w-10 md:h-16 flex-shrink-0"
          />
          <p
            className="text-3xl md:text-2xl sm:text-2xl"
            style={{ wordBreak: "break-all" }}
          >
            0xBE20ed1dE3eE3d4E43B0fF783e51F92D6885D232
          </p>
        </div>
      </div>
      <div className="flex items-center bg-[#eed0aef0] rounded-[5px] gap-4 p-2 shadow-[0px_1px_4px_#000A] sm:flex-col-reverse sm:gap-2 sm:mx-auto">
        <div className="flex flex-col">
          <Link
            href="mailto:contact@broswifwoes.io"
            className="text-right sm:text-center sm:text-sm xs:text-xs font-medium tracking-widest"
          >
            CONTACT@BROSWIFWOES.IO
          </Link>
          <p className="text-right sm:text-sm xs:text-xs font-medium tracking-widest">
            &copy;BROSWIFWOES 2024 ALL RIGHTS RESERVED
          </p>
        </div>
        <div className="flex gap-6">
          <Link href="http://t.me/broswifwoes" target="_blank">
            <Image
              src="/telegram.webp"
              alt="Telegram"
              width={52}
              height={52}
              className="sm:w-8 sm:h-8"
            />
          </Link>
          <Link href="http://twitter.com" target="-blank">
            <Image
              src="/twitter.webp"
              alt="Twitter"
              width={52}
              height={52}
              className="sm:w-8 sm:h-8"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
