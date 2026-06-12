const features = [
  { icon:"🎯", title:"95% Approval Rate",      desc:"Our expert preparation and attention to detail means your application stands the best possible chance." },
  { icon:"⚡", title:"Fast Processing",          desc:"We know every shortcut and deadline. We file fast, follow up faster, and keep your application moving." },
  { icon:"🔒", title:"Confidential & Secure",   desc:"Your data is safe with us. We follow strict data privacy standards and never share your information." },
  { icon:"📞", title:"Dedicated Case Manager",  desc:"One expert handles your case start to finish. No passing you around — just consistent, personal service." },
  { icon:"💯", title:"Transparent Pricing",     desc:"No hidden fees. No surprises. We quote upfront and stick to it — exactly what you agreed to pay." },
  { icon:"🌐", title:"Global Network",           desc:"Our partnerships with embassies, employers, and universities worldwide give you unmatched access." },
  { icon:"📜", title:"Certified Consultants",   desc:"All our consultants are ICCRC/OISC certified with years of hands-on immigration experience." },
  { icon:"🔄", title:"Refusal Appeal Support",   desc:"Got a visa refusal before? We specialize in turning refusals into approvals with our appeal expertise." },
];

export default function WhyUs() {
  return (
    <section id="about" className="py-20" style={{background:"#0F0404"}}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — image + badge */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/images/team.jpg" alt="Our team" className="w-full h-[480px] object-cover" />
            </div>
            {/* Floating stats */}
            <div className="absolute -bottom-6 -right-6 glass-dark rounded-2xl p-5 shadow-2xl">
              <div className="text-white font-bold text-3xl font-serif">15+</div>
              <div className="text-white/70 text-sm">Years of Excellence</div>
              <div className="flex mt-2 gap-0.5">
                {[1,2,3,4,5].map(i => <span key={i} className="text-gold text-sm">★</span>)}
              </div>
            </div>
            <div className="absolute -top-6 -left-6 bg-red rounded-2xl p-4 shadow-2xl text-center">
              <div className="text-white font-bold text-2xl font-serif">12K+</div>
              <div className="text-white/80 text-xs">Visas Approved</div>
            </div>
          </div>

          {/* Right — content */}
          <div>
            <span className="tag" style={{background:"rgba(255,255,255,.08)",color:"#e05252",borderColor:"rgba(255,255,255,.15)"}}>Why Choose Us</span>
            <h2 className="text-4xl font-serif font-bold mt-5 mb-5 text-white">
              Pakistan's Most <span style={{color:"#e05252"}}>Trusted</span> <br/>Immigration Partner
            </h2>
            <div className="divider mb-6" />
            <p className="text-white/60 mb-10 text-lg leading-relaxed">
              Since 2010, BetterLife Advisors has helped thousands of Pakistanis build better lives abroad. We don't just file paperwork — we build futures.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-red/20 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-red/40 transition-colors">{f.icon}</div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-0.5">{f.title}</div>
                    <div className="text-white/50 text-xs leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 btn-red px-7 py-3.5 rounded-xl font-bold text-sm mt-10">
              Start Your Application Today →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
