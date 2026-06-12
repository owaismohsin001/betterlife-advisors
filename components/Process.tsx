const steps = [
  { n:"01", icon:"📋", title:"Free Consultation", desc:"Book a free 30-minute call with our experts. We assess your profile, goals, and the best visa pathway for you." },
  { n:"02", icon:"📁", title:"Document Preparation", desc:"We provide a personalized checklist and guide you through every document required for your specific visa category." },
  { n:"03", icon:"✍️", title:"Application Filing", desc:"Our certified consultants prepare and submit a flawless visa application, maximizing your chances of approval." },
  { n:"04", icon:"🔔", title:"Follow-Up & Tracking", desc:"We proactively follow up with embassies and immigration authorities, keeping you updated at every stage." },
  { n:"05", icon:"🎉", title:"Visa Approval", desc:"Celebrate your success! We also assist with pre-departure preparation, travel insurance, and arrival guidance." },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="tag">How It Works</span>
          <h2 className="text-4xl font-serif font-bold mt-4 mb-4 text-gray-900">
            Our Simple <span style={{color:"#9B1B1B"}}>5-Step Process</span>
          </h2>
          <div className="divider mx-auto mb-4" />
          <p className="text-gray-500 max-w-xl mx-auto">From your first call to holding your visa — we make the journey stress-free and transparent.</p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-red/30 to-transparent z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                {/* Icon circle */}
                <div className="relative mb-5">
                  <div className="w-16 h-16 rounded-full bg-red flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300" style={{boxShadow:"0 0 0 8px rgba(155,27,27,.1)"}}>
                    {s.icon}
                  </div>
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-darkbg text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">{s.n}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-base">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA under process */}
        <div className="text-center mt-14">
          <div className="inline-flex items-center gap-4 rounded-2xl px-8 py-5 shadow-lg" style={{background:"linear-gradient(135deg,#6B0F0F,#9B1B1B)"}}>
            <span className="text-3xl">🚀</span>
            <div className="text-left">
              <div className="text-white font-bold text-lg">Ready to start your journey?</div>
              <div className="text-white/70 text-sm">Book a free consultation — zero obligation</div>
            </div>
            <a href="#contact" className="btn-outline px-6 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap">Get Started</a>
          </div>
        </div>
      </div>
    </section>
  );
}
