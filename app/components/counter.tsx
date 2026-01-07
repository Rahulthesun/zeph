'use client'

import React, { useEffect, useState } from 'react'

const Counter = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const target = new Date('2026-02-14T00:00:00').getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const diff = target - now

      if (diff > 0) {
        setTime({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const blocks = [
    { label: 'DAYS', value: time.days },
    { label: 'HOURS', value: time.hours },
    { label: 'MINUTES', value: time.minutes },
    { label: 'SECONDS', value: time.seconds }
  ]

  return (
    <section
      className="
        relative w-full overflow-hidden
        h-[75vh] sm:h-screen
      "
    >
      {/* DESKTOP / TABLET BACKGROUND */}
      <div className="absolute inset-0 hidden sm:block">
        <img
          src="../assets/Gemini_Generated_Image_atawfxatawfxataw.png"
          alt="Underwater World"
          className="absolute inset-0 w-full h-full object-cover contrast-110 saturate-110"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(
                to bottom,
                rgba(0,0,0,1) 0%,
                rgba(0,0,0,0.9) 10%,
                rgba(0,0,0,0.65) 22%,
                rgba(0,0,0,0.35) 34%,
                rgba(0,0,0,0.15) 44%,
                rgba(0,0,0,0) 55%,
                rgba(0,0,0,0) 65%,
                rgba(0,0,0,0.15) 75%,
                rgba(0,0,0,0.35) 85%,
                rgba(0,0,0,0.65) 92%,
                rgba(0,0,0,1) 100%
              )
            `
          }}
        />
      </div>

      {/* MOBILE BACKGROUND */}
      <div className="absolute inset-0 sm:hidden">
        <img
          src="../assets/mobdiff.png"
          alt="Mobile Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(
                to bottom,
                rgba(0,0,0,0.85) 0%,
                rgba(0,0,0,0.6) 16%,
                rgba(0,0,0,0.35) 28%,
                rgba(0,0,0,0.15) 40%,
                rgba(0,0,0,0) 52%,
                rgba(0,0,0,0) 65%,
                rgba(0,0,0,0.4) 82%,
                rgba(0,0,0,0.75) 92%,
                rgba(0,0,0,1) 100%
              )
            `
          }}
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative z-10 h-full
          flex flex-col items-center justify-end
          pb-70 sm:pb-28
          text-center
        "
      >
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold mb-2">
          ZYPH ’26 Hackathon
        </h1>

        <p className="text-cyan-100/90 tracking-widest text-[10px] sm:text-sm mb-5 sm:mb-10">
          INNOVATE FOR A SUSTAINABLE FUTURE
        </p>

        <div className="
          relative px-4 sm:px-12 py-4 sm:py-8
          bg-black/80 backdrop-blur-md
          border border-cyan-400/40
          rounded-xl
        ">
          <div className="flex gap-3 sm:gap-8">
            {blocks.map((b, i) => (
              <div key={i} className="text-center min-w-[56px] sm:min-w-[90px]">
                <div className="text-3xl sm:text-6xl font-mono font-bold text-cyan-300">
                  {String(b.value).padStart(2, '0')}
                </div>
                <div className="mt-1 text-[9px] sm:text-[10px] tracking-[0.25em] text-cyan-200/80">
                  {b.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Counter
