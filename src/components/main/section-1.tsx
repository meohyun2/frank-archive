import Image from "next/image";
import { Sparkles } from "lucide-react";
import VerticalSlides from "../ui/vertical-slides";
import Marquee from "../ui/marquee";
import ImageCard from "../ui/image-card";
import Link from "next/link";

const marqueeItems = [
  <ImageCard
    key="2-b.ai"
    imageUrl="/frontend_images/2bai.png"
    caption="2-b.ai - Todoist meets ChatGPT inside your browser"
    className="object-contain w-[100%]"
  />,
  <ImageCard
    key="nex-trade"
    imageUrl="/frontend_images/nex-trade.png"
    caption="NEX - Developed on-chain perpetual DEX frontend"
    className="object-contain w-[85%]"
  />,
  <ImageCard
    key="career-note"
    imageUrl="/frontend_images/careernote.webp"
    caption="CareerNote - AI-powered career coaching platform"
    className="object-contain w-[100%]"
  />,
  <ImageCard
    key="myfolio"
    imageUrl="/frontend_images/myfolio.webp"
    caption="Myfolio - 생기부 전형 AI 포트폴리오 제작 서비스"
    className="object-contain w-[85%]"
  />,
  <ImageCard
    key="sound-supply-service"
    imageUrl="/frontend_images/soundsupplyservice.png"
    caption="SoundSupplyService - 레이블 프로모션 웹 사이트"
    className="object-contain w-[95%]"
  />,
];

const Section1 = () => {
  const slides = [
    <div className="flex items-center h-[40px] gap-2" key="react">
      <span className="text-slate-800 dark:text-slate-100">Frontend</span>
      <Image
        src="/images/logo-react.svg"
        alt="react"
        width={36}
        height={36}
        className="object-contain"
      />
    </div>,
    <div className="flex items-center h-[40px] gap-2" key="blockchain">
      <span className="text-slate-800 dark:text-slate-100">Blockchain</span>
      <Image
        src="/images/blockchain.svg"
        alt="blockchain"
        width={36}
        height={36}
        className="object-contain"
      />
    </div>,
    <div className="flex items-center h-[40px] gap-2" key="langgraph">
      <span className="text-slate-800 dark:text-slate-100">AI & LLM</span>
      <Image
        src="/images/langgraph.svg"
        alt="langgraph"
        width={36}
        height={36}
        className="object-contain dark:invert"
      />
    </div>,
    <div className="flex items-center h-[40px] gap-2" key="producthunt">
      <span className="text-slate-800 dark:text-slate-100">Product tools</span>
      <Image
        src="/images/producthunt.svg"
        alt="producthunt"
        width={36}
        height={36}
        className="object-contain"
      />
    </div>,
    <div className="flex items-center h-[40px] gap-2" key="vibecoding">
      <span className="text-slate-800 dark:text-slate-100">Vibe Coding</span>
      <Image
        src="/images/vibecoding.svg"
        alt="vibecoding"
        width={36}
        height={36}
        className="object-contain"
      />
    </div>,
  ];

  return (
    <section className="relative flex justify-center items-center w-full min-h-[calc(100vh-80px)]">
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-[1920px] mx-auto px-10 flex items-center h-full max-lg:px-6 relative z-10">
        {/* Marquee Section - Left Side */}
        <div className="pl-4 overflow-hidden h-[calc(100vh-120px)] max-lg:hidden">
          <Marquee items={marqueeItems} />
        </div>

        {/* Hero Content - Right Side */}
        <div className="flex flex-col items-center justify-center gap-8 w-full py-20">
          {/* Badge */}
          <div className="glass-sm rounded-full px-5 py-2.5 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-accent-tertiary" />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Product Developer & Maker</span>
          </div>

          {/* Main Heading */}
          <div className="flex flex-col items-center gap-8 text-center">
            <h1 className="text-5xl max-xl:text-4xl max-lg:text-3xl max-md:text-2xl font-bold flex items-center justify-center gap-2">
              후랑크의 아카이브
              <Image src="/logo.svg" alt="react" width={48} height={48} className="object-contain" />
            </h1>
            <div className="flex flex-col items-center justify-center gap-4 text-3xl max-xl:text-2xl max-lg:text-xl max-md:text-lg font-semibold text-slate-700 dark:text-slate-200">
              <div className="flex items-center justify-center gap-2">
                <span>안녕하세요. </span>
                <div className="glass-sm rounded-xl px-4 py-1 hover:scale-105 transition-all duration-300">
                  <Link href="/about"> Frank</Link>
                </div>
                <span> 입니다.</span>
              </div>
              <span>제가 관심갖는 프로덕트와 기술에 관한 자료를 모으고,</span>
              <div className="flex items-center justify-center gap-4">
                <span>주로</span>
                <Link href="/archives">
                  <div className="glass-sm rounded-xl px-4 py-1 hover:scale-105 transition-all duration-300">
                    <VerticalSlides className="w-auto h-[40px]" items={slides} />
                  </div>
                </Link>
                <span>주제로 아카이브하고 있어요.</span>
              </div>
              <div className="flex items-center justify-center gap-4 mt-8">
                <span>현재</span>
                <a className="hover:scale-105 transition-all duration-300" href="https://www.producthunt.com/products/2-b-ai/launches/2-b-ai?embed=true&amp;utm_source=badge-top-post-badge&amp;utm_medium=badge&amp;utm_campaign=badge-2-b-ai" target="_blank" rel="noopener noreferrer"><img alt="2-b.ai - Todoist meets ChatGPT inside your browser | Product Hunt" width="200" height="54" src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=1057880&amp;theme=dark&amp;period=daily&amp;t=1769067142732" /></a>
                <span>이런 서비스를 운영 중이에요.</span>
              </div>
              <div className="flex items-center justify-center gap-4">
                <span>브라우저에서 쓸 수 있는 AI Todolist가 필요하다면, 사용해보세요!</span>
              </div>
            </div>
            <div className="rounded-xl px-4 py-1 flex items-center justify-center gap-4 text-3xl max-xl:text-2xl max-lg:text-xl max-md:text-lg font-semibold text-slate-700 dark:text-slate-200">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
