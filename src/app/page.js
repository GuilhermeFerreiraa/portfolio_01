"use client";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import Image from "next/image";
import devgui from "../../public/dev-wave.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main
      className={`${
        darkMode ? "bg-gray-800" : "bg-white"
      } px-10 md:px-20 lg:px-40`}
    >
      <section className="h-screen min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons text-gray-800 dark:text-white">
            Guilherme
          </h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className={`${
                  darkMode ? "text-white" : "text-gray-800"
                } cursor-pointer text-2xl`}
              />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-4xl py-2 text-teal-600 font-medium md:text-6xl dark: text-teal-400">
            Guilherme Ferreira
          </h2>
          <h3 className="text-2xl text-gray-800 py-2 md:text-3xl dark:text-gray-200">
            Developer and designer.
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
            Freelancer providing services for programming and design content
            needs. Join me down below and let's get cracking!
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillTwitterCircle className="dark: text-white text-gray-800" />
          <AiFillLinkedin className="dark: text-white text-gray-800" />
          <AiFillYoutube className="dark: text-white text-gray-800" />
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
          <Image src={devgui} layout="fill" objectFit="cover" />
        </div>
      </section>

      <section className="pt-24">
        <div>
          <h3 className="text-3xl py-1">Services I offer</h3>
          <p className="text-md py-2 leading-8 text-gray-80">
            Since the beggining of my journey as a freelancer designer and
            developer, I've done remote work
            <span className="text-teal-500">Agencies</span> consulted for{" "}
            <span className="text-teal-500">startups</span> and collaborated
            with talented people to create digital products for both business
            and consumer use.
          </p>
          <p className="text-md py-2 leading-8 text-gray-80">
            I offer from a wide range of services, including brand design,
            programming, and teaching
          </p>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={design}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beatuful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">PhotoShop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={code} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beatuful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">PhotoShop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={consulting}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beatuful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">PhotoShop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1">Portfolio</h3>
          <p className="text-md py-2 leading-8 text-gray-80">
            Since the beggining of my journey as a freelancer designer and
            developer, I've done remote work
            <span className="text-teal-500">Agencies</span> consulted for{" "}
            <span className="text-teal-500">startups</span> and collaborated
            with talented people to create digital products for both business
            and consumer use.
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg: flex-wrap">
          <div className="basis-1/3 flex-1">
            <Image
              src={web1}
              className="rounded-lg object-cover"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={web2}
              className="rounded-lg object-cover"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={web3}
              className="rounded-lg object-cover"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={web4}
              className="rounded-lg object-cover"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={web5}
              className="rounded-lg object-cover"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={web6}
              className="rounded-lg object-cover"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
