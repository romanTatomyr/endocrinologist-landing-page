"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { MagneticButton } from "./magnetic-button"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const modalRef = useRef<HTMLDivElement | null>(null)

  // 🔒 Блокуємо скрол сторінки коли модал відкритий
  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth

      document.body.style.overflow = "hidden"
      document.body.style.paddingRight = `${scrollBarWidth}px`
    } else {
      document.body.style.overflow = ""
      document.body.style.paddingRight = ""
    }

    return () => {
      document.body.style.overflow = ""
      document.body.style.paddingRight = ""
    }
  }, [isOpen])

  // Focus modal when opened and notify global listeners (e.g., Lenis pause)
  useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus()
      window.dispatchEvent(new CustomEvent("modal:open"))
    } else {
      window.dispatchEvent(new CustomEvent("modal:close"))
    }

    return () => {
      window.dispatchEvent(new CustomEvent("modal:close"))
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
      onClose()
    }, 2000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full max-w-lg max-h-[calc(100vh-2rem)] bg-[#1C1C1C] border border-[#333333] rounded-lg overflow-auto shadow-lg"
              ref={modalRef}
              tabIndex={-1}
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#EAEAEA]/10 flex items-center justify-center text-[#EAEAEA] hover:bg-[#EAEAEA]/20 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="pt-12 px-6 pb-6 md:pt-10 md:px-8 md:pb-8">
              <motion.p
                className="text-[#EAEAEA]/40 text-xs tracking-[0.3em] uppercase mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Запис на консультацію
              </motion.p>

              <motion.h2
                className="text-2xl md:text-3xl font-light text-[#EAEAEA] mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Давайте почнемо ваш шлях до здоров'я
              </motion.h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-6"
                >
                  <p className="text-xl text-[#EAEAEA] mb-2">
                    Дякую за заявку!
                  </p>
                  <p className="text-[#EAEAEA]/60 text-sm">
                    Ми зв'яжемося з вами найближчим часом.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Ваше ім'я"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full bg-transparent border-b border-[#333333] py-2 text-base md:text-lg text-[#EAEAEA] placeholder:text-[#555555] focus:border-[#EAEAEA] focus:outline-none transition-colors"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full bg-transparent border-b border-[#333333] py-2 text-base md:text-lg text-[#EAEAEA] placeholder:text-[#555555] focus:border-[#EAEAEA] focus:outline-none transition-colors"
                  />

                  <input
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="w-full bg-transparent border-b border-[#333333] py-2 text-base md:text-lg text-[#EAEAEA] placeholder:text-[#555555] focus:border-[#EAEAEA] focus:outline-none transition-colors"
                  />

                  <textarea
                    placeholder="Опишіть вашу проблему (необов'язково)"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={2}
                    className="w-full bg-transparent border-b border-[#333333] py-2 text-base md:text-lg text-[#EAEAEA] placeholder:text-[#555555] focus:border-[#EAEAEA] focus:outline-none transition-colors resize-none"
                  />

                  <div className="pt-2 flex justify-center">
                    <MagneticButton className="px-6 py-2 rounded-full bg-[#EAEAEA] text-[#1C1C1C] text-base md:text-lg font-light hover:bg-[#999999] transition-colors duration-300 cursor-pointer">
                      Надіслати
                    </MagneticButton>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
