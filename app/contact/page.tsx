import type { Metadata } from "next"
import ContactClient from "./ContactClient"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Empreus Web Development. Free quotes within 48 hours. Based in Fyshwick, Canberra. Call, email, or fill in the form.",
  alternates: { canonical: "https://empreus.website/contact" },
  openGraph: {
    url: "https://empreus.website/contact",
    title: "Contact Us | Empreus Web Development",
    description:
      "Get in touch for a free quote. Based in Fyshwick, Canberra. We respond within 48 hours.",
  },
}

export default function ContactPage() {
  return <ContactClient />
}