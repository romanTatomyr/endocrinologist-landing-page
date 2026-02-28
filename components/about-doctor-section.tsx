"use client"

import { useRef, useLayoutEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const bioLines = [
  "Лікар-ендокринолог із 5-річним досвідом",
  "у лікуванні діабету, патологій щитоподібної",
  "залози та корекції метаболічних порушень.",
  "",
  "Поєднує доказову медицину з індивідуальною",
  "стратегією способу життя, фокусуючись на",
  "гормональному балансі та профілактиці.",
  "",
  "Системно вдосконалює навички на профільних",
  "заходах, будуючи роботу на довірливій",
  "комунікації та сучасних протоколах.",
]

function MaskRevealLine({
  children,
}: {
  children: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)

  useLayoutEffect(() => {
    if (ref.current) setReady(true)
  }, [])

  const { scrollYProgress } = useScroll(
    ready
      ? {
          target: ref,
          offset: ["start 0.9", "start 0.5"],
        }
      : {}
  )

  const y = useTransform(scrollYProgress, [0, 1], [40, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  if (!children) return <div className="h-6" />

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.p
        style={ready ? { y, opacity } : { y: 40, opacity: 0 }}
        className="text-xl md:text-2xl lg:text-3xl text-[#EAEAEA]/80 font-light leading-relaxed"
      >
        {children}
      </motion.p>
    </div>
  )
}

export function AboutDoctorSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)

  useLayoutEffect(() => {
    if (sectionRef.current) setReady(true)
  }, [])

  const { scrollYProgress } = useScroll(
    ready
      ? {
          target: sectionRef,
          offset: ["start end", "end start"],
        }
      : {}
  )

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-16 px-6 md:px-12 lg:px-24 bg-[#1C1C1C]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-[#EAEAEA]/40 text-sm tracking-[0.3em] uppercase mb-8"
        >
          Про лікаря
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative aspect-[3/4] overflow-hidden bg-[#2C2C2C]">
            <motion.div
              style={ready ? { y: imageY } : { y: 0 }}
              className="absolute inset-0 scale-110"
            >
              <Image
                src="/doctor-about.jpeg"
                alt="Л-р. Юлія Татомир"
                fill
                className="object-cover object-top grayscale"
                priority
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent opacity-40" />
          </div>

          <div className="space-y-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-[#EAEAEA] mb-12 tracking-tight"
            >
              Юлія Татомир
            </motion.h2>

            {bioLines.map((line, index) => (
              <MaskRevealLine key={index}>
                {line}
              </MaskRevealLine>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
