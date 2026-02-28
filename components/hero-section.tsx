"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface HeroSectionProps {
  onBookingClick: () => void
}

export function HeroSection({ onBookingClick }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
    layoutEffect: false, // Виправлення помилки гідратації
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1C1C1C]">
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div className="absolute inset-0 bg-[#1C1C1C]/60 z-10" />
        <motion.img
          src="/endocrinologist-landing-page/doctor-hero.webp"
          alt="Л-р. Юлія Татомир"
          className="w-full h-full object-cover object-top"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </motion.div>

      <motion.div className="relative z-20 text-center px-4" style={{ opacity }}>
        <motion.p
          className="text-sm md:text-base tracking-[0.3em] uppercase text-[#999999] mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Ендокринолог та спеціаліст з гормонального здоров'я
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-light leading-[0.9] tracking-[-0.02em] text-[#EAEAEA]"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            ЮЛІЯ
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-light leading-[0.9] tracking-[-0.02em] text-[#EAEAEA]"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            ТАТОМИР
          </motion.h1>
        </div>

        <motion.div
          className="mt-12 flex items-center justify-center gap-8 text-sm text-[#999999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <span>5+ Років досвіду</span>
          <span className="w-1 h-1 rounded-full bg-[#999999]" />
          <span>ІФНМУ</span>
          <span className="w-1 h-1 rounded-full bg-[#999999]" />
          <span>ЛНМУ ім.Д.Галицького</span>
        </motion.div>

        <button
          onClick={onBookingClick}
          className="mt-12 px-10 py-4 border border-[#EAEAEA]/50 text-[#EAEAEA] text-sm tracking-[0.2em] uppercase hover:bg-[#EAEAEA] hover:text-[#1C1C1C] transition-all duration-500 cursor-pointer bg-transparent"
        >
          Записатися на консультацію
        </button>
      </motion.div>
    </section>
  )
}