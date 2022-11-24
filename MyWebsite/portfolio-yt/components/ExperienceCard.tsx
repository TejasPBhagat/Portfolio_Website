import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transiion-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        //viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://pbs.twimg.com/profile_images/1473756532827246593/KRgw2UkV_400x400.jpg"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">
          AWS Cloud Practitioner Essentials
        </h4>
        <p className="font-bold text-2xl mt-1">Amazon</p>
      </div>
      <div className="flex space-x-2 my-2">
        {/* tech used */}
        {/* tech used */}
        {/* tech used */}
      </div>
      <p className="uppercase py-5 text-gray-300">Started Working - Ended </p>

      <ul className="list-disc space-y-4 ml-5 text-lg">
        <li>Summary points</li>
        <li>Summary points</li>
        <li>Summary points</li>
        <li>Summary points</li>
        <li>Summary points</li>
      </ul>
    </article>
  );
}

export default ExperienceCard;
