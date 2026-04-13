"use client"

import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="h-1 w-full bg-gradient-to-r from-orange via-orange-dark to-orange-deep" />

      <div className="relative z-10 max-w-7xl mx-auto px-[6%] pt-24 pb-24 flex flex-col items-center text-center">

        {/* Badge */}
        <span className="inline-flex items-center gap-2 text-orange text-xs font-semibold tracking-[0.2em] uppercase border border-orange-light bg-orange-pale px-4 py-2 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-orange" />
          Canberra Web Design Studio
        </span>

        {/* Heading */}
        <h1
          className="font-black text-brand-text leading-tight tracking-tight max-w-4xl"
          style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
        >
          Websites that work as hard as{" "}
          <span style={{
            background: "linear-gradient(135deg, #f97316, #ea580c)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            your business does
          </span>
        </h1>

        <p className="text-brand-muted text-lg mt-6 max-w-2xl leading-relaxed">
          Beautiful, fast, and built to convert. Empreus designs, develops, and hosts websites for Australian businesses that want to look professional, rank on Google, and turn visitors into customers.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <Link
            href="/contact"
            className="bg-orange hover:bg-orange-dark font-semibold px-8 py-3 rounded-full text-sm transition-colors duration-300"
            style={{ color: "#ffffff" }}
          >
            Get Your Free Quote
          </Link>
          <Link
            href="/our-work"
            className="border border-brand-border text-brand-muted hover:border-orange hover:text-orange font-semibold px-8 py-3 rounded-full text-sm transition-colors duration-300"
          >
            See Our Work
          </Link>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-10 mt-16 pt-10 border-t border-brand-border w-full max-w-3xl">
          {[
            { value: "100+", label: "Websites launched" },
            { value: "99.9%", label: "Hosting uptime" },
            { value: "4.9★", label: "Client rating" },
            { value: "Same-day", label: "Support responses" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-black text-brand-text">{s.value}</p>
              <p className="text-brand-muted text-xs uppercase tracking-widest mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Faint background text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden
        >
          <span
            className="font-black text-brand-text opacity-[0.025] leading-none"
            style={{ fontSize: "clamp(8rem, 20vw, 18rem)" }}
          >
            WEB
          </span>
        </div>
      </div>
    </section>
  )
}