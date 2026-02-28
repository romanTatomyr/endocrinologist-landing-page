"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const services = [
  {
    title: "Здоров'я щитоподібної залози",
    description: "Комплексна допомога",
    image: "/thyroid-medical-illustration-soft-blue-tones-anatom.jpg",
  },
  {
    title: "Контроль діабету",
    description: "Сучасне управління глюкозою",
    image: "/diabetes-care-medical-illustration-glucose-monitori.jpg",
  },
  {
    title: "Гормональний баланс",
    description: "Відновлення рівноваги",
    image: "/hormonal-balance-medical-illustration-abstract-endo.jpg",
  },
  {
    title: "Метаболічне здоров'я",
    description: "Оптимізація обміну речовин",
    image: "/metabolic-wellness-medical-illustration-healthy-lif.jpg",
  },
]

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const imageX = useSpring(mouseX, springConfig)
  const imageY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left - 150)
        mouseY.set(e.clientY - rect.top - 100)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      return () => container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative py-16 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-[#EAEAEA]/40 text-sm tracking-[0.3em] uppercase mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Послуги
        </motion.p>

        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="border-t border-[#333333] py-6 md:py-8 cursor-pointer group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-8">
                <span className="text-[#555555] text-sm font-light">0{index + 1}</span>
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-light text-[#EAEAEA] group-hover:text-[#999999] transition-colors duration-500">
                  {service.title}
                </h3>
              </div>
              <motion.div className="hidden md:block text-[#666666] text-sm" initial={{ x: 0 }} whileHover={{ x: 10 }}>
                {service.description}
              </motion.div>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-[#333333]" />
      </div>

      {/* Floating cursor-following image */}
      <motion.div
        className="pointer-events-none fixed z-30 w-[300px] h-[200px] overflow-hidden"
        style={{
          x: imageX,
          y: imageY,
          opacity: hoveredIndex !== null ? 1 : 0,
          scale: hoveredIndex !== null ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      >
        {services.map((service, index) => (
          <motion.img
            key={service.title}
            src={service.image}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />
        ))}
      </motion.div>
    </section>
  )
}
