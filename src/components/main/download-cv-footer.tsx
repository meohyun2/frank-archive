"use client";
import { useState } from "react";
import { ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const DownloadCVFooter = () => {
  const [footerShown, setFooterShown] = useState(true);

  const downloadCV = () => {
    const cv = "/Frank.pdf";
    const link = document.createElement("a");
    link.href = cv;
    link.download = "Frank.pdf";
    link.click();
  };

  const onClickHideCvSection = () => {
    setFooterShown(false);
  };

  return (
    <div
      className={`${
        !footerShown && "invisible"
      } sticky bg-white/50 bottom-0 w-full flex gap-[16px] border-3 px-2 py-2 items-center justify-between`}
    >
      <p className="font-extrabold">
        I&apos;m passionate about building productivity tools. Feel free to
        message me on telegram.
      </p>
      <div className="flex justify-end py-4 pr-8 gap-[16px]">
        <Button className="cursor-pointer" onClick={onClickHideCvSection}>
          Hide
        </Button>
        <Button size="icon" asChild>
          <Link href="https://t.me/shyboifrank" target="_blank">
            <Image src="/telegram.svg" alt="logo" width={20} height={20} />
          </Link>
        </Button>
        <Button className="cursor-pointer" onClick={downloadCV}>
          Read my Coverletter. <ScrollText />
        </Button>
      </div>
    </div>
  );
};

export default DownloadCVFooter;
