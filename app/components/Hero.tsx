import Sponsors from "./partner";

export default function HackathonHero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      id="about"
    >
      {/* BACKGROUND IMAGE (MOVED TO RIGHT) */}
      <img
        src="assets/Gemini_Generated_Image_kcckoikcckoikcck12345.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          objectPosition: "85% center", // ✅ MOVE IMAGE TO RIGHT
        }}
      />

      {/* BOTTOM FADE-OUT OVERLAY */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(0,0,0,0) 0%,
              rgba(0,0,0,0) 75%,
              rgba(0,0,0,0.25) 88%,
              rgba(0,0,0,0.6) 95%,
              rgba(0,0,0,1) 100%
            )
          `,
        }}
      />

      {/* TOP ATMOSPHERIC VIGNETTE */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black via-black/60 to-transparent z-0" />

      {/* SUBTLE DEPTH LINES */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.02) 50px, rgba(255,255,255,0.02) 51px)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* LEFT */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
              <span className="text-xs text-white/70 font-medium">
                COIMBATORE
              </span>
            </div>

            <h1 className="text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter">
              ZYPH
            </h1>

            <div className="w-20 h-0.5 bg-white/30" />

            <p className="text-xl text-white font-extrabold max-w-md">
              24-Hour Sustainable Development Hackathon
            </p>

            <div className="pt-4">
              <img
                src="https://www.texus.io/_next/image?url=%2Fassets%2Fdeptpics%2Fsrm_white_logowebp.webp&w=256&q=75"
                alt="SRM Logo"
                className="w-40 opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>

            <Sponsors />
          </div>

          {/* RIGHT */}
          <div className="space-y-12 lg:pt-8">
            <div className="space-y-4">
              <p className="text-lg text-white/70 leading-relaxed">
                Code for the planet. Build solutions that address the UN&apos;s 17
                Sustainable Development Goals. Join 100+ innovators in creating
                technology that makes a real-world impact.
              </p>
              <p className="text-base text-white/50 leading-relaxed">
                From climate action to zero hunger, quality education to clean
                energy—your code can change lives.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                ["24hrs", "Non-stop Innovation"],
                ["17 SDGs", "Global Impact Areas"],
                ["Real Impact", "Solutions that Matter"],
                ["Top Mentors", "Industry Experts"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="space-y-2 border-l border-white/20 pl-4 backdrop-blur-sm bg-white/5 p-3 rounded-r"
                >
                  <div className="text-3xl font-bold text-white">{title}</div>
                  <div className="text-sm text-white/50">{desc}</div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="/register"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
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
