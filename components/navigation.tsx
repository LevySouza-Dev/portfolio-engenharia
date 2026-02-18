"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Portfólio", href: "#portfolio" },
  { name: "Jornada", href: "#timeline" },
  { name: "Princípios", href: "#principles" },
  { name: "Habilidades", href: "#skills" },
  { name: "Contato", href: "#contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Estilos de botão que o seu projeto está usando, replicados para o <a>
  const buttonClasses = "ml-2 bg-[#AEEFFF] text-[#121212] hover:bg-[#8BDBEB] px-4 py-2 rounded-md transition-colors text-sm font-semibold"
  const mobileButtonClasses = "bg-[#AEEFFF] text-[#121212] hover:bg-[#8BDBEB] px-4 py-2 rounded-md transition-colors font-semibold"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-effect py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <span className="text-xl font-bold text-gradient">
                <span className="text-[#AEEFFF]">Sec</span>
                <span className="text-white">Dev</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link href={item.href} className="px-4 py-2 text-sm rounded-md hover:text-[#AEEFFF] transition-colors">
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
            >
              {/* CORREÇÃO DO LINK AQUI - Versão Desktop */}
              <a 
                href="/curriculo.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className={buttonClasses}
              >
                Currículo
              </a>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-effect"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-4 py-2 rounded-md hover:bg-[#1e1e1e] hover:text-[#AEEFFF] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                {/* CORREÇÃO DO LINK AQUI - Versão Mobile */}
                <a 
                  href="/curriculo.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={mobileButtonClasses}
                  onClick={() => setIsOpen(false)} // Fecha o menu ao clicar
                >
                  Currículo
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}