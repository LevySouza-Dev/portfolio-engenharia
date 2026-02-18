"use client"

import { motion } from "framer-motion"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { GraduationCap, Award, Code, Shield, BookOpen } from "lucide-react"

const timelineItems = [
  {
    id: 1,
    date: "2023 - Presente",
    title: "Especialização em Segurança da Informação",
    description:
      "Aprofundamento em técnicas de segurança ofensiva e defensiva, com foco em desenvolvimento seguro e análise de vulnerabilidades.",
    icon: <Shield className="text-[#121212]" />,
    category: "education",
  },
  {
    id: 2,
    date: "2022 - 2023",
    title: "Projeto Full-Stack",
    description:
      "Desenvolvimento de aplicação completa com autenticação, autorização e implementação de boas práticas de segurança.",
    icon: <Code className="text-[#121212]" />,
    category: "project",
  },
  {
    id: 3,
    date: "2022",
    title: "Certificação em Desenvolvimento Seguro",
    description: "Certificação focada em práticas de desenvolvimento seguro e implementação de OWASP Top 10.",
    icon: <Award className="text-[#121212]" />,
    category: "certification",
  },
  {
    id: 4,
    date: "2021 - 2022",
    title: "Bootcamp de Desenvolvimento Web",
    description: "Imersão em tecnologias front-end e back-end, com foco em JavaScript, React e Node.js.",
    icon: <BookOpen className="text-[#121212]" />,
    category: "education",
  },
  {
    id: 5,
    date: "2021",
    title: "Primeiro Projeto Open Source",
    description: "Contribuição para projeto de código aberto focado em ferramentas de segurança para desenvolvedores.",
    icon: <Code className="text-[#121212]" />,
    category: "project",
  },
  {
    id: 6,
    date: "2020",
    title: "Formação Técnica",
    description: "Conclusão da formação técnica em Engenharia de Software com ênfase em desenvolvimento web e mobile.",
    icon: <GraduationCap className="text-[#121212]" />,
    category: "education",
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-gradient">Jornada</span> de Aprendizado
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Minha trajetória de evolução profissional e acadêmica na área de tecnologia, com foco em Engenharia de
          Software e Segurança da Informação.
        </p>
      </motion.div>

      <div className="timeline-wrapper">
        <style jsx global>{`
          .vertical-timeline {
            width: 100%;
            max-width: 1200px;
          }
          
          .vertical-timeline-element-content {
            background: rgba(30, 30, 30, 0.5);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(174, 239, 255, 0.1);
            box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.37);
            color: white;
          }
          
          .vertical-timeline-element-content-arrow {
            border-right-color: rgba(30, 30, 30, 0.5);
          }
          
          .vertical-timeline-element-date {
            color: #AEEFFF;
            opacity: 0.8;
          }
          
          .vertical-timeline-element-icon {
            background: #AEEFFF;
            box-shadow: 0 0 0 4px #AEEFFF, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
          }
          
          .vertical-timeline::before {
            background: rgba(174, 239, 255, 0.2);
          }
          
          @media only screen and (min-width: 1170px) {
            .vertical-timeline.vertical-timeline--two-columns .vertical-timeline-element-content .vertical-timeline-element-date {
              text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            }
          }
        `}</style>

        <VerticalTimeline lineColor="rgba(174, 239, 255, 0.2)">
          {timelineItems.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              date={item.date}
              iconStyle={{ background: "#AEEFFF", color: "#121212" }}
              icon={item.icon}
              contentStyle={{
                background: "rgba(30, 30, 30, 0.5)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(174, 239, 255, 0.1)",
                boxShadow: "0 4px 16px 0 rgba(0, 0, 0, 0.37)",
              }}
              contentArrowStyle={{ borderRight: "7px solid rgba(30, 30, 30, 0.5)" }}
            >
              <h3 className="vertical-timeline-element-title text-xl font-bold text-[#AEEFFF]">{item.title}</h3>
              <p className="mt-2 text-gray-300">{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}
