import React from "react";
import { SparklesCore } from "./Sparkles";

const ContactMe: React.FC = () => {
  return (
    <div className="w-full flex justify-center fixed bottom-[24px]">
      <h2 className="mb-0 z-20"><a className="color-white" href="mailto:mitch.gillin@hey.com">Contact Me!</a></h2>
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={1200}
        className="h-full absolute"
        particleColor="#FFFFFF"
      />
    </div>
  )
}

export default ContactMe;
