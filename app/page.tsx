"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import Navbar from "./components/navbar";
import HackathonHero from "./components/Hero";
import HackathonTracks from "./components/Tracks";
import Timeline from "./components/Timeline";
import HackathonCountdown from "./components/counter";
import LocationDetails from "./components/location";
import Footer from "./components/footer";

const Galaxy = dynamic(() => import("./components/galaxy"), { ssr: false });

function EnvironmentTransition({ image }: { image: string }) {
  return (
    <div
      className="
        relative w-full pointer-events-none z-30
        h-[18vh] sm:h-[26vh] md:h-[34vh] lg:h-[50vh]
        -mt-[9vh] sm:-mt-[13vh] md:-mt-[17vh]
        bg-cover bg-center bg-no-repeat
      "
      style={{ backgroundImage: `url(${image})` }}
    />
  );
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState(0);

  useEffect(() => {
    const update = () => setVh(window.innerHeight);
    update();

    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", update);

    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  const moonTranslate =
    vh > 0
      ? Math.max(
          -20,
          20 - (scrollY / vh) * (window.innerWidth < 1024 ? 25 : 90)
        )
      : 0;

  const titleOpacity =
    vh > 0 ? Math.max(0, 1 - scrollY / (vh * 0.45)) : 1;

  return (
    <main className="w-full bg-black text-white overflow-x-hidden">
      {/* ===================== SPACE ===================== */}
      <section
        className="
          relative overflow-hidden bg-black
          h-[78vh] sm:h-[84vh] md:h-[90vh]
          lg:h-screen
        "
      >
        {/* Moon */}
        <div
          className="
            absolute inset-0 z-0
            bg-no-repeat bg-center
            bg-[length:205%]
            sm:bg-[length:225%]
            md:bg-[length:150%]
            lg:bg-cover
            transition-transform duration-100 ease-linear
          "
          style={{
            backgroundImage: "url('/assets/moon.png')",
            transform: `translateY(${moonTranslate}%)`,
          }}
        />

        <Navbar />

        {/* HERO */}
        <div
          className="
            relative z-10 flex h-full flex-col
            items-center justify-start
            pt-20 sm:pt-24 md:pt-28
            lg:pt-0 lg:justify-center
            px-4 text-center
          "
          style={{ opacity: titleOpacity }}
        >
          <div className="relative select-none">
            <h1
  className="
    absolute inset-x-0 top-8 sm:top-12 md:top-16
    font-black blur-2xl opacity-40
    text-[clamp(3.5rem,14vw,12rem)]
  "
  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
  aria-hidden
>
  ZYPH ’26
</h1>


            <h1
              className="
                relative font-black
                text-[clamp(3.5rem,14vw,12rem)]
                bg-clip-text text-transparent
                bg-gradient-to-b from-white via-white to-white/80
              "
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                filter:
                  "drop-shadow(0 4px 10px rgba(0,0,0,0.85)) drop-shadow(0 0 18px rgba(255,255,255,0.3))",
              }}
            >
              ZYPH ’26
            </h1>
          </div>
        </div>
      </section>

      {/* ===== SPACE → SKY TRANSITION ===== */}
      <EnvironmentTransition image="/assets/space-sky.png" />

      {/* ================= SKY / LAND ================= */}
      <section className="relative bg-[#0a1a2f] overflow-hidden">
        <HackathonHero />
        <HackathonTracks />
        <Timeline />
        <HackathonCountdown />
      </section>

      {/* ================= SEA ================= */}
      <section className="relative bg-[#020d14] overflow-hidden">
        <LocationDetails />
        <Footer />
      </section>
    </main>
  );
}
