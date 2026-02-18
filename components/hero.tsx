"use client"

import { motion } from "framer-motion"
import { ArrowRight, FileText, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-20">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="text-gradient glow">Engenharia de Software</span>
            <br />& Segurança da Informação
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-10 text-gray-300"
          >
            Crio soluções seguras, resilientes e robustas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-[#AEEFFF] text-[#121212] hover:bg-[#8BDBEB] font-medium px-6 w-full sm:w-auto"
              asChild
            >
              <a href="#portfolio">
                Ver Portfólio
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-[#AEEFFF] text-[#AEEFFF] hover:bg-[#AEEFFF]/10 font-medium px-6 w-full sm:w-auto"
              asChild
            >
              <a href="/curriculo.html" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                Acessar Currículo
              </a>
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="text-white hover:bg-white/10 font-medium px-6 w-full sm:w-auto"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Entrar em Contato
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex justify-center"
          >
            <div className="animate-bounce">
              <ArrowRight size={24} className="rotate-90 text-[#AEEFFF]" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
