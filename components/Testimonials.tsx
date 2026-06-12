"use client";
const testimonials = [
  {
    name:"Ahsan Malik",
    role:"Software Engineer",
    country:"🇨🇦 Canada PR",
    avatar:"/images/av1.jpg",
    rating:5,
    text:"BetterLife Advisors made my Canada PR dream come true. The team was incredibly professional, responsive, and guided me through every step. Got my PR in under 12 months!",
  },
  {
    name:"Sarah Khan",
    role:"Medical Student",
    country:"🇬🇧 UK Student Visa",
    avatar:"/images/av2.jpg",
    rating:5,
    text:"I was nervous about applying for a UK student visa — I'd heard so many rejection stories. But their team prepared my application perfectly. Approved first try!",
  },
  {
    name:"Umar Farooq",
    role:"Business Owner",
    country:"🇦🇺 Australia Business Visa",
    avatar:"/images/av3.jpg",
    rating:5,
    text:"Excellent service for my Australia business visa. They understood my specific case and presented it in the best light. Professional, prompt and results-driven team.",
  },
  {
    name:"Hina Siddiqui",
    role:"Nurse",
    country:"🇮🇪 Ireland Work Visa",
    avatar:"/images/av4.jpg",
    rating:5,
    text:"The team at BetterLife helped me secure a Critical Skills work visa for Ireland. The process was smooth, and I was kept informed throughout. Highly recommend!",
  },
  {
    name:"Bilal Ahmed",
    role:"IT Professional",
    country:"🇩🇪 Germany Work Visa",
    avatar:"/images/av5.jpg",
    rating:5,
    text:"Getting a German work visa felt impossible — but BetterLife made it happen in 4 months. Their knowledge of German immigration law is outstanding.",
  },
  {
    name:"Zara Hussain",
    role:"Accountant",
    country:"🇳🇿 New Zealand PR",
    avatar:"/images/av6.jpg",
    rating:5,
    text:"From free consultation to PR approval — the entire journey with BetterLife was seamless. Their attention to detail and personal touch made all the difference.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 section-gray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="tag">Success Stories</span>
          <h2 className="text-4xl font-serif font-bold mt-4 mb-4 text-gray-900">
            Real People, Real <span style={{color:"#9B1B1B"}}>Results</span>
          </h2>
          <div className="divider mx-auto mb-4" />
          <p className="text-gray-500 max-w-xl mx-auto">Join thousands of families who trusted BetterLife Advisors with their most important decision.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-md card-hover border border-gray-100">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({length:t.rating}).map((_,j)=>(
                  <span key={j} className="text-gold text-base">★</span>
                ))}
              </div>
              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              {/* Author */}
              <div className="flex items-center gap-3 border-t pt-4">
                <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover border-2 border-red/20" onError={(e)=>{ (e.target as HTMLImageElement).src="https://ui-avatars.com/api/?name="+encodeURIComponent(t.name)+"&background=9B1B1B&color=fff&size=44" }} />
                <div className="flex-1">
                  <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
                <span className="text-xs font-semibold bg-red/10 text-red rounded-full px-3 py-1">{t.country}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust logos */}
        <div className="mt-14 text-center">
          <p className="text-gray-400 text-sm mb-6 uppercase tracking-widest font-semibold">Accredited & Recognised By</p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {["ICCRC", "OISC", "RACA", "ISO 9001:2015", "PBA"].map(badge => (
              <div key={badge} className="bg-white border border-gray-200 rounded-xl px-6 py-3 shadow-sm">
                <span className="text-gray-600 font-bold text-sm">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
