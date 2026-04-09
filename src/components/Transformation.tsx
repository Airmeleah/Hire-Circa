import { motion } from "motion/react";

export function TransformationSection() {
  return (
    <section className="py-[110px] px-6 bg-white text-center">
      <div className="inline-block px-[18px] py-1.5 bg-violet-50 border border-violet-100 rounded-full text-[11px] tracking-[2.5px] uppercase font-bold text-violet-600 mb-5">
        The Shift
      </div>
      <h2 className="font-serif text-[28px] md:text-[48px] font-black text-[#1a0533] max-w-[620px] mx-auto leading-[1.15] mb-3.5">
        What changes when you<br />join Hire Circa.
      </h2>
      <p className="text-[17px] text-gray-600 max-w-[460px] mx-auto leading-relaxed mb-14">
        One investment. One decision. A completely different career trajectory.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[840px] mx-auto mb-14">
        <div className="bg-violet-50 border border-violet-100 rounded-[24px] p-8.5 text-left">
          <div className="text-[11px] tracking-[2px] uppercase font-bold text-violet-900/40 mb-5">
            ❌ Without Hire Circa
          </div>
          <ul className="space-y-3.5">
            {[
              "Applications into silence with zero feedback",
              "A CV that looks fine but never converts",
              "Winging interviews and losing to less qualified candidates",
              "Invisible to recruiters who would love to hire you",
              "No one around you who truly understands",
              "Months passing. Confidence dropping. Bills mounting.",
              "Applying. Hoping. Waiting. Going nowhere."
            ].map((text, i) => (
              <li key={i} className="text-sm text-gray-600 leading-snug flex items-start gap-2.5">
                <span className="text-base shrink-0 mt-0.5">😔</span>
                {text}
              </li>
            ))}
          </ul>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-linear-to-br from-violet-900 to-violet-600 rounded-[24px] p-8.5 text-left shadow-2xl shadow-violet-900/28"
        >
          <div className="text-[11px] tracking-[2px] uppercase font-bold text-white/45 mb-5">
            ✅ With Hire Circa
          </div>
          <ul className="space-y-3.5">
            {[
              "A clear strategy that generates real callbacks",
              "A CV built to stop recruiters mid-scroll",
              "Interview confidence that wins rooms and lands offers",
              "Positioned so recruiters come looking for you",
              "A community of driven people pushing you forward",
              "Momentum, clarity and results you can finally see",
              "Opportunities finding you — not the other way around"
            ].map((text, i) => (
              <li key={i} className="text-sm text-white/88 leading-snug flex items-start gap-2.5">
                <span className="text-base shrink-0 mt-0.5">🔥</span>
                {text}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-linear-to-br from-violet-50 to-violet-100/50 border border-violet-200 rounded-[28px] p-10 text-center max-w-[600px] mx-auto"
      >
        <h3 className="font-serif text-[22px] md:text-[30px] font-bold text-[#1a0533] mb-2.5 leading-tight">
          Which side of this list<br />do you want to be on?
        </h3>
        <p className="text-[15px] text-gray-600 leading-relaxed mb-7">
          The First Circle is your chance to make that shift — at the founding member price, before the doors open to everyone else.
        </p>
        <motion.a
          href="https://nestuge.com/hirecirca"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-linear-to-r from-violet-700 to-violet-500 text-white px-10 py-3.5 rounded-full text-[15px] font-bold shadow-lg shadow-violet-900/35 tracking-wide"
        >
          I Want the ✅ Side — Join Now →
        </motion.a>
        <p className="text-[12px] text-violet-900/40 mt-3">₦15,000 founding price · <strong className="text-violet-600">Price rises to ₦30,000 after launch</strong></p>
      </motion.div>
    </section>
  );
}
