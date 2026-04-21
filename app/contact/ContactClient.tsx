"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"

const enquiryTypes = [
  "New website design and build",
  "Website redesign",
  "E-commerce store",
  "Managed hosting",
  "Website maintenance and support",
  "SEO services",
  "Something else",
]

const steps = [
  { number: "01", title: "We'll reply within 24 hours", body: "We'll get back to you to schedule a free 20-minute call." },
  { number: "02", title: "Free discovery call", body: "We'll learn about your business, discuss what you need, and answer any questions." },
  { number: "03", title: "Fixed-price quote within 48 hours", body: "You'll receive a clear proposal with a realistic timeline. No obligation, no pressure." },
]

type FormData = {
  first_name: string
  last_name: string
  email: string
  phone: string
  business_name: string
  project_details: string
  has_website: string
  website_url: string
}

export default function ContactClient() {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [typeError, setTypeError] = useState(false)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    if (!selectedType) {
      setTypeError(true)
      return
    }
    setTypeError(false)
    setStatus("loading")

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "web-development",
          ...data,
          enquiry_type: selectedType,
        }),
      })
      if (res.ok) setStatus("success")
      else setStatus("error")
    } catch {
      setStatus("error")
    }
  }

  return (
    <main className="bg-white min-h-screen">

      <section className="relative bg-brand-dark overflow-hidden py-20 px-[6%]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.15), transparent 70%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="text-orange text-xs font-semibold tracking-[0.2em] uppercase border border-[#2a1f14] bg-[#1c1612] px-4 py-2 rounded-full">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-black text-[#e8ddd4] mt-6 leading-tight">Let's talk about your website</h1>
          <p className="text-[#a07860] mt-5 text-lg leading-relaxed">Fill in the form and we'll get back to you within 24 hours. Or reach out directly. We pick up the phone.</p>
        </div>
      </section>

      <section className="py-24 px-[6%]">
        <div className="max-w-3xl mx-auto">

          <div className="bg-white border border-brand-border rounded-2xl p-10 shadow-sm">
            <div className="mb-8">
              <h2 className="text-2xl font-black text-brand-text">Send us a message</h2>
              <p className="text-brand-muted text-sm mt-2">Fill in the details below and we'll get back to you within 24 hours.</p>
            </div>
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-orange-pale border border-orange-light flex items-center justify-center text-3xl mx-auto mb-4">✓</div>
                <h3 className="text-brand-text font-bold text-xl">Enquiry sent!</h3>
                <p className="text-brand-muted mt-2 text-sm">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-brand-text text-xs font-bold uppercase tracking-widest">First Name *</label>
                    <input
                      {...register("first_name", { required: "First name is required" })}
                      className={`border rounded-lg px-4 py-3 text-brand-text text-sm focus:outline-none focus:border-orange transition-colors ${errors.first_name ? "border-red-400" : "border-brand-border"}`}
                      placeholder="Jane"
                    />
                    {errors.first_name && <p className="text-red-500 text-xs mt-1">{errors.first_name.message}</p>}
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-brand-text text-xs font-bold uppercase tracking-widest">Last Name *</label>
                    <input
                      {...register("last_name", { required: "Last name is required" })}
                      className={`border rounded-lg px-4 py-3 text-brand-text text-sm focus:outline-none focus:border-orange transition-colors ${errors.last_name ? "border-red-400" : "border-brand-border"}`}
                      placeholder="Smith"
                    />
                    {errors.last_name && <p className="text-red-500 text-xs mt-1">{errors.last_name.message}</p>}
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-brand-text text-xs font-bold uppercase tracking-widest">Email Address *</label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Please enter a valid email address (e.g. name@example.com)"
                      }
                    })}
                    className={`border rounded-lg px-4 py-3 text-brand-text text-sm focus:outline-none focus:border-orange transition-colors ${errors.email ? "border-red-400" : "border-brand-border"}`}
                    placeholder="jane@yourbusiness.com.au"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-brand-text text-xs font-bold uppercase tracking-widest">Phone Number</label>
                  <input
                    {...register("phone", {
                      pattern: {
                        value: /^[0-9\s\+\-\(\)]{8,15}$/,
                        message: "Phone number must contain only digits, spaces, or + - ( )"
                      }
                    })}
                    className={`border rounded-lg px-4 py-3 text-brand-text text-sm focus:outline-none focus:border-orange transition-colors ${errors.phone ? "border-red-400" : "border-brand-border"}`}
                    placeholder="(02) XXXX XXXX"
                    onKeyPress={(e) => {
                      if (!/[0-9\s\+\-\(\)]/.test(e.key)) e.preventDefault()
                    }}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-brand-text text-xs font-bold uppercase tracking-widest">Business Name *</label>
                  <input
                    {...register("business_name", { required: "Business name is required" })}
                    className={`border rounded-lg px-4 py-3 text-brand-text text-sm focus:outline-none focus:border-orange transition-colors ${errors.business_name ? "border-red-400" : "border-brand-border"}`}
                    placeholder="Your Business Pty Ltd"
                  />
                  {errors.business_name && <p className="text-red-500 text-xs mt-1">{errors.business_name.message}</p>}
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-brand-text text-xs font-bold uppercase tracking-widest">What do you need? *</label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {enquiryTypes.map((t) => (
                      <button type="button" key={t} onClick={() => { setSelectedType(t); setTypeError(false) }}
                        className={`text-xs px-3 py-1.5 rounded-full border transition-colors duration-200 ${selectedType === t ? "bg-orange border-orange text-white" : "border-brand-border text-brand-muted hover:border-orange hover:text-orange"}`}>
                        {t}
                      </button>
                    ))}
                  </div>
                  {typeError && <p className="text-red-500 text-xs mt-1">Please select an enquiry type</p>}
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-brand-text text-xs font-bold uppercase tracking-widest">Tell us about your project *</label>
                  <textarea
                    {...register("project_details", {
                      required: "Please tell us about your project",
                      minLength: { value: 20, message: "Please provide at least 20 characters" },
                      maxLength: { value: 500, message: "Please keep your message under 500 characters" }
                    })}
                    className={`border rounded-lg px-4 py-3 text-brand-text text-sm focus:outline-none focus:border-orange transition-colors resize-none ${errors.project_details ? "border-red-400" : "border-brand-border"}`}
                    rows={4}
                    placeholder="What does your business do? What do you need from your website? Any budget or timeline in mind? (max 500 characters)"
                  />
                  {errors.project_details && <p className="text-red-500 text-xs mt-1">{errors.project_details.message}</p>}
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-brand-text text-xs font-bold uppercase tracking-widest">Do you have an existing website?</label>
                  <div className="flex gap-3 mt-1">
                    {["Yes", "No", "Not really"].map((opt) => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          value={opt}
                          {...register("has_website")}
                          className="accent-orange w-4 h-4"
                        />
                        <span className="text-brand-text text-sm">{opt}</span>
                      </label>
                    ))}
                  </div>
                  <input
                    {...register("website_url")}
                    className="border border-brand-border rounded-lg px-4 py-3 text-brand-text text-sm focus:outline-none focus:border-orange transition-colors mt-2"
                    placeholder="If yes, enter your URL (e.g. www.yourbusiness.com.au)"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-xs">Something went wrong. Please try again or email us directly.</p>
                )}

                <button type="submit" disabled={status === "loading"}
                  className="mt-2 bg-orange hover:bg-orange-dark font-bold px-8 py-3 rounded-lg text-sm transition-colors duration-300 w-full disabled:opacity-50"
                  style={{ color: "#ffffff" }}>
                  {status === "loading" ? "Sending..." : "Submit Enquiry"}
                </button>
                <p className="text-brand-muted text-xs text-center">We'll respond within 24 hours. No spam, no sales pressure.</p>

              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}