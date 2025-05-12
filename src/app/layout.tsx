import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

// for notion styles
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Web3 Builder Frank's Archive",
  description: "Web3 Builder Frank's Archive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        <div className="w-full min-h-screen h-full relative">
          <Header />
          <main>{children}</main>
          <footer>
            <div
              className={`bg-white/80 bottom-0 w-full flex gap-[16px] border-2 px-2 py-2 items-center justify-center`}
            >
              <p className="font-extrabold text-center">
                2025, WEB3 Developer FRANK. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
