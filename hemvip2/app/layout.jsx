import "./globals.css"
import "../styles/custom.css"

export const metadata = {
  title: "HEMVIP2 - Parallel Comparison of Gesture Generation AI Model Studies",
  description:
    "Parallel Comparison of Gesture Generation AI Model Studies",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning dir="ltr">
      <body>{children}</body>
    </html>
  )
}
