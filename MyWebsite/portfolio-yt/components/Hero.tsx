import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I am Tejas Bhagat",
      "Cybersecurity Researcher",
      "Cloud Enthusiast",
      "Trade & Stock Learner",
      "Competitive Typer",
      "CTF Player",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://media-exp1.licdn.com/dms/image/C4E03AQF0rv6TfuiQwA/profile-displayphoto-shrink_400_400/0/1642337565204?e=1671062400&v=beta&t=MtRn6LOVb4fxMukcv5qDhcw1c95QQkPlLNgc-AlyLN8"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-3 tracking-[10px] text-center">
          Student Researcher
        </h2>

        <h1 className="text-4xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href={"#about"}>
            <button className="heroButton">About</button>
          </Link>

          <Link href={"#experience"}>
            <button className="heroButton">Experience</button>
          </Link>

          <Link href={"#skills"}>
            <button className="heroButton">Skills</button>
          </Link>

          <Link href={"#projects"}>
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
