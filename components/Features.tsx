"use client";
import React from "react";
import Image from "next/image";

export default function LampDemo() {
  return (
    <div className="bg-black min-h-screen">
      <div className="flex items-center justify-center w-full h-full mb-8">
        <Image
          src="https://kitpapa.net/softzap/wp-content/uploads/2024/04/Software-Hero-Image.webp"
          alt="Hero Image"
          height={720}
          width={1100}
          draggable={false}
          className="rounded-2xl object-cover h-auto w-auto max-w-full"
        />
      </div>

      <div className="text-center text-gray-300 mb-8 px-4">
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          Used by 100+ high-growth teams
        </h2>
      </div>

      <div className="flex flex-wrap gap-8 items-center justify-center py-4 px-4">
        <Image
          src="https://kitpapa.net/softzap/wp-content/uploads/2024/04/Software-Logo-6.webp"
          alt="Company Logo 1"
          width={200}
          height={70}
          className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
        />
        <Image
          src="https://kitpapa.net/softzap/wp-content/uploads/2024/04/Software-Logo-6.webp"
          alt="Company Logo 2"
          width={200}
          height={70}
          className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
        />
        <Image
          src="https://kitpapa.net/softzap/wp-content/uploads/2024/04/Software-Logo-6.webp"
          alt="Company Logo 3"
          width={200}
          height={70}
          className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
        />
        <Image
          src="https://kitpapa.net/softzap/wp-content/uploads/2024/04/Software-Logo-6.webp"
          alt="Company Logo 4"
          width={200}
          height={70}
          className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
        />
        <Image
          src="https://kitpapa.net/softzap/wp-content/uploads/2024/04/Software-Logo-6.webp"
          alt="Company Logo 5"
          width={200}
          height={70}
          className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
        />
      </div>
    </div>
  );
}
