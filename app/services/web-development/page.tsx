import React from "react";
import { Meteors } from "@/components/meteors";
import { SparklesCore } from "@/components/Sparkles";

const WebDevelopmentPage: React.FC = () => {

  return (
    <div>
      <Meteors />
      <div className="flex flex-col items-center justify-center p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="w-fit text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Your Dream App Realized
        </h1>
        <br />
        <h3 className="text-center">
          We work hard to bring your <br />

        </h3>
        {/* Core component */}

        <div className="relative">
          <h1 className="mb-0 text-center">Next Big Thing</h1>
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full absolute top-0"
            particleColor="#FFFFFF"
          />
        </div>
        <br />
        <h3>to reality</h3>
        <br />
        <p className="text-center">
          With over seven years experience in software engineering, we are ready to take your project to the next level!
        </p>
        <br />
      </div>
    </div >

  )
}

export default WebDevelopmentPage;
