"use client"

import { motion } from "framer-motion"
import { Lock, Shield, Code } from "lucide-react"

const principles = [
  {
    id: 1,
    icon: <Lock className="h-10 w-10 text-[#AEEFFF]" />,
    title: "Privacidade como Pilar Central",
    description:
      "Compromisso com a proteção de dados e privacidade em todos os projetos desenvolvidos, seguindo as melhores práticas e regulamentações.",
  },
  {
    id: 2,
    icon: <Code className="h-10 w-10 text-[#AEEFFF]" />,
    title: "Desenvolvimento Seguro desde o Início",
    description:
      "Implementação de práticas de segurança desde as primeiras etapas do desenvolvimento, garantindo sistemas mais resilientes e confiáveis.",
  },
  {
    id: 3,
    icon: <Shield className="h-10 w-10 text-[#AEEFFF]" />,
    title: "Defesa Digital e Resiliência",
    description:
      "Foco na construção de sistemas que possam resistir a ameaças e se recuperar rapidamente de incidentes, mantendo a integridade dos dados.",
  },
]

export default function Principles() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="principles" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-gradient">Princípios</span> Fundamentais
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Os valores e princípios que guiam meu trabalho e abordagem profissional na área de tecnologia e segurança da
          informação.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
      >
        {principles.map((principle) => (
          <motion.div
            key={principle.id}
            variants={item}
            className="glass-card rounded-lg p-6 flex flex-col items-center text-center hover:border-[#AEEFFF]/30 transition-all duration-300"
            whileHover={{
              y: -5,
              boxShadow: "0 10px 30px rgba(174, 239, 255, 0.15)",
            }}
          >
            <div className="mb-4 p-3 rounded-full bg-[#1e1e1e] glow-border">{principle.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-[#AEEFFF]">{principle.title}</h3>
            <p className="text-gray-300">{principle.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
