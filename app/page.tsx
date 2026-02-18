import Hero from "@/components/hero"
import Portfolio from "@/components/portfolio"
import Timeline from "@/components/timeline"
import Principles from "@/components/principles"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import ParticlesBackground from "@/components/particles-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] text-white overflow-hidden">
      <ParticlesBackground />
      <div className="container mx-auto px-4 relative z-10">
        <Hero />
        <Portfolio />
        <Timeline />
        <Principles />
        <Skills />
        <Contact />
      </div>
    </main>
  )
}
