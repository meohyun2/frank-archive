"use client";
import { useEffect, useState } from "react";

interface Props {
  items: React.ReactNode[];
  className?: string;
}

export default function VerticalSlides({ items, className }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = [...items, items[0]];
  const stepPercentage = 100 / visibleItems.length;
  const isEnd = currentIndex === 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= visibleItems.length) {
          return 0;
        }
        return nextIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [visibleItems.length]);

  return (
    <div
      className={`relative flex flex-col overflow-y-hidden ${className}`}
    >
      <div
        className={`flex flex-col flex-1 whitespace-nowrap transition-all duration-700 ease-out ${
          isEnd && "transition-none"
        }`}
        style={{ transform: `translateY(-${currentIndex * stepPercentage}%)` }}
      >
        {visibleItems.map((item, index) => {
          return <span className="flex items-center justify-center" key={`marquee-visible-${index}`}>{item}</span>;
        })}
      </div>
    </div>
  );
}
