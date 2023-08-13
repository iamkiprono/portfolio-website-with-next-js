"use client";

import React, { useContext } from "react";

const Skills = () => {
  const techSkills = [
    "Next.js",
    "React",
    "React Native",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "TailwindCSS",
    "MySQL",
    "MongoDb",
    "Express.js",
    "Node",
    "Git",
    "GitHub",
    "Adobe XD",
    "Figma",
  ];

  return (
    <div className=" p-6">
      <p className="font-bold text-xl mb-4 ">Skills</p>

      <div className="flex gap-4 py-2 flex-wrap justify-center border-l-[1px]">
        {techSkills.map((skill, index) => {
          return (
            <div
              className="rounded p-4 border w-[140px] md:w-[300px]"
              key={index}
            >
              <p>{skill}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
