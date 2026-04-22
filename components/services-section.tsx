"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const services = [
  {
    title: "Здоров'я щитоподібної залози",
    description: "Комплексна допомога",
    image: "/journal-thyroid-health-medical-illustration-butterfly.jpg",
  },
  {
    title: "Контроль діабету",
    description: "Сучасне управління глюкозою",
    image: "/journal-diabetes-prevention-healthy-lifestyle-medical.jpg",
  },
  {
    title: "Гормональний баланс",
    description: "Відновлення рівноваги",
    image: "/journal-hormonal-balance-abstract-medical-art-soft-bl.jpg",
  },
  {
    title: "Метаболічне здоров'я",
    description: "Оптимізація обміну речовин",
    image: "/journal-metabolic-health-lifestyle-medical-photograph.jpg",
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
        mouseX.set(e.clientX - rect.left + 20)
        mouseY.set(e.clientY - rect.top - 250)
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
            onClick={() => {
              const widget = (window as any).ewWidget;
              if (widget && typeof widget.show === 'function') {
                widget.show();
              }
            }}
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.15,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-8">
                <motion.span 
                  className="text-[#555555] text-sm font-light"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.15 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                >
                  0{index + 1}
                </motion.span>
                <motion.h3 
                  className="text-4xl md:text-6xl lg:text-7xl font-light text-[#EAEAEA] group-hover:text-[#999999] transition-colors duration-500"
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15 + 0.2,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  viewport={{ once: true }}
                >
                  {service.title}
                </motion.h3>
              </div>
              <motion.div 
                className="hidden md:block text-[#666666] text-sm"
                initial={{ x: 0, opacity: 0 }}
                whileHover={{ x: 10 }}
                whileInView={{ opacity: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15 + 0.4,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                viewport={{ once: true }}
              >
                {service.description}
              </motion.div>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-[#333333]" />
      </div>

      <motion.div
        className="pointer-events-none fixed z-50 w-[300px] h-[200px] overflow-hidden"
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
