import type React from "react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
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
    default: "Animatrixx - Anime & Manga Streaming",
    template: "%s | Animatrixx",
  },
  description: "Watch anime and read manga with Animatrixx - the best anime and manga streaming platform",
  keywords: ["anime", "manga", "streaming", "watch anime", "read manga", "neko", "cat"],
  authors: [{ name: "Animatrixx Team" }],
  creator: "Animatrixx",
  metadataBase: new URL("https://animatrixx.in"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://animatrixx.in",
    siteName: "Animatrixx",
    title: "Animatrixx - Anime & Manga Streaming",
    description: "Watch anime and read manga with Animatrixx - the best anime and manga streaming platform",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Animatrixx",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Animatrixx - Anime & Manga Streaming",
    description: "Watch anime and read manga with Animatrixx - the best anime and manga streaming platform",
    images: ["/og-image.jpg"],
    creator: "@animatrixx.in",
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
      <body className="min-h-screen bg-black antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}


import './globals.css'