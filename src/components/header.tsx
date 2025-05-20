import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { ScrollText } from "lucide-react";
import Sidebar from "@/components/sidebar";

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
    <div className="sticky top-0 w-full flex justify-between items-center border-b-3 z-10 bg-white/70 backdrop-blur-sm">
      <div className="flex justify-between items-center w-full max-w-[1200px] mx-auto px-4 py-4">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
        </Link>
        <div className="min-md:hidden">
          <Sidebar navItems={navItems} />
        </div>
        <div className="flex gap-[32px] max-md:hidden absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-gray-600 transition-all duration-200 font-medium text-xl"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-[16px] max-md:hidden">
          <Button size="icon" asChild>
            <Link href="https://t.me/shyboifrank" target="_blank">
              <Image src="/telegram.svg" alt="logo" width={20} height={20} />
            </Link>
          </Button>
          <Button size="icon" asChild>
            <Link href="https://github.com/meohyun2" target="_blank">
              <Image src="/github.svg" alt="logo" width={20} height={20} />
            </Link>
          </Button>

          <Button className="cursor-pointer" asChild>
            <Link href="/Frank.pdf" target="_blank">
              Coverletter <ScrollText />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
