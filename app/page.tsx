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

  return (
    <>
      <Spotlight />
      <div className="flex flex-col items-center justify-center p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="w-fit text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Mitch Gillin <br /> Leader. Team Builder. Consultant.
        </h1>
        <TypewriterEffect words={words} />
      </div>
    </ >
  );
}
