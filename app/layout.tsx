import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pranav Kuchibhotla | AI & Data Science Portfolio",
  description:
    "Portfolio website showcasing Pranav Kuchibhotla's skills, experience, and projects in AI and Data Science.",
    generator: 'v0.dev',
    icons: {
      icon: "Pk.png", // Favicon for all devices
      shortcut: "Pk.png", // Shortcut icon
      apple: "Pk.png", // iOS devices
    },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'