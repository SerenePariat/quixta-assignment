"use client";
import Image from "next/image";
import { useMemo } from "react";
import VideoBackground from "./VideoBackground";
import GradientLines from "./GradientLines";
import HeroText from "./HeroText";
import SolutionItem from "./SolutionItem";
import LogoCard from "./LogoCard";
import { LOGO_DATA } from '@/data/logos';
import { SOLUTIONS_DATA } from '@/data/solutions';
import { AboutProps } from '@/types/technology';

// Title formatter utility
const formatTitle = (title: string) => {
  const words = title.split(' ');
  const midPoint = Math.ceil(words.length / 2);
  return {
    firstLine: words.slice(0, midPoint).join(' '),
    secondLine: words.slice(midPoint).join(' '),
  };
};

// Main Technology Component
const Technology: React.FC<AboutProps> = ({ 
  title = "Our Journey Towards Innovation and Excellence",
  subtitle = "Brand is an advanced luminescent materials company, leveraging synergies of cutting-edge chemistries to deliver solutions, not just products. About Brand",
  onLogoClick
}) => {
  const { firstLine, secondLine } = useMemo(() => formatTitle(title), [title]);

  return (
    <main
      id="technology"
      className="relative w-full overflow-hidden bg-black"
      role="main"
      aria-label="About us section"
    >
      {/* Section 1: Hero with Logos */}
      <section className="relative w-full px-4 sm:px-6 md:px-8 py-12 lg:py-20">
        <GradientLines />
        
        <div className="max-w-6xl mx-auto lg:pl-36 lg:pr-8">
          <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-8 space-y-4 md:space-y-6">
            <HeroText />

            <div className="mt-20 mb-15">
              <div 
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6"
                role="group"
                aria-label="Partner company logos"
              >
                {LOGO_DATA.map((logo) => (
                  <LogoCard 
                    key={logo.id}
                    src={logo.src}
                    alt={`${logo.alt} company logo`}
                    title={logo.title}
                    onClick={onLogoClick ? () => onLogoClick(logo) : undefined}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Mission Statement */}
      <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 overflow-hidden">
        <VideoBackground 
          src="/assets/videos/2602520_Abstract_Backgrounds_1280x720.mp4"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="relative z-20 w-full max-w-6xl mx-auto flex items-center justify-center min-h-screen">
          <div className="w-[90%] sm:w-[85%] md:w-4/5 lg:w-3/4 max-w-4xl bg-white/20 backdrop-blur-lg rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 text-center space-y-6 sm:space-y-8 shadow-2xl border border-white/10">
            <header className="text-center">
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-tight">
                {firstLine} <br /> {secondLine}
              </h2>
            </header>

            <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>

            <button 
              className="bg-white/80 hover:bg-white text-gray-900 font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 text-sm sm:text-base"
              aria-label="Learn more about our brand"
              data-testid="about-cta-button"
            >
              About Brand
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: Solutions */}
      <section
  id="solutions"
  className="relative w-full h-auto lg:h-[178vh] bg-black overflow-hidden"
>
  <div className="hidden lg:block pointer-events-none">
    <Image
      src="/assets/png/gradientline_bcg_1.png"
      alt=""
      width={1920}
      height={1080}
      className="absolute top-0 right-0 z-10 object-contain lg:w-full xl:w-full 2xl:w-full lg:-translate-x-[70px] xl:-translate-x-[70px] 2xl:-translate-x-[70px]"
      priority={false}
    />
  </div>
  <div className="
      max-w-[1200px] mx-auto
      px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-28
      pt-12 sm:pt-40 md:pt-50 lg:pt-65 xl:pt-80 2xl:pt-90
      pb-40 sm:pb-40 md:pb-50 
      text-white relative z-20 text-left
    ">
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-tight mb-20 max-w-xl text-left">
            Advanced Materials and <br />
            Integrative Solutions
          </h1>

          <div className="space-y-30 text-left">
            {SOLUTIONS_DATA.map((solution) => (
              <SolutionItem key={solution.id} solution={solution} />
            ))}
          </div>
        </div>
</section>


      {/* Section 4: Hero Banner */}
      <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
        <VideoBackground
          src="/assets/videos/2055336_Soap_Bubble_1280x720.mp4"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="relative z-20 text-center max-w-6xl mx-auto px-4">
          <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl leading-tight font-light">
            Revolutionizing luminescence to <br className="hidden sm:block" />
            power the next generation of <br className="hidden sm:block" />
            technology
          </h1>
        </div>
      </section>
    </main>
  );
};

export default Technology;