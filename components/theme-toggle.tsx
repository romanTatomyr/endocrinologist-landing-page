"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed top-4 left-4 sm:top-8 sm:left-8 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary dark:bg-[#EAEAEA] text-primary-foreground flex items-center justify-center cursor-pointer transition-colors duration-300 hover:opacity-80"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      title={isDark ? "Світла тема" : "Темна тема"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 360 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-primary-foreground dark:text-[#1C1C1C]" strokeWidth={2} />
        ) : (
          <Moon className="w-5 h-5 text-primary-foreground dark:text-[#1C1C1C]" strokeWidth={2} />
        )}
      </motion.div>
    </motion.button>
  )
}
