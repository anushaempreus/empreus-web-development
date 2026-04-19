import type { Metadata } from "next"
import Link from "next/link"
import FadeIn from "@/components/FadeIn"

export const metadata: Metadata = {
  title: "Website Hosting",
  description:
    "Reliable, fast website hosting managed by Empreus. We handle the infrastructure so you can focus on your business.",
  alternates: { canonical: "https://empreus.website/hosting" },
  openGraph: {
    url: "https://empreus.website/hosting",
    title: "Website Hosting | Empreus Web Development",
    description:
      "Managed website hosting for Canberra businesses. Fast, reliable, and locally supported.",
  },
}

const features = [
  {
    icon: "⚡",
    title: "Australian-Optimised Performance",
    body: "Your website hosted on fast, Australian-located infrastructure with global CDN distribution. Pages load in under 2 seconds for local visitors and stay fast for international audiences. LiteSpeed servers, SSD storage, and server-level caching come standard.",
    tags: ["AU servers", "CDN", "LiteSpeed", "SSD"],
  },
  {
    icon: "🛡️",
    title: "Enterprise-Grade Security",
    body: "Free SSL certificates, web application firewalls, DDoS protection, malware scanning, and brute-force prevention all included. We proactively patch vulnerabilities and monitor your site 24/7 so threats are neutralised before they become problems.",
    tags: ["SSL", "WAF", "DDoS", "24/7 monitoring"],
  },
  {
    icon: "💾",
    title: "Daily Automated Backups",
    body: "Your website is backed up every single day with 30-day retention. If anything goes wrong, a bad plugin update, a content mistake, or a security incident, we can restore your site to any point in the last month within minutes.",
    tags: ["Daily", "30-day retention", "Quick restore"],
  },
  {
    icon: "🔧",
    title: "Fully Managed Updates",
    body: "WordPress core, theme, and plugin updates are tested and applied by us on a regular schedule. We don't just click update all. We test in a staging environment first, verify nothing breaks, and then apply to your live site. Zero update anxiety.",
    tags: ["Staging tested", "WordPress", "Themes", "Plugins"],
  },
  {
    icon: "📊",
    title: "Uptime Monitoring and Alerts",
    body: "We monitor your website every 60 seconds from multiple locations. If your site goes down or responds slowly, we're alerted instantly and begin investigation, often resolving issues before you even notice. 99.9% uptime guaranteed.",
    tags: ["60-second checks", "Multi-location", "99.9% SLA"],
  },
  {
    icon: "🎧",
    title: "Priority Support",
    body: "Need a content change, a quick fix, or help with something urgent? Our hosting clients get priority support with same-business-day response times. Real people, based in Canberra, who know your website inside out. Not a ticket queue overseas.",
    tags: ["Same-day", "Canberra-based", "Human support"],
  },
]

const comparison = [
  { feature: "Server location", budget: "Overseas (US/Singapore)", empreus: "Australian infrastructure" },
  { feature: "Average page load", budget: "3 to 6 seconds", empreus: "Under 2 seconds" },
  { feature: "SSL certificate", budget: "Often extra cost", empreus: "Included and auto-renewed" },
  { feature: "Backups", budget: "Weekly or manual", empreus: "Daily, 30-day retention" },
  { feature: "WordPress updates", budget: "Your responsibility", empreus: "Tested and applied by us" },
  { feature: "Security monitoring", budget: "Basic or none", empreus: "24/7 firewall, malware scanning" },
  { feature: "Uptime guarantee", budget: "99% (8+ hours/year down)", empreus: "99.9% (under 1 hour/year)" },
  { feature: "Support", budget: "Overseas ticket queue", empreus: "Local, same-day response" },
  { feature: "Staging environment", budget: "Not included", empreus: "Included for safe testing" },
  { feature: "Who manages it", budget: "You (or nobody)", empreus: "We do, completely" },
]

export default function HostingPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* Hero */}
      <section className="relative bg-brand-dark overflow-hidden py-24 px-[6%]">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.15), transparent 70%)" }}
        />
        <FadeIn className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="text-orange text-xs font-semibold tracking-[0.2em] uppercase border border-[#2a1f14] bg-[#1c1612] px-4 py-2 rounded-full">
            Managed Hosting
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#e8ddd4] mt-6 leading-tight">
            Hosting that's fast, secure, and actually managed
          </h1>
          <p className="text-[#a07860] mt-5 text-lg leading-relaxed">
            Cheap hosting costs your business in other ways. Slow load times, security vulnerabilities, and hours lost to technical issues. Our managed hosting is built for businesses that can't afford downtime or compromise.
          </p>
          <FadeIn delay={0.2} direction="up">
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                href="/contact"
                className="bg-orange hover:bg-orange-dark font-semibold px-8 py-3 rounded-full text-sm transition-colors duration-300"
                style={{ color: "#ffffff" }}
              >
                Get Started
              </Link>
              <Link
                href="/pricing"
                className="border border-[#2a1f14] text-[#a07860] hover:border-orange hover:text-orange font-semibold px-8 py-3 rounded-full text-sm transition-colors duration-300"
              >
                View Hosting Plans
              </Link>
            </div>
          </FadeIn>
        </FadeIn>
      </section>

      {/* Features */}
      <section className="py-24 px-[6%]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={(i % 3) * 0.1} direction="up">
                <div className="bg-white border border-brand-border rounded-2xl p-8 hover:border-orange hover:shadow-md transition-all duration-300 group flex flex-col gap-4 h-full">
                  <span className="text-3xl">{f.icon}</span>
                  <h3 className="text-brand-text font-bold text-lg group-hover:text-orange transition-colors duration-300">{f.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed flex-1">{f.body}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {f.tags.map((t) => (
                      <span key={t} className="text-xs text-brand-muted border border-brand-border px-2 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 px-[6%] bg-brand-dark">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="text-orange text-sm font-semibold tracking-widest uppercase">Why Switch</span>
            <h2 className="text-4xl font-black text-[#e8ddd4] mt-3 leading-tight">
              How we compare to budget hosting
            </h2>
            <p className="text-[#a07860] mt-4 leading-relaxed">
              Not all hosting is created equal. Here's what you get with Empreus Managed Hosting that you won't find with cheap shared hosting providers.
            </p>
          </FadeIn>
          <FadeIn direction="up">
            <div className="rounded-2xl overflow-hidden border border-[#2a1f14]">
              <div className="grid grid-cols-3 bg-[#1c1612]">
                <div className="px-6 py-4 text-[#5a4535] text-xs font-bold uppercase tracking-widest">Feature</div>
                <div className="px-6 py-4 text-[#5a4535] text-xs font-bold uppercase tracking-widest text-center">Budget Hosting</div>
                <div className="px-6 py-4 text-orange text-xs font-bold uppercase tracking-widest text-center">Empreus Managed</div>
              </div>
              {comparison.map((row, i) => (
                <div key={row.feature} className={`grid grid-cols-3 border-t border-[#2a1f14] ${i % 2 === 0 ? "bg-brand-dark" : "bg-[#0d0b09]"}`}>
                  <div className="px-6 py-4 text-[#a07860] text-sm font-medium">{row.feature}</div>
                  <div className="px-6 py-4 text-[#5a4535] text-sm text-center">{row.budget}</div>
                  <div className="px-6 py-4 text-[#e8ddd4] text-sm text-center font-semibold">{row.empreus}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[6%] bg-white">
        <FadeIn className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-brand-text leading-tight">
            Ready to upgrade your hosting?
          </h2>
          <p className="text-brand-muted mt-4 leading-relaxed">
            We migrate your existing site for free. Zero downtime, zero hassle. Your visitors won't notice a thing, except faster load times.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-orange hover:bg-orange-dark font-semibold px-8 py-3 rounded-full text-sm transition-colors duration-300"
            style={{ color: "#ffffff" }}
          >
            Migrate My Site Free
          </Link>
        </FadeIn>
      </section>

    </main>
  )
}