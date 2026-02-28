"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-[#EAEAEA]/40 text-sm tracking-[0.3em] uppercase mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Філософія
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {/* Card 1 - Large headline card (spans 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 bg-[#252525] p-8 md:p-12 flex flex-col justify-end min-h-[300px] md:min-h-[400px]"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#EAEAEA] leading-tight">
              Лікуємо людину,
              <br />
              <span className="text-[#EAEAEA]/60">а не результати аналізів.</span>
            </h3>
          </motion.div>

          {/* Card 2 - Image card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-2 relative overflow-hidden min-h-[250px]"
          >
            <Image src="/endocrinologist-landing-page/abstract-medical-soft-teal-waves-zen-minimalist.jpg" alt="Абстрактна медична ілюстрація" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/60 to-transparent" />
          </motion.div>

          {/* Card 3 - Stat card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#EAEAEA] p-8 md:p-10 flex flex-col justify-between min-h-[200px]"
          >
            <span className="text-[#1C1C1C]/40 text-sm tracking-[0.2em] uppercase">Досвід</span>
            <div>
              <span className="text-6xl md:text-7xl font-light text-[#1C1C1C]">5+</span>
              <p className="text-[#1C1C1C]/60 text-lg mt-2">років практики</p>
            </div>
          </motion.div>

          {/* Card 4 - Text card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-[#252525] p-8 md:p-10 flex flex-col justify-center min-h-[200px]"
          >
            <p className="text-xl md:text-2xl font-light text-[#EAEAEA] leading-relaxed">
              Доказова медицина в поєднанні з{" "}
              <span className="text-[#EAEAEA]/60">емпатією та індивідуальним підходом.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
