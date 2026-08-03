"use client"

import { useRef, useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion, useScroll, useTransform } from "framer-motion"
import BookingModal from './BookingModal';

interface HeroSectionProps {
  onBookingClick: () => void
}

export function HeroSection({ onBookingClick }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.05])
  const rotate = useTransform(scrollYProgress, [0, 0.5], [0, -1])

  const heroImage = mounted && resolvedTheme === "light" ? "/doctor-hero-white.webp" : "/doctor-hero.webp"

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-background dark:bg-[#1C1C1C] transition-colors duration-300">
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div className="absolute inset-0 bg-background/55 dark:bg-[#1C1C1C]/60 z-10 transition-colors duration-300" />
        <motion.img
          src={heroImage}
          alt="Л-р. Юлія Татомир"
          className="w-full h-full object-cover object-top cursor-pointer"
          onClick={() => {
            const widget = (window as any).ewWidget;
            if (widget && typeof widget.show === 'function') {
              widget.show();
            }
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </motion.div>

      <motion.div className="relative z-20 text-center px-4" style={{ opacity, scale, rotate }}>
        {/* limit width so large text/buttons don't overflow small viewports */}
        <div className="mx-auto w-full max-w-[min(92vw,1100px)] box-border">
        <motion.p
          className="text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground dark:text-[#999999] font-semibold dark:font-normal transition-colors duration-300 mb-4"
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
          Лікар-ендокринолог
        </motion.p>

        <div className="overflow-hidden mb-2 sm:mb-4">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] font-light leading-[0.95] tracking-[-0.02em] text-foreground dark:text-[#EAEAEA] cursor-pointer break-words transition-colors duration-300"
            onClick={() => {
              const widget = (window as any).ewWidget;
              if (widget && typeof widget.show === 'function') {
                widget.show();
              }
            }}
            initial={{ y: "30%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            ЮЛІЯ
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-2 sm:mb-4">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] font-light leading-[0.95] tracking-[-0.02em] text-foreground dark:text-[#EAEAEA] cursor-pointer break-words transition-colors duration-300"
            onClick={() => {
              const widget = (window as any).ewWidget;
              if (widget && typeof widget.show === 'function') {
                widget.show();
              }
            }}
            initial={{ y: "30%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            ТАТОМИР
          </motion.h1>
        </div>

        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-8 text-xs sm:text-sm text-foreground/70 dark:text-[#999999] font-medium dark:font-normal transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.span 
            className="cursor-pointer"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            ДОКАЗОВА МЕДИЦИНА
          </motion.span>
          <span className="w-1 h-1 rounded-full bg-foreground/70 dark:bg-[#999999] transition-colors duration-300" />
          <motion.span 
            className="cursor-pointer"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            ІНДИВІДУАЛЬНИЙ ПІДХІД
          </motion.span>
          <span className="w-1 h-1 rounded-full bg-foreground/70 dark:bg-[#999999] transition-colors duration-300" />
          <motion.span 
            className="cursor-pointer"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            ОНЛАЙН ТА ОФЛАЙН ПРИЙОМИ
          </motion.span>
        </motion.div>

        <motion.button
          onClick={() => {
            const widget = (window as any).ewWidget;
            if (widget && typeof widget.show === 'function') {
              widget.show();
            }
          }}
          className="mt-12 px-4 sm:px-10 py-3 border border-foreground/50 dark:border-[#EAEAEA]/50 text-foreground dark:text-[#EAEAEA] text-sm sm:text-base tracking-[0.12em] uppercase hover:bg-foreground dark:hover:bg-[#EAEAEA] hover:text-background dark:hover:text-[#1C1C1C] transition-all duration-300 cursor-pointer bg-transparent max-w-full whitespace-normal"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.98 }}
        >
          Записатися на консультацію
        </motion.button>

        <motion.div
          className="mt-6 sm:mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-8 text-xs sm:text-sm text-foreground/70 dark:text-[#999999] font-medium dark:font-normal transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.span 
            className="cursor-pointer"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            ТИСМЕНИЦЯ
          </motion.span>
          <span className="w-1 h-1 rounded-full bg-foreground/70 dark:bg-[#999999]" />
          <motion.span 
            className="cursor-pointer"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            ІВАНО-ФРАНКІВСЬК
          </motion.span>
        </motion.div>
        </div>

        {/* <BookingModal /> */}
      </motion.div>
      
    </section>
  )
}