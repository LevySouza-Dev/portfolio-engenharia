"use client"

import { motion } from "framer-motion"
import { Code2, FileJson, Bug, ShieldCheck, FileWarning, GitBranch } from "lucide-react"

const skills = [
  {
    id: 1,
    name: "Python",
    icon: <Code2 className="h-6 w-6" />,
    level: 85,
  },
  {
    id: 2,
    name: "JavaScript",
    icon: <FileJson className="h-6 w-6" />,
    level: 90,
  },
  {
    id: 3,
    name: "Pentesting Básico",
    icon: <Bug className="h-6 w-6" />,
    level: 75,
  },
  {
    id: 4,
    name: "Desenvolvimento Seguro",
    icon: <ShieldCheck className="h-6 w-6" />,
    level: 80,
  },
  {
    id: 5,
    name: "Modelagem de Ameaças",
    icon: <FileWarning className="h-6 w-6" />,
    level: 70,
  },
  {
    id: 6,
    name: "Git e Versionamento",
    icon: <GitBranch className="h-6 w-6" />,
    level: 85,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-gradient">Habilidades</span> Técnicas
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Principais competências e conhecimentos técnicos que aplico no desenvolvimento de soluções seguras e
          eficientes.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <SkillCard key={skill.id} skill={skill} index={index} />
        ))}
      </div>
    </section>
  )
}

function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-lg p-6 hover:border-[#AEEFFF]/30 transition-all duration-300"
      whileHover={{
        y: -5,
        boxShadow: "0 10px 30px rgba(174, 239, 255, 0.15)",
      }}
    >
      <div className="flex items-center mb-4">
        <div className="p-2 rounded-md bg-[#1e1e1e] mr-3">{skill.icon}</div>
        <h3 className="text-lg font-bold text-white">{skill.name}</h3>
      </div>

      <div className="w-full bg-[#1e1e1e] rounded-full h-2.5 mb-1">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
          className="h-2.5 rounded-full"
          style={{
            background: `linear-gradient(90deg, #AEEFFF, #89C2FF)`,
            boxShadow: "0 0 10px rgba(174, 239, 255, 0.5)",
          }}
        />
      </div>
      <div className="flex justify-end">
        <span className="text-sm text-[#AEEFFF]">{skill.level}%</span>
      </div>
    </motion.div>
  )
}
