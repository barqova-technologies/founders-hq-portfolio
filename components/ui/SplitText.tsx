"use client";

import { ReactNode } from "react";

type Props = {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  charClassName?: string;
  wordClassName?: string;
  splitBy?: "char" | "word";
};

export default function SplitText({
  text,
  as = "span",
  className = "",
  charClassName = "",
  wordClassName = "",
  splitBy = "char",
}: Props) {
  const Tag = as as keyof JSX.IntrinsicElements;
  const words = text.split(" ");

  let content: ReactNode;
  if (splitBy === "char") {
    content = words.map((word, wIdx) => (
      <span
        key={`${word}-${wIdx}`}
        className={`inline-block whitespace-nowrap ${wordClassName}`}
      >
        {word.split("").map((c, i) => (
          <span
            key={i}
            data-split-char
            className={`inline-block translate-y-[110%] opacity-0 ${charClassName}`}
            style={{ willChange: "transform, opacity" }}
          >
            {c}
          </span>
        ))}
        {wIdx < words.length - 1 && (
          <span data-split-char className="inline-block">
            &nbsp;
          </span>
        )}
      </span>
    ));
  } else {
    content = words.map((word, wIdx) => (
      <span key={`${word}-${wIdx}`} className="inline-block overflow-hidden align-bottom">
        <span
          data-split-word
          className={`inline-block translate-y-[110%] opacity-0 ${wordClassName}`}
          style={{ willChange: "transform, opacity" }}
        >
          {word}
        </span>
        {wIdx < words.length - 1 && <span>&nbsp;</span>}
      </span>
    ));
  }

  return <Tag className={className}>{content}</Tag>;
}
