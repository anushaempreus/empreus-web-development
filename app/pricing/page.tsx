import type { Metadata } from "next"
import Link from "next/link"
import FadeIn from "@/components/FadeIn"

export const metadata: Metadata = {
  title: "Website Pricing | Fixed-Price Packages",
  description:
    "Transparent, fixed-price website packages from $2,500. Starter, Business, and E-Commerce options. Managed hosting from $49/month. No hidden fees.",
  openGraph: {
    title: "Website Pricing | Empreus Web Development",
    description: "Transparent, fixed-price website packages from $2,500. Managed hosting from $49/month. No hidden fees.",
    url: "https://empreus.website/pricing",
  },
}

const websitePackages = [
  {
    tier: "Starter",
    name: "Essential Website",
    price: "From $2,500",
    gst: "+ GST",
    description: "A clean, professional website for businesses that need a strong online presence without the complexity. Perfect for trades, consultants, and service providers.",
    popular: false,
    timeline: "Delivered in 3 to 4 weeks",
    features: [
      "Up to 5 pages (Home, About, Services, Contact, etc.)",
      "Custom design, no templates",
      "Fully mobile-responsive",
      "Contact form with email notifications",
      "On-page SEO setup",
      "Google Analytics and Search Console",
      "SSL certificate included",
      "2 rounds of design revisions",
    ],
  },
  {
    tier: "Business",
    name: "Growth Website",
    price: "From $5,000",
    gst: "+ GST",
    description: "A feature-rich website built to generate leads and grow your business. Ideal for established businesses, clinics, law firms, and multi-service companies.",
    popular: true,
    timeline: "Delivered in 4 to 6 weeks",
    features: [
      "Up to 15 pages with custom layouts",
      "Premium custom design",
      "WordPress CMS so you can edit content yourself",
      "Blog and news section",
      "Advanced contact forms and lead capture",
      "Google Business and local SEO optimisation",
      "Speed optimisation (Core Web Vitals)",
      "Social media integration",
      "3 rounds of design revisions",
    ],
  },
  {
    tier: "Commerce",
    name: "Online Store",
    price: "From $7,500",
    gst: "+ GST",
    description: "A fully functional e-commerce store built to sell. For businesses ready to take orders online with secure payment processing and shipping integration.",
    popular: false,
    timeline: "Delivered in 6 to 8 weeks",
    features: [
      "WooCommerce or Shopify build",
      "Product catalogue setup (up to 100 products)",
      "Secure checkout with Stripe and PayPal",
      "Shipping and tax configuration",
      "Inventory management",
      "Order confirmation emails",
      "Customer account area",
      "SEO-optimised product pages",
    ],
  },
]

const hostingPlans = [
  {
    tier: "Essential",
    name: "Hosting Only",
    price: "$49",
    period: "/month + GST",
    description: "Reliable managed hosting with daily backups, SSL, and security monitoring. For businesses that handle their own content updates.",
    popular: false,
    features: [
      "Australian-optimised hosting",
      "Daily automated backups (30-day retention)",
      "SSL certificate (auto-renewed)",
      "Uptime monitoring (60-second checks)",
      "Security firewall and malware scanning",
      "Email support (next business day)",
    ],
  },
  {
    tier: "Growth",
    name: "Hosting + Care",
    price: "$99",
    period: "/month + GST",
    description: "Everything in Essential, plus WordPress updates, content changes, and priority support. The full peace-of-mind package for busy business owners.",
    popular: true,
    features: [
      "Everything in Essential",
      "WordPress core, theme and plugin updates",
      "Staging environment for safe testing",
      "Up to 1 hour of content changes per month",
      "Performance optimisation",
      "Priority support (same business day)",
      "Monthly performance report",
    ],
  },
  {
    tier: "Premium",
    name: "Hosting + Full Support",
    price: "$199",
    period: "/month + GST",
    description: "For businesses that need regular updates, ongoing improvements, and a dedicated web partner who knows their site inside out.",
    popular: false,
    features: [
      "Everything in Growth",
      "Up to 3 hours of development or changes per month",
      "SEO monitoring and quarterly recommendations",
      "Conversion tracking and analytics review",
      "Priority phone and email support",
      "Quarterly strategy review call",
    ],
  },
]

const alwaysIncluded = [
  {
    icon: "💬",
    title: "Free Consultation and Quote",
    body: "A no-obligation conversation about your business and your website needs, followed by a clear, fixed-price quote within 48 hours.",
  },
  {
    icon: "🔑",
    title: "Full Ownership",
    body: "You own your website, your domain, your content, and your data. We provide all login credentials and full access from day one. No lock-in, ever.",
  },
  {
    icon: "🛠️",
    title: "Post-Launch Support",
    body: "Every website project includes 30 days of free post-launch support. If something needs fixing or tweaking after go-live, we're on it at no extra cost.",
  },
]

