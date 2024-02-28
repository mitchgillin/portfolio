import { TypewriterEffect } from "@/components/typewriter-effect"
import { BentoGrid, BentoGridItem } from "@/components/BentoGrid"
import { typewriterWords } from "@/utils/utils"
import Image from "next/image"

const Skeleton = ({ children = "" }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">{children}</div>
);

const experienceItems = [
  {
    title: "Bluestone Analytics/ CACI: DarkBlue",
    description: "Created an enterprise web app that helps users explore and target threat actors on the Dark Web",
    header: <Skeleton><Image className="m-auto h-fit" width={100} height={80} src={"/bluestone.png"} alt="Bluestone Logo" /></Skeleton>,
  },
  {
    title: "Bishop Fox: COSMOS Security Platform",
    description: "Lead 15 engineers to successfully deliver a cutting edge cybersecurity tool",
    header: <Skeleton><Image className="m-auto h-fit" width={100} height={80} src={"/poly-fox-graphic.png"} alt="Bishop Fox Logo" /></Skeleton>,
  },
  {
    title: "Forge/HackCVille: Launch Bootcamp",
    description: "Instructed 20+ students in full-stack web app dev during an intense five week boot camp.",
    header: <Skeleton><Image className="m-auto h-fit" width={100} height={80} src={"/rocket_icon.svg"} alt="Forge Logo" /></Skeleton>,
  },
];
const educationItems = [
  {
    title: "University of Virginia: Biomedical Engineering",
    description: "Trigon Engineering Society, Fencing, Biomedical Engineering Society",

    header: <Skeleton><Image className="m-auto h-fit" width={100} height={80} src={"/uva.png"} alt="Bluestone Logo" /></Skeleton>,

  },
  {
    title: "Forge/HackCville: Launch Bootcamp",
    description: "Participated in a holistic 12 week bootcamp/internship program for fullstack web development",
    header: <Skeleton><Image className="m-auto h-fit" width={100} height={80} src={"/rocket_icon.svg"} alt="Forge Logo" /></Skeleton>,
  },
];
const Me = () => {

  const PHRASE = "Mitch Gillin"

  return (
    <div>
      <TypewriterEffect words={typewriterWords(PHRASE)} />
      <br />
      <h1>Experience</h1>
      <BentoGrid className="max-w-4xl mx-auto">
        {experienceItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
      <br />
      <h1>Education</h1>
      <BentoGrid className="max-w-4xl mx-auto">
        {educationItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  )
}

export default Me;
