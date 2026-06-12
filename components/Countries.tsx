const countries = [
  { name:"Canada",        flag:"🇨🇦", visas:["PR","Student","Work","Visit"],   popular:true },
  { name:"United Kingdom",flag:"🇬🇧", visas:["Work","Student","Visit","Family"], popular:true },
  { name:"Australia",     flag:"🇦🇺", visas:["PR","Student","Work","Visit"],   popular:true },
  { name:"USA",           flag:"🇺🇸", visas:["Work","Student","B1/B2","H1B"],  popular:true },
  { name:"Germany",       flag:"🇩🇪", visas:["Work","Student","Residence"],    popular:false },
  { name:"UAE",           flag:"🇦🇪", visas:["Work","Business","Visit"],       popular:false },
  { name:"New Zealand",   flag:"🇳🇿", visas:["PR","Student","Work"],           popular:false },
  { name:"Ireland",       flag:"🇮🇪", visas:["Work","Student","Critical Skills"], popular:false },
  { name:"Portugal",      flag:"🇵🇹", visas:["D7","NHR","Student"],            popular:false },
  { name:"Malta",         flag:"🇲🇹", visas:["EU Residency","Student","Work"], popular:false },
  { name:"Turkey",        flag:"🇹🇷", visas:["Business","Investment","Visit"],  popular:false },
  { name:"Malaysia",      flag:"🇲🇾", visas:["MM2H","Work","Student"],         popular:false },
];

export default function Countries() {
  return (
    <section id="countries" className="py-20" style={{background:"#f9f9f9"}}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="tag">Destinations</span>
          <h2 className="text-4xl font-serif font-bold mt-4 mb-4 text-gray-900">
            50+ Countries We <span style={{color:"#9B1B1B"}}>Cover</span>
          </h2>
          <div className="divider mx-auto mb-4" />
          <p className="text-gray-500 max-w-xl mx-auto">
            From the most popular destinations to emerging opportunities — we have expertise across the globe.
          </p>
        </div>

        {/* Popular badge */}
        <div className="flex justify-center gap-3 mb-8">
          <span className="inline-flex items-center gap-1.5 bg-red/10 text-red rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
            🔥 Most Popular Destinations
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {countries.map((c, i) => (
            <div key={i} className="country-card bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center relative">
              {c.popular && (
                <span className="absolute -top-2 -right-2 bg-red text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow">HOT</span>
              )}
              <div className="text-4xl mb-2">{c.flag}</div>
              <div className="font-bold text-gray-800 text-sm mb-2">{c.name}</div>
              <div className="flex flex-wrap gap-1 justify-center">
                {c.visas.slice(0,2).map((v,j) => (
                  <span key={j} className="text-[9px] bg-red/8 text-red/80 rounded px-1.5 py-0.5 font-medium border border-red/15">{v}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* More countries */}
        <div className="text-center mt-10">
          <p className="text-gray-500 mb-4">And 38+ more countries including Schengen states, Middle East, Asia-Pacific</p>
          <a href="#contact" className="inline-flex items-center gap-2 btn-red px-7 py-3 rounded-xl font-bold text-sm">
            Check Your Country Eligibility →
          </a>
        </div>
      </div>
    </section>
  );
}
