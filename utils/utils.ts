import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}


export const typewriterWords = (PHRASE: string) => {

  return PHRASE.split(" ").map((word: string, idx: number) => {
    let className = "text-white"
    if (idx === PHRASE.split(" ").length - 1) {
      className = "text-blue-500 dark:text-blue-500";
    }
    return { text: word, className }
  })
} 
