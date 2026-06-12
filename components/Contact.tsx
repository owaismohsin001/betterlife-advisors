"use client";
import { useState } from "react";

const inputCls = "w-full border rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors";
const inputStyle = { background:"rgba(255,255,255,0.10)", borderColor:"rgba(255,255,255,0.20)", color:"#fff" };
const labelCls  = "text-xs font-semibold mb-1.5 block uppercase tracking-wider";
const labelStyle = { color:"rgba(255,255,255,0.70)" };
const selectStyle = { background:"#3D0808", borderColor:"rgba(255,255,255,0.20)", color:"#ffffff" };

export default function Contact() {
  const [form, setForm] = useState({ name:"", phone:"", email:"", destination:"", visaType:"", message:"" });
  const [status, setStatus] = useState<"idle"|"loading"|"sent"|"error">("idle");
  const [errMsg, setErrMsg] = useState("");

  function update(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrMsg("");
    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        setErrMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      } else {
        setStatus("sent");
      }
    } catch {
      setErrMsg("Network error. Please try again or call us directly.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20" style={{background:"linear-gradient(135deg,#3D0808 0%,#6B0F0F 50%,#9B1B1B 100%)"}}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left — info */}
          <div>
            <span className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-5 text-white" style={{background:"rgba(255,255,255,0.12)"}}>Free Consultation</span>
            <h2 className="text-4xl font-bold text-white mb-5 leading-tight" style={{fontFamily:"serif"}}>
              Get Expert Advice <br/><span style={{color:"#ffaaaa"}}>Today — For Free</span>
            </h2>
            <p className="text-lg mb-10 leading-relaxed" style={{color:"rgba(255,255,255,0.70)"}}>
              Speak with a certified immigration expert. We'll assess your eligibility, explain your options, and create a personalised plan — at no cost.
            </p>

            <div className="space-y-5">
              {[
                { icon:"📞", label:"Call Us",    value:"+923085153073",     sub:"Mon–Sat, 9AM–7PM",     href:"tel:+923085153073" },
                { icon:"📧", label:"Email Us",   value:"hhshahid26@gmail.com", sub:"Reply within 2 hours", href:"mailto:hhshahid26@gmail.com" },
                { icon:"📍", label:"Visit Us",   value:"Office 3B, Business Square, Lahore", sub:"Walk-in welcome", href:"#" },
                { icon:"💬", label:"WhatsApp",   value:"+923085153073",     sub:"Instant response",     href:"https://wa.me/923085153073" },
              ].map((c,i) => (
                <a key={i} href={c.href} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform" style={{background:"rgba(255,255,255,0.10)"}}>{c.icon}</div>
                  <div>
                    <div className="text-xs uppercase tracking-wider" style={{color:"rgba(255,255,255,0.50)"}}>{c.label}</div>
                    <div className="font-semibold text-white">{c.value}</div>
                    <div className="text-xs" style={{color:"rgba(255,255,255,0.40)"}}>{c.sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="rounded-3xl p-8 shadow-2xl" style={{background:"rgba(255,255,255,0.08)", backdropFilter:"blur(14px)", border:"1px solid rgba(255,255,255,0.14)"}}>
            {status === "sent" ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-white text-2xl font-bold mb-3">Submitted Successfully!</h3>
                <p style={{color:"rgba(255,255,255,0.70)"}}>
                  Thank you <strong className="text-white">{form.name}</strong>! We've received your consultation request and will contact you within 2 hours at <strong className="text-white">{form.phone}</strong>.
                </p>
                <div className="mt-6 p-4 rounded-xl text-sm" style={{background:"rgba(255,255,255,0.08)", color:"rgba(255,255,255,0.6)"}}>
                  Your request has been added to our CRM — a consultant will reach out shortly.
                </div>
              </div>
            ) : (
              <>
                <h3 className="text-white text-2xl font-bold mb-6" style={{fontFamily:"serif"}}>Book Free Consultation</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls} style={labelStyle}>Full Name *</label>
                      <input required type="text" placeholder="Your name" value={form.name}
                        onChange={e=>update("name",e.target.value)}
                        className={inputCls} style={inputStyle} />
                    </div>
                    <div>
                      <label className={labelCls} style={labelStyle}>Phone *</label>
                      <input required type="tel" placeholder="+92 XXX XXXXXXX" value={form.phone}
                        onChange={e=>update("phone",e.target.value)}
                        className={inputCls} style={inputStyle} />
                    </div>
                  </div>

                  <div>
                    <label className={labelCls} style={labelStyle}>Email Address *</label>
                    <input required type="email" placeholder="your@email.com" value={form.email}
                      onChange={e=>update("email",e.target.value)}
                      className={inputCls} style={inputStyle} />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls} style={labelStyle}>Destination</label>
                      <select value={form.destination} onChange={e=>update("destination",e.target.value)}
                        className={inputCls} style={{...inputStyle, ...selectStyle}}>
                        <option value="" style={{background:"#3D0808",color:"#fff"}}>Select Country</option>
                        {["Canada","UK","Australia","USA","Germany","UAE","New Zealand","Ireland","Portugal","Other"].map(c=>(
                          <option key={c} value={c} style={{background:"#3D0808",color:"#fff"}}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelCls} style={labelStyle}>Visa Type</label>
                      <select value={form.visaType} onChange={e=>update("visaType",e.target.value)}
                        className={inputCls} style={{...inputStyle, ...selectStyle}}>
                        <option value="" style={{background:"#3D0808",color:"#fff"}}>Visa Type</option>
                        {["Visit Visa","Student Visa","Work Visa","PR/Immigration","Business Visa","Family Visa"].map(v=>(
                          <option key={v} value={v} style={{background:"#3D0808",color:"#fff"}}>{v}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelCls} style={labelStyle}>Your Message</label>
                    <textarea rows={3} placeholder="Tell us about your situation..." value={form.message}
                      onChange={e=>update("message",e.target.value)}
                      className={inputCls} style={{...inputStyle, resize:"none"}} />
                  </div>

                  {status === "error" && (
                    <div className="rounded-xl px-4 py-3 text-sm" style={{background:"rgba(220,50,50,0.2)", border:"1px solid rgba(220,50,50,0.4)", color:"#ffaaaa"}}>
                      ⚠ {errMsg}
                    </div>
                  )}

                  <button type="submit" disabled={status==="loading"}
                    className="w-full py-4 rounded-xl font-bold text-base transition-all shadow-lg mt-2 disabled:opacity-60"
                    style={{background:"#fff", color:"#9B1B1B"}}>
                    {status === "loading" ? "Submitting..." : "Book Free Consultation →"}
                  </button>
                  <p className="text-xs text-center" style={{color:"rgba(255,255,255,0.40)"}}>🔒 100% Confidential · No Spam · No Obligation</p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
