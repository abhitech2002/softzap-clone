import React from "react";
import { Cover } from "@/components/ui/cover";

const Hero: React.FC = () => {
  return (
    <section className="bg-black from-blue-500 to-purple-600 text-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="h-auto w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center py-12">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_90%)]"></div>

        <div className="relative z-20 text-center max-w-3xl md:max-w-5xl">
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-lg font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-5 ring-1 ring-white/10">
              <span>New AI Automated LeadGen</span>
              <svg
                fill="none"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            Grow your business with our <Cover>lead generation software</Cover>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-400 mb-8">
            Amet convallis tempus lobortis dui. Nec dapibus pharetra ipsum
            commodo tristique viverra.
          </p>

          <button className="px-8 py-3 md:px-12 md:py-4 rounded-full bg-white font-bold text-black tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
            Start Free Trial
          </button>

          <p className="text-sm md:text-lg font-semibold text-neutral-400 mt-5">
            No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
