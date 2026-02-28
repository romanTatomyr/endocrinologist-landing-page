"use client"

import { motion } from "framer-motion"
import { MagneticButton } from "./magnetic-button"

interface FooterSectionProps {
  onBookingClick: () => void
}

export function FooterSection({ onBookingClick }: FooterSectionProps) {
  return (
    <footer id="contact" className="relative py-16 md:py-24 px-4 md:px-12 bg-[#1C1C1C] border-t border-[#333333]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          className="text-[#555555] text-sm tracking-[0.3em] uppercase mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Готові змінити своє здоров'я?
        </motion.p>

        <motion.h2
          className="text-5xl md:text-7xl lg:text-8xl font-light text-[#EAEAEA] mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Зв'яжіться зі мною
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <MagneticButton
            onClick={onBookingClick}
            className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-[#EAEAEA] text-[#1C1C1C] flex items-center justify-center text-lg md:text-xl font-light tracking-wide hover:bg-[#999999] transition-colors duration-500 cursor-pointer"
          >
            Записатися
          </MagneticButton>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-[#555555] text-sm tracking-[0.2em] uppercase mb-4">Локація</p>
            <p className="text-[#EAEAEA] text-lg font-light">
              вул. Січовий Стрільців 70
              <br />
              клініка МедЛюкс
              <br />
              м. Івано-Франківськ
            </p>
          </div>

          <div>
            <p className="text-[#555555] text-sm tracking-[0.2em] uppercase mb-4">Контакти</p>
            <p className="text-[#EAEAEA] text-lg font-light">
              <a href="mailto:yuliia.tatomyr@gmail.com" className="hover:text-[#999999] transition-colors duration-300">
                yuliia.tatomyr@gmail.com
              </a>
              <br />
              <a href="tel:+380666859122" className="hover:text-[#999999] transition-colors duration-300">
                +38 (066) 685-91-22
              </a>
            </p>
          </div>

          <div>
            <p className="text-[#555555] text-sm tracking-[0.2em] uppercase mb-4">Години роботи</p>
            <p className="text-[#EAEAEA] text-lg font-light">
              Вівторок, Субота
              <br />
              9:00 — 13:00
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 pt-8 border-t border-[#333333] flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[#555555] text-sm">© 2026 Юлія Татомир. Усі права захищено.</p>
          <div className="flex gap-8">
            <a href="#" className="text-[#555555] text-sm hover:text-[#EAEAEA] transition-colors duration-300">
              Instagram
            </a>
            <a href="#" className="text-[#555555] text-sm hover:text-[#EAEAEA] transition-colors duration-300">
              LinkedIn
            </a>
            <a href="#" className="text-[#555555] text-sm hover:text-[#EAEAEA] transition-colors duration-300">
              Telegram
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
