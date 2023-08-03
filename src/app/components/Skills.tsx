"use client";

import React, { useContext } from "react";

const Skills = () => {
  const techSkills = [
    "Next.js",
    "React",
    "TailwindCSS",
    "MongoDb",
    "HTML",
    "CSS",
    "JavaScript",
    "MySQL",
    "Git",
  ];

  return (
    <div className=" p-6">
      <p className="font-bold text-xl mb-4">Skills</p>
      <div className="flex gap-4 py-2 flex-wrap justify-center ">
        {techSkills.map((skill, index) => {
          return (
            <div
              className="rounded p-6 shadow shadow-slate-200 w-full md:w-[300px]"
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
