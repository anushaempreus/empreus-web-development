import type { Metadata } from "next"
import "./globals.css"
import LoadingScreen from "@/components/LoadingScreen"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Empreus Web Development & Hosting | Canberra",
  description: "Website design, development, and managed hosting for Australian businesses. Beautiful websites that rank, convert, and grow with your business.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LoadingScreen />
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}