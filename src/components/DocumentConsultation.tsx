import { motion } from "motion/react";
import { FileText, ArrowRight, CheckCircle2 } from "lucide-react";

export function DocumentConsultation() {
  return (
    <section className="py-[110px] px-6 bg-linear-to-b from-white to-violet-50/30 overflow-hidden">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-[18px] py-1.5 bg-violet-50 border border-violet-100 rounded-full text-[11px] tracking-[2.5px] uppercase font-bold text-violet-600 mb-5">
            The Consultation
          </div>
          <h2 className="font-serif text-[32px] md:text-[52px] font-black text-[#1a0533] mb-4">
            Optimized for <span className="text-violet-600 italic">Document Consultation.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
            We don't just look at your CV. We consult on the entire narrative of your professional documents.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="font-serif text-3xl font-bold text-[#1a0533]">The PDF Deep-Dive</h3>
              <p className="text-gray-600 leading-relaxed">
                Our consultation process is built for high-stakes PDF documents. We analyze layout hierarchy, typography legibility, and semantic structure to ensure your document performs perfectly across all digital platforms.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "ATS-Optimization for PDF parsers",
                "Visual hierarchy and reading path analysis",
                "Typography and white-space consultation",
                "Semantic tagging for screen readers"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-violet-600" />
                  {item}
                </li>
              ))}
            </ul>

            <motion.a
              href="https://nestuge.com/hirecirca"
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-violet-600 font-bold cursor-pointer group"
            >
              Learn more about our document process <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-linear-to-br from-violet-500/20 to-purple-500/20 blur-3xl rounded-full" />
            <div className="relative bg-white border border-violet-100 rounded-[32px] p-8 shadow-2xl shadow-violet-900/10 overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1a0533]">Professional_CV.pdf</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">Consultation in progress</div>
                  </div>
                </div>
                <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  98% Score
                </div>
              </div>

              <div className="space-y-4">
                <div className="h-4 bg-gray-100 rounded-full w-3/4" />
                <div className="h-4 bg-gray-100 rounded-full w-1/2" />
                <div className="h-24 bg-violet-50 border border-violet-100 rounded-2xl p-4 relative">
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-violet-600 rounded-full flex items-center justify-center text-white text-[10px] font-bold">1</div>
                  <div className="space-y-2">
                    <div className="h-2 bg-violet-200 rounded-full w-full" />
                    <div className="h-2 bg-violet-200 rounded-full w-5/6" />
                    <div className="h-2 bg-violet-200 rounded-full w-4/6" />
                  </div>
                </div>
                <div className="h-4 bg-gray-100 rounded-full w-2/3" />
                <div className="h-4 bg-gray-100 rounded-full w-3/4" />
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Consultant Notes</div>
                <div className="text-sm text-gray-600 italic leading-relaxed">
                  "The visual hierarchy in the 'Experience' section has been improved to guide the recruiter's eye toward your key achievements first."
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
