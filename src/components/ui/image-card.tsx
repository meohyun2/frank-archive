import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  imageUrl: string;
  caption: string;
  className?: string;
};

export default function ImageCard({ imageUrl, caption, className }: Props) {
  return (
    <figure
      className={cn(
        "w-[450px] overflow-hidden rounded-2xl glass glass-hover group cursor-pointer",
        className
      )}
    >
      <div className="w-full h-full p-4">
        <div className="relative overflow-hidden rounded-md bg-slate-100 dark:bg-slate-800/50">
          <Image
            width={450}
            height={450}
            className="w-full transition-transform duration-500 group-hover:scale-105"
            src={imageUrl}
            alt="image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
      <figcaption className="px-4 pb-4 pt-2 text-sm font-medium text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
        {caption}
      </figcaption>
    </figure>
  );
}
