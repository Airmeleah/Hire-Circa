import { motion } from "motion/react";

export function PositioningSection() {
  return (
    <section className="bg-violet-50 py-[110px] px-6 text-center">
      <div className="inline-block px-[18px] py-1.5 bg-violet-50 border border-violet-100 rounded-full text-[11px] tracking-[2.5px] uppercase font-bold text-violet-600 mb-5">
        The Game Changer
      </div>
      <h2 className="font-serif text-[30px] md:text-[52px] font-black text-[#1a0533] max-w-[680px] mx-auto leading-[1.15] mb-4.5">
        What if recruiters were<br /><span className="text-violet-600 italic">the ones reaching out to you?</span>
      </h2>
      <p className="text-[17px] text-gray-600 max-w-[520px] mx-auto leading-relaxed mb-[60px]">
        The most powerful shift isn't sending better applications. It's positioning yourself so strategically that opportunities come directly to you.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 max-w-[960px] mx-auto mb-14 items-center text-left">
        <div className="space-y-4">
          <h3 className="font-serif text-[27px] font-bold text-[#1a0533] leading-tight mb-4">
            There is a way to position yourself so <span className="text-violet-600 italic">you never have to chase again.</span>
          </h3>
          <p className="text-[15px] text-gray-600 leading-relaxed">
            The best candidates aren't applying to hundreds of jobs. They've built a presence so strong that companies come looking for them. Offers arrive without a single application sent.
          </p>
          <p className="text-[15px] text-gray-600 leading-relaxed">
            <strong className="text-[#1a0533] font-semibold">This is not luck. This is positioning.</strong> And it is a skill that can be learned regardless of where you are in your career right now.
          </p>
          <p className="text-[15px] text-gray-600 leading-relaxed">
            Inside Hire Circa we teach you how to present your story, your value and your expertise in a way that makes you magnetic to the exact companies and recruiters you want. <strong className="text-[#1a0533] font-semibold">You stop chasing and start being chosen.</strong>
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-linear-to-br from-violet-900 to-violet-600 rounded-[24px] p-8.5 text-left shadow-2xl shadow-violet-900/28"
        >
          <div className="text-[10px] tracking-[2px] uppercase text-white/45 font-bold mb-3.5">
            💜 What strategic positioning creates
          </div>
          <div className="font-serif text-[21px] font-bold text-white mb-5 leading-tight">
            From invisible to<br />inbound — in 30 days
          </div>
          <ul className="space-y-3">
            {[
              { icon: "🔍", text: "Recruiters find and contact you directly" },
              { icon: "📩", text: "Job offers arrive in your inbox unsolicited" },
              { icon: "🤝", text: "Companies approach you before roles are posted" },
              { icon: "📈", text: "Your professional visibility grows week on week" },
              { icon: "⚡", text: "You become the candidate companies compete for" }
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[13.5px] text-white/85 font-medium leading-tight">
                <span className="w-7 h-7 rounded-lg bg-white/16 flex items-center justify-center text-[13px] shrink-0">
                  {item.icon}
                </span>
                {item.text}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-linear-to-br from-violet-900 to-violet-700 rounded-[28px] p-10 text-center max-w-[600px] mx-auto shadow-2xl shadow-violet-900/30"
      >
        <h3 className="font-serif text-[22px] md:text-[30px] font-bold text-white mb-2.5 leading-tight">
          This is the shift<br /><span className="text-purple-300 italic">Hire Circa creates for you.</span>
        </h3>
        <p className="text-[15px] text-white/60 leading-relaxed mb-7">
          Join The First Circle today — before all 20 founding spots are gone and the price returns to ₦30,000.
        </p>
        <motion.a
          href="https://nestuge.com/hirecirca"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-white text-violet-700 px-10 py-3.5 rounded-full text-[15px] font-bold shadow-lg shadow-black/20 tracking-wide"
        >
          Claim My Spot — ₦15,000 →
        </motion.a>
        <p className="text-[12px] text-white/30 mt-3">Only <strong className="text-white/55">20 founding spots</strong> · Lifetime access · 4th May 2026</p>
      </motion.div>
    </section>
  );
}
