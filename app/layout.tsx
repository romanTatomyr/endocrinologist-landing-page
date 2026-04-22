import type React from "react"
import type { Metadata } from "next"
import { Manrope, Geist_Mono } from "next/font/google"
import EasyWeekWidget from '../components/EasyWeekWidget'
import "./globals.css"

const manrope = Manrope({ subsets: ["latin", "cyrillic"], variable: "--font-manrope" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Юлія Татомир - Лікар Ендокринолог Івано-Франківськ | Щитоподібна Залоза, Діабет, Гормони",
  description: "Лікар-ендокринолог Юлія Татомир в Івано-Франківську та Тисмениці. Діагностика та лікування захворювань щитоподібної залози, діабету, гормональних порушень. Онлайн консультації. Записатися на прийом: +380...",
  keywords: [
    "ендокринолог Івано-Франківськ",
    "лікар ендокринолог Тисмениця",
    "Юлія Татомир ендокринолог",
    "лікування щитоподібної залози",
    "діагностика діабету",
    "гормональні порушення",
    "ендокринолог онлайн",
    "ендокринолог дистанційно",
    "щитоподібна залоза Івано-Франківськ",
    "діабет Івано-Франківськ",
    "ендокринолог Україна",
    "лікар гормонів",
    "метаболічний синдром",
    "тиреоїдит",
    "гіпотиреоз",
    "гіпертиреоз",
    "діабет 1 типу",
    "діабет 2 типу",
    "інсулінотерапія",
    "гормональний баланс"
  ],
  authors: [{ name: "Юлія Татомир", url: "https://dr-tatomyr.com" }],
  creator: "Юлія Татомир",
  publisher: "Юлія Татомир - Лікар Ендокринолог",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dr-tatomyr.com'),
  alternates: {
    canonical: 'https://dr-tatomyr.com',
  },
  openGraph: {
    title: "Юлія Татомир - Лікар Ендокринолог Івано-Франківськ",
    description: "Професійна допомога при захворюваннях щитоподібної залози, діабеті та гормональних порушеннях. Онлайн консультації доступні.",
    url: "https://dr-tatomyr.com",
    siteName: "Юлія Татомир - Ендокринолог",
    locale: "uk_UA",
    type: "website",
    images: [
      {
        url: "/doctor-hero.webp",
        width: 1200,
        height: 630,
        alt: "Лікар-ендокринолог Юлія Татомир",
      },
      {
        url: "/doctor-about.webp",
        width: 800,
        height: 600,
        alt: "Кабінет ендокринолога",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Юлія Татомир - Лікар Ендокринолог Івано-Франківськ",
    description: "Професійна ендокринологічна допомога в Івано-Франківську та онлайн",
    images: ["/doctor-hero.webp"],
    creator: "@dr_tatomyr",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'health',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Юлія Татомир - Лікар Ендокринолог",
    "description": "Професійна ендокринологічна допомога в Івано-Франківську та Тисмениці. Лікування захворювань щитоподібної залози, діабету, гормональних порушень.",
    "url": "https://dr-tatomyr.com",
    "telephone": "+380-XXX-XXX-XXX", // Replace with actual phone
    "email": "info@dr-tatomyr.com", // Replace with actual email
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "вул. Січовий Стрільців 70",
      "addressLocality": "Івано-Франківськ",
      "addressRegion": "Івано-Франківська область",
      "postalCode": "76000",
      "addressCountry": "UA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "48.9226", // Replace with actual coordinates
      "longitude": "24.7111"
    },
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 09:00-15:00"
    ],
    "priceRange": "$$",
    "medicalSpecialty": [
      "Endocrinology",
      "Internal Medicine"
    ],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Діагностика захворювань щитоподібної залози",
        "description": "Комплексне обстеження функції щитоподібної залози"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Лікування діабету",
        "description": "Сучасне управління цукровим діабетом 1 та 2 типу"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Корекція гормональних порушень",
        "description": "Відновлення гормонального балансу"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Онлайн консультації",
        "description": "Дистанційні консультації ендокринолога"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "Юлія Татомир",
      "jobTitle": "Лікар-ендокринолог",
      "medicalSpecialty": "Endocrinology",
      "education": [
        {
          "@type": "EducationalOrganization",
          "name": "Івано-Франківський національний медичний університет"
        },
        {
          "@type": "EducationalOrganization",
          "name": "Львівський національний медичний університет імені Данила Галицького"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.facebook.com/dr.tatomyr",
      "https://www.instagram.com/dr_tatomyr",
      "https://www.linkedin.com/in/dr-tatomyr"
    ]
  }

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Які захворювання лікує ендокринолог?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ендокринолог займається діагностикою та лікуванням захворювань ендокринної системи: щитоподібної залози, діабету, гормональних порушень, ожиріння, остеопорозу та інших."
        }
      },
      {
        "@type": "Question",
        "name": "Як часто потрібно перевіряти гормони щитоподібної залози?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Рекомендується перевіряти рівень гормонів щитоподібної залози 1-2 рази на рік, особливо якщо є симптоми або фактори ризику. При наявності захворювань - за призначенням лікаря."
        }
      },
      {
        "@type": "Question",
        "name": "Чи можна отримати консультацію ендокринолога онлайн?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Так, доступні онлайн консультації для пацієнтів з Івано-Франківська, Тисмениці та інших міст України. Це зручно для первинної консультації та спостереження."
        }
      }
    ]
  }

  return (
    <html lang="uk" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData),
          }}
        />
      </head>
      <body className={`${manrope.variable} ${geistMono.variable} font-sans antialiased bg-[#1C1C1C] text-[#EAEAEA]`} suppressHydrationWarning>
        {children}
        <EasyWeekWidget />
      </body>
    </html>
  )
}