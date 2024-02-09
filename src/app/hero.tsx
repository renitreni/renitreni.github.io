"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import Link from "next/link";

const SOCIALS = [
  {
    logo: "github",
    title: "Github",
    href: "https://github.com/renitreni",
    textColor: "text-gray-900",
  },
  {
    logo: "linkedin",
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/renier-trenuela-ii-33b4b9123/",
    textColor: "text-blue-900",
  },
];
function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
            placeholder={"undefined"}
          >
            Hi,my name is Renier <br /> Welcome to my Portofolio!
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
            placeholder={"undefined"}
          >
            With a passion for crafting seamless digital experiences, I leverage
            the versatility and efficiency of Laravel to create dynamic web
            applications that seamlessly integrate front-end and back-end
            functionalities.
          </Typography>
          <div className="flex">
            {SOCIALS.map((value, key) => (
              <Typography
                key={key}
                variant="small"
                className={"mb-2 font-medium mx-2"}
                placeholder={"undefined"}
              >
                <a className="flex flex-row items-center" href={value.href} target="_blank">
                  <Image
                    key={key}
                    alt={value.logo}
                    width={32}
                    height={32}
                    className={`w-6 ${value.textColor}`}
                    src={`/logos/logo-${value.logo}.svg`}
                  />
                  <span className="ml-2 font-sans font-bold">{value.title}</span>
                </a>
              </Typography>
            ))}
          </div>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/ins.jpg"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
