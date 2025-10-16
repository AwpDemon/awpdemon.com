import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AwpDemon - Portfolio',
  description: 'Night lake themed portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

