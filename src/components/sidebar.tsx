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
        <Button size="icon">
          <Menu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Frank&apos;s Archive</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 pl-5">
          {navItems.map((item) => (
            <SheetClose asChild key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </SheetClose>
          ))}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="neutral">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
