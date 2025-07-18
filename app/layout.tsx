import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Venkey Dresses - Premium Garment Manufacturing',
  description: 'Leading garment manufacturer with 30+ years of experience in uniform pants, half pants, cotton and jeans pants. Located in Rayadurg, Andhra Pradesh.',
  keywords: 'garment manufacturing, uniform pants, cotton pants, jeans, Venkey Dresses, Rayadurg, Andhra Pradesh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
