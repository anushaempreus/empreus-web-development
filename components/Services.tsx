"use client"

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

export default function Services() {
  return (
    <section className="bg-brand-dark py-24 px-[6%]" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-orange text-sm font-semibold tracking-widest uppercase">
            Our Services
          </span>
          <h2 className="text-4xl font-black text-[#e8ddd4] mt-3 leading-tight">
            Full-service web design, development and hosting
          </h2>
          <p className="text-[#a07860] mt-4 leading-relaxed">
            Whether you're starting from scratch, replacing an outdated website, or need reliable hosting and support, we deliver the complete package so you never have to juggle multiple vendors.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2a1f14]">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-brand-dark2 p-8 group hover:bg-brand-dark3 transition-colors duration-300 flex flex-col gap-4"
            >
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
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-brand-dark2 border border-[#2a1f14] rounded-2xl p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-[#e8ddd4] font-bold text-xl">Not sure what your website needs?</h3>
            <p className="text-[#a07860] mt-2 text-sm leading-relaxed">
              Book a free 20-minute call and we'll assess your current site, identify what's holding you back, and recommend a clear path forward.
            </p>
          </div>
          <a
            href="/web-development/contact"
            className="shrink-0 bg-orange hover:bg-orange-dark font-semibold px-7 py-3 rounded-full text-sm transition-colors duration-300 whitespace-nowrap"
            style={{ color: "#ffffff" }}
          >
            Book a Free Assessment
          </a>
        </div>
      </div>
    </section>
  )
}