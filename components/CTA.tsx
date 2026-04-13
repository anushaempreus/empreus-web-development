"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import Link from "next/link"

const projectTypes = [
  "New website design and build",
  "Website redesign",
  "E-commerce store",
  "Managed hosting",
  "Website maintenance and support",
  "SEO services",
  "Something else",
]

const budgets = ["Under $2,000", "$2,000 to $5,000", "$5,000 to $10,000", "$10,000+"]

type FormData = {
  first_name: string
  last_name: string
  email: string
  project_details: string
}

export default function CTA() {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setStatus("loading")
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "web-development",
          ...data,
          enquiry_type: selectedType || "Not specified",
          budget: selectedBudget || "Not specified",
        }),
      })
      if (res.ok) setStatus("success")
      else setStatus("error")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="bg-brand-dark py-24 px-[6%]" id="contact">

      {/* Banner */}
      <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden mb-20 bg-[#0f0d0b] border border-[#2a1f14]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(249,115,22,0.12), transparent 70%)" }}
        />
        <div className="relative z-10 px-10 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black text-[#e8ddd4] leading-tight max-w-xl">
              Your new website is closer than you think
            </h2>
            <p className="text-[#a07860] mt-3 leading-relaxed max-w-lg">
              Most of our websites go from first conversation to live in 4 to 6 weeks. Tell us what you need and we'll get back to you within 24 hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-orange hover:bg-orange-dark font-bold px-8 py-3 rounded-full text-sm transition-colors duration-300 whitespace-nowrap"
            style={{ color: "#ffffff" }}
          >
            Get Your Free Quote
          </Link>
        </div>
      </div>

      {/* Form */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start" id="enquiry">
        <div
          className="absolute -inset-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(249,115,22,0.06), transparent 60%)" }}
        />

        {/* Left — contact info */}
        <div className="relative z-10">
          <span className="text-orange text-sm font-semibold tracking-widest uppercase">Get in Touch</span>
          <h3 className="text-3xl font-black text-[#e8ddd4] mt-4 leading-tight">Tell us about your project</h3>
          <p className="text-[#a07860] mt-4 leading-relaxed">
            Fill in the form and we'll get back to you within 24 hours with a clear next step. Or reach out directly.
          </p>

          <div className="mt-8 flex flex-col gap-5">
            {[
              { icon: "📧", label: "Email", value: "web@empreusitsupport.com.au" },
              { icon: "📍", label: "Location", value: "Fyshwick, ACT 2609, Canberra, Australia" },
              { icon: "🕐", label: "Hours", value: "Mon to Fri 8:30am to 5:30pm AEST" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1c1612] border border-[#2a1f14] flex items-center justify-center text-lg shrink-0">{c.icon}</div>
                <div>
                  <p className="text-[#5a4535] text-xs uppercase tracking-widest">{c.label}</p>
                  <p className="text-[#e8ddd4] text-sm font-semibold mt-0.5">{c.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {["Fixed-price quotes", "Reply within 24 hours", "No lock-in contracts"].map((p) => (
              <span key={p} className="text-xs text-orange border border-orange px-3 py-1 rounded-full">{p}</span>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="relative z-10 bg-[#0f0d0b] border border-[#2a1f14] rounded-2xl p-8">
          {status === "success" ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#1c1612] border border-orange flex items-center justify-center text-3xl mx-auto mb-4">✓</div>
              <h3 className="text-[#e8ddd4] font-bold text-xl">Enquiry sent!</h3>
              <p className="text-[#a07860] mt-2 text-sm">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[#5a4535] text-xs uppercase tracking-widest">First Name *</label>
                  <input
                    {...register("first_name", { required: "Required" })}
                    className={`bg-[#1c1612] border rounded-lg px-4 py-3 text-[#e8ddd4] text-sm focus:outline-none focus:border-orange transition-colors ${errors.first_name ? "border-red-500" : "border-[#2a1f14]"}`}
                    placeholder="Jane" />
                  {errors.first_name && <p className="text-red-500 text-xs">{errors.first_name.message}</p>}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[#5a4535] text-xs uppercase tracking-widest">Last Name *</label>
                  <input
                    {...register("last_name", { required: "Required" })}
                    className={`bg-[#1c1612] border rounded-lg px-4 py-3 text-[#e8ddd4] text-sm focus:outline-none focus:border-orange transition-colors ${errors.last_name ? "border-red-500" : "border-[#2a1f14]"}`}
                    placeholder="Smith" />
                  {errors.last_name && <p className="text-red-500 text-xs">{errors.last_name.message}</p>}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[#5a4535] text-xs uppercase tracking-widest">Email Address *</label>
                <input
                  {...register("email", {
                    required: "Required",
                    pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Enter a valid email" }
                  })}
                  className={`bg-[#1c1612] border rounded-lg px-4 py-3 text-[#e8ddd4] text-sm focus:outline-none focus:border-orange transition-colors ${errors.email ? "border-red-500" : "border-[#2a1f14]"}`}
                  placeholder="jane@yourbusiness.com.au" />
                {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[#5a4535] text-xs uppercase tracking-widest">What type of project is it?</label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {projectTypes.map((t) => (
                    <button type="button" key={t} onClick={() => setSelectedType(t)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-colors duration-200 ${selectedType === t ? "bg-orange border-orange text-white" : "border-[#2a1f14] text-[#a07860] hover:border-orange hover:text-orange"}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[#5a4535] text-xs uppercase tracking-widest">What is your budget?</label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {budgets.map((b) => (
                    <button type="button" key={b} onClick={() => setSelectedBudget(b)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-colors duration-200 ${selectedBudget === b ? "bg-orange border-orange text-white" : "border-[#2a1f14] text-[#a07860] hover:border-orange hover:text-orange"}`}>
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[#5a4535] text-xs uppercase tracking-widest">Tell us about your project *</label>
                <textarea
                  {...register("project_details", {
                    required: "Required",
                    minLength: { value: 20, message: "Please provide at least 20 characters" },
                    maxLength: { value: 500, message: "Max 500 characters" },
                  })}
                  className={`bg-[#1c1612] border rounded-lg px-4 py-3 text-[#e8ddd4] text-sm focus:outline-none focus:border-orange transition-colors resize-none ${errors.project_details ? "border-red-500" : "border-[#2a1f14]"}`}
                  rows={4}
                  placeholder="What does your business do? What do you need from your website? Any existing site we should know about?" />
                {errors.project_details && <p className="text-red-500 text-xs">{errors.project_details.message}</p>}
              </div>

              {status === "error" && (
                <p className="text-red-500 text-xs">Something went wrong. Please try again or email us directly.</p>
              )}

              <button type="submit" disabled={status === "loading"}
                className="mt-2 self-start bg-orange hover:bg-orange-dark font-bold px-8 py-2.5 rounded-lg text-sm transition-colors duration-300 disabled:opacity-50"
                style={{ color: "#ffffff" }}>
                {status === "loading" ? "Sending..." : "Submit Enquiry"}
              </button>
              <p className="text-[#5a4535] text-xs">We'll respond within 24 hours. No spam, no sales pressure.</p>

            </form>
          )}
        </div>
      </div>
    </section>
  )
}