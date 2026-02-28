"use client"

import { useEffect, useState, useRef } from "react"
import Lenis from "lenis"
import { FloatingMenu } from "@/components/floating-menu"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { AboutDoctorSection } from "@/components/about-doctor-section"
import { InsightsSection } from "@/components/insights-section"
import { FooterSection } from "@/components/footer-section"
import { BookingModal } from "@/components/booking-modal"

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const lenisRef = useRef<any>(null)

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    })

    function raf(time: number) {
      lenisRef.current?.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenisRef.current?.destroy()
      lenisRef.current = null
    }
  }, [])

  useEffect(() => {
    function onModalOpen() {
      lenisRef.current?.stop()
    }

    function onModalClose() {
      lenisRef.current?.start()
    }

    window.addEventListener("modal:open", onModalOpen)
    window.addEventListener("modal:close", onModalClose)

    return () => {
      window.removeEventListener("modal:open", onModalOpen)
      window.removeEventListener("modal:close", onModalClose)
    }
  }, [])

  useEffect(() => {
    if (!lenisRef.current) return
    if (isBookingOpen) lenisRef.current.stop()
    else lenisRef.current.start()
  }, [isBookingOpen])

  const handleBookingClick = () => {
    setIsBookingOpen(true)
  }

  return (
    <div className="min-h-screen bg-[#1C1C1C]">
      <FloatingMenu onBookingClick={handleBookingClick} />
      <main>
        <HeroSection onBookingClick={handleBookingClick} />
        <ServicesSection />
        <AboutDoctorSection />
        <PhilosophySection />
        <InsightsSection />
      </main>
      <FooterSection onBookingClick={handleBookingClick} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  )
}
