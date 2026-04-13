"use client"

import { useState } from "react"
import Link from "next/link"
import FadeIn from "@/components/FadeIn"

const faqs = [
  {
    q: "How much does a website cost?",
    a: "Our websites start from $2,500 + GST for a clean 5-page business site, and range up to $7,500+ for e-commerce stores. The exact price depends on the number of pages, features, and complexity. We provide a fixed quote after our free consultation so you'll know the exact cost before committing to anything.",
  },
  {
    q: "How long does it take to build a website?",
    a: "A typical business website takes 3 to 6 weeks from kickoff to launch. E-commerce stores take 6 to 8 weeks. The biggest variable is content. If you have your text and images ready, things move fast. We'll give you a realistic timeline in our proposal and keep you updated at every stage.",
  },
  {
    q: "Do I need to provide the content and images?",
    a: "We can work with whatever you have. If you've got great photos and written content, we'll use them. If you need help, we can write professional copy for your pages and source high-quality stock photography. We'll let you know what's needed and guide you through the process.",
  },
  {
    q: "Will my website work on phones and tablets?",
    a: "Absolutely. Every website we build is fully responsive and tested across phones, tablets, laptops, and desktops. In fact, we design mobile-first because over 60% of web traffic now comes from mobile devices. Your site will look and work well on every screen size.",
  },
  {
    q: "Can I update the website myself?",
    a: "Yes. If your site is built on WordPress, you'll be able to update text, images, blog posts, and basic content yourself through a simple dashboard. We provide a walkthrough after launch so you're comfortable making changes. And if you'd rather not, our care plans include content changes done for you.",
  },
  {
    q: "Will my website be found on Google?",
    a: "Every website we build includes foundational SEO: proper page titles, meta descriptions, heading structure, fast load times, mobile-friendliness, XML sitemap, and Google Search Console setup. This gives you the best possible starting position. For businesses that want to actively rank higher, we offer ongoing SEO services as an add-on.",
  },
  {
    q: "Do I have to use your hosting?",
    a: "No. You're welcome to host your site wherever you like. We recommend our managed hosting because it's fast, secure, and fully managed by us, but we'll happily deploy to any hosting provider you choose. Your site belongs to you, and that includes choosing where it lives.",
  },
  {
    q: "What if I already have a website and just want it redesigned?",
    a: "We do this all the time. We'll audit your current site, preserve your SEO equity, migrate your content, set up proper 301 redirects, and deliver a modern redesign that represents your business as it is today. The transition is seamless with no downtime and no lost rankings.",
  },
  {
    q: "Do you work with businesses outside Canberra?",
    a: "Yes. While we're based in Fyshwick, ACT, we work with businesses across Australia. Most of our process is done remotely via video calls, email, and our project portal. Distance doesn't affect the quality of the work or the responsiveness of our support.",
  },
  {
    q: "What happens if something breaks after launch?",
    a: "Every project includes 30 days of free post-launch support. If something needs fixing, we handle it at no extra cost. Beyond that, our hosting and care plans include ongoing maintenance, security patches, and priority support so you're never left stranded.",
  },
  {
    q: "Can I see my website before it goes live?",
    a: "Of course. We build every site on a private staging environment where you can review, test, and approve before anything goes live. You'll also see design mockups before we start coding, so there are no surprises at any stage of the process.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. We typically split project payments into milestones: a deposit to begin, a progress payment at the design approval stage, and a final payment on launch. For larger projects, we can arrange a payment schedule that works for your cash flow. Hosting is billed monthly.",
  },
]

export default function FAQClient() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <main className="bg-white min-h-screen">

      <section className="relative bg-brand-dark overflow-hidden py-24 px-[6%]">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.15), transparent 70%)" }}
        />
        <FadeIn className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="text-orange text-xs font-semibold tracking-[0.2em] uppercase border border-[#2a1f14] bg-[#1c1612] px-4 py-2 rounded-full">
            FAQ
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#e8ddd4] mt-6 leading-tight">
            Answers to common questions
          </h1>
          <p className="text-[#a07860] mt-5 text-lg leading-relaxed">
            Straight answers to the things most people want to know before working with a web designer. If your question isn't here, just ask.
          </p>
        </FadeIn>
      </section>

      <section className="py-24 px-[6%]">
        <FadeIn className="max-w-3xl mx-auto flex flex-col divide-y divide-brand-border">
          {faqs.map((faq, i) => (
            <div key={i} className="py-6">
              <button
                className="w-full flex items-start justify-between gap-6 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`font-bold text-base leading-snug transition-colors duration-200 ${open === i ? "text-orange" : "text-brand-text group-hover:text-orange"}`}>
                  {faq.q}
                </span>
                <span className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-sm transition-colors duration-200 ${open === i ? "border-orange text-orange" : "border-brand-border text-brand-muted"}`}>
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <p className="text-brand-muted text-sm leading-relaxed mt-4 pr-12">{faq.a}</p>
              )}
            </div>
          ))}
        </FadeIn>
      </section>

      <section className="py-20 px-[6%] bg-brand-dark">
        <FadeIn className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-[#e8ddd4] leading-tight">
            Got a question we haven't answered?
          </h2>
          <p className="text-[#a07860] mt-4 leading-relaxed">
            We're real people who love talking about websites and helping businesses figure out what they need. Just reach out.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-orange hover:bg-orange-dark font-semibold px-8 py-3 rounded-full text-sm transition-colors duration-300"
            style={{ color: "#ffffff" }}
          >
            Ask Us Anything
          </Link>
        </FadeIn>
      </section>

    </main>
  )
}