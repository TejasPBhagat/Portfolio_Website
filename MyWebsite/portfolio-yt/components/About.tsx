import { motion, MotionConfig } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        //viewport = {{once: true}} - For Doing the transition once
        whileInView={{ opacity: 1, x: 0 }}
        src="https://cdn.statusqueen.com/mobilewallpaper/thumbnail/Dark_Gaming_Wallpaper-1024.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div>
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#FF0000]/50">Little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Hi ,🖖 I am a Third Year Student, ready to explore new technology and
          merge my knowledge to achieve a difference.I love to build, automate
          and manage stuff. 🧑‍🏭 Computer Hardware and Cybersecurity Research is
          my Passion. 🖥️ The kind of person who doesn't want to be stuck in
          particular Main Stream as a career but have curiosity to learn new
          things. 🔗 I approached the field of Electronics and Telecommunication
          Engineering because I have a craze to build stuff combining software
          and hardware together.☢️
        </p>
      </div>
    </motion.div>
  );
}
