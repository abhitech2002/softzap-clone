"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { BsGraphUpArrow } from "react-icons/bs";
import Image from "next/image";

export default function FeatureCard() {
  return (
    <section className="bg-black">
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-lg font-normal leading-6 text-white inline-block mb-4">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-3 px-4 ring-1 ring-white/10 ">
            <span>Why Outgrid?</span>
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

        <h1 className="text-5xl font-bold text-center mb-5 mt-5">
          Experience the power of automation <br />
          and watch your revenue rise
        </h1>

        <div className="flex flex-row space-x-4">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-10 border">
              <CardItem translateZ="100" className="">
                <BsGraphUpArrow className="text-3xl mb-5" />
              </CardItem>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Higher Conversion Rate
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Gravida integer porttitor auctor aenean vitae eget vitae.
                Pharetra suspendisse ullamcorper nisl utuis corem statis tuos
                coranets.
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-10 border">
              <CardItem translateZ="100" className="">
                <BsGraphUpArrow className="text-3xl mb-5" />
              </CardItem>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Higher Conversion Rate
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Gravida integer porttitor auctor aenean vitae eget vitae.
                Pharetra suspendisse ullamcorper nisl utuis corem statis tuos
                coranets.
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-10 border">
              <CardItem translateZ="100" className="">
                <BsGraphUpArrow className="text-3xl mb-5" />
              </CardItem>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Higher Conversion Rate
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Gravida integer porttitor auctor aenean vitae eget vitae.
                Pharetra suspendisse ullamcorper nisl utuis corem statis tuos
                coranets.
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </section>
  );
}
