import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hunter Weisner',
  description: 'A personal website made by and for Hunter Weisner',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src = '../scripts/moreDetailsButtonScript.js'
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
