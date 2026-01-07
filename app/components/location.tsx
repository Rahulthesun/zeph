import React, { useState, useEffect } from "react";
import { MapPin, Calendar, Users, Navigation } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
  "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&q=80",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80",
];

export default function LocationDetails() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentImage((p) => (p + 1) % images.length),
      3500
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="venue"
      className="relative bg-transparent py-20 sm:py-32 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(
                to bottom,
                rgba(0,0,0,0.9) 0%,
                rgba(0,0,0,0.6) 18%,
                rgba(0,0,0,0.25) 32%,
                rgba(0,0,0,0) 45%,
                rgba(0,0,0,0) 60%,
                rgba(0,0,0,0.25) 75%,
                rgba(0,0,0,0.6) 88%,
                rgba(0,0,0,0.9) 100%
              ),
              linear-gradient(
                rgba(0,0,0,0.35),
                rgba(0,0,0,0.35)
              ),
              url('assets/Gemini_Generated_Image_y9d43ky9d43ky9d4.png')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* HEADER */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-5">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-[11px] sm:text-xs text-white/60 font-semibold tracking-widest uppercase">
              Venue
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6">
            Location & Event Details
          </h2>

          <p className="text-sm sm:text-lg text-white/50 max-w-xl mx-auto">
            Where innovation meets infrastructure at SRM Institute
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 items-start">
          {/* IMAGE CAROUSEL */}
          <div className="lg:col-span-3 relative h-[280px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden border border-white/10">
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={img}
                  alt="Venue"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* INDICATORS */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all ${
                    index === currentImage
                      ? "w-8 bg-white"
                      : "w-1 bg-white/30"
                  }`}
                />
              ))}
            </div>

            <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-xl border border-white/20 text-xs sm:text-sm font-semibold text-white">
              Premium Venue
            </div>
          </div>

          {/* INFO */}
          <div className="lg:col-span-2 space-y-5 sm:space-y-6">
            {/* MAIN CARD */}
            <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    SRM Institute
                  </h3>
                  <p className="text-xs sm:text-sm text-white/50">
                    Chennai, Ramapuram Campus
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3 text-white/60">
                  <Calendar className="w-4 h-4" />
                  <span>February 14–15, 2025</span>
                </div>

                <div className="flex items-center gap-3 text-white/60">
                  <Users className="w-4 h-4" />
                  <span>500+ Innovators Expected</span>
                </div>
              </div>

              <button className="mt-6 w-full flex items-center justify-center gap-3 px-6 py-4 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-all">
                <Navigation className="w-5 h-5" />
                Get Directions
              </button>
            </div>

            {/* QUICK INFO */}
            <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
              <h4 className="text-base sm:text-lg font-bold text-white mb-4">
                What’s Included
              </h4>

              <div className="space-y-3 text-xs sm:text-sm text-white/50">
                {[
                  "High-speed WiFi & power outlets",
                  "Meals & refreshments provided",
                  "24/7 mentorship & support",
                  "Networking opportunities",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
