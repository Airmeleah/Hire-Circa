import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";

export function PricingSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const target = new Date('2026-05-04T00:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = Date.now();
      const diff = target - now;
      
      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
        return;
      }
      
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000)
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="pricing" className="py-[110px] px-6 bg-linear-to-br from-violet-100 to-violet-50 text-center">
      <div className="inline-block px-[18px] py-1.5 bg-violet-50 border border-violet-100 rounded-full text-[11px] tracking-[2.5px] uppercase font-bold text-violet-600 mb-5">
        ⭐ The First Circle
      </div>
      <h2 className="font-serif text-[30px] md:text-[50px] font-black text-[#1a0533] max-w-[600px] mx-auto leading-[1.15] mb-3.5">
        Founding member pricing.<br />One time. Never again.
      </h2>
      <p className="text-[17px] text-gray-600 max-w-[500px] mx-auto leading-relaxed mb-12">
        After these 20 spots are filled the price returns to ₦30,000 — permanently. This is your one and only chance at the founding price.
      </p>
      
      <div className="text-[11px] tracking-[2px] uppercase text-violet-900/50 font-bold mb-3.5">
        Community kicks off in
      </div>
      <div className="flex items-center gap-2.5 justify-center flex-wrap mb-8">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Mins", value: timeLeft.mins },
          { label: "Secs", value: timeLeft.secs }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <div className="bg-white border border-violet-200 rounded-[16px] p-3.5 md:p-4.5 min-w-[70px] text-center shadow-sm">
              <span className="font-serif text-3xl md:text-4xl font-black leading-none bg-linear-to-br from-violet-700 to-violet-500 bg-clip-text text-transparent block">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-[10px] tracking-[1.5px] uppercase text-violet-900/40 font-semibold mt-1 block">
                {item.label}
              </span>
            </div>
            {i < 3 && <span className="font-serif text-[28px] font-black text-violet-900/22 mb-3">:</span>}
          </div>
        ))}
      </div>
      
      <div className="flex items-center justify-center gap-3 mb-11">
        <div className="w-[160px] h-[7px] bg-violet-900/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="h-full bg-linear-to-r from-violet-700 to-violet-500 rounded-full"
          />
        </div>
        <div className="text-[13px] font-bold text-violet-600">
          <em className="text-red-600 not-italic">20</em> of 20 founding spots remaining
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[520px] mx-auto bg-linear-to-br from-violet-950 to-violet-700 rounded-[36px] p-10 md:p-12 relative overflow-hidden shadow-2xl shadow-violet-900/40"
      >
        <div className="absolute w-[400px] h-[400px] rounded-full border border-white/5 -top-[150px] -right-[150px] pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4.5 py-1.5 text-[11px] text-white font-bold tracking-wider uppercase mb-6.5 relative z-10">
          ⭐ The First Circle · Founding Member
        </div>
        
        <div className="flex flex-col items-center mb-2 relative z-10">
          <div className="flex items-center gap-3 mb-1.5">
            <span className="font-serif text-2xl font-bold text-white/30 relative">
              ₦30,000
              <span className="absolute left-0 top-1/2 w-full h-[2.5px] bg-red-400 -translate-y-1/2 rounded-full" />
            </span>
            <span className="bg-red-400/20 border border-red-400/30 rounded-full px-3 py-1 text-[11px] text-red-200 font-bold">
              50% OFF — First Circle Only
            </span>
          </div>
          <div className="font-serif text-[76px] font-black text-white leading-none">
            <span className="text-[30px] align-top mt-4 inline-block text-white/75 mr-1">₦</span>15,000
          </div>
        </div>
        
        <p className="text-[13px] text-white/40 mb-8.5 font-normal relative z-10">
          One-time payment · Lifetime access · No recurring fees · Ever
        </p>
        
        <ul className="text-left space-y-3 mb-9 relative z-10">
          {[
            "CV Review & Professional Support",
            "Interview Preparation & Practice",
            "Live Career Strategy Sessions",
            "Recruiter Insider Tips & Insights",
            "Curated Job Alerts for Skilled Professionals",
            "Upskilling & Career Training Resources",
            "Supportive Community of Driven Professionals",
            "Strategic Positioning — So Recruiters Come to You",
            "First Circle Founding Member Status — Forever"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-[14.5px] text-white/90 font-medium">
              <span className="w-[21px] h-[21px] bg-white/20 rounded-full flex items-center justify-center text-[11px] shrink-0 text-white">
                <Check className="w-3 h-3" />
              </span>
              {item}
            </li>
          ))}
        </ul>
        
        <motion.a
          href="https://nestuge.com/hirecirca"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.98 }}
          className="block w-full bg-white text-violet-700 py-4.5 rounded-full text-[17px] font-bold shadow-xl shadow-black/20 relative z-10 glow-animation"
        >
          Claim My First Circle Spot — ₦15,000 →
        </motion.a>
        
        <p className="text-[12px] text-white/30 mt-3.5 relative z-10">
          Secure payment · Instant access · Price rises to ₦30,000 after these 20 spots 💜
        </p>
      </motion.div>
      
      <div className="max-w-[520px] mx-auto mt-5.5 bg-white border border-violet-200 rounded-[18px] p-4.5 md:p-6.5 flex items-center gap-3.5 shadow-sm">
        <div className="w-[42px] h-[42px] rounded-[12px] bg-violet-50 border border-violet-100 flex items-center justify-center text-[19px] shrink-0">
          📅
        </div>
        <div className="text-left">
          <strong className="block text-sm font-bold text-[#1a0533] mb-0.5">Community kicks off 4th May 2026</strong>
          <span className="text-[13px] text-gray-600">Join now and secure your founding member spot before the doors open.</span>
        </div>
      </div>
    </section>
  );
}
