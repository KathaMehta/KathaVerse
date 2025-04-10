import type { Metadata } from 'next'
import './globals.css'
// import '@/styles/globals.css' // relative path, not /styles


export const metadata: Metadata = {
  title: 'KathaVerse',
  description: 'Story of a Coder',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
