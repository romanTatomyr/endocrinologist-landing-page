"use client"

import { motion } from "framer-motion"
import Image from 'next/image'

function DocumentIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 2h7l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 2v6h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 12h7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M8.5 16h7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function SmallChecklistIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 10l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 15h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function TestTubeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 2h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M10 2v6c0 1.1.9 2 2 2s2-.9 2-2V2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 14l5 6 5-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 11.5c.8.5 2.3.8 3.5.8s2.7-.3 3.5-.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

interface PhilosophySectionProps {
  onBookingClick: () => void
}

export function PhilosophySection({ onBookingClick }: PhilosophySectionProps) {
  const icons = [
    <DocumentIcon className="h-6 w-6 text-[#6ecfaa]" key="doc" />,
    <SmallChecklistIcon className="h-6 w-6 text-[#6ecfaa]" key="check" />,
    <TestTubeIcon className="h-6 w-6 text-[#6ecfaa]" key="tube" />,
  ]
  return (
    <section id="philosophy" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-[#EAEAEA]/40 text-sm tracking-[0.3em] uppercase mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Розбір аналізів
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">

          {/* Card 1 - Головний меседж (background: /w_u_get) */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="relative overflow-hidden md:col-span-2 md:row-span-2 bg-[#252525] p-8 md:p-12 flex flex-col justify-between min-h-[300px] md:min-h-[400px]"
          >
            <div aria-hidden className="absolute inset-0">
              <Image src="/w_u_get.webp" alt="" fill className="object-cover object-center transform scale-105 opacity-80" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/90 to-transparent" />
            </div>

            <div className="relative z-10">
              <motion.h3
                className="text-3xl md:text-4xl lg:text-5xl font-light text-[#EAEAEA] leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Є аналізи —
                <br />
                <span className="text-[#EAEAEA]/60">але незрозуміло що з ними робити?</span>
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6"
              >
                <p className="text-[#EAEAEA]/50 text-base leading-relaxed max-w-sm">
                  Розберемо результати, пояснимо відхилення і скажемо що робити далі — без зайвого.
                </p>
                <motion.button
                  onClick={() => {
                    const widget = (window as any).ewWidget;
                    if (widget && typeof widget.show === 'function') {
                      widget.show();
                    }
                  }}
                  className="self-start px-8 py-3.5 bg-white text-[#1C1C1C] text-[11px] tracking-[0.16em] uppercase font-medium hover:bg-[#EAEAEA] transition-colors duration-300 cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Записатися на розбір
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Card 2 - Що отримаєте */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-[#252525] p-8 md:p-10 flex flex-col justify-between min-h-[200px]"
          >
            <span className="text-[#EAEAEA]/40 text-sm tracking-[0.2em] uppercase">Що отримаєте</span>
            <ul className="flex flex-col gap-3 mt-4">
              {
                [
                  "Розшифровку кожного показника",
                  "Пояснення що є нормою саме для вас",
                  "Конкретні рекомендації або направлення",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 h-7 w-7 flex items-center justify-center text-[#6ecfaa]">
                      {icons[i]}
                    </div>
                    <span className="text-[#EAEAEA]/70 text-base md:text-lg leading-relaxed">{item}</span>
                  </li>
                ))
              }
            </ul>
          </motion.div>

          {/* Card 3 - Формат (background: /on_offline_light) */}
          <motion.button
            onClick={() => {
              const widget = (window as any).ewWidget;
              if (widget && typeof widget.show === 'function') {
                widget.show();
              }
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-[#EAEAEA] p-8 md:p-10 flex flex-col justify-between min-h-[200px] text-left"
          >
              <div aria-hidden className="absolute inset-0">
                <Image src="/on_offline_light.webp" alt="" fill className="object-cover object-right transform scale-105 opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-transparent" />
              </div>

            <div className="relative z-10">
              <span className="text-[#1C1C1C]/40 text-sm tracking-[0.2em] uppercase">Формат</span>
              <div>
                <span className="text-4xl md:text-5xl font-light text-[#1C1C1C]">Онлайн</span>
                <p className="text-[#1C1C1C]/60 text-base mt-2">або офлайн прийом</p>
              </div>
            </div>
          </motion.button>

          {/* Card 4 - Кому підходить (background: /complex) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-[#252525] p-8 md:p-10 flex flex-col justify-center min-h-[200px]"
          >
            <div aria-hidden className="absolute inset-0">
              <Image src="/complex.webp" alt="" fill className="object-cover object-center transform scale-102 opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/70 to-transparent" />
            </div>

            <div className="relative z-10">
              <p className="text-lg md:text-xl font-light text-[#EAEAEA] leading-relaxed">
                Загальний аналіз крові · Гормони · УЗД{" "}
                <span className="text-[#EAEAEA]/60">та інші обстеження</span>
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}