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
        "w-[450px] overflow-hidden rounded-base border-2 border-border bg-main font-base shadow-2xl",
        className
      )}
    >
      <div className="w-full h-full p-5 bg-white">
        <Image
          width={450}
          height={450}
          className="w-full "
          src={imageUrl}
          alt="image"
        />
      </div>
      <figcaption className="font-bold text-md border-t-2 p-2">
        {caption}
      </figcaption>
    </figure>
  );
}