export default function PricingPage() {
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
            Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#e8ddd4] mt-6 leading-tight">
            Clear pricing, real value
          </h1>
          <p className="text-[#a07860] mt-5 text-lg leading-relaxed">
            No hidden fees, no hourly billing, no surprises. Every project is quoted as a fixed price before we start and every hosting plan is a simple monthly fee with everything included.
          </p>
        </FadeIn>
      </section>

      {/* Website packages */}
      <section className="py-24 px-[6%]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-black text-brand-text">Website Design and Development</h2>
            <p className="text-brand-muted mt-3">One-off project fee. Fixed price. No ongoing lock-in unless you choose our hosting.</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {websitePackages.map((p, i) => (
              <FadeIn key={p.tier} delay={i * 0.1} direction="up">
                <div className={`relative rounded-2xl border flex flex-col h-full ${p.popular ? "border-orange shadow-lg shadow-orange/10" : "border-brand-border"}`}>
                  {p.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-orange text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">Most Popular</span>
                    </div>
                  )}
                  <div className={`p-8 rounded-t-2xl ${p.popular ? "bg-orange-pale" : "bg-white"}`}>
                    <p className="text-orange text-xs font-bold uppercase tracking-widest">{p.tier}</p>
                    <h3 className="text-brand-text font-black text-2xl mt-1">{p.name}</h3>
                    <div className="flex items-end gap-1 mt-4">
                      <span className="text-3xl font-black text-brand-text">{p.price}</span>
                      <span className="text-brand-muted text-sm mb-1">{p.gst}</span>
                    </div>
                    <p className="text-brand-muted text-sm mt-3 leading-relaxed">{p.description}</p>
                    <p className="text-orange text-xs font-semibold mt-3">{p.timeline}</p>
                  </div>
                  <div className="p-8 flex flex-col gap-3 flex-1 bg-white rounded-b-2xl">
                    {p.features.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <span className="text-orange mt-0.5 shrink-0">✓</span>
                        <span className="text-brand-muted text-sm leading-relaxed">{f}</span>
                      </div>
                    ))}
                    <Link
                      href="/contact"
                      className={`mt-6 text-center font-semibold px-6 py-3 rounded-full text-sm transition-colors duration-300 ${p.popular ? "bg-orange hover:bg-orange-dark" : "border border-brand-border hover:border-orange hover:text-orange text-brand-muted"}`}
                      style={p.popular ? { color: "#ffffff" } : {}}
                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Hosting plans */}
      <section className="py-24 px-[6%] bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#e8ddd4]">Managed Hosting and Care Plans</h2>
            <p className="text-[#a07860] mt-3">Monthly plans. Cancel anytime. Includes everything your website needs to stay fast, secure, and up to date.</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hostingPlans.map((p, i) => (
              <FadeIn key={p.tier} delay={i * 0.1} direction="up">
                <div className={`relative rounded-2xl border flex flex-col bg-[#0f0d0b] h-full ${p.popular ? "border-orange" : "border-[#2a1f14]"}`}>
                  {p.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-orange text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">Most Popular</span>
                    </div>
                  )}
                  <div className="p-8">
                    <p className="text-orange text-xs font-bold uppercase tracking-widest">{p.tier}</p>
                    <h3 className="text-[#e8ddd4] font-black text-2xl mt-1">{p.name}</h3>
                    <div className="flex items-end gap-1 mt-4">
                      <span className="text-3xl font-black text-[#e8ddd4]">{p.price}</span>
                      <span className="text-[#5a4535] text-sm mb-1">{p.period}</span>
                    </div>
                    <p className="text-[#a07860] text-sm mt-3 leading-relaxed">{p.description}</p>
                  </div>
                  <div className="px-8 pb-8 flex flex-col gap-3 flex-1">
                    {p.features.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <span className="text-orange mt-0.5 shrink-0">✓</span>
                        <span className="text-[#a07860] text-sm leading-relaxed">{f}</span>
                      </div>
                    ))}
                    <Link
                      href="/contact"
                      className={`mt-6 text-center font-semibold px-6 py-3 rounded-full text-sm transition-colors duration-300 ${p.popular ? "bg-orange hover:bg-orange-dark" : "border border-[#2a1f14] text-[#a07860] hover:border-orange hover:text-orange"}`}
                      style={p.popular ? { color: "#ffffff" } : {}}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Always included */}
      <section className="py-24 px-[6%]">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl font-black text-brand-text">Always Included</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {alwaysIncluded.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1} direction="up">
                <div className="text-center flex flex-col items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-orange-pale border border-orange-light flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <h3 className="text-brand-text font-bold">{item.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[6%] bg-orange-pale">
        <FadeIn className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-brand-text leading-tight">
            Get a quote for your project
          </h2>
          <p className="text-brand-muted mt-4 leading-relaxed">
            Tell us about your business and what you need. We'll respond within 24 hours with a clear, fixed-price proposal.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-orange hover:bg-orange-dark font-semibold px-8 py-3 rounded-full text-sm transition-colors duration-300"
            style={{ color: "#ffffff" }}
          >
            Request a Quote
          </Link>
        </FadeIn>
      </section>

    </main>
  )
}