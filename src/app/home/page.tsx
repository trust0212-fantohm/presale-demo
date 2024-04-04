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
			className="relative flex h-screen w-full flex-col items-end justify-end bg-[#c2ffff] bg-cover bg-bottom p-5"
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
				className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/4 sm:w-[800px]"
			/>
			<button
				className="absolute right-16 top-16 z-10 sm:right-7 sm:top-7"
				onClick={() => setIsPlaying((prev) => !prev)}
			>
				{!isPlaying ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 42 47"
						className="h-14 w-14 sm:h-7 sm:w-7"
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
				<p className="font-roboto text-5xl font-bold text-white drop-shadow-[0px_4px_4px_#000] md:w-64 md:text-right md:font-impact md:text-[40px] md:text-black md:backdrop-blur-sm md:drop-shadow-none sm:absolute sm:top-44 sm:leading-tight">
					Get rugged in a new way
				</p>
				<p className="font-roboto pl-20 text-3xl font-bold text-white drop-shadow-[0px_4px_4px_#000] md:mt-5 md:w-52 md:bg-white md:pl-2 md:text-right md:font-impact md:text-2xl md:text-black sm:absolute md:drop-shadow-none sm:top-64 sm:text-2xl">
					Send payment here to join presale
				</p>
				<div
					className="mt-3 flex w-fit cursor-pointer items-center gap-5 rounded-full border-2 border-blue-500 bg-white px-5 py-2 md:mt-[10vh] sm:absolute sm:left-1/2 sm:top-80 sm:w-[calc(100vw-40px)] sm:-translate-x-1/2 sm:py-8"
					title="Click to copy the address"
					onClick={handleCopyAddress}
				>
					<Image
						src="/Ethereum Logo .png"
						alt="Ethereum"
						width={25}
						height={40}
						className="flex-shrink-0 md:h-16 md:w-10"
					/>
					<p
						className="text-3xl md:text-2xl sm:text-xl"
						style={{ wordBreak: "break-all" }}
					>
						0xBE20ed1dE3eE3d4E43B0fF783e51F92D6885D232
					</p>
				</div>
			</div>
			<div className="flex items-center gap-4 rounded-[5px] bg-[#eed0aef0] p-2 shadow-[0px_1px_4px_#000A] sm:mx-auto sm:flex-col-reverse sm:gap-2">
				<div className="flex flex-col">
					<Link
						href="mailto:contact@broswifwoes.io"
						className="text-right font-medium tracking-widest sm:text-center sm:text-sm xs:text-xs"
					>
						CONTACT@BROSWIFWOES.IO
					</Link>
					<p className="text-right font-medium tracking-widest sm:text-sm xs:text-xs">
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
							className="sm:h-8 sm:w-8"
						/>
					</Link>
					<Link href="http://twitter.com" target="-blank">
						<Image
							src="/twitter.webp"
							alt="Twitter"
							width={52}
							height={52}
							className="sm:h-8 sm:w-8"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
}
