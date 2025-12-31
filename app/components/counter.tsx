"use client";

import { useEffect, useState } from "react";

interface HackathonCountdownProps {
  days?: number;
  className?: string;
}

export default function HackathonCountdown({
  days = 5,
  className = "",
}: HackathonCountdownProps) {
  const [targetTime] = useState(() => Date.now() + days * 24 * 60 * 60 * 1000);
  const [timeLeft, setTimeLeft] = useState(targetTime - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetTime - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);

  if (timeLeft <= 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <h1 className="text-4xl font-bold text-red-500 animate-pulse">
          Hackathon Started 🚀
        </h1>
      </div>
    );
  }

  const totalSeconds = Math.floor(timeLeft / 1000);
  const daysLeft = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-black text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
      </div>
      <h1 className="relative z-10 mb-10 text-3xl md:text-4xl font-semibold tracking-tight text-white">
        Time left for the hackathon
      </h1>

      {/* ⚡ Electric Border Wrapper */}
      
        <div
          className={`text-4xl md:text-6xl font-extrabold tracking-wide text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.9)] ${className}`}
        >
          {daysLeft} day : {pad(hours)} hrs : {pad(minutes)} min :{" "}
          <span className="text-cyan-300">{pad(seconds)}</span> sec
        </div>

      <p className="mt-8 text-sm uppercase tracking-widest text-zinc-400">
        Build • Ship • Win
      </p>
    </div>
  );
}
