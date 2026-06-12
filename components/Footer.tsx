export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{background:"#0F0404", borderTop:"1px solid rgba(255,255,255,0.06)"}}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-lg" style={{background:"#9B1B1B", fontFamily:"serif"}}>B</div>
            <div>
              <div className="font-bold text-lg" style={{color:"#ffffff"}}>BetterLife</div>
              <div className="text-xs font-semibold tracking-widest uppercase" style={{color:"#C42B2B"}}>Advisors</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-5" style={{color:"rgba(255,255,255,0.5)"}}>Pakistan's trusted visa and immigration consultants since 2010. Building better futures, one visa at a time.</p>
          <div className="flex gap-3">
            {["FB","IG","TW","LI","YT"].map(s => (
              <a key={s} href="#" className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all" style={{background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.12)", color:"rgba(255,255,255,0.6)"}}>{s}</a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold mb-5 text-sm uppercase tracking-widest" style={{color:"#ffffff"}}>Services</h4>
          <ul className="space-y-2.5">
            {["Visit Visa","Student Visa","Work Visa","Permanent Residency","Business Immigration","Family Visa","Visa Appeal","Document Attestation"].map(s=>(
              <li key={s}><a href="#services" className="text-sm transition-colors" style={{color:"rgba(255,255,255,0.55)"}}>{s}</a></li>
            ))}
          </ul>
        </div>

        {/* Destinations */}
        <div>
          <h4 className="font-bold mb-5 text-sm uppercase tracking-widest" style={{color:"#ffffff"}}>Top Destinations</h4>
          <ul className="space-y-2.5">
            {[["🇨🇦","Canada"],["🇬🇧","United Kingdom"],["🇦🇺","Australia"],["🇺🇸","USA"],["🇩🇪","Germany"],["🇮🇪","Ireland"],["🇳🇿","New Zealand"],["🇦🇪","UAE"]].map(([f,n])=>(
              <li key={n}><a href="#countries" className="text-sm transition-colors" style={{color:"rgba(255,255,255,0.55)"}}>{f} {n}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-5 text-sm uppercase tracking-widest" style={{color:"#ffffff"}}>Contact</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 text-sm" style={{color:"rgba(255,255,255,0.55)"}}>
              <span style={{color:"#9B1B1B"}} className="mt-0.5">📍</span> Office 3B, Business Square, MM Alam Road, Lahore 54000
            </li>
            <li className="flex gap-3 text-sm" style={{color:"rgba(255,255,255,0.55)"}}>
              <span style={{color:"#9B1B1B"}}>📞</span> +923085153073
            </li>
            <li className="flex gap-3 text-sm" style={{color:"rgba(255,255,255,0.55)"}}>
              <span style={{color:"#9B1B1B"}}>📧</span> hhshahid26@gmail.com
            </li>
            <li className="flex gap-3 text-sm" style={{color:"rgba(255,255,255,0.55)"}}>
              <span style={{color:"#9B1B1B"}}>🕐</span> Mon–Sat: 9:00 AM – 7:00 PM
            </li>
          </ul>
          <a href="#contact" className="inline-block mt-6 btn-red px-5 py-2.5 rounded-xl text-sm font-bold text-white">Get Free Advice</a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-5 px-4" style={{borderTop:"1px solid rgba(255,255,255,0.06)"}}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs" style={{color:"rgba(255,255,255,0.35)"}}>
          <span style={{color:"rgba(255,255,255,0.4)"}}>© {year} BetterLife Advisors. All rights reserved.</span>
          <div className="flex gap-5">
            {["Privacy Policy","Terms of Service","Disclaimer"].map(l=>(
              <a key={l} href="#" className="transition-colors hover:underline" style={{color:"rgba(255,255,255,0.4)"}}>{l}</a>
            ))}
          </div>
          <div className="flex gap-2 items-center">
            <span style={{color:"rgba(255,255,255,0.25)"}}>Certified:</span>
            {["ICCRC","OISC","ISO"].map(b=>(
              <span key={b} className="rounded px-2 py-0.5 text-[10px]" style={{border:"1px solid rgba(255,255,255,0.12)", color:"rgba(255,255,255,0.35)"}}>{b}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
