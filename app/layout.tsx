import type React from "react"
import type { Metadata } from "next"
import { Manrope, Geist_Mono } from "next/font/google"
import EasyWeekWidget from '../components/EasyWeekWidget' // Переконайся, що файл лежить у папці components
import "./globals.css"

const manrope = Manrope({ subsets: ["latin", "cyrillic"], variable: "--font-manrope" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Юлія ТАТОМИР | ЕНДОКРИНОЛОГ",
  description:
    "Лікар-ендокринолог, що спеціалізується на гормональному здоров'ї, захворюваннях щитоподібної залози та метаболічному благополуччі."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body className={`${manrope.variable} ${geistMono.variable} font-sans antialiased bg-[#1C1C1C] text-[#EAEAEA]`} suppressHydrationWarning>
        {children}
        <EasyWeekWidget /> {/* Віджет буде відображатися на всіх сторінках */}
        
      </body>
    </html>
  )
}