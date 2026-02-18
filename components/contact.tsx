"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Linkedin, Github, Mail, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-gradient">Contato</span> e Redes
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Entre em contato para discutir projetos, oportunidades ou trocar ideias sobre Engenharia de Software e
          Segurança da Informação.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <div className="glass-card rounded-lg p-6 h-full">
            <h3 className="text-xl font-bold mb-6 text-[#AEEFFF]">Informações de Contato</h3>

            <div className="space-y-6">
              <div>
                <p className="text-gray-300 mb-2">
                  Estou disponível para projetos freelance, oportunidades de trabalho ou simplesmente para trocar ideias
                  sobre tecnologia e segurança.
                </p>
                <p className="text-gray-300">
                  Sinta-se à vontade para entrar em contato através do formulário ou diretamente pelas minhas redes
                  sociais.
                </p>
              </div>

              <div className="pt-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-4">CONECTE-SE COMIGO</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[#1e1e1e] hover:bg-[#AEEFFF]/10 hover:text-[#AEEFFF] transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[#1e1e1e] hover:bg-[#AEEFFF]/10 hover:text-[#AEEFFF] transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="mailto:contato@exemplo.com"
                    className="p-3 rounded-full bg-[#1e1e1e] hover:bg-[#AEEFFF]/10 hover:text-[#AEEFFF] transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3"
        >
          <div className="glass-card rounded-lg p-6">
            <h3 className="text-xl font-bold mb-6 text-[#AEEFFF]">Envie uma Mensagem</h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-10 text-center"
              >
                <CheckCircle size={60} className="text-[#AEEFFF] mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Mensagem Enviada!</h4>
                <p className="text-gray-300">Obrigado pelo contato. Responderei o mais breve possível.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
                      className="bg-[#1e1e1e] border-[#2e2e2e] focus:border-[#AEEFFF] focus:ring-[#AEEFFF]/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="seu.email@exemplo.com"
                      required
                      className="bg-[#1e1e1e] border-[#2e2e2e] focus:border-[#AEEFFF] focus:ring-[#AEEFFF]/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Assunto da mensagem"
                    required
                    className="bg-[#1e1e1e] border-[#2e2e2e] focus:border-[#AEEFFF] focus:ring-[#AEEFFF]/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Sua mensagem..."
                    rows={5}
                    required
                    className="bg-[#1e1e1e] border-[#2e2e2e] focus:border-[#AEEFFF] focus:ring-[#AEEFFF]/20"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#AEEFFF] text-[#121212] hover:bg-[#8BDBEB]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#121212]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Mensagem
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
