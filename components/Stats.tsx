const stats = [
  { icon:"🎯", number:"95%",    label:"Visa Success Rate",         sub:"Industry-leading approval rate" },
  { icon:"📋", number:"12,000+", label:"Visas Processed",          sub:"Successfully approved cases" },
  { icon:"🌍", number:"50+",    label:"Countries Covered",         sub:"Global destinations accessible" },
  { icon:"⭐", number:"15+",    label:"Years of Experience",       sub:"Trusted experts since 2010" },
  { icon:"👥", number:"200+",   label:"Corporate Clients",         sub:"Companies trust our services" },
  { icon:"🏆", number:"98%",    label:"Client Satisfaction",       sub:"Based on verified reviews" },
];

export default function Stats() {
  return (
    <section className="section-red py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center group">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-white font-bold text-2xl font-serif group-hover:text-red-light transition-colors">{s.number}</div>
              <div className="text-white/90 text-sm font-semibold mt-1">{s.label}</div>
              <div className="text-white/50 text-xs mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
