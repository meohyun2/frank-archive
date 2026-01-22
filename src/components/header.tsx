import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import Sidebar from "@/components/sidebar";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About me",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Archives",
    href: "/archives",
  },
];

const Header = () => {
  return (
    <header className="sticky top-0 w-full z-50">
      <div className="glass-sm backdrop-blur-xl">
        <div className="flex justify-between items-center w-full max-w-[1400px] mx-auto px-6 py-4">
          {/* Logo */}
          <Link 
            href="/" 
            className="relative group"
          >
            <div className="absolute inset-0 bg-accent-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Image 
              src="/logo.svg" 
              alt="logo" 
              width={44} 
              height={44} 
              className="relative z-10 transition-transform duration-300 group-hover:scale-110"
            />
          </Link>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sidebar navItems={navItems} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative px-5 py-2.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium text-base rounded-xl transition-all duration-300 group"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 glass-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
          </nav>

          {/* Social Links & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <div className="w-px h-6 bg-slate-300 dark:bg-slate-600 mx-1" />
            <Button size="icon" variant="ghost" asChild>
              <Link href="https://www.linkedin.com/in/daehyun-kim-5b135224b/" target="_blank">
                <Image 
                  src="/linkedin.svg" 
                  alt="linkedin" 
                  width={20} 
                  height={20}
                  className="opacity-70 group-hover:opacity-100 transition-opacity dark:invert"
                />
              </Link>
            </Button>
            <Button size="icon" variant="ghost" asChild>
              <Link href="https://github.com/meohyun2" target="_blank">
                <Image 
                  src="/github.svg" 
                  alt="github" 
                  width={20} 
                  height={20}
                  className="opacity-70 group-hover:opacity-100 transition-opacity dark:invert"
                />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
