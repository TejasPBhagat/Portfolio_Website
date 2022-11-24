import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#e9e4e4] rounded-full h-[250px] w-[250px] mt-52 animate-ping" />
      <div className="absolute border border-[#333232] rounded-full h-[420px] w-[420px] mt-52" />
      <div className="absolute border border-[#df3535] rounded-full h-[640px] w-[640px] mt-52 animate-pulse" />
      <div className="absolute border border-[#f8fafa] rounded-full opacity-20 h-[770px] w-[770px] mt-52 animate-pulse" />
      <div className="absolute border border-[#6e2929] rounded-full h-[900px] w-[900px] mt-52" />
    </motion.div>
  );
}

export default BackgroundCircles;
