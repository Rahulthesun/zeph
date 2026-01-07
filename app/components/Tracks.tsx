"use client";

import { useState, useEffect, useRef } from "react";

export default function HackathonTracks() {
  const [visibleTracks, setVisibleTracks] = useState<number[]>([]);
  const trackRefs = useRef<(HTMLDivElement | null)[]>([]);

  const tracks = [
    {
      sdg: "SDG 3",
      title: "Good Health & Well-being",
      subtitle: "Low-Bandwidth Cancer Risk Awareness",
      description:
        "Privacy-first system enabling symptom-based cancer risk awareness and screening guidance for underserved populations",
      image:
        "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/02/SDG-3-800x800.gif",
    },
    {
      sdg: "SDG 4",
      title: "Quality Education",
      subtitle: "Accessible Quantum Education",
      description:
        "Learning framework for blind and deaf learners to access advanced quantum concepts through inclusive design",
      image:
        "https://www.unoosa.org/images/ourwork/SDGs/E_SDG_goals_icons-individual-rgb-04.png",
    },
    {
      sdg: "SDG 10",
      title: "Reduced Inequalities",
      subtitle: "Disability-Inclusive Access Intelligence",
      description:
        "Breaking systemic barriers for disabled individuals to access public services, infrastructure, and emergency systems",
      image:
        "https://www.unoosa.org/images/ourwork/SDGs/E_SDG_goals_icons-individual-rgb-10.png",
    },
    {
      sdg: "SDG 13",
      title: "Climate Action",
      subtitle: "Invasive Aquatic Plant Control",
      description:
        "Non-toxic systems to control invasive species growth and monitor ecosystem recovery in freshwater bodies",
      image:
        "https://www.nrcmec.org/NRCM-SDG/SDG_13_Climate_Action.png",
    },
    {
      sdg: "SDG 14",
      title: "Life Below Water",
      subtitle: "Geo-Biodiversity Intelligence",
      description:
        "Satellite-based platform using geospatial data to track species presence and habitat health across ecosystems",
      image:
        "https://s3-eu-west-1.amazonaws.com/snv-wp/wp-content/uploads/sites/63/2018/10/02134411/E_SDG-goals_icons-individual-cmyk-14-1080x1080.jpg",
    },
    {
      sdg: "SDG 17",
      title: "Partnerships for the Goals",
      subtitle: "Collaborative SDG Action Platform",
      description:
        "Cross-sector platform enabling resource sharing, partnerships, and impact tracking across SDG initiatives",
      image:
        "https://s3-eu-west-1.amazonaws.com/snv-wp/wp-content/uploads/sites/63/2018/10/02133730/E_SDG-goals_icons-individual-cmyk-17-1080x1080.jpg",
    },
  ];

  useEffect(() => {
    const observers = trackRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleTracks((prev) =>
                prev.includes(index) ? prev : [...prev, index]
              );
            }, index * 120);
          }
        },
        { threshold: 0.1 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      id="tracks"
      className="relative min-h-screen py-20 sm:py-24 overflow-hidden"
    >
      {/* BACKGROUND (SHIFT MORE RIGHT ON MOBILE) */}
      <div
        className="
          absolute inset-0
          bg-cover
          bg-[position:69%_top]
          sm:bg-[position:75%_top]
          lg:bg-[position:65%_top]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom,
              rgba(0,0,0,1) 0%,
              rgba(0,0,0,0.6) 15%,
              rgba(0,0,0,0) 30%,
              rgba(0,0,0,0) 70%,
              rgba(0,0,0,0.6) 85%,
              rgba(0,0,0,1) 100%
            ),
            url('assets/space_sequence_2.jpg')
          `,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row-reverse gap-14 lg:gap-20 items-center min-h-[80vh]">
          {/* RIGHT – SDG GRID */}
          <div className="w-full lg:w-1/2 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-2 gap-4 sm:gap-6">
            {tracks.map((track, index) => (
              <div
                key={index}
                ref={(el) => {
  trackRefs.current[index] = el;
}}
                className={`transition-all duration-700 ${
                  visibleTracks.includes(index)
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="relative group">
                  <img
                    src={track.image}
                    alt={track.sdg}
                    className="w-full aspect-square rounded-xl sm:rounded-2xl border border-white/10 object-cover transition-all duration-300 group-hover:scale-105 group-hover:border-white/30"
                  />
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* LEFT – TEXT */}
          <div className="w-full lg:w-1/2 space-y-10 sm:space-y-12">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white">
                Tracks
              </h2>
              <p className="text-sm sm:text-base text-white/70 max-w-xl leading-relaxed">
                Choose from six SDG-aligned challenges. Build solutions that
                address real global problems and create lasting impact.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {tracks.map((track, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    visibleTracks.includes(index)
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-10 opacity-0"
                  }`}
                >
                  <div className="group">
                    <span className="inline-block px-3 py-1 mb-2 text-xs font-bold rounded-full bg-white/5 border border-white/20 text-white/80 group-hover:bg-white/10">
                      {track.sdg}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {track.title}
                    </h3>
                    <h4 className="text-base sm:text-lg text-white/60 mb-2">
                      {track.subtitle}
                    </h4>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {track.description}
                    </p>
                  </div>

                  {index < tracks.length - 1 && (
                    <div className="mt-6 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
