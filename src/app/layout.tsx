import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

// for notion styles
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Frank's Archives",
  description: "Frank's Archives",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {/* Background with gradient and decorative orbs */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <div 
              className="absolute inset-0 transition-all duration-500"
              style={{ background: 'var(--background)' }}
            />
            {/* Decorative orbs */}
            <div className="orb orb-1 top-[-10%] left-[-5%]" />
            <div className="orb orb-2 top-[40%] right-[-10%]" />
            <div className="orb orb-3 bottom-[-10%] left-[30%]" />
          </div>
          
          <div className="w-full min-h-screen h-full relative z-10">
            <Header />
            <main>{children}</main>
            <footer className="relative mt-auto">
              <div className="glass-sm py-4 px-6 flex items-center justify-center">
                <p className="text-sm text-slate-500 dark:text-slate-400 tracking-wide">
                  © 2026 FRANK Archives. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
