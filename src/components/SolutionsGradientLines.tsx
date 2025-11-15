"use client";

import { memo } from "react";

// Solutions-specific gradient lines (positioned on the right)
const SolutionsGradientLines = memo(() => (
  <div className="hidden lg:flex absolute top-0 right-24 xl:right-32 2xl:right-40 flex-row gap-[2px] h-full z-20">
    <div className="w-[3px] h-1/3 bg-linear-to-b from-[#ff6b35] via-[#9333ea] to-[#6366f1]" />
    <div className="w-[8px] h-full flex flex-col">
      <div className="h-1/3 bg-linear-to-b from-[#ff6b35] via-[#9333ea] to-[#6366f1]" />
      <div className="flex-1 bg-gray-700" />
    </div>
    <div className="w-[3px] h-1/3 bg-linear-to-b from-[#ff6b35] via-[#9333ea] to-[#6366f1]" />
  </div>
));

SolutionsGradientLines.displayName = 'SolutionsGradientLines';

export default SolutionsGradientLines;
