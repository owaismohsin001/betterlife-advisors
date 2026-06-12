const services = [
  {
    icon: "✈️",
    title: "Visit Visa",
    desc: "Short-term visit visas for tourism, family visits, and business trips to 50+ countries. Fast processing, high approval rate.",
    items: ["Tourist Visa", "Family Visit", "Business Visit", "Medical Visit"],
    color: "#9B1B1B",
    img: "/images/visit-visa.jpg",
  },
  {
    icon: "🎓",
    title: "Student Visa",
    desc: "Study abroad with complete support from university selection to visa approval. Access top universities worldwide.",
    items: ["University Admissions", "Student Visa Filing", "Pre-Departure Prep", "Post-Arrival Support"],
    color: "#7a1515",
    img: "/images/student-visa.jpg",
  },
  {
    icon: "💼",
    title: "Work Visa",
    desc: "Secure legal employment in your dream country. We connect you with employers and handle all immigration paperwork.",
    items: ["Job Offer Assistance", "Work Permit", "Skilled Worker Visa", "Intra-Company Transfer"],
    color: "#5e1010",
    img: "/images/work-visa.jpg",
  },
  {
    icon: "🏠",
    title: "Permanent Residency",
    desc: "Build a permanent future abroad. We guide you through every step of the PR and citizenship application process.",
    items: ["PR Assessment", "Express Entry", "Family Sponsorship", "Citizenship Guidance"],
    color: "#8a1616",
    img: "/images/pr-visa.jpg",
  },
  {
    icon: "💰",
    title: "Business Immigration",
    desc: "Invest and expand your business globally. We assist entrepreneurs and investors with business migration programs.",
    items: ["Investor Visa", "Entrepreneur Visa", "Business Setup", "Company Sponsorship"],
    color: "#6B0F0F",
    img: "/images/business-visa.jpg",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Visa",
    desc: "Reunite with your loved ones abroad. Spouse, dependent children, parents — we help bring families together.",
    items: ["Spouse Visa", "Dependent Visa", "Parent Visa", "Fiancé Visa"],
    color: "#7d1212",
    img: "/images/family-visa.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="tag">Our Services</span>
          <h2 className="text-4xl font-serif font-bold mt-4 mb-4 text-gray-900">
            Complete Visa & Immigration <span style={{color:"#9B1B1B"}}>Solutions</span>
          </h2>
          <div className="divider mx-auto mb-4" />
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            We offer end-to-end immigration services tailored to your specific needs — from consultation to final approval.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="card-hover rounded-2xl overflow-hidden shadow-md border border-gray-100 group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0" style={{background:`linear-gradient(180deg, transparent 40%, ${s.color}cc 100%)`}} />
                <div className="absolute bottom-4 left-4 text-4xl">{s.icon}</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-red transition-colors">{s.title}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{s.desc}</p>
                <ul className="space-y-1.5 mb-5">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-4 h-4 rounded-full bg-red/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-2.5 h-2.5 text-red" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="inline-flex items-center gap-2 font-semibold text-sm transition-colors hover:gap-3" style={{color:"#9B1B1B"}}>
                  Apply Now <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
