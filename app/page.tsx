import type { Metadata } from "next"
import Hero    from "@/components/Hero"
import Process from "@/components/Process"
import CTA     from "@/components/CTA"

export const metadata: Metadata = {
  title: "Canberra Web Design & Development | Empreus",
  description:
    "Empreus builds fast, modern websites for Canberra businesses. From landing pages to full multi-page sites — designed, hosted, and supported locally.",
  alternates: { canonical: "https://empreus.website" },
  openGraph: {
    url: "https://empreus.website",
    title: "Canberra Web Design & Development | Empreus",
    description:
      "Fast, modern websites for Canberra businesses. Designed, hosted, and supported locally.",
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