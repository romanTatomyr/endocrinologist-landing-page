"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import BookingModal from './BookingModal';

interface HeroSectionProps {
  onBookingClick: () => void
}

export function HeroSection({ onBookingClick }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.05])
  const rotate = useTransform(scrollYProgress, [0, 0.5], [0, -1])

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1C1C1C]">
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div className="absolute inset-0 bg-[#1C1C1C]/60 z-10" />
        <motion.img
          src="/doctor-hero.webp"
          alt="Л-р. Юлія Татомир"
          className="w-full h-full object-cover object-top cursor-pointer"
          onClick={() => {
            const widget = (window as any).ewWidget;
            if (widget && typeof widget.show === 'function') {
              widget.show();
            }
          }}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </motion.div>

      <motion.div className="relative z-20 text-center px-4" style={{ opacity, scale, rotate }}>
        <motion.p
          className="text-sm md:text-base tracking-[0.3em] uppercase text-[#999999] mb-8 cursor-pointer"
          onClick={() => {
            const widget = (window as any).ewWidget;
            if (widget && typeof widget.show === 'function') {
              widget.show();
            }
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          Ендокринолог та спеціаліст з гормонального здоров'я
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-light leading-[0.9] tracking-[-0.02em] text-[#EAEAEA] cursor-pointer"
            onClick={() => {
              const widget = (window as any).ewWidget;
              if (widget && typeof widget.show === 'function') {
                widget.show();
              }
            }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            ЮЛІЯ
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-light leading-[0.9] tracking-[-0.02em] text-[#EAEAEA] cursor-pointer"
            onClick={() => {
              const widget = (window as any).ewWidget;
              if (widget && typeof widget.show === 'function') {
                widget.show();
              }
            }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
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
          <motion.span 
            className="cursor-pointer"
            whileHover={{ scale: 1.05, color: "#EAEAEA", transition: { duration: 0.2 } }}
          >
            5+ Років досвіду
          </motion.span>
          <span className="w-1 h-1 rounded-full bg-[#999999]" />
          <motion.span 
            className="cursor-pointer"
            whileHover={{ scale: 1.05, color: "#EAEAEA", transition: { duration: 0.2 } }}
          >
            ІФНМУ
          </motion.span>
          <span className="w-1 h-1 rounded-full bg-[#999999]" />
          <motion.span 
            className="cursor-pointer"
            whileHover={{ scale: 1.05, color: "#EAEAEA", transition: { duration: 0.2 } }}
          >
            ЛНМУ ім.Д.Галицького
          </motion.span>
        </motion.div>

        <motion.button
          onClick={() => {
            const widget = (window as any).ewWidget;
            if (widget && typeof widget.show === 'function') {
              widget.show();
            }
          }}
          className="mt-12 px-10 py-4 border border-[#EAEAEA]/50 text-[#EAEAEA] text-sm tracking-[0.2em] uppercase hover:bg-[#EAEAEA] hover:text-[#1C1C1C] transition-all duration-500 cursor-pointer bg-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.98 }}
        >
          Записатися на консультацію
        </motion.button>

{/* <BookingModal /> тут модалка через вікно*/}
      </motion.div>
      
    </section>
  )
}