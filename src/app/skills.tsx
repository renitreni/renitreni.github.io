"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: " Fullstack Web Development:",
    children:
      "Embark on a journey through my portfolio, where I showcase the prowess of Laravel in full-stack development. Explore the projects within and witness firsthand how Laravel enables me to bring ideas to life with elegance, scalability, and innovation.",
  },
  {
    icon: FingerPrintIcon,
    title: " Mobile App Development",
    children:
      "I also showcase my proficiency in cross-platform mobile app development through Flutter and React Native. Leveraging these powerful frameworks, I've crafted intuitive and feature-rich mobile applications that deliver exceptional user experiences across both iOS and Android platforms.",
  },
  {
    icon: DocumentTextIcon,
    title: "Testing and Quality Assurance",
    children:
      "I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.",
  },
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography
          placeholder={""}
          color="blue-gray"
          className="mb-2 font-bold uppercase"
        >
          my skills
        </Typography>
        <Typography
          placeholder={""}
          variant="h1"
          color="blue-gray"
          className="mb-4"
        >
          What I do
        </Typography>
        <Typography
          placeholder={""}
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          I&apos;m not just a developer; I&apos;m a digital dreamweaver.
          Crafting immersive online experiences is not just a job but my
          calling. Discover below how I can help you.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
