import { motion } from "motion/react";

const tickerItems = [
  "The First Circle",
  "20 Founding Spots Only",
  "Kicks Off 4th May 2026",
  "₦30,000 → ₦15,000",
  "CV Review & Support",
  "Live Strategy Sessions",
  "Interview Preparation",
  "Recruiter Insider Tips",
  "Strategic Positioning",
  "Upskilling & Training",
];

export function Ticker() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[200] bg-linear-to-r from-violet-900 to-violet-600 py-2.5 overflow-hidden whitespace-nowrap shadow-lg">
      <div className="inline-flex ticker-animation">
        {[...tickerItems, ...tickerItems].map((item, i) => (
          <span key={i} className="text-[11px] font-bold text-white/85 tracking-[2px] uppercase px-8 flex items-center">
            {item}
            <span className="text-white/35 ml-2">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Navbar() {
  return (
    <nav className="fixed top-[34px] left-0 right-0 z-100 px-10 py-3.5 flex items-center justify-between bg-black/88 backdrop-blur-3xl border-b border-violet-500/10">
      <div className="flex items-center gap-2.5">
        <img 
          src="https://res.cloudinary.com/dlopaynla/image/upload/f_auto,q_auto/Media_11_ftboxu" 
          alt="Hire Circa Logo" 
          className="w-[40px] h-auto object-contain mix-blend-screen"
          referrerPolicy="no-referrer"
        />
        <span className="font-serif text-[19px] font-bold text-white">Hire Circa</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 bg-violet-500/15 border border-violet-500/25 rounded-full px-3.5 py-1.5 text-[12px] font-semibold text-violet-300">
          <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
          20 spots left
        </div>
        <motion.a
          href="https://nestuge.com/hirecirca"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="bg-linear-to-r from-violet-700 to-violet-500 text-white px-5 py-2.5 rounded-full text-[13px] font-semibold shadow-lg shadow-violet-900/35"
        >
          Join The First Circle
        </motion.a>
      </div>
    </nav>
  );
}
