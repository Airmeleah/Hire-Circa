import { motion } from "motion/react";

export function FinalCTA() {
  return (
    <section className="py-[140px] px-6 text-center relative overflow-hidden bg-[#060010]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_0%,rgba(109,40,217,0.32)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#060010_0%,#0a0118_100%)]" />
      
      {/* Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-violet-500/10 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[820px] border border-violet-500/10 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1140px] h-[1140px] border border-violet-500/10 rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-[740px] mx-auto">
        <h2 className="font-serif text-[38px] md:text-[72px] font-black text-white leading-[1.07] mb-6">
          The job you deserve<br />is waiting for<br /><span className="text-purple-400 italic">the right version of you.</span>
        </h2>
        
        <div className="text-base md:text-lg text-white/55 max-w-[520px] mx-auto leading-relaxed space-y-4.5">
          <p>
            You've already imagined what it feels like. The relief. The call you'd make first. The version of yourself you'd get to be again.
          </p>
          <p>
            You have the qualifications. You have the drive. <strong className="text-white/85 font-semibold">What you've been missing is the strategy, the insider knowledge and people in your corner who actually understand what you're going through.</strong>
          </p>
          <p>
            That ends today. The First Circle is your turning point. 💜
          </p>
        </div>
        
        <div className="flex items-center justify-center gap-4 my-11 flex-wrap">
          <span className="font-serif text-[26px] font-bold text-white/25 relative">
            ₦30,000
            <span className="absolute left-0 top-1/2 w-full h-[2px] bg-red-400 -translate-y-1/2" />
          </span>
          <span className="text-white/25 text-xl">→</span>
          <span className="font-serif text-[54px] font-black text-white leading-none">₦15,000</span>
        </div>
        
        <motion.a
          href="https://nestuge.com/hirecirca"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-white text-violet-700 px-14 py-4.5 rounded-full text-[17px] font-bold shadow-2xl shadow-black/25"
        >
          Join The First Circle — ₦15,000 →
        </motion.a>
        
        <p className="mt-4.5 text-[12px] text-white/25">
          20 founding spots · Kicks off 4th May 2026 · Lifetime access · For skilled professionals only
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#030008] py-10 px-6 text-center">
      <div className="flex items-center justify-center gap-2.5 mb-3">
        <img 
          src="https://res.cloudinary.com/dlopaynla/image/upload/f_auto,q_auto/Media_11_ftboxu" 
          alt="Hire Circa Logo" 
          className="w-[32px] h-auto object-contain opacity-40 grayscale mix-blend-screen"
          referrerPolicy="no-referrer"
        />
        <span className="font-serif text-sm font-bold text-white/40">Hire Circa</span>
      </div>
      <p className="text-[12px] text-white/20">
        © 2026 Hire Circa · @hirecirca · For skilled professionals only 💜
      </p>
    </footer>
  );
}
