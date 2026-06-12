"use client";
import { useState } from "react";

const faqs = [
  { q:"How long does a visa application take?", a:"Processing times vary by country and visa type. A UK visit visa can take 2–6 weeks, Canada PR 6–12 months, Australia student visa 4–8 weeks. We give you accurate timelines in your free consultation." },
  { q:"What's your fee structure?", a:"Our fees vary by visa type and complexity. We offer transparent, upfront pricing with no hidden charges. You get a detailed quote after your initial consultation." },
  { q:"Do you guarantee visa approval?", a:"No legitimate consultant can legally guarantee a visa — that decision lies with the immigration authority. However, our 95% success rate speaks for itself. We take every step to maximize your chances." },
  { q:"What if my visa gets refused?", a:"We review the refusal reasons and advise on the best course of action — whether that's reapplying with stronger documentation, appealing the decision, or exploring alternative visa pathways." },
  { q:"Can you help if I've had a previous refusal?", a:"Absolutely. We specialize in handling cases with prior refusals. Our team analyzes what went wrong and builds a stronger case for your reapplication." },
  { q:"Do you offer services from cities other than Lahore?", a:"Yes! We serve clients from all over Pakistan — Karachi, Islamabad, Peshawar, Quetta, and more. Most consultations can be conducted online via video call." },
  { q:"How do I start the process?", a:"Simply click 'Free Consultation' and book a 30-minute call with one of our certified consultants. No commitment required — just honest advice." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number|null>(0);
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="tag">FAQ</span>
          <h2 className="text-4xl font-serif font-bold mt-4 mb-4 text-gray-900">
            Frequently Asked <span style={{color:"#9B1B1B"}}>Questions</span>
          </h2>
          <div className="divider mx-auto mb-4" />
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => setOpen(open===i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-gray-800 hover:bg-red/3 transition-colors"
              >
                <span>{f.q}</span>
                <span className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300 ${open===i ? "bg-red text-white rotate-45" : "bg-gray-100 text-gray-500"}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/></svg>
                </span>
              </button>
              {open===i && (
                <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
