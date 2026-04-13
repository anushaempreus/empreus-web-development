import type { Metadata } from "next"
import Link from "next/link"
import FadeIn from "@/components/FadeIn"

export const metadata: Metadata = {
  title: "Our Work | Website Portfolio",
  description:
    "See websites we've built for Canberra businesses across healthcare, legal, construction, retail, hospitality, and real estate. Real projects, real results.",
  openGraph: {
    title: "Our Work | Empreus Website Portfolio",
    description: "See websites we've built for Canberra businesses across healthcare, legal, construction, retail, hospitality, and real estate.",
    url: "https://empreus.website/our-work",
  },
}

const caseStudies = [
  {
    sector: "Healthcare",
    title: "Multi-Location Clinic Website",
    body: "A modern, patient-friendly website for a multi-site healthcare clinic. Online booking integration, practitioner profiles, service pages optimised for local SEO, and a mobile experience designed for patients searching on their phones.",
    result: "Organic traffic increased 65% within 3 months of launch.",
    tags: ["WordPress", "Local SEO", "Booking Integration"],
  },
  {
    sector: "Legal",
    title: "Law Firm Rebrand and Website",
    body: "A complete rebrand and website redesign for a Canberra law firm. Authoritative design language, practice area landing pages, team profiles with integrated LinkedIn, and a blog optimised for search.",
    result: "The site now generates 40% of the firm's new client enquiries.",
    tags: ["Rebrand", "WordPress", "SEO"],
  },
  {
    sector: "Construction",
    title: "Commercial Builder Showcase",
    body: "A visually impactful website for a commercial construction company. High-resolution project galleries, capability statements, tender document downloads, and a contact system that routes enquiries to the right project manager.",
    result: "A professional showcase that wins tender conversations.",
    tags: ["Custom Design", "Galleries", "Lead routing"],
  },
  {
    sector: "Retail",
    title: "E-Commerce Store Launch",
    body: "A WooCommerce store for a Canberra-based retailer selling nationally. 200 plus products, category filtering, secure checkout with Stripe and PayPal, Australia Post shipping integration, and automated order confirmation emails.",
    result: "Revenue from online sales exceeded projections within 60 days.",
    tags: ["WooCommerce", "Stripe", "Australia Post"],
  },
  {
    sector: "Hospitality",
    title: "Restaurant and Catering Website",
    body: "A warm, appetising website for a restaurant and catering business. Online menu with dietary filters, catering enquiry form, Google Maps integration, and a gallery showcasing events and signature dishes.",
    result: "The site doubled catering enquiries in the first month.",
    tags: ["WordPress", "Menus", "Gallery"],
  },
  {
    sector: "Real Estate",
    title: "Property Management Portal",
    body: "A lead-generating website for a property management company. Suburb-specific landing pages, tenant application forms, owner enquiry funnels, and integration with their property management software.",
    result: "Local SEO now drives consistent inbound leads from property owners.",
    tags: ["Local SEO", "Lead funnels", "Integration"],
  },
]

const testimonials = [
  {
    quote: "Our old website was embarrassing. We used to avoid giving people the URL. Empreus built us something we're genuinely proud of, and our enquiries have gone through the roof since launch.",
    name: "James K.",
    role: "Director, Construction",
  },
  {
    quote: "They didn't just build a website. They helped us think through what our patients actually need when they visit online. The booking integration alone was worth the investment. Best web agency we've worked with.",
    name: "Renee H.",
    role: "Practice Manager, Healthcare",
  },
  {
    quote: "I've had three different web developers over the years. Empreus is the first one that actually answers the phone, explains things in plain English, and proactively keeps our site healthy. We're not going anywhere.",
    name: "Tom L.",
    role: "Owner, Retail",
  },
]

export default function OurWorkPage() {
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
            Our Work
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#e8ddd4] mt-6 leading-tight">
            Websites that deliver results
          </h1>
          <p className="text-[#a07860] mt-5 text-lg leading-relaxed">
            Every website we build is designed with a purpose. To attract visitors, communicate your value, and generate enquiries or sales. Here's a selection of recent projects.
          </p>
        </FadeIn>
      </section>

      {/* Case studies */}
      <section className="py-24 px-[6%]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs, i) => (
            <FadeIn key={cs.title} delay={(i % 3) * 0.1} direction="up">
              <div className="bg-white border border-brand-border rounded-2xl overflow-hidden hover:border-orange hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
                <div className="h-2 w-full bg-orange-pale" />
                <div className="p-8 flex flex-col gap-4 flex-1">
                  <span className="text-orange text-xs font-bold uppercase tracking-widest">{cs.sector}</span>
                  <h3 className="text-brand-text font-bold text-xl group-hover:text-orange transition-colors duration-300">{cs.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed flex-1">{cs.body}</p>
                  <div className="mt-2 bg-orange-pale border border-orange-light rounded-xl px-4 py-3">
                    <p className="text-orange text-sm font-semibold">{cs.result}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {cs.tags.map((t) => (
                      <span key={t} className="text-xs text-brand-muted border border-brand-border px-2 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-[6%] bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="text-orange text-sm font-semibold tracking-widest uppercase">Client Feedback</span>
            <h2 className="text-4xl font-black text-[#e8ddd4] mt-3">What our clients say</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1} direction="up">
                <div className="bg-[#0f0d0b] border border-[#2a1f14] rounded-2xl p-8 hover:border-orange transition-all duration-300 flex flex-col gap-6 h-full">
                  <div className="text-orange text-4xl font-black leading-none">"</div>
                  <p className="text-[#a07860] text-sm leading-relaxed flex-1 italic">{t.quote}</p>
                  <div>
                    <p className="text-[#e8ddd4] font-bold text-sm">{t.name}</p>
                    <p className="text-[#5a4535] text-xs mt-0.5">{t.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[6%] bg-white">
        <FadeIn className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-brand-text leading-tight">
            Want a website that actually works for your business?
          </h2>
          <p className="text-brand-muted mt-4 leading-relaxed">
            Let's have a chat about what you need. We'll give you an honest assessment and a clear quote. No pushy sales, no jargon.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-orange hover:bg-orange-dark font-semibold px-8 py-3 rounded-full text-sm transition-colors duration-300"
            style={{ color: "#ffffff" }}
          >
            Start Your Project
          </Link>
        </FadeIn>
      </section>

    </main>
  )
}