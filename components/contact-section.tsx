"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion } from "framer-motion"

function UnderlineInput({
  label,
  type = "text",
  name,
  value,
  onChange,
}: {
  label: string
  type?: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative"
    >
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={label}
        className="w-full bg-transparent text-xl md:text-2xl text-[#EAEAEA] placeholder-[#EAEAEA]/30 pb-4 pt-2 border-b border-[#EAEAEA]/20 focus:outline-none transition-colors duration-300"
      />
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-[#EAEAEA]"
        initial={{ width: "0%" }}
        animate={{ width: isFocused || value ? "100%" : "0%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
    </motion.div>
  )
}

function UnderlineTextarea({
  label,
  name,
  value,
  onChange,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative"
    >
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={label}
        rows={3}
        className="w-full bg-transparent text-xl md:text-2xl text-[#EAEAEA] placeholder-[#EAEAEA]/30 pb-4 pt-2 border-b border-[#EAEAEA]/20 focus:outline-none transition-colors duration-300 resize-none"
      />
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-[#EAEAEA]"
        initial={{ width: "0%" }}
        animate={{ width: isFocused || value ? "100%" : "0%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
    </motion.div>
  )
}

function MagneticSubmitButton() {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = (e.clientX - centerX) * 0.35
    const distanceY = (e.clientY - centerY) * 0.35

    setPosition({ x: distanceX, y: distanceY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.button
      ref={buttonRef}
      type="submit"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-[#EAEAEA] text-[#1C1C1C] text-lg md:text-xl font-light tracking-wider hover:bg-[#EAEAEA]/90 transition-colors duration-300"
    >
      Надіслати
    </motion.button>
  )
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="min-h-screen py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-[#EAEAEA]/40 text-sm tracking-[0.3em] uppercase mb-8"
        >
          Контакти
        </motion.p>

        <div className="max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-light text-[#EAEAEA] mb-12 tracking-tight leading-tight"
          >
            Розпочніть свій шлях
            <br />
            до здоров'я
          </motion.h2>

          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <UnderlineInput label="Ваше ім'я" name="name" value={formData.name} onChange={handleChange} />
              <UnderlineInput
                label="Електронна пошта"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <UnderlineInput
              label="Номер телефону"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <UnderlineTextarea
              label="Розкажіть про ваші проблеми зі здоров'ям..."
              name="message"
              value={formData.message}
              onChange={handleChange}
            />

            <div className="flex justify-center pt-12">
              <MagneticSubmitButton />
            </div>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-[#EAEAEA]/10 flex flex-col md:flex-row justify-between gap-8 text-[#EAEAEA]/40"
          >
            <div>
              <p className="text-sm tracking-widest uppercase mb-2">Локація</p>
              <p className="text-lg text-[#EAEAEA]/60">м. Львів, вул. Медична 15</p>
            </div>
            <div>
              <p className="text-sm tracking-widest uppercase mb-2">Пошта</p>
              <p className="text-lg text-[#EAEAEA]/60">yuliia.tatomyr@gmail.com</p>
            </div>
            <div>
              <p className="text-sm tracking-widest uppercase mb-2">Телефон</p>
              <p className="text-lg text-[#EAEAEA]/60">+38 (067) 555-01-42</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
