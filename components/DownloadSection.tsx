"use client";
import Image from "next/image";
import { useState } from "react";
import { Lens } from "./ui/lens";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { motion } from "framer-motion";

export default function DownloadSection() {
  const [hovering, setHovering] = useState(false);

  return (
    <section className="bg-black py-12 mx-auto p-10">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start bg-black mt-4 space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Left section */}
        <div className="flex flex-col items-start lg:w-2/3 mb-6 lg:mb-0 mt-10 px-4 lg:px-0">
          <button className="bg-slate-800 group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-lg font-semibold leading-6 text-white inline-block mb-4 transition duration-300 ease-in-out hover:scale-105">
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

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-left mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            Manage your leadgen efforts, anywhere
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-neutral-400 mb-8">
            Hendrerit fames tortor sociis pharetra porttitor id. Purus blandit
            scelerisque viverra libero.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="flex items-center justify-center px-4 py-2 rounded-md border border-black bg-white text-black text-sm transition duration-200 hover:shadow-lg hover:scale-105">
              <FaApple className="mr-2 text-4xl" />
              <span>
                Download on the <br />
                <span className="font-bold">Apple Store</span>
              </span>
            </button>
            <button className="flex items-center justify-center px-4 py-2 rounded-md border border-black bg-white text-black text-sm transition duration-200 hover:shadow-lg hover:scale-105">
              <FaGooglePlay className="mr-2 text-4xl" />
              <span>
                Get it on <br />
                <span className="font-bold">Google Play</span>
              </span>
            </button>
          </div>
        </div>

        {/* Right section */}
        <div className="w-full lg:w-1/3 flex flex-col items-start px-4 lg:px-0">
          <div className="w-full relative rounded-3xl overflow-hidden max-w-md mx-auto bg-gradient-to-r from-[#1D2235] to-[#121318] p-8 my-10">
            <div className="relative z-10">
              <Lens hovering={hovering} setHovering={setHovering}>
                <Image
                  src="https://kitpapa.net/softzap/wp-content/uploads/2024/04/Software-Available-Image.webp"
                  alt="image"
                  width={500}
                  height={500}
                  className="rounded-2xl"
                />
              </Lens>
              <motion.div
                animate={{
                  filter: hovering ? "blur(2px)" : "blur(0px)",
                }}
                className="py-4 relative z-20"
              >
                <h2 className="text-white text-2xl text-left font-bold">
                  Apple Vision Pro
                </h2>
                <p className="text-neutral-200 text-left mt-4">
                  The all-new Apple Vision Pro was the best thing that happened
                  around 8 months ago, not anymore.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
