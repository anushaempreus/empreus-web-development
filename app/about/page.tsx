import Link from "next/link"


// ─── app/web-development/about/page.tsx ─────────────────────────────────────
export const metadata = {
  title: "About Us | Canberra Web Design Studio",
  description:
    "Empreus Website Development is a Canberra-based web design studio. Small, hands-on team. Fixed prices. Local support. Building websites for Australian businesses since 2014.",
  openGraph: {
    title: "About Empreus | Canberra Web Design Studio",
    description: "Small, hands-on Canberra web design team. Fixed prices. Local support. Building websites for Australian businesses since 2014.",
    url: "https://empreus.website/about",
  },
}

const values = [
  {
    icon: "💬",
    title: "Plain English, Always",
    body: "We explain everything in terms you understand. No jargon, no technical waffle. You'll always know what we're doing, why we're doing it, and what it costs.",
  },
  {
    icon: "📋",
    title: "Fixed Prices, No Surprises",
    body: "Every project gets a fixed quote before we start. No hourly billing that spirals, no unexpected invoices. The price we quote is the price you pay.",
  },
  {
    icon: "📞",
    title: "Genuinely Responsive",
    body: "When you email or call, you get a reply the same day, usually within hours. We know how frustrating it is to chase your web developer. That won't happen with us.",
  },
  {
    icon: "📍",
    title: "Local and Accountable",
    body: "We're based in Canberra and we put our name on everything we build. If something's not right, we fix it. We care about our reputation because our clients are our neighbours.",
  },
  {
    icon: "🔑",
    title: "You Own Everything",
    body: "Your website, your domain, your content. It all belongs to you. We never hold sites hostage or make it difficult to leave. You stay because you want to, not because you're locked in.",
  },
  {
    icon: "🌱",
    title: "Long-Term Thinking",
    body: "We build websites to last and grow with your business. We'll never recommend something you don't need, and we'll always tell you the honest truth, even if it means a smaller project.",
  },
]

const stats = [
  { value: "10+", label: "Years in business" },
  { value: "100+", label: "Websites launched" },
  { value: "80+", label: "ACT clients" },
  { value: "4.9★", label: "Client rating" },
]

export default function WebDevAboutPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* Hero */}
      <section className="relative bg-brand-dark overflow-hidden py-24 px-[6%]">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.15), transparent 70%)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="text-orange text-xs font-semibold tracking-[0.2em] uppercase border border-[#2a1f14] bg-[#1c1612] px-4 py-2 rounded-full">
            About Empreus
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#e8ddd4] mt-6 leading-tight">
            Web design by people who understand small business
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-[6%]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left — image */}
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl opacity-10 pointer-events-none"
              style={{ background: "radial-gradient(ellipse, #f97316, transparent 70%)" }}
            />
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Empreus team"
              className="relative z-10 w-full h-[480px] object-cover rounded-2xl"
              style={{ boxShadow: "0 0 0 1px #e8e3dd" }}
            />
            <div className="absolute z-20 -bottom-6 -right-6 bg-white border border-brand-border rounded-2xl px-5 py-4 shadow-lg">
              <p className="text-brand-muted text-xs uppercase tracking-widest mb-1">Est.</p>
              <p className="text-4xl font-black text-brand-text">2014</p>
              <p className="text-orange text-sm font-semibold mt-1">Fyshwick, Canberra ACT</p>
            </div>
          </div>

          {/* Right — text */}
          <div>
            <span className="text-orange text-sm font-semibold tracking-widest uppercase">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-black text-brand-text mt-3 leading-tight">
              A Canberra technology company, built on doing things properly
            </h2>
            <div className="mt-6 flex flex-col gap-4 text-brand-muted leading-relaxed">
              <p>
                Empreus Website Development and Hosting is a division of Empreus Support Pty Ltd, a Canberra-based technology company that has been supporting Australian businesses with IT services, web solutions, and infrastructure for over a decade.
              </p>
              <p>
                We're not a faceless agency with a sales team in one city and developers in another. We're a small, hands-on team based in Fyshwick, ACT. When you work with us, you work directly with the people who design, build, and host your website. No account managers, no middlemen, no miscommunication.
              </p>
              <p>
                We specialise in websites for small and medium businesses, the kind of businesses that need a site that looks professional, ranks well, and doesn't break the bank. We've built websites for clinics, law firms, builders, restaurants, retailers, consultants, and trades, and we understand the pressures, budgets, and timelines that come with running a real business.
              </p>
              <p>
                Our approach is simple: listen carefully, design intentionally, build properly, host reliably, and support genuinely.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {stats.map((s) => (
                <div key={s.label} className="bg-orange-pale border border-orange-light rounded-xl p-4 text-center">
                  <p className="text-2xl font-black text-orange">{s.value}</p>
                  <p className="text-brand-muted text-xs mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-[6%] bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange text-sm font-semibold tracking-widest uppercase">How We Work</span>
            <h2 className="text-4xl font-black text-[#e8ddd4] mt-3">The things we believe in</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-[#0f0d0b] border border-[#2a1f14] rounded-2xl p-8 hover:border-orange transition-all duration-300 group flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1c1612] border border-[#2a1f14] flex items-center justify-center text-xl group-hover:border-orange transition-colors duration-300">
                  {v.icon}
                </div>
                <h3 className="text-[#e8ddd4] font-bold group-hover:text-orange transition-colors duration-300">
                  {v.title}
                </h3>
                <p className="text-[#a07860] text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[6%] bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-brand-text leading-tight">
            Let's build your website together
          </h2>
          <p className="text-brand-muted mt-4 leading-relaxed">
            We'd love to hear about your business and what you need. Reach out for a friendly, no-obligation chat.
          </p>
          <Link
            href="/web-development/contact"
            className="inline-block mt-8 bg-orange hover:bg-orange-dark font-semibold px-8 py-3 rounded-full text-sm transition-colors duration-300"
            style={{ color: "#ffffff" }}
          >
            Get in Touch
          </Link>
        </div>
      </section>

    </main>
  )
}