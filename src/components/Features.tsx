import { motion } from "motion/react";
import { Card } from "@/components/ui/card";

const features = [
  { icon: "📄", title: "PDF CV Consultation", description: "Deep-dive review of your PDF CV. We analyze every word, layout choice, and ATS compatibility to ensure you stop recruiters mid-scroll." },
  { icon: "🎯", title: "Interview Preparation", description: "Practice real questions. Structure answers that demonstrate your value and walk out of every interview knowing you gave your best." },
  { icon: "📡", title: "Live Strategy Sessions", description: "Real-time sessions breaking down what is working right now in the job market. Live. Interactive. No fluff. Just results." },
  { icon: "🔍", title: "Recruiter Insider Tips", description: "Insider knowledge on how recruiters think, what triggers instant rejection and what makes a candidate impossible to overlook." },
  { icon: "💼", title: "Curated Job Alerts", description: "Targeted opportunities sent directly to you so you apply early — before the flood of applications makes yours invisible." },
  { icon: "🚀", title: "Upskilling & Training", description: "Build the skills that make you competitive. The candidate companies fight over is not always the most experienced — they are the best prepared." },
  { icon: "🤝", title: "Supportive Community", description: "Driven professionals on the same journey. Accountability. Shared wins. Real support. You will never navigate this alone again." },
];

export function TransitionSection() {
  return (
    <div className="bg-linear-to-b from-[#0e0220] to-[#1a0533] py-20 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-serif text-[28px] md:text-[50px] font-black text-white max-w-[640px] mx-auto leading-tight mb-5"
      >
        This is not a job board.<br />This is not a recruiter.<br /><span className="text-purple-400 italic">This is the strategy.</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-[17px] text-white/50 max-w-[480px] mx-auto leading-relaxed"
      >
        Hire Circa is the premium career training platform built for skilled professionals who are done applying and praying — and ready to start positioning and winning.
      </motion.p>
    </div>
  );
}

export function FeaturesGrid() {
  return (
    <section className="bg-white py-[110px] px-6 text-center">
      <div className="inline-block px-[18px] py-1.5 bg-violet-50 border border-violet-100 rounded-full text-[11px] tracking-[2.5px] uppercase font-bold text-violet-600 mb-5">
        What's Inside
      </div>
      <h2 className="font-serif text-[32px] md:text-[56px] font-black text-[#1a0533] max-w-[700px] mx-auto leading-[1.12] mb-4.5">
        Everything the system<br /><span className="text-violet-600 italic">never taught you.</span>
      </h2>
      <p className="text-[17px] text-gray-600 max-w-[540px] mx-auto leading-relaxed mb-16">
        The insider knowledge, the real strategies, the community and the tools. All in one place — built for skilled professionals who deserve better.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1000px] mx-auto mb-14">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Card className="relative overflow-hidden bg-linear-to-br from-violet-50 to-violet-100/50 border-violet-200 rounded-[24px] p-8 text-left h-full hover:-translate-y-1.5 hover:shadow-xl hover:shadow-violet-900/10 transition-all group">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-linear-to-r from-violet-700 to-violet-400" />
              <div className="w-[50px] h-[50px] rounded-[14px] bg-linear-to-br from-violet-700 to-violet-500 flex items-center justify-center text-xl mb-5 shadow-lg shadow-violet-900/28">
                {f.icon}
              </div>
              <h3 className="font-serif text-[21px] font-bold text-[#1a0533] mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{f.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-linear-to-br from-violet-50 to-violet-100/50 border border-violet-200 rounded-[28px] p-10 text-center max-w-[600px] mx-auto"
      >
        <h3 className="font-serif text-[22px] md:text-[30px] font-bold text-[#1a0533] mb-2.5 leading-tight">
          Ready to stop guessing<br />and start <span className="text-violet-600 italic">getting results?</span>
        </h3>
        <p className="text-[15px] text-gray-600 leading-relaxed mb-7">
          Join The First Circle before all 20 founding spots are taken. After launch, the price goes back to ₦30,000 — permanently.
        </p>
        <motion.a
          href="https://nestuge.com/hirecirca"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-linear-to-r from-violet-700 to-violet-500 text-white px-10 py-3.5 rounded-full text-[15px] font-bold shadow-lg shadow-violet-900/35 tracking-wide"
        >
          Join The First Circle — ₦15,000 →
        </motion.a>
        <p className="text-[12px] text-violet-900/40 mt-3">20 spots · Kicks off <strong className="text-violet-600">4th May 2026</strong> · Lifetime access</p>
      </motion.div>
    </section>
  );
}
