import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import VerticalSlides from "../ui/vertical-slides";
import Marquee from "../ui/marquee";
import ImageCard from "../ui/image-card";

const marqueeItems = [
  <ImageCard
    key="backtest"
    imageUrl="/frontend_images/backtest.webp"
    caption="Backtest Neutra Uniswap V2 Delta Neutral Strategy with Grafana."
    className="object-contain w-[100%]"
  />,
  <ImageCard
    key="neutra-stake"
    imageUrl="/frontend_images/neutra-stake.png"
    caption="Developed Neutra Stake UI"
    className="object-contain w-[75%]"
  />,
  <ImageCard
    key="neutra-stat"
    imageUrl="/frontend_images/neutra-stat.png"
    caption="Indexed DNS Valut Contract Transactions and visualized"
    className="object-contain w-[90%]"
  />,
  <ImageCard
    key="nex-trade"
    imageUrl="/frontend_images/nex-trade.png"
    caption="Developed on-chain perpetual DEX UI"
    className="object-contain w-[85%]"
  />,
];

const Section1 = () => {
  const slides = [
    <div className="flex items-center h-[40px] gap-1" key="hardhat">
      <p>Hardhat</p>
      <Image
        src="/images/hardhat.png"
        alt="hardhat"
        width={40}
        height={40}
        className="object-contain"
      />
    </div>,
    <div className="flex items-center h-[40px] gap-1" key="react">
      <p>React.js</p>
      <Image
        src="/images/logo-react.svg"
        alt="react"
        width={40}
        height={40}
        className="object-contain"
      />
    </div>,
    <div className="flex items-center h-[40px] gap-1" key="nextjs">
      <p>Next.js</p>
      <Image
        src="/images/nextjs-icon.svg"
        alt="nextjs"
        width={40}
        height={40}
        className="object-contain"
      />
    </div>,
    <div className="flex items-center h-[40px] gap-1" key="solidity">
      <p>Solidity</p>
      <Image
        src="/images/solidity.svg"
        alt="solidity"
        width={40}
        height={40}
        className="object-contain"
      />
    </div>,
    <div className="flex items-center h-[40px] gap-1" key="the-graph">
      <p>The Graph</p>
      <Image
        src="/images/the-graph.png"
        alt="the-graph"
        width={40}
        height={40}
        className="object-contain"
      />
    </div>,
  ];

  return (
    <div className="flex justify-center items-center bg-sky-100 w-full h-[calc(100vh-75px)] bg-[linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] bg-[size:100px_100px] bg-[position:center_center] relative">
      <div className="max-w-[1920px] mx-auto px-10 flex items-center h-full max-lg:px-5">
        <div className="pl-4 bg-transparent overflow-hidden h-full max-lg:hidden">
          <Marquee items={marqueeItems} />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-full text-4xl font-bold max-xl:text-3xl max-lg:text-2xl max-md:text-xl">
          <h1 className="text-blue-500">Web3 Builder Frank</h1>
          <div className="flex items-center justify-center gap-4 w-full">
            <h1>specialized in</h1>
            <VerticalSlides className="w-auto h-[40px]" items={slides} />
          </div>
          <Button
            className="cursor-pointer px-8 py-8 max-lg:px-4 max-lg:py-4 text-2xl max-lg:text-xl max-md:text-lg"
            asChild
          >
            <Link href="/about me" target="_blank">
              <p>Find out more about me</p>
              <MoveUpRight size={20} absoluteStrokeWidth />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
