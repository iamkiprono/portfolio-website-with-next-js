"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MyButton from "./MyButton";
import { BiTrash } from "react-icons/bi";
import {
  FaAndroid,
  FaIntercom,
  FaLaptop,
  FaLink,
  FaWeibo,
} from "react-icons/fa";

type Projectprops = {
  projectName: string;
  projectDescription: string;
  projectType: string;
  link: string;
  tech: string[];
  projectImage: string;
};

const MyCard = ({ project }: { project: Projectprops }) => {
  const [readMore, setReadMore] = useState<boolean>(false);

  return (
    <>
      <div className="w-[350px] border p-2">
        <Image
          className="object-cover aspect-video"
          src={
            !project.projectImage ? "/comingsoon.avif" : project.projectImage
          }
          width={500}
          height={500}
          alt="Project Image"
          blurDataURL={project.projectImage}
        />
        <p className="font-bold text-lg mt-4">{project.projectName}</p>
        <p className="">
          {!readMore
            ? `${project.projectDescription.slice(0, 210)}...`
            : project.projectDescription}
        </p>
        <p
          className="font-bold mt-4 text-blue-300 cursor-pointer"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "Read Less" : "Read More"}
        </p>
        <div className="mt-4">
          {project.projectType === "Cross platform mobile applicaion" ? (
            <FaAndroid size={24} />
          ) : (
            <FaLaptop size={24} />
          )}
        </div>
        <Link target="_blank" href={project.link}>
          <MyButton title="Live Demo" />
        </Link>
        <Link href={"/"}>
          <MyButton title="Github" />
        </Link>
        <p className="mb-4 font-bold">Tech:</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => {
            return (
              <p className="border p-2 text-sm" key={t}>
                {t}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MyCard;
