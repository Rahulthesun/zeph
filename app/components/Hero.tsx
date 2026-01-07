import Sponsors from "./partner";

export default function HackathonHero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* BACKGROUND IMAGE (SHIFT MORE RIGHT ON MOBILE) */}
      <img
        src="assets/Gemini_Generated_Image_kcckoikcckoikcck12345.jpg"
        alt=""
        className="
          absolute inset-0 w-full h-full object-cover
          object-[67%_center]        /* MOBILE */
          sm:object-[92%_center]    /* SMALL SCREENS */
          lg:object-[80%_center]    /* DESKTOP */
        "
      />

      {/* BOTTOM FADE */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(0,0,0,0) 0%,
              rgba(0,0,0,0) 65%,
              rgba(0,0,0,0.35) 82%,
              rgba(0,0,0,0.7) 92%,
              rgba(0,0,0,1) 100%
            )
          `,
        }}
      />

      {/* TOP VIGNETTE */}
      <div className="absolute inset-x-0 top-0 h-28 sm:h-32 lg:h-40 bg-gradient-to-b from-black via-black/60 to-transparent z-0" />

      {/* SUBTLE GRID */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 48px, rgba(255,255,255,0.02) 48px, rgba(255,255,255,0.02) 49px)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-24 sm:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* LEFT */}
          <div className="space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
              <span className="text-xs text-white/70 font-medium">
                COIMBATORE
              </span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black text-white leading-none tracking-tighter">
              ZYPH
            </h1>

            <div className="w-16 sm:w-20 h-0.5 bg-white/30" />

            <p className="text-lg sm:text-xl text-white font-extrabold max-w-md">
              24-Hour Sustainable Development Hackathon
            </p>

            <div className="pt-2 sm:pt-4">
              <img
                src="https://www.texus.io/_next/image?url=%2Fassets%2Fdeptpics%2Fsrm_white_logowebp.webp&w=256&q=75"
                alt="SRM Logo"
                className="w-32 sm:w-40 opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>

            <Sponsors />
          </div>

          {/* RIGHT */}
          <div className="space-y-10 sm:space-y-12 lg:pt-8">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                Code for the planet. Build solutions that address the UN&apos;s 17
                Sustainable Development Goals. Join 100+ innovators in creating
                technology that makes a real-world impact.
              </p>
              <p className="text-sm sm:text-base text-white/50 leading-relaxed">
                From climate action to zero hunger, quality education to clean
                energy—your code can change lives.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                ["24hrs", "Non-stop Innovation"],
                ["17 SDGs", "Global Impact Areas"],
                ["Real Impact", "Solutions that Matter"],
                ["Top Mentors", "Industry Experts"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="space-y-1.5 border-l border-white/20 pl-4 backdrop-blur-sm bg-white/5 p-3 rounded-r"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    {title}
                  </div>
                  <div className="text-xs sm:text-sm text-white/50">
                    {desc}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 sm:pt-4">
              <a
                href="/register"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 sm:px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              >
                <span>Register Now</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
