import Link from "next/link"

export default function WebDevFooter() {
  return (
    <footer className="bg-brand-dark border-t border-[#1c1612]">

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-[6%] py-14 grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">

        {/* Brand */}
        <div className="md:col-span-1 flex flex-col items-center md:items-start">
          <img
            src="/empreus-logo.png"
            alt="Empreus"
            style={{ width: "160px", height: "auto", filter: "brightness(0) invert(1)" }}
          />
          <p className="text-[#5a4535] text-xs mt-3 font-medium uppercase tracking-widest">Web Development & Hosting</p>
          <p className="text-[#a07860] text-sm mt-4 leading-relaxed">
            Website design, development, and managed hosting for Australian businesses. Beautiful websites that rank, convert, and grow with your business.
          </p>
        </div>

        {/* Services */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-[#5a4535] text-xs font-bold uppercase tracking-widest mb-4">Services</p>
          <div className="flex flex-col gap-2 items-center md:items-start">
            {[
              { label: "Website Design", href: "/services" },
              { label: "WordPress Development", href: "/services" },
              { label: "E-Commerce", href: "/services" },
              { label: "SEO", href: "/services" },
              { label: "Managed Hosting", href: "/hosting" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="text-[#a07860] hover:text-orange text-sm transition-colors duration-200">{l.label}</Link>
            ))}
          </div>
        </div>

        {/* Company */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-[#5a4535] text-xs font-bold uppercase tracking-widest mb-4">Company</p>
          <div className="flex flex-col gap-2 items-center md:items-start">
            {[
              { label: "About Us", href: "/about" },
              { label: "Our Work", href: "/our-work" },
              { label: "Pricing", href: "/pricing" },
              { label: "FAQ", href: "/faq" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="text-[#a07860] hover:text-orange text-sm transition-colors duration-200">{l.label}</Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-[#5a4535] text-xs font-bold uppercase tracking-widest mb-4">Get in Touch</p>
          <div className="flex flex-col gap-2 text-[#a07860] text-sm items-center md:items-start">
            <a href="mailto:web@empreusitsupport.com.au" className="hover:text-orange transition-colors duration-200">web@empreusitsupport.com.au</a>
            <a href="tel:0261891322" className="hover:text-orange transition-colors duration-200">(02) 6189 1322</a>
            <span>Unit 19/63 Wollongong St</span>
            <Link href="/contact" className="hover:text-orange transition-colors duration-200">Fyshwick ACT 2609</Link>
          </div>
          <div className="mt-6">
            <Link href="/" className="text-xs text-[#5a4535] hover:text-orange transition-colors duration-200">← Back to Empreus IT Support</Link>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1c1612]">
        <div className="max-w-7xl mx-auto px-[6%] py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
          <p className="text-[#3a2e24] text-xs uppercase tracking-widest">
            © 2026 Empreus Support Pty Ltd trading as Empreus Website Development & Hosting
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-[#3a2e24] hover:text-orange text-xs uppercase tracking-widest transition-colors duration-200">Privacy Policy</Link>
            <Link href="#" className="text-[#3a2e24] hover:text-orange text-xs uppercase tracking-widest transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>
      </div>

    </footer>
  )
}