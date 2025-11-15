"use client";

import ScienceCard from './ScienceCard';
import SolutionsGradientLines from './SolutionsGradientLines';
import SustainabilitySection from './SustainabilitySection';
import { scienceCards } from '@/data/scienceCards';

// Main Solutions Component
const Solutions = () => {
  return (
    <section id="solutions" className="w-full flex flex-col bg-black overflow-hidden">

      {/* ---------------- SUBSECTION 1 ---------------- */}
      <div className="relative w-full py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40">

        <SolutionsGradientLines />

        {/* CONTAINER */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16">

          {/* Header Section */}
        {/* Header Section */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 mb-12 sm:mb-16 lg:mb-20 items-start">
  {/* Left: title */}
  <h1
  className="
    text-center   
    sm:text-left  
    text-2xl sm:text-3xl md:text-4xl lg:text-5xl
    text-white leading-tight
  "
>
  The Science Behind Our <br /> Innovative Solutions
</h1>


  {/* Right: button (aligned to end of column 2) */}
  <div className="flex justify-center items-center"> 
    {/* wrapper keeps button from overflowing if it's wider than fit */}
    <button
      className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium
                 w-fit justify-self-end 
                 mx-auto sm:mx-0 float-right sm:float-none
                 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black transition-all duration-200"
      style={{ clear: "both" }}
    >
      Learn More
    </button>
  </div>
</div>

{/* Science Cards Grid — keep the exact same grid cols & gaps */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 sm:gap-x-3 lg:gap-x-4 xl:gap-x-4 gap-y-3 sm:gap-y-4 lg:gap-y-5 xl:gap-y-6 items-start">
  {scienceCards.map((card, index) => (
    <ScienceCard key={index} card={card} index={index} />
  ))}
</div>
        </div>
      </div>

      {/* Sustainability Section */}
      <SustainabilitySection />

    </section>
  );
};

export default Solutions;
