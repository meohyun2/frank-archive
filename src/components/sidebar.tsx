import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

interface Props {
  navItems: {
    label: string;
    href: string;
  }[];
}

const Sidebar = ({ navItems }: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <Menu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Frank&apos;s Archive</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-2 px-6 mt-4">
          {navItems.map((item) => (
            <SheetClose asChild key={item.label}>
              <Link 
                href={item.href}
                className="px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-200 text-lg font-medium"
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="glass" className="w-full">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
