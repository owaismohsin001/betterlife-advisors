"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Countries", href: "#countries" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div style={{background:"#6B0F0F"}} className="text-white text-xs py-2 px-4 flex justify-between items-center hide-sm">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-white">
            <svg className="w-3.5 h-3.5 opacity-80" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
            +923085153073
          </span>
          <span className="flex items-center gap-1.5 text-white">
            <svg className="w-3.5 h-3.5 opacity-80" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
            hhshahid26@gmail.com
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white opacity-80">Mon–Sat: 9AM–7PM</span>
          <div className="flex gap-2">
            {["facebook","instagram","twitter","linkedin"].map(s => (
              <a key={s} href="#" className="w-6 h-6 rounded-full flex items-center justify-center transition-colors" style={{background:"rgba(255,255,255,0.15)"}}>
                <span className="sr-only">{s}</span>
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  {s==="facebook" && <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>}
                  {s==="instagram" && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>}
                  {s==="twitter" && <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>}
                  {s==="linkedin" && <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav style={{background: scrolled ? "#0F0404" : "rgba(15,4,4,0.97)"}} className="sticky top-0 z-50 transition-all duration-300 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between" style={{padding:"12px 16px"}}>
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-lg" style={{background:"#9B1B1B", fontFamily:"serif"}}>B</div>
            <div>
              <div className="font-bold text-lg leading-tight" style={{color:"#ffffff"}}>BetterLife</div>
              <div className="text-xs font-semibold tracking-widest uppercase" style={{color:"#C42B2B"}}>Advisors</div>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <a key={l.href} href={l.href} className="nav-link text-sm font-medium transition-colors" style={{color:"rgba(255,255,255,0.85)"}}
                onMouseEnter={e=>(e.currentTarget.style.color="#fff")}
                onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.85)")}
              >{l.label}</a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+923085153073" className="text-sm font-medium" style={{color:"rgba(255,255,255,0.85)"}}>
              📞 +923085153073
            </a>
            <a href="#contact" className="btn-red px-5 py-2.5 rounded-lg text-sm font-semibold text-white">Free Consultation</a>
          </div>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2" style={{color:"#ffffff"}}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t px-4 py-4 flex flex-col gap-3" style={{background:"#3D0808", borderColor:"rgba(255,255,255,0.1)"}}>
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-medium py-2 border-b" style={{color:"rgba(255,255,255,0.9)", borderColor:"rgba(255,255,255,0.1)"}}>{l.label}</a>
            ))}
            <a href="#contact" className="btn-red text-center px-5 py-3 rounded-lg font-semibold mt-2 text-white">Free Consultation</a>
          </div>
        )}
      </nav>
    </>
  );
}
