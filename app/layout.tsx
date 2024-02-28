import type { Metadata } from "next";
import { cn } from "@/utils/utils";
import "./globals.css";
import MenuWrapper from "@/components/MenuWrapper";
import ContactMe from "@/components/ContactMe";

import { IBM_Plex_Sans } from 'next/font/google'

const IBMPlexSans = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: '--font-ibm-plex-sans',
})

export const metadata: Metadata = {
  title: "Mitch Gillin",
  description: "Made with Love by Mitch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={IBMPlexSans.className}>
        <div className={cn("fixed top-10 inset-x-0 max-w-fit	 mx-auto z-50", "top-2")}>
          <MenuWrapper />
        </div>

        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </main>
        <ContactMe />
      </body>
    </html>
  );
}
