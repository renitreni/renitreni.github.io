"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const TOOLS = [
  "laravel",
  "php",
  "python",
  "vue",
  "js",
  "tailwind",
  "bootstrap"
];

export function DevTools() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <Typography
          placeholder={""}
          variant="h1"
          color="blue-gray"
          className="mb-4"
        >
            What I Mostly Use
        </Typography>
        <Typography placeholder={'None'} variant="h6" color="blue-gray" className="mb-8">
          Technology Stack
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {TOOLS.map((logo, key) => (
            <Image
              key={key}
              alt={logo}
              width={768}
              height={768}
              className="w-40"
              src={`/logos/logo-${logo}.png`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DevTools;
