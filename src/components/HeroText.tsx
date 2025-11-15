"use client";

import { memo } from "react";

// Hero Text Component with gradient opacity effects
const HeroText = memo(() => {
  const textLines = [
    { text: "Lorem ipsum dolor sit amet,", opacity: "text-white" },
    { text: "consectetur adipiscing elit. Sed do", opacity: "text-white" },
    { text: "eiusmod sectetur adipiscing elit.", opacity: "text-white/60" },
    { text: "Sed do eiusmod tempor", opacity: "text-white/60" },
    { text: "incididunt ut labore et Lorem", opacity: "text-white/40" },
    { text: "ipsum dolor sit amet.", opacity: "text-white/20" },
  ];

  return (
    <div className="text-left space-y-2" role="presentation">
      {textLines.map((line, index) => (
        <p key={index} className={`${line.opacity} text-lg sm:text-2xl md:text-3xl lg:text-5xl leading-snug font-light`}>
          {line.text}
        </p>
      ))}
    </div>
  );
});

HeroText.displayName = 'HeroText';

export default HeroText;
