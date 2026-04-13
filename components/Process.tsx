"use client"

import FadeIn from "@/components/FadeIn"

const steps = [
  {
    number: "01",
    title: "Free Consultation and Quote",
    body: "We start with a conversation about your business, your goals, and what you need from your website. Within 48 hours you'll receive a clear, fixed-price quote with no hidden fees and a realistic timeline so you know exactly when your site will be live.",
  },
  {
    number: "02",
    title: "Design and Feedback",
    body: "We create a custom design based on your brand and requirements. You'll see a full visual mockup before we write any code and you get two rounds of revisions to make sure it's perfect. Your feedback drives every design decision.",
  },
  {
    number: "03",
    title: "Build and Test",
    body: "We develop your site on a private staging environment where you can review progress in real time. Rigorous testing across devices, browsers, and screen sizes ensures everything works before go-live. We also set up SEO, analytics, and performance optimisation.",
  },
  {
    number: "04",
    title: "Launch and Ongoing Care",
    body: "On launch day, we handle everything: DNS, SSL, redirects, and final checks. After go-live, your website is monitored on our managed hosting platform with daily backups, security patches, and priority support whenever you need us.",
  },
]

export default function Process() {
  return (
    <section className="bg-brand-light py-24 px-[6%]">
      <div className="max-w-7xl mx-auto">

        <FadeIn className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-orange text-sm font-semibold tracking-widest uppercase">Our Process</span>
          <h2 className="text-4xl font-black text-brand-text mt-3 leading-tight">
            Simple, transparent, stress-free
          </h2>
          <p className="text-brand-muted mt-4 text-lg leading-relaxed">
            We've refined our process to make getting a new website as painless as possible. You'll always know what's happening, what's next, and exactly what it will cost.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1} direction="up">
              <div className="bg-white border border-brand-border rounded-2xl p-8 hover:border-orange hover:shadow-md transition-all duration-300 group h-full">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-pale border border-orange-light flex items-center justify-center shrink-0 group-hover:bg-orange group-hover:border-orange transition-colors duration-300">
                    <span className="text-orange font-black text-sm group-hover:text-white transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-brand-text font-bold text-lg group-hover:text-orange transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-brand-muted text-sm mt-3 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}