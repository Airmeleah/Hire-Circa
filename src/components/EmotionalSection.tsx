import { motion } from "motion/react";

export function EmotionalSection() {
  return (
    <section className="bg-linear-to-b from-[#0a0118] to-[#0e0220] px-6 pb-20 relative">
      <div className="max-w-[680px] mx-auto text-left">
        <div className="w-px h-16 bg-linear-to-b from-violet-500/60 to-transparent mx-auto mb-16" />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-2xl md:text-[32px] font-semibold italic text-white/88 leading-[1.65] mb-7"
        >
          Job hunting isn't just tiring —<br />
          <span className="text-purple-400 italic">it's draining in a way that's hard to explain to people who aren't going through it.</span>
        </motion.p>
        
        <div className="space-y-6 text-base md:text-lg text-white/68 leading-relaxed font-light">
          <p>
            It's waking up every morning and opening your laptop before you've even had water. Telling yourself today will be different. Spending an hour on one application — <strong className="text-white/92 font-semibold">tailoring every word, reading the job description five times</strong> — then hitting send and immediately wondering if anyone will even see it.
          </p>
          <p>
            It's refreshing your email. Then refreshing it again. Then checking your spam folder, just in case. Watching the hours pass and feeling a quiet dread settle in — the kind that's hard to shake even when you're doing other things.
          </p>
        </div>
        
        <div className="my-10 flex flex-col gap-2.5">
          {[
            "It's rewriting your CV for the sixth time.",
            "Tweaking your cover letter. Again.",
            "Doing everything \"right\" — and still feeling completely stuck."
          ].map((text, i) => (
            <div key={i} className="text-[17px] md:text-xl text-white/78 leading-snug font-light pl-5 border-l-2 border-violet-500/40">
              {text.split('"').map((part, j) => j % 2 === 1 ? <em key={j} className="text-purple-400 not-italic italic">{part}</em> : part)}
            </div>
          ))}
        </div>
        
        <p className="text-white/68 text-lg font-light mb-6">And after a while — it gets to you. Really gets to you.</p>
        
        <div className="my-10 flex flex-col gap-2.5">
          {["The rejections.", "The silence.", "The \"we've decided to move forward with other candidates.\""].map((text, i) => (
            <div key={i} className="text-[17px] md:text-xl text-white/78 leading-snug font-light pl-5 border-l-2 border-violet-500/40">
              {text}
            </div>
          ))}
        </div>
        
        <p className="text-white/68 text-lg font-light mb-6">
          At some point, it stops feeling like a process. <strong className="text-white/92 font-semibold">And it starts feeling personal.</strong>
        </p>
        
        <p className="text-white/68 text-lg font-light mb-11">
          You start questioning everything — your skills, your experience, your degree, your choices. You imagine what you'd do with that first salary — <strong className="text-white/92 font-semibold">the relief, the call you'd make, the version of yourself you'd finally get to be again</strong> — and then you come back to reality and feel the weight of it all over again.
        </p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-violet-500/8 border border-violet-500/18 rounded-[20px] p-7 md:p-8 my-11"
        >
          <p className="font-serif text-xl md:text-[28px] italic font-semibold text-white/90 leading-[1.55]">
            Let's be honest — it's exhausting.<br />
            Not just physically. <span className="text-purple-400">Mentally.</span><br />
            And the worst part? Doing it alone.
          </p>
        </motion.div>
        
        <div className="text-lg md:text-[22px] text-white font-semibold leading-relaxed my-10 py-8 border-y border-violet-500/15">
          You're not the problem.<br /><br />
          Job hunting can break your confidence if you let it — but the truth is, <span className="text-purple-400 italic">you were never meant to figure all of this out by yourself.</span><br /><br />
          Because the right support, the right environment, and the right people around you?<br />
          <strong className="text-white">They change everything.</strong>
        </div>
        
        <div className="text-center py-10">
          <p className="text-[13px] text-white/40 tracking-[1.5px] uppercase font-semibold mb-5">That support exists. It's called Hire Circa.</p>
          <motion.a
            href="https://nestuge.com/hirecirca"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-linear-to-r from-violet-700 to-violet-500 text-white px-11 py-4 rounded-full text-base font-bold shadow-xl shadow-violet-900/40 tracking-wide"
          >
            Claim My Spot — ₦15,000 →
          </motion.a>
          <p className="text-[12px] text-white/28 mt-3">20 founding spots · <strong className="text-white/45">Price rises to ₦30,000 after launch</strong></p>
        </div>
      </div>
    </section>
  );
}
