import type { Metadata } from "next"
import "./globals.css"
import LoadingScreen from "@/components/LoadingScreen"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import PageTransition from "@/components/PageTransition"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.empreus.website"),
  verification: {
    google: "E18hdS_SezEOI23yqysMSVf7a8WxYE4QhSFdNG0kafE",
  },
  title: {
    template: "%s | Empreus Web Development",
    default: "Empreus Web Development | Canberra Web Design & Hosting",
  },
  description:
    "Empreus Web Development builds fast, modern websites for Canberra businesses. Custom web design, hosting, and ongoing support from a local team.",
  keywords: [
    "web development Canberra",
    "web design Canberra",
    "website hosting Canberra",
    "Next.js developer Canberra",
    "small business website Canberra",
    "Empreus web development",
  ],
  authors: [{ name: "Empreus Support Pty Ltd" }],
  creator: "Empreus Support Pty Ltd",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Empreus Web Development",
    url: "https://www.empreus.website",
    title: "Empreus Web Development | Canberra Web Design & Hosting",
    description:
      "Fast, modern websites built for Canberra businesses. Custom design, hosting, and ongoing support from a local team.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Empreus Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Empreus Web Development | Canberra",
    description: "Fast, modern websites built for Canberra businesses.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.empreus.website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LoadingScreen />
        <Navbar />
        <main className="pt-16">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  )
}