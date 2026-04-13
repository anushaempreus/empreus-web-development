import type { Metadata } from "next"
import Hero    from "@/components/Hero"
import Process from "@/components/Process"
import CTA     from "@/components/CTA"

export const metadata: Metadata = {
  title: "Website Design, Development and Hosting | Canberra",
  description:
    "Beautiful, fast websites built for Australian businesses. Custom design, WordPress, e-commerce, SEO, and managed hosting. Based in Fyshwick, Canberra ACT.",
  openGraph: {
    title: "Empreus Web Development | Canberra Website Design",
    description: "Beautiful, fast websites built for Australian businesses. Custom design, WordPress, e-commerce, SEO, and managed hosting.",
    url: "https://empreus.website",
  },
}

export default function WebDevelopmentPage() {
  return (
    <>
      <Hero />
      <Process />
      <CTA />
    </>
  )
}