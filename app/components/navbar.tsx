"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-2 pt-5" : "py-3 sm:py-4"
        }`}
      >
        <div className="flex justify-center items-center px-3 sm:px-6 lg:px-8 w-full mx-auto relative">

          {/* LOGO — UNTOUCHED */}
          <Link
            href="/"
            className="group flex items-center gap-2 sm:gap-3 z-50 absolute left-3 sm:left-6 lg:left-8"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-white/40 blur-md group-hover:opacity-70 transition-opacity" />
              <div className="relative flex w-20 h-20 items-center justify-center rounded-full bg-gradient-to-br from-gray-900 to-black ring-1 ring-white/20">
                <img
                  src="assets/logo.jpeg"
                  alt="ZYPH Logo"
                  className="w-full h-full rounded-full p-1 bg-gradient-to-br from-black to-gray-900"
                />
              </div>
            </div>
          </Link>

          {/* NAVBAR PILL */}
          <div className="relative max-w-3xl w-full flex justify-center">
            {/* Glow */}
            <div className="absolute -inset-[2px] rounded-full opacity-40">
              <div className="absolute inset-0 rounded-full bg-white/30 blur-xl animate-pulse" />
            </div>

            <div
              className={`relative rounded-full border border-white/20 backdrop-blur-xl transition-all duration-500
              ${
                isScrolled
                  ? "bg-black/70 shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
                  : "bg-black/40 shadow-[0_16px_32px_rgba(59,130,246,0.25)]"
              }`}
            >
              <div
                className={`relative flex items-center justify-between lg:justify-center gap-3 transition-all duration-300
                ${isScrolled ? "px-4 py-2" : "px-5 py-3 sm:px-6 sm:py-4"}`}
              >
                {/* DESKTOP NAV (UNCHANGED) */}
                <nav className="hidden lg:flex items-center gap-1">
                  {[
                    { url: "/#roadmap", label: "Roadmap" },
                    { url: "/#about", label: "About" },
                    { url: "/#venue", label: "Venue" },
                    { url: "/#footer", label: "Contact" },
                  ].map((item) => (
                    <a
                      key={item.url}
                      href={item.url}
                      className="px-4 py-2 text-sm font-medium rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition"
                    >
                      {item.label}
                    </a>
                  ))}

                  <a
                    href="/register"
                    className="ml-2 rounded-xl bg-white px-6 py-2 text-sm font-semibold text-black hover:scale-105 transition"
                  >
                    Register Now
                  </a>
                </nav>

                {/* MOBILE MENU BUTTON (IMPROVED TAP AREA) */}
                <button
                  className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 text-white hover:bg-white/20 transition"
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>
          </div>
        </div>

        {/* MOBILE MENU PANEL */}
        {isMobileMenuOpen && (
          <>
            <div className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />

            <div className="lg:hidden fixed top-20 left-0 right-0 z-50 px-4">
              <div className="rounded-2xl bg-black/85 border border-white/15 backdrop-blur-xl p-6">
                <nav className="flex flex-col gap-4">
                  {[
                    { url: "/#roadmap", label: "Roadmap" },
                    { url: "/#about", label: "About" },
                    { url: "/#venue", label: "Venue" },
                    { url: "/#footer", label: "Contact" },
                  ].map((item, i) => (
                    <a
                      key={item.url}
                      href={item.url}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white/80 text-base py-3 px-4 rounded-xl hover:bg-white/10 transition"
                      style={{
                        animation: "slideInFromTop 0.3s ease-out forwards",
                        animationDelay: `${i * 80}ms`,
                      }}
                    >
                      {item.label}
                    </a>
                  ))}

                  <a
                    href="/register"
                    className="mt-2 rounded-xl bg-white py-3 text-center font-semibold text-black hover:scale-105 transition"
                  >
                    Register Now
                  </a>
                </nav>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}
