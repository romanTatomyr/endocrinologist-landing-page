"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface FloatingMenuProps {
  onBookingClick: () => void
}

export function FloatingMenu({ onBookingClick }: FloatingMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: "Головна", href: "#" },
    { label: "Послуги", href: "#services" },
    { label: "Філософія", href: "#philosophy" },
    { label: "Інсайти", href: "#insights" },
    { label: "Контакти", href: "#contact" },
  ]

  const handleBookingClick = () => {
    setIsOpen(false)
    onBookingClick()
  }

  return (
    <>
      {/* Floating hamburger button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 sm:top-8 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary dark:bg-[#EAEAEA] text-primary-foreground flex items-center justify-center cursor-pointer transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative w-5 h-4">
          <motion.span
            className="absolute left-0 right-0 h-0.5 bg-primary-foreground dark:bg-[#1C1C1C] block"
            style={{ transformOrigin: "center" }}
            initial={false}
            animate={{ top: isOpen ? "50%" : "0%", y: isOpen ? "-50%" : "0%", rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.18 }}
          />

          <motion.span
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-primary-foreground dark:bg-[#1C1C1C] block"
            initial={false}
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.14 }}
          />

          <motion.span
            className="absolute left-0 right-0 h-0.5 bg-primary-foreground dark:bg-[#1C1C1C] block"
            style={{ transformOrigin: "center" }}
            initial={false}
            animate={{ top: isOpen ? "50%" : "100%", y: isOpen ? "-50%" : "-100%", rotate: isOpen ? -45 : 0 }}
            transition={{ duration: 0.18 }}
          />
        </div>
      </motion.button>

      {/* Full-screen overlay navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-background dark:bg-[#1C1C1C] flex items-center justify-center transition-colors duration-300"
          >
            <nav className="flex flex-col items-center gap-6">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 35 }}
                    transition={{ duration: 0.32, delay: index * 0.06 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground dark:text-[#EAEAEA] hover:text-muted-foreground dark:hover:text-[#999999] transition-colors duration-200"
                  >
                    {item.label}
                  </motion.a>
                ))}

                <motion.button
                  onClick={() => {
            const widget = (window as any).ewWidget;
            if (widget && typeof widget.show === 'function') {
              widget.show();
            }
          }}
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 35 }}
                  transition={{ duration: 0.36, delay: menuItems.length * 0.07 }}
                  className="mt-6 px-8 py-3 border border-foreground dark:border-[#EAEAEA] text-xl font-light text-foreground dark:text-[#EAEAEA] hover:bg-foreground dark:hover:bg-[#EAEAEA] hover:text-background dark:hover:text-[#1C1C1C] transition-colors duration-200 cursor-pointer rounded"
                >
                  Записатися
                </motion.button>
              </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
