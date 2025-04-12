import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: {
    default: "NekoAnime - Anime & Manga Streaming",
    template: "%s | NekoAnime",
  },
  description: "Watch anime and read manga with NekoAnime - the best anime and manga streaming platform",
  keywords: ["anime", "manga", "streaming", "watch anime", "read manga", "neko", "cat"],
  authors: [{ name: "NekoAnime Team" }],
  creator: "NekoAnime",
  metadataBase: new URL("https://nekoanime.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nekoanime.vercel.app",
    siteName: "NekoAnime",
    title: "NekoAnime - Anime & Manga Streaming",
    description: "Watch anime and read manga with NekoAnime - the best anime and manga streaming platform",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NekoAnime",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NekoAnime - Anime & Manga Streaming",
    description: "Watch anime and read manga with NekoAnime - the best anime and manga streaming platform",
    images: ["/og-image.jpg"],
    creator: "@nekoanime",
  },
  manifest: "/manifest.json",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}


import './globals.css'