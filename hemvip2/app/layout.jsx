import "./globals.css"
import "../styles/custom.css"

export const metadata = {
  title: "HEMVIP2 - Pairwise Comparison of Gesture Generation AI Model Studies",
  description:
    "Pairwise Comparison of Gesture Generation AI Model Studies",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning dir="ltr">
      <body>{children}</body>
    </html>
  )
}
