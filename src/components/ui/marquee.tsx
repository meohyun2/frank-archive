interface Props {
  items: React.ReactNode[];
}

export default function Marquee({ items }: Props) {
  return (
    <div className="relative flex flex-col overflow-y-hidden gap-10">
      <div className="animate-marquee flex flex-col gap-4">{items}</div>
      <div className="absolute top-0 mt-4 animate-marquee2 flex flex-col gap-4">
        {items}
      </div>
    </div>
  );
}
