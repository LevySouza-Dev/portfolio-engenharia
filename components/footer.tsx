"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="py-8 relative z-10">
      <div className="container mx-auto px-4">
        <div className="glass-effect rounded-lg py-8 px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold text-gradient">
                  <span className="text-[#AEEFFF]">Sec</span>
                  <span className="text-white">Dev</span>
                </span>
              </Link>
              <p className="text-gray-400 mt-2">Engenharia de Software & Segurança da Informação</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 md:mt-0"
            >
              <button
                onClick={scrollToTop}
                className="p-3 rounded-full bg-[#1e1e1e] hover:bg-[#AEEFFF]/10 hover:text-[#AEEFFF] transition-colors"
                aria-label="Voltar ao topo"
              >
                <ArrowUp size={20} />
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border-t border-[#2e2e2e] mt-6 pt-6 text-center"
          >
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} - Todos os direitos reservados</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
