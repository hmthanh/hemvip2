import "./globals.css"
import "../styles/custom.css"
import { Router } from "next/navigation"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "HEMVIP2 - Pairwise Comparison of Gesture Generation AI Model Studies",
  description: "Pairwise Comparison of Gesture Generation AI Model Studies",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning dir="ltr">
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
