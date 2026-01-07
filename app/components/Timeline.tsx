"use client";

import { Download, ArrowRight } from "lucide-react";

export default function HackathonTimeline() {
  const phases = [
    {
      phase: 1,
      title: "Problem Selection",
      subtitle: "Teams Choose an SDG Problem Statement",
      deliverables: [
        "Problem understanding doc",
        "SDG alignment justification",
        "Proposed solution overview",
      ],
      evaluation: [
        "Clarity of problem framing",
        "Correct SDG mapping",
        "Social relevance",
      ],
    },
    {
      phase: 2,
      title: "Research & Design",
      subtitle: "Validation Phase (Online)",
      deliverables: [
        "Data sources/datasets",
        "System architecture",
        "Ethical & accessibility considerations",
      ],
      evaluation: [
        "Research depth",
        "Realistic assumptions",
        "Innovation quality",
      ],
    },
    {
      phase: 3,
      title: "Prototype Development",
      subtitle: "Prototype Readiness (Online)",
      deliverables: [
        "Working prototype/simulation",
        "Impact metrics definition",
        "Deployment & scalability plan",
      ],
      evaluation: [
        "Technical credibility",
        "SDG impact measurement",
        "Execution readiness",
      ],
    },
    {
      phase: 4,
      title: "Grand Finale",
      subtitle: "Offline Event (12–24 Hours)",
      deliverables: [
        "Final iteration & polish",
        "Mentor check-ins",
        "Live demos",
        "Final pitch to jury",
      ],
      evaluation: [
        "End-to-end solution quality",
        "Demo stability",
        "Deployability",
        "Impact articulation",
      ],
    },
  ];

  return (
    <section
      id="roadmap"
      className="relative min-h-screen py-24 sm:py-32 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-cover
          bg-[position:70%_center]
          lg:bg-center
        "
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom,
              rgba(0,0,0,1) 0%,
              rgba(0,0,0,0.65) 18%,
              rgba(0,0,0,0.35) 30%,
              rgba(0,0,0,0.15) 42%,
              rgba(0,0,0,0) 55%,
              rgba(0,0,0,0) 65%,
              rgba(0,0,0,0.15) 75%,
              rgba(0,0,0,0.35) 85%,
              rgba(0,0,0,0.65) 92%,
              rgba(0,0,0,1) 100%
            ),
            url('assets/Gemini_Generated_Image_xpiu6cxpiu6cxpiu.png')
          `,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* HEADER */}
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-4">
            Journey to Impact
          </h2>
          <p className="text-base sm:text-xl text-white/50">
            Navigate through 4 phases from idea to implementation
          </p>
        </div>

        {/* TIMELINE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {phases.map((phase, index) => (
            <div key={index} className="relative group">
              <div
                className={`relative ${
                  index % 2 === 0 ? "lg:mt-[280px]" : "lg:mb-[280px]"
                }`}
              >
                <div className="flex justify-center mb-4">
                  <span className="px-4 py-1.5 bg-white text-black text-xs sm:text-sm font-bold rounded-full">
                    PHASE {phase.phase}
                  </span>
                </div>

                <div className="p-5 sm:p-6 rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-white/50">
                    {phase.subtitle}
                  </p>

                  {/* DETAILS
                      - Mobile: always visible
                      - Desktop: visible only on hover */}
                  <div
                    className="
                      mt-4 space-y-4
                      lg:max-h-0 lg:opacity-0 lg:overflow-hidden
                      lg:group-hover:max-h-[500px]
                      lg:group-hover:opacity-100
                      transition-all duration-500 ease-out
                    "
                  >
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-white/60 mb-2">
                        Deliverables
                      </h4>
                      <ul className="space-y-1">
                        {phase.deliverables.map((d, i) => (
                          <li
                            key={i}
                            className="text-sm text-white/70 flex gap-2"
                          >
                            <span className="text-white/30">▸</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-white/60 mb-2">
                        Evaluation
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {phase.evaluation.map((e, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs rounded-lg bg-white/5 border border-white/10 text-white/60"
                          >
                            {e}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16 sm:mt-24">
          <a
            href="/register"
            className="group px-8 py-4 bg-white text-black font-bold rounded-full transition-all hover:scale-105 inline-flex items-center justify-center"
          >
            Register Now
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="assets/ZYPH _details.pdf"
            download
            className="group px-8 py-4 bg-black/60 backdrop-blur-sm text-white font-bold rounded-full border border-white/20 transition-all hover:scale-105 inline-flex items-center justify-center"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Details
          </a>
        </div>
      </div>
    </section>
  );
}
