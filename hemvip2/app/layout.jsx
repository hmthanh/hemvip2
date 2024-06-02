import "./globals.css"
import "../styles/custom.css"

export const metadata = {
  title: "HEMVIP2",
  description:
    "Create a Study Experiment to evaluate Gesture Generation AI Model",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning dir="ltr">
      <body>{children}</body>
    </html>
  )
}
