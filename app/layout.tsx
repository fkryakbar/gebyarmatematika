import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Gebyar Matematika 2023',
  description: 'HIMAPTIKA FKIP ULM',
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
