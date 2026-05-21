import RevealOnScroll from "./RevealOnScroll";

interface Props {
  eyebrow: string;
  num: string;
}

export default function SectionHeader({ eyebrow, num }: Props) {
  return (
    <RevealOnScroll>
      <div className="sec-header">
        <span className="sec-eyebrow">{eyebrow}</span>
        <span className="sec-num">{num}</span>
      </div>
    </RevealOnScroll>
  );
}
