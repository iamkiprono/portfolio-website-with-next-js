"use client";
import { ThemeContext } from "@/context/CounterContext";
import React, { useContext } from "react";

const Skills = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  console.log(theme);

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
      {theme}
      <p className="font-bold text-xl mb-4">Skills</p>
      <div className="flex gap-4 py-2 flex-wrap justify-center ">
        {techSkills.map((skill, index) => {
          return (
            <div
              className="rounded p-6 shadow-sm shadow-slate-200 w-[300px]"
              key={index}
            >
              <p>{skill}</p>
            </div>
          );
        })}
        <button onClick={() => setTheme("dark")}>Chaneg theme</button>
      </div>
    </div>
  );
};

export default Skills;
