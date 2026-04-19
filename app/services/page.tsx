import type { Metadata } from "next"
import Link from "next/link"
import FadeIn from "@/components/FadeIn"

export const metadata: Metadata = {
  title: "Web Design Services",
  description:
    "From branding and design to full Next.js builds — explore the web development services Empreus offers for Canberra businesses.",
  alternates: { canonical: "https://empreus.website/services" },
  openGraph: {
    url: "https://empreus.website/services",
    title: "Web Design Services | Empreus Web Development",
    description:
      "Explore web design, development, and maintenance services tailored for Canberra businesses.",
  },
}

const services = [
  {
    icon: "🎨",
    title: "Custom Website Design",
    body: "Every business deserves a website that looks like it belongs to them. We design original, brand-aligned layouts that reflect your identity and speak directly to your target audience. Clean aesthetics, clear navigation, and intentional visual hierarchy that guides visitors toward action.",
    tags: ["Bespoke design", "Mobile-first", "UI/UX", "Brand identity"],
  },
  {
    icon: "⚡",
    title: "WordPress Development",
    body: "WordPress powers over 40% of the web for good reason. We build WordPress sites that are clean under the hood, fast to load, and easy for non-technical users to update. No bloated page builders or plugin overload. Just solid, maintainable WordPress done right.",
    tags: ["Custom themes", "ACF Pro", "Gutenberg", "WooCommerce"],
  },
  {
    icon: "💻",
    title: "Static and Headless Sites",
    body: "For businesses that need blazing speed and bulletproof security, we build static sites and headless CMS architectures using modern frameworks. Your content is served from edge CDNs worldwide, meaning sub-second load times, zero server vulnerabilities, and near-perfect performance scores.",
    tags: ["Next.js", "Jamstack", "Headless CMS", "Vercel"],
  },
  {
    icon: "🛒",
    title: "E-Commerce Stores",
    body: "Sell products or services online with a store designed for conversion, not just display. We build WooCommerce and Shopify stores with secure checkout, inventory management, shipping calculators, and a shopping experience that makes it easy for customers to buy.",
    tags: ["WooCommerce", "Shopify", "Stripe", "PayPal"],
  },
  {
    icon: "📈",
    title: "SEO and Search Visibility",
    body: "A beautiful website that nobody can find is a missed opportunity. Every site we build includes foundational SEO: clean URL structures, proper heading hierarchy, optimised images, XML sitemaps, schema markup, meta descriptions, and Google Search Console setup.",
    tags: ["Technical SEO", "Local SEO", "Google Business", "Analytics"],
  },
  {
    icon: "🔒",
    title: "Website Security",
    body: "Cyber threats don't discriminate by business size. We harden every website with SSL certificates, security headers, firewall protection, malware scanning, brute-force prevention, and regular vulnerability patching. If something goes wrong, our backups mean you're never more than 24 hours from a full restore.",
    tags: ["SSL", "WAF", "Malware scanning", "Backups"],
  },
  {
    icon: "🔄",
    title: "Website Redesign and Migration",
    body: "Stuck with an outdated website? We handle complete redesigns, preserving your SEO equity, migrating your content, setting up proper redirects, and delivering a modern site that represents your business as it is today. We also migrate sites from other hosts with zero downtime.",
    tags: ["Redesign", "Content migration", "301 redirects", "SEO preservation"],
  },
  {
    icon: "📧",
    title: "Email and Domain Management",
    body: "We set up and manage your domain, DNS, professional email, and authentication records so your emails land in inboxes instead of spam folders. Whether you're on Google Workspace or Microsoft 365, we configure everything correctly and provide ongoing support.",
    tags: ["DNS", "Email auth", "Google Workspace", "Microsoft 365"],
  },
  {
    icon: "📊",
    title: "Analytics and Conversion Tracking",
    body: "Know exactly how your website is performing. We set up Google Analytics 4, Google Tag Manager, conversion tracking, goal funnels, and custom dashboards so you can see where visitors come from and which pages drive the most enquiries or sales.",
    tags: ["GA4", "GTM", "Conversion goals", "Reporting"],
  },
]

export default function ServicesPage() {
  return (
    <main className="bg-brand-dark min-h-screen">

      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-[6%]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.15), transparent 70%)" }} />
        <FadeIn className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="text-orange text-xs font-semibold tracking-[0.2em] uppercase border border-[#2a1f14] bg-[#1c1612] px-4 py-2 rounded-full">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#e8ddd4] mt-6 leading-tight">
            Full-service web design, development and hosting
          </h1>
          <p className="text-[#a07860] mt-5 text-lg leading-relaxed">
            Whether you're starting from scratch, replacing an outdated website, or need reliable hosting and support, we deliver the complete package.
          </p>
        </FadeIn>
      </section>

      {/* Services grid */}
      <section className="px-[6%] pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2a1f14]">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={(i % 3) * 0.1} direction="up">
                <div className="bg-brand-dark2 p-8 group hover:bg-brand-dark3 transition-colors duration-300 flex flex-col gap-4 h-full">
                  <span className="text-3xl">{s.icon}</span>
                  <div className="w-8 h-px bg-orange group-hover:w-16 transition-all duration-300" />
                  <h3 className="text-[#e8ddd4] font-bold text-lg group-hover:text-orange transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-[#a07860] leading-relaxed text-sm flex-1">{s.body}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {s.tags.map((t) => (
                      <span key={t} className="text-xs text-[#5a4535] border border-[#2a1f14] px-2 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* CTA */}
          <FadeIn direction="up" className="mt-16">
            <div className="bg-brand-dark2 border border-[#2a1f14] rounded-2xl p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-[#e8ddd4] font-bold text-xl">Not sure what your website needs?</h3>
                <p className="text-[#a07860] mt-2 text-sm leading-relaxed">
                  Book a free 20-minute call and we'll assess your current site, identify what's holding you back, and recommend a clear path forward.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 bg-orange hover:bg-orange-dark font-semibold px-7 py-3 rounded-full text-sm transition-colors duration-300 whitespace-nowrap"
                style={{ color: "#ffffff" }}
              >
                Book a Free Assessment
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </main>
  )
}