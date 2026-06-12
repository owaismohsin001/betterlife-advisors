"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="py-20" style={{background:"linear-gradient(135deg,#3D0808 0%,#6B0F0F 50%,#9B1B1B 100%)"}}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left — info */}
          <div>
            <span className="inline-block bg-white/10 text-white rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-5">Free Consultation</span>
            <h2 className="text-4xl font-serif font-bold text-white mb-5 leading-tight">
              Get Expert Advice <br/><span style={{color:"#ffaaaa"}}>Today — For Free</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 leading-relaxed">
              Speak with a certified immigration expert. We'll assess your eligibility, explain your options, and create a personalised plan — at no cost.
            </p>

            <div className="space-y-5">
              {[
                { icon:"📞", label:"Call Us", value:"+923085153073", sub:"Mon–Sat, 9AM–7PM" },
                { icon:"📧", label:"Email Us", value:"hhshahid26@gmail.com", sub:"Reply within 2 hours" },
                { icon:"📍", label:"Visit Us", value:"Office 3B, Business Square, Lahore", sub:"Walk-in welcome" },
                { icon:"💬", label:"WhatsApp", value:"+923085153073", sub:"Instant response" },
              ].map((c,i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl">{c.icon}</div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wider">{c.label}</div>
                    <div className="text-white font-semibold">{c.value}</div>
                    <div className="text-white/40 text-xs">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="glass rounded-3xl p-8 shadow-2xl">
            {sent ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-white text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-white/70">We've received your request. A consultant will contact you within 2 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="text-white text-2xl font-bold mb-6 font-serif">Book Free Consultation</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/70 text-xs font-semibold mb-1.5 block uppercase tracking-wider">Full Name *</label>
                      <input required type="text" placeholder="Your name" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50 transition-colors" />
                    </div>
                    <div>
                      <label className="text-white/70 text-xs font-semibold mb-1.5 block uppercase tracking-wider">Phone *</label>
                      <input required type="tel" placeholder="+92 XXX XXXXXXX" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50 transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="text-white/70 text-xs font-semibold mb-1.5 block uppercase tracking-wider">Email Address *</label>
                    <input required type="email" placeholder="your@email.com" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50 transition-colors" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/70 text-xs font-semibold mb-1.5 block uppercase tracking-wider">Destination</label>
                      <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white/50 transition-colors">
                        <option value="" className="bg-red-deep text-white">Select Country</option>
                        {["Canada","UK","Australia","USA","Germany","UAE","New Zealand","Ireland","Portugal","Other"].map(c=>(
                          <option key={c} value={c} className="bg-red-deep text-white">{c}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-white/70 text-xs font-semibold mb-1.5 block uppercase tracking-wider">Visa Type</label>
                      <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white/50 transition-colors">
                        <option value="" className="bg-red-deep text-white">Visa Type</option>
                        {["Visit Visa","Student Visa","Work Visa","PR/Immigration","Business Visa","Family Visa"].map(v=>(
                          <option key={v} value={v} className="bg-red-deep text-white">{v}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-white/70 text-xs font-semibold mb-1.5 block uppercase tracking-wider">Your Message</label>
                    <textarea rows={3} placeholder="Tell us about your situation..." className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50 transition-colors resize-none" />
                  </div>
                  <button type="submit" className="w-full py-4 rounded-xl bg-white text-red font-bold text-base hover:bg-white/90 transition-all hover:-translate-y-0.5 shadow-lg mt-2">
                    Book Free Consultation →
                  </button>
                  <p className="text-white/40 text-xs text-center">🔒 100% Confidential · No Spam · No Obligation</p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
