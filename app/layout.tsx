import type { Metadata } from "next"
import { PT_Serif, DM_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-title",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "VyF Pilates",
  description: "Pilates clásico – Movimiento consciente",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body
        className={`
          ${ptSerif.variable}
          ${dmSans.variable}
          font-body
        `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}