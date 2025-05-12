import Section1 from "@/components/main/section-1";
import Section2 from "@/components/main/section-2";
import Section3 from "@/components/main/section-3";

export default async function Home() {
  return (
    <div className="w-full relative">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}
