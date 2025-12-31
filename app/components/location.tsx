"use client";

import React, { useState, useEffect } from "react";
import {
  MapPin,
  Calendar,
  Users,
  Wifi,
  Coffee,
  UserCheck,
  Trophy,
  Mail,
  Phone,
  Navigation,
  Award,
} from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
];

const facilities = [
  { icon: Wifi, label: "High-Speed WiFi", color: "from-blue-500/80 to-blue-700/80" },
  { icon: Coffee, label: "Food & Drinks", color: "from-amber-500/80 to-orange-600/80" },
  { icon: UserCheck, label: "Mentorship", color: "from-purple-500/80 to-purple-700/80" },
  { icon: Trophy, label: "Prizes", color: "from-indigo-500/80 to-blue-700/80" },
];

export default function LocationDetails() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentImage((p) => (p + 1) % images.length),
      2600
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Location & Details
          </h1>
          <p className="text-slate-400 text-sm mt-2">
            Venue, facilities, and essentials at a glance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT – GLASS IMAGE CAROUSEL */}
          <div className="relative h-[560px] rounded-3xl overflow-hidden border border-white/20 backdrop-blur-xl bg-white/5 shadow-2xl shadow-teal-900/40 sticky top-6">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Venue"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

            <div className="absolute top-5 right-5 bg-white/20 backdrop-blur-lg border border-white/30 px-4 py-1.5 rounded-full text-xs font-semibold shadow-md">
              ⭐ Premium Venue
            </div>
          </div>

          {/* RIGHT – GLASS INFO */}
          <div className="flex flex-col gap-6 h-[560px]">
            {/* Venue Card */}
            <div className="glass-card p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-glass">
                  <MapPin className="w-5 h-5 text-teal-300" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Texus Convention Center</h2>
                  <p className="text-xs text-slate-400">
                    Innovation Hub, Texus Campus
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <InfoRow icon={Calendar} text="Feb 1–4, 2026" color="text-blue-400" />
                <InfoRow icon={Users} text="500+ Participants" color="text-purple-400" />
                <InfoRow icon={Mail} text="hackathon@texus.edu" color="text-amber-400" />
                <InfoRow icon={Phone} text="+1 555 123 4567" color="text-emerald-400" />
              </div>

              <button className="mt-4 w-full glass-button">
                <Navigation className="w-4 h-4" />
                View Map
              </button>
            </div>

            {/* Facilities Card */}
            <div className="glass-card p-5 flex-1">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                Facilities
              </h3>

              <div className="grid grid-cols-2 gap-3 mb-4">
                {facilities.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={i}
                      className={`bg-gradient-to-br ${f.color} rounded-xl p-3 flex flex-col items-center gap-1 text-xs font-semibold backdrop-blur-xl border border-white/20 shadow-md hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                      {f.label}
                    </div>
                  );
                })}
              </div>

              <div className="glass-sub text-xs">
                ✔ Meals & refreshments<br />
                ✔ 24/7 mentorship<br />
                ✔ Power & workspaces<br />
                ✔ Networking sessions
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glass utility styles */}
      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(18px);
          border-radius: 1.25rem;
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        }

        .glass-sub {
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 0.75rem;
          padding: 0.75rem;
        }

        .icon-glass {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border-radius: 0.75rem;
          padding: 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.25);
        }

        .glass-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: linear-gradient(
            to right,
            rgba(20, 184, 166, 0.9),
            rgba(16, 185, 129, 0.9)
          );
          padding: 0.6rem;
          border-radius: 0.75rem;
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .glass-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 0 25px rgba(20, 184, 166, 0.6);
        }
      `}</style>
    </div>
  );
}

/* Small reusable row */
function InfoRow({
  icon: Icon,
  text,
  color,
}: {
  icon: any;
  text: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <Icon className={`w-4 h-4 ${color}`} />
      {text}
    </div>
  );
}
