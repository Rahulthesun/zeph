import React from "react";
import { Twitter, Linkedin, Instagram, Github, Mail } from "lucide-react";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Venue", href: "#venue" },
  { name: "Register", href: "#register" },
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-transparent" id="footer">
      
      {/* DESKTOP / TABLET BACKGROUND */}
      <div className="absolute inset-0 hidden sm:block">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(
                to bottom,
                rgba(0,0,0,1) 0%,
                rgba(0,0,0,0.85) 18%,
                rgba(0,0,0,0.6) 35%,
                rgba(0,0,0,0.35) 50%,
                rgba(0,0,0,0.15) 65%,
                rgba(0,0,0,0) 100%
              ),
              url('https://wallpapershome.com/images/pages/pic_h/18612.jpg')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* MOBILE BACKGROUND – MOVED UP */}
      <div className="absolute inset-0 sm:hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(
                to bottom,
                rgba(0,0,0,0.9) 0%,
                rgba(0,0,0,0.7) 20%,
                rgba(0,0,0,0.45) 38%,
                rgba(0,0,0,0.2) 52%,
                rgba(0,0,0,0) 65%,
                rgba(0,0,0,0.5) 82%,
                rgba(0,0,0,0.85) 92%,
                rgba(0,0,0,1) 100%
              ),
              url('assets/footmob.jpg')
            `,
            backgroundSize: "cover",
            backgroundPosition: "right 15%", // ✅ MOVED UP
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 mb-12 sm:mb-16">
          
          {/* BRAND */}
          <div className="space-y-5">
<h1
  className="
    text-4xl
    sm:text-[5.5rem]
    lg:text-[3rem]
    font-black
    text-white
    drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]
    drop-shadow-[0_0_28px_rgba(255,255,255,0.35)]
  "
>
  ZYPH ’26
</h1>


            <p className="text-sm sm:text-base text-white/50 max-w-md">
              Code for the planet. Build solutions aligned with the UN’s 17
              Sustainable Development Goals.
            </p>

            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-2 h-2 bg-white rounded-full" />
                <div className="absolute inset-0 w-2 h-2 bg-white rounded-full animate-ping opacity-40" />
              </div>
              <span className="text-xs sm:text-sm text-white/70 font-semibold uppercase tracking-wider">
                Registration Open
              </span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-white/60 uppercase tracking-widest mb-4 sm:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-white/70 hover:text-white flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-white/40 rounded-full" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONNECT */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-white/60 uppercase tracking-widest mb-4 sm:mb-6">
              Connect
            </h3>

            <div className="flex gap-3 mb-6 sm:mb-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white/60 hover:text-white" />
                  </a>
                );
              })}
            </div>

            <a
              href="mailto:hello@zyph.srm.edu"
              className="text-sm sm:text-base text-white/70 hover:text-white flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              hello@zyph.srm.edu
            </a>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6 sm:mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs sm:text-sm text-white/50">
            © 2025 ZYPH Hackathon. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
