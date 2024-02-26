"use client"
import { useState } from "react";
import { Spotlight } from "@/components/Spotlight";
import { TypewriterEffect } from "@/components/typewriter-effect";
import { HoveredLink, Menu, MenuItem, } from "@/components/navbar-menu";

import { cn } from "@/utils";

const PHRASE = "Let's Build Something Cool!"
const words = PHRASE.split(" ").map((word, idx) => {
  let className = "text-white"
  if (idx === PHRASE.split(" ").length - 1) {
    className = "text-blue-500 dark:text-blue-500";
  }
  return { text: word, className }
})

export default function Home() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        className={cn("fixed top-10 inset-x-0 max-w-fit	 mx-auto z-50", "top-2")}
      >
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/management-consulting">Management Consulting</HoveredLink>
              <HoveredLink href="/coaching">Coaching</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="About">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/me">Me</HoveredLink>
              <HoveredLink href="/consulting">Consulting</HoveredLink>
              <HoveredLink href="/portfolio">Portfolio</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Blog">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/blog">Read My Blog Here</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>

      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Mitch Gillin <br /> Leader. Team Builder. Consultant.
        </h1>
        <TypewriterEffect words={words} />
      </div>
    </main >
  );
}
