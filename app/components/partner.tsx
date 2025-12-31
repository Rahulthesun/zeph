"use client";


import React from 'react';
import { Building2, GraduationCap, Lightbulb, Rocket, Globe, Users } from 'lucide-react';

const partners = [
  {
    icon: Building2,
    name: 'MIT Innovation Lab',
    color: 'from-blue-500 to-cyan-500',
    bgGlow: 'bg-blue-500'
  },
  {
    icon: GraduationCap,
    name: 'Stanford Tech Hub',
    color: 'from-purple-500 to-pink-500',
    bgGlow: 'bg-purple-500'
  },
  {
    icon: Lightbulb,
    name: 'Google for Startups',
    color: 'from-green-500 to-emerald-500',
    bgGlow: 'bg-green-500'
  },
  {
    icon: Rocket,
    name: 'Y Combinator',
    color: 'from-orange-500 to-red-500',
    bgGlow: 'bg-orange-500'
  },
  {
    icon: Globe,
    name: 'Tech Innovators',
    color: 'from-teal-500 to-cyan-500',
    bgGlow: 'bg-teal-500'
  },
  {
    icon: Users,
    name: 'Startup Alliance',
    color: 'from-indigo-500 to-blue-500',
    bgGlow: 'bg-indigo-500'
  }
];

export default function PartnerInstitutions() {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Partner Institutions
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg">
            In collaboration with leading universities and innovation hubs
          </p>
        </div>

        {/* Partners Infinite Scroll */}
        <div className="relative">
          <div className="flex animate-scroll gap-8">
            {/* First Set */}
            {partners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-72 group"
                >
                  <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-slate-700 transition-all duration-500 hover:scale-105 overflow-hidden h-64">
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 ${partner.bgGlow} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
                      {/* Icon Container */}
                      <div className={`bg-gradient-to-br ${partner.color} p-6 rounded-2xl mb-6 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110`}>
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                      
                      {/* Partner Name */}
                      <h3 className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors">
                        {partner.name}
                      </h3>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full"></div>
                  </div>
                </div>
              );
            })}

            {/* Second Set (Duplicate for seamless loop) */}
            {partners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-72 group"
                >
                  <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-slate-700 transition-all duration-500 hover:scale-105 overflow-hidden h-64">
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 ${partner.bgGlow} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
                      {/* Icon Container */}
                      <div className={`bg-gradient-to-br ${partner.color} p-6 rounded-2xl mb-6 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110`}>
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                      
                      {/* Partner Name */}
                      <h3 className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors">
                        {partner.name}
                      </h3>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full"></div>
                  </div>
                </div>
              );
            })}

            {/* Third Set (For extra smooth loop) */}
            {partners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <div
                  key={`third-${index}`}
                  className="flex-shrink-0 w-72 group"
                >
                  <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-slate-700 transition-all duration-500 hover:scale-105 overflow-hidden h-64">
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 ${partner.bgGlow} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
                      {/* Icon Container */}
                      <div className={`bg-gradient-to-br ${partner.color} p-6 rounded-2xl mb-6 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110`}>
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                      
                      {/* Partner Name */}
                      <h3 className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors">
                        {partner.name}
                      </h3>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-288px * 6 - 2rem * 6));
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}