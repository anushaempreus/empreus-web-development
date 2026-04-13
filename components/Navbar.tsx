"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Hosting", href: "/hosting" },
  { label: "Our Work", href: "/our-work" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
]

export default function WebDevNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm border-b border-brand-border" : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-[6%] h-16 flex items-center justify-between gap-8">

        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img
            src={scrolled ? "/empreus-logo.png" : "/empreus-logo.png"}
            alt="Empreus"
            style={{ height: "32px", width: "auto" }}
          />
          <span className={`hidden sm:block text-xs font-medium border-l pl-2 ml-1 leading-tight transition-colors duration-300 ${scrolled ? "text-brand-muted border-brand-border" : "text-brand-muted border-brand-border"}`}>
            Web &<br />Hosting
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => {
            const isActive = pathname === l.href
            return (
              <Link
                key={l.label}
                href={l.href}
                className={`text-[13px] font-medium transition-colors duration-200 whitespace-nowrap ${
                  isActive ? "text-orange" : "text-brand-muted hover:text-orange"
                }`}
              >
                {l.label}
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <Link
            href="/contact"
            className="bg-orange hover:bg-orange-dark text-white text-[13px] font-bold px-4 py-2 rounded-lg transition-colors duration-200 whitespace-nowrap"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-brand-text transition-transform duration-200 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-5 h-0.5 bg-brand-text transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-brand-text transition-transform duration-200 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-brand-border px-[6%] py-6 flex flex-col gap-4">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-brand-muted hover:text-orange text-sm font-medium transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-orange text-white text-sm font-bold px-5 py-2.5 rounded-lg text-center"
            onClick={() => setMobileOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  )
}