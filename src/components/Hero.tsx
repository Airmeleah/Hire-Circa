import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-[160px] pb-[100px] overflow-hidden bg-[#060010]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_-5%,rgba(109,40,217,0.4)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#060010_0%,#0a0118_70%,#0e0220_100%)]" />
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:70px_70px]" />
      
      {/* Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-violet-500/10 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[820px] border border-violet-500/10 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1140px] h-[1140px] border border-violet-500/10 rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-[820px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[11px] tracking-[3.5px] uppercase text-violet-400/55 font-semibold mb-9"
        >
          For the ones still waiting
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl lg:text-[88px] font-black leading-[1.04] text-white mb-7"
        >
          You were never meant<br />
          to figure this out<br />
          <span className="italic bg-linear-to-r from-violet-400 to-violet-500 bg-clip-text text-transparent">alone.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-white/50 max-w-[520px] mx-auto leading-relaxed mb-12"
        >
          Job hunting isn't just tiring. It's the kind of exhausting that gets inside your head — and stays there.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center gap-3.5"
        >
          <a
            href="https://nestuge.com/hirecirca"
            className="inline-block bg-linear-to-r from-violet-700 to-violet-500 text-white px-12 py-5 rounded-full text-lg font-bold shadow-2xl shadow-violet-900/45 float-animation hover:shadow-violet-900/60 transition-shadow"
          >
            I'm Ready — Join The First Circle →
          </a>
          <p className="text-[13px] text-white/35 font-medium">
            <strong className="text-white/60">₦15,000</strong> founding price · 20 spots only · Kicks off 4th May
          </p>
        </motion.div>
      </div>
    </section>
  );
}
