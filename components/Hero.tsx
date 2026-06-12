export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src="/images/hero.jpg" alt="Visa consultancy" className="w-full h-full object-cover object-center" />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-red/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/6 w-48 h-48 rounded-full bg-red/15 blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 w-full">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-2 mb-6 fade-in">
            <span className="w-2 h-2 rounded-full bg-red-light animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Pakistan's Trusted Visa Experts Since 2010</span>
          </div>

          {/* Headline */}
          <h1 className="hero-h text-white font-serif font-bold leading-tight mb-6 fade-up" style={{fontSize:"clamp(2.2rem,5vw,3.8rem)"}}>
            Your Dream of <br/>
            <span style={{color:"#e05252"}}>Living Abroad</span> <br/>
            Starts Here
          </h1>

          <p className="text-white/80 text-lg mb-10 max-w-xl leading-relaxed fade-up" style={{animationDelay:".15s"}}>
            From Pakistan to your dream destination — we handle every step of your visa application with expert guidance, highest success rates, and complete peace of mind.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-14 fade-up" style={{animationDelay:".25s"}}>
            <a href="#contact" className="btn-red px-8 py-4 rounded-xl font-bold text-base shadow-lg">
              Get Free Consultation →
            </a>
            <a href="#services" className="btn-outline px-8 py-4 rounded-xl font-bold text-base">
              Explore Services
            </a>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 fade-up" style={{animationDelay:".35s"}}>
            {[
              { n:"15+", l:"Years Experience" },
              { n:"12,000+", l:"Visas Approved" },
              { n:"95%", l:"Success Rate" },
              { n:"50+", l:"Countries Covered" },
            ].map(s => (
              <div key={s.l} className="glass px-5 py-3 rounded-xl text-center min-w-[110px]">
                <div className="text-2xl font-bold text-white font-serif">{s.n}</div>
                <div className="text-white/60 text-xs mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute bottom-8 right-8 hide-sm glass rounded-2xl p-4 max-w-[200px] fade-in" style={{animationDelay:".5s"}}>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-red flex items-center justify-center text-white font-bold">✓</div>
          <div>
            <div className="text-white text-sm font-bold">Last 30 days</div>
            <div className="text-white/50 text-xs">Applications</div>
          </div>
        </div>
        <div className="text-white/90 text-xs">
          <span className="text-green-400 font-bold">↑ 234 </span>new visas approved
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 text-xs fade-in">
        <span>Scroll Down</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  );
}
