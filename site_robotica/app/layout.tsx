import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "ReciclaIndústria Gravataí - Conectando Indústrias à Reciclagem Sustentável",
  description:
    "Plataforma informacional dedicada a conectar pequenas indústrias de Gravataí aos centros de reciclagem disponíveis na região, promovendo o descarte correto de resíduos industriais.",
  generator: "v0.app",
  keywords: [
    "reciclagem industrial",
    "centros de reciclagem Gravataí",
    "incentivo fiscal reciclagem",
    "economia circular",
    "pequenas indústrias",
    "sustentabilidade",
    "Lei 14.260/2021",
    "SINIR",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <ScrollToTop />
          <Header />
          <div className="mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8">{children}</div>
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
