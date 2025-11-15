"use client";

import { memo } from "react";

// Gradient Lines Component for decorative background elements
const GradientLines = memo(() => (
  <div className="absolute top-0 left-8 sm:left-12 md:left-16 lg:left-20 xl:left-24 2xl:left-28 hidden lg:flex flex-row gap-[2px] h-full z-10">
    <div className="w-[3px] h-1/2 bg-linear-to-b from-[#ff6b35] via-[#9333ea] to-[#6366f1]" />
    <div className="w-[8px] h-full flex flex-col">
      <div className="h-1/2 bg-linear-to-b from-[#ff6b35] via-[#9333ea] to-[#6366f1]" />
      <div className="h-1/2 bg-gray-700" />
    </div>
    <div className="w-[3px] h-1/2 bg-linear-to-b from-[#ff6b35] via-[#9333ea] to-[#6366f1]" />
  </div>
));

GradientLines.displayName = 'GradientLines';

export default GradientLines;
