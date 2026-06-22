"use client"

import { motion } from "framer-motion"

interface PhilosophySectionProps {
  onBookingClick: () => void
}

export function PhilosophySection({ onBookingClick }: PhilosophySectionProps) {
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

          {/* Card 1 - Головний меседж */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 bg-[#252525] p-8 md:p-12 flex flex-col justify-between min-h-[300px] md:min-h-[400px]"
          >
            <motion.h3
              className="text-3xl md:text-4xl lg:text-5xl font-light text-[#EAEAEA] leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Є аналізи —
              <br />
              <span className="text-[#EAEAEA]/60">
                але незрозуміло що з ними робити?
              </span>
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
              {[
                "Розшифровку кожного показника",
                "Пояснення що є нормою саме для вас",
                "Конкретні рекомендації або направлення",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6ecfaa] flex-shrink-0 mt-2" />
                  <span className="text-[#EAEAEA]/70 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 3 - Stat */}
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
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="bg-[#EAEAEA] p-8 md:p-10 flex flex-col justify-between min-h-[200px]"
          >
            <span className="text-[#1C1C1C]/40 text-sm tracking-[0.2em] uppercase">Формат</span>
            <div>
              <span className="text-4xl md:text-5xl font-light text-[#1C1C1C]">Онлайн</span>
              <p className="text-[#1C1C1C]/60 text-base mt-2">або офлайн прийом</p>
            </div>
          </motion.button>

          {/* Card 4 - Кому підходить */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-[#252525] p-8 md:p-10 flex flex-col justify-center min-h-[200px]"
          >
            <p className="text-lg md:text-xl font-light text-[#EAEAEA] leading-relaxed">
              Загальний аналіз крові · Гормони · УЗД{" "}
              <span className="text-[#EAEAEA]/60">
                 та інші обстеження
              </span>
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}