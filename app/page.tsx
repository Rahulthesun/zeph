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

const Galaxy = dynamic(() => import("./components/galaxy"), {
  ssr: false,
});

function EnvironmentTransition({ image }: { image: string }) {
  return (
    <div
      className="
        relative w-full bg-cover bg-top z-30 pointer-events-none
        -mt-[25vh] h-[50vh]
        sm:-mt-[25vh] sm:h-[50vh]
      "
      style={{ backgroundImage: `url(${image})` }}
    />
  );
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);

    const onScroll = () => setScrollY(window.scrollY);
    const onResize = () => setWindowHeight(window.innerHeight);

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // 🌕 Moon parallax — DESKTOP SAME, MOBILE CLAMPED
  const moonTranslateY =
    windowHeight > 0
      ? window.innerWidth < 640
        ? Math.max(-20, 20 - (scrollY / windowHeight) * 40)
        : Math.max(-50, 50 - (scrollY / windowHeight) * 100)
      : 50;

  const titleOpacity =
    windowHeight > 0
      ? Math.max(0, Math.min(1, 1 - scrollY / (windowHeight * 0.5)))
      : 1;

  const titleTranslateY = scrollY * 0.3;

  return (
    <main className="w-full bg-black text-white overflow-x-hidden">

      {/* ===================== SPACE ===================== */}
      <section className="relative h-screen overflow-hidden bg-black">

        {/* Moon */}
        <div
          className="absolute inset-0 z-10 bg-cover bg-bottom transition-transform duration-100 ease-linear"
          style={{
            backgroundImage: "url('/assets/moon.png')",
            transform: `translateY(${moonTranslateY}%)`,
          }}
        />

        <Navbar />

        {/* HERO */}
        <div
          className="
            relative z-20 flex h-full flex-col items-center justify-center
            -mt-12 sm:-mt-32
          "
          style={{
            opacity: titleOpacity,
            transform: `translateY(${titleTranslateY}px)`,
          }}
        >
          <div className="relative">

            {/* Glow */}
            <h1
              className="
                absolute inset-0 font-black blur-3xl opacity-40
                text-[5rem] sm:text-[12rem]
              "
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              aria-hidden
            >
              ZYPH ’26
            </h1>

            {/* Main */}
            <h1
              className="
                relative font-black bg-clip-text text-transparent
                bg-gradient-to-b from-white via-white to-white/80
                text-[5rem] sm:text-[12rem]
              "
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                filter:
                  "drop-shadow(0 4px 8px rgba(0,0,0,0.8)) drop-shadow(0 0 20px rgba(255,255,255,0.3))",
              }}
            >
              ZYPH ’26
            </h1>
          </div>

          {/* Scroll indicator — MOBILE HIDDEN ONLY */}
          {/* <div className="absolute bottom-12 hidden sm:flex flex-col items-center gap-3">
            <span className="text-xs tracking-widest text-white/40">
              SCROLL
            </span>
            <div className="h-12 w-6 rounded-full border border-white/20 p-1">
              <div className="h-2 w-2 mx-auto rounded-full bg-white/40 animate-bounce" />
            </div>
          </div> */}
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
