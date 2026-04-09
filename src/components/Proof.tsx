import { motion } from "motion/react";

const testimonials = [
  {
    initial: "A",
    name: "Adenike O.",
    role: "Marketing Professional, Lagos",
    quote: "I had been applying for over a year with zero results. After joining Hire Circa and rebuilding my CV the way they showed me, I got 3 interview invites in one week. Night and day."
  },
  {
    initial: "T",
    name: "Tunde B.",
    role: "Finance Analyst, Abuja",
    quote: "The live sessions alone are worth ten times what I paid. I finally understand how recruiters actually think. It changed my CV, my interviews and my entire professional presence."
  },
  {
    initial: "C",
    name: "Chioma E.",
    role: "Project Manager, Port Harcourt",
    quote: "I used to think job hunting was luck. Hire Circa showed me it is strategy. Recruiters started reaching out to me directly. I landed my role 6 weeks after joining."
  }
];

export function ProofSection() {
  return (
    <section className="py-[110px] px-6 bg-violet-50 text-center">
      <div className="inline-block px-[18px] py-1.5 bg-violet-50 border border-violet-100 rounded-full text-[11px] tracking-[2.5px] uppercase font-bold text-violet-600 mb-5">
        Real Results
      </div>
      <h2 className="font-serif text-[28px] md:text-[46px] font-black text-[#1a0533] mb-3">
        What members are saying 💜
      </h2>
      <p className="text-[17px] text-gray-600 mb-14">
        Skilled professionals who stopped guessing and started winning.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[960px] mx-auto mb-14">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border border-violet-100 rounded-[24px] p-7 md:p-8 text-left hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-900/5 transition-all"
          >
            <div className="text-[#f59e0b] text-[15px] mb-3.5 tracking-[2px]">★★★★★</div>
            <blockquote className="text-[14.5px] text-gray-700 leading-relaxed mb-4.5 italic">
              "{t.quote}"
            </blockquote>
            <div className="flex items-center gap-2.5">
              <div className="w-9.5 h-9.5 rounded-full bg-linear-to-br from-violet-700 to-violet-500 flex items-center justify-center text-sm text-white font-bold shrink-0">
                {t.initial}
              </div>
              <div>
                <div className="text-[13px] font-bold text-[#1a0533]">{t.name}</div>
                <div className="text-[11px] text-gray-500">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-linear-to-br from-violet-900 to-violet-700 rounded-[28px] p-10 text-center max-w-[600px] mx-auto shadow-2xl shadow-violet-900/30"
      >
        <h3 className="font-serif text-[22px] md:text-[30px] font-bold text-white mb-2.5 leading-tight">
          You could be the next<br /><span className="text-purple-300 italic">success story.</span>
        </h3>
        <p className="text-[15px] text-white/60 leading-relaxed mb-7">
          These results are available to you too. Join The First Circle and start your transformation before the founding price disappears.
        </p>
        <motion.a
          href="https://nestuge.com/hirecirca"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-white text-violet-700 px-10 py-3.5 rounded-full text-[15px] font-bold shadow-lg shadow-black/20 tracking-wide"
        >
          Join The First Circle — ₦15,000 →
        </motion.a>
        <p className="text-[12px] text-white/30 mt-3">Only <strong className="text-white/55">20 spots</strong> · Kicks off 4th May 2026 · Lifetime access</p>
      </motion.div>
    </section>
  );
}
