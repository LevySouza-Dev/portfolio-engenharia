"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, Code, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

const projects = {
  software: [
    {
      id: 1,
      title: "API RESTful",
      description: "API escalável com autenticação JWT e documentação Swagger",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      challenges: "Implementação de sistema de cache e otimização de consultas",
      github: "#",
      demo: "#",
      category: "software",
    },
    {
      id: 2,
      title: "Dashboard Administrativo",
      description: "Interface de administração com gráficos e análises em tempo real",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
      challenges: "Otimização de performance e renderização condicional",
      github: "#",
      demo: "#",
      category: "software",
    },
    {
      id: 3,
      title: "Sistema de Automação",
      description: "Scripts para automação de tarefas repetitivas e geração de relatórios",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Python", "Pandas", "Selenium", "Docker"],
      challenges: "Integração com múltiplas fontes de dados e tratamento de exceções",
      github: "#",
      demo: "#",
      category: "software",
    },
  ],
  security: [
    {
      id: 4,
      title: "Scanner de Vulnerabilidades",
      description: "Ferramenta para identificação de vulnerabilidades em aplicações web",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Python", "OWASP", "SQLMap", "Docker"],
      challenges: "Detecção de falsos positivos e minimização de impacto em produção",
      github: "#",
      demo: "#",
      category: "security",
    },
    {
      id: 5,
      title: "Análise de Tráfego de Rede",
      description: "Sistema de monitoramento e análise de tráfego para detecção de anomalias",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Wireshark", "Python", "Machine Learning", "ELK Stack"],
      challenges: "Processamento de grandes volumes de dados em tempo real",
      github: "#",
      demo: "#",
      category: "security",
    },
    {
      id: 6,
      title: "Implementação SIEM",
      description: "Configuração e personalização de sistema SIEM para monitoramento de segurança",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Wazuh", "ELK Stack", "Linux", "Shell Script"],
      challenges: "Integração com múltiplas fontes de logs e criação de alertas personalizados",
      github: "#",
      demo: "#",
      category: "security",
    },
  ],
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("software")

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
    <section id="portfolio" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-gradient">Portfólio</span> de Projetos
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Conheça alguns dos meus projetos em Engenharia de Software e Segurança da Informação, desenvolvidos com foco
          em qualidade, segurança e escalabilidade.
        </p>
      </motion.div>

      <Tabs defaultValue="software" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
        <div className="flex justify-center mb-8">
          <TabsList className="glass-effect">
            <TabsTrigger
              value="software"
              className="data-[state=active]:text-[#AEEFFF] data-[state=active]:shadow-[0_0_10px_rgba(174,239,255,0.5)]"
            >
              <Code className="mr-2 h-4 w-4" />
              Engenharia de Software
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="data-[state=active]:text-[#AEEFFF] data-[state=active]:shadow-[0_0_10px_rgba(174,239,255,0.5)]"
            >
              <Shield className="mr-2 h-4 w-4" />
              Segurança da Informação
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="software">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.software.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </TabsContent>

        <TabsContent value="security">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.security.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      className="glass-card rounded-lg overflow-hidden flex flex-col h-full"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="outline" className="bg-[#121212]/70 border-[#AEEFFF]/30 text-[#AEEFFF]">
            {project.category === "software" ? "Software" : "Segurança"}
          </Badge>
        </div>
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-[#AEEFFF]">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>

        <div className="mb-4 flex-grow">
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Tecnologias:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-[#1e1e1e] text-[#AEEFFF]/80">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Desafios:</h4>
          <p className="text-sm text-gray-400">{project.challenges}</p>
        </div>

        <div className="flex gap-2 mt-auto">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-[#AEEFFF]/30 hover:border-[#AEEFFF] hover:bg-[#AEEFFF]/10"
            asChild
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button size="sm" className="flex-1 bg-[#AEEFFF] text-[#121212] hover:bg-[#8BDBEB]" asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
