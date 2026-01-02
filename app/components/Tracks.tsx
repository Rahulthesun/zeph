import { useState } from "react";
import { FocusCards } from "../components/ui/focus-cards";

export default function HackathonTracks() {
  const [showAll, setShowAll] = useState(false);

  const tracks = [
    {
      sdg: "SDG 1",
      title: "No Poverty",
      subtitle: "Economic Empowerment Platform",
      description:
        "Digital solutions to connect underserved communities with financial resources, job opportunities, and economic support systems",
      image:
        "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-01-1024x1024.png",
    },
    {
      sdg: "SDG 2",
      title: "Zero Hunger",
      subtitle: "Smart Food Distribution System",
      description:
        "Technology-driven solutions to optimize food distribution, reduce waste, and ensure food security for vulnerable populations",
      image:
        "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-02-1024x1024.png",
    },
    {
      sdg: "SDG 3",
      title: "Good Health & Well-being",
      subtitle: "Low-Bandwidth Cancer Risk Awareness",
      description:
        "Privacy-first system enabling symptom-based cancer risk awareness and screening guidance for underserved populations",
      image:
        "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-03-1024x1024.png",
    },
    {
      sdg: "SDG 4",
      title: "Quality Education",
      subtitle: "Accessible Quantum Education",
      description:
        "Learning framework for blind and deaf learners to access advanced quantum concepts through inclusive design",
      image:
        "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-04-1024x1024.png",
    },
    {
      sdg: "SDG 5",
      title: "Gender Equality",
      subtitle: "Women Safety & Empowerment Network",
      description:
        "Technology solutions to enhance women's safety, provide legal support, and create equal opportunities in education and employment",
      image:
        "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-05-1024x1024.png",
    },
    {
      sdg: "SDG 6",
      title: "Clean Water & Sanitation",
      subtitle: "Water Quality Monitoring System",
      description:
        "IoT-based platform for real-time water quality monitoring and management in underserved communities",
      image:
        "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-06-1024x1024.png",
    },
    {
      sdg: "SDG 7",
      title: "Affordable & Clean Energy",
      subtitle: "Renewable Energy Optimization",
      description:
        "Smart grid solutions to optimize renewable energy distribution and reduce energy costs for low-income households",
      image:
        "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-07-1024x1024.png",
    },
    {
      sdg: "SDG 8",
      title: "Decent Work & Economic Growth",
      subtitle: "Skills Development & Job Matching Platform",
      description:
        "AI-powered platform connecting job seekers with training opportunities and employment based on skills and aspirations",
      image:
        "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-08-1024x1024.png",
    },
    {
      sdg: "SDG 9",
      title: "Industry, Innovation & Infrastructure",
      subtitle: "Smart Infrastructure Monitoring",
      description:
        "Technology solutions for monitoring and maintaining critical infrastructure in developing regions",
      image:
        "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-09-1024x1024.png",
    },
    {
      sdg: "SDG 10",
      title: "Reduced Inequalities",
      subtitle: "Disability-Inclusive Access Intelligence",
      description:
        "Breaking systemic barriers for disabled individuals to access public services, infrastructure, and emergency systems",
      image:
        "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-10-1024x1024.png",
    },
    {
      sdg: "SDG 11",
      title: "Sustainable Cities & Communities",
      subtitle: "Smart Urban Planning Tools",
      description:
        "Data-driven solutions for sustainable urban development, traffic management, and community resource optimization",
      image:
        "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-11-1024x1024.png",
    },
    {
      sdg: "SDG 12",
      title: "Responsible Consumption & Production",
      subtitle: "Circular Economy Platform",
      description:
        "Digital marketplace connecting consumers with sustainable products and facilitating waste reduction and recycling",
      image:
        "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-12-1024x1024.png",
    },
    {
      sdg: "SDG 13",
      title: "Climate Action",
      subtitle: "Invasive Aquatic Plant Control",
      description:
        "Non-toxic systems to control invasive species growth and monitor ecosystem recovery in freshwater bodies",
      image:
        "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-13-1024x1024.png",
    },
    {
      sdg: "SDG 14",
      title: "Life Below Water",
      subtitle: "Geo-Biodiversity Intelligence",
      description:
        "Satellite-based platform using geospatial data to track species presence and habitat health across ecosystems",
      image:
        "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-14-1024x1024.png",
    },
    {
      sdg: "SDG 15",
      title: "Life on Land",
      subtitle: "Forest Conservation & Wildlife Protection",
      description:
        "AI-powered monitoring system for tracking deforestation, wildlife populations, and ecosystem health",
      image:
        "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-15-1024x1024.png",
    },
    {
      sdg: "SDG 16",
      title: "Peace, Justice & Strong Institutions",
      subtitle: "Legal Aid & Justice Access Platform",
      description:
        "Digital platform providing legal resources, support, and access to justice for marginalized communities",
      image:
        "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-16-1024x1024.png",
    },
    {
      sdg: "SDG 17",
      title: "Partnerships for the Goals",
      subtitle: "Collaborative SDG Action Platform",
      description:
        "Cross-sector platform enabling resource sharing, partnerships, and impact tracking across SDG initiatives",
      image:
        "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-17-1024x1024.png",
    },
  ];

  const displayedTracks = showAll ? tracks : tracks.slice(0, 8);

  const cards = displayedTracks.map((track) => ({
    title: track.sdg,
    src: track.image,
    content: (
      <div className="space-y-3">
        <div className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-white/10 border border-white/30 text-white mb-2">
          {track.sdg}
        </div>
        <h3 className="text-2xl font-bold text-white mb-1">{track.title}</h3>
        <h4 className="text-lg text-white/80 font-medium mb-2">
          {track.subtitle}
        </h4>
        <p className="text-white/70 leading-relaxed text-sm">
          {track.description}
        </p>
      </div>
    ),
  }));

  return (
    <section
      className="relative min-h-screen py-24 overflow-hidden"
      id="tracks"
    >
      {/* Tracks Background */}
      <div
        className="absolute inset-0"
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
          backgroundSize: "cover",
          backgroundPosition: "73% top",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="space-y-12 mb-16">
          <div className="space-y-6 text-center">
            <h2 className="text-6xl lg:text-7xl font-black text-white leading-tight">
              Tracks
            </h2>
            <p className="text-sm text-white/70 leading-relaxed max-w-2xl mx-auto">
              Choose from {tracks.length} SDG-aligned challenges. Build
              solutions that address real global problems and create lasting
              impact.
            </p>
          </div>
        </div>

        <FocusCards cards={cards} />

        <div className="flex justify-center mt-12">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-full text-white font-medium transition-all duration-300 backdrop-blur-sm"
            >
              View All {tracks.length} Tracks
            </button>
          ) : (
            <button
              onClick={() => setShowAll(false)}
              className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-full text-white font-medium transition-all duration-300 backdrop-blur-sm"
            >
              View Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
