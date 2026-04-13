import type { Metadata } from "next"
import ContactClient from "./ContactClient"

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Website Quote",
  description: "Get in touch with Empreus Web Development. Free quotes within 48 hours. Based in Fyshwick, Canberra. Call, email, or fill in the form.",
}

export default function ContactPage() {
  return <ContactClient />
}