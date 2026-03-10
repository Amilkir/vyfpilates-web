import Hero from "@/components/Hero"
import Metodo from "@/components/Method"
import Beneficios from "@/components/Benefits"
import Galeria from "@/components/Gallery"
import Teachers from "@/components/Teachers"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import TeacherIntro from "@/components/TeacherIntro"
import StudioIntro from "@/components/StudioIntro"
import FadeIn from "@/components/FadeIn"

export default function Home() {
  return (
    <main>
      <FadeIn>
        <Hero />
      </FadeIn>
      <FadeIn>
        <TeacherIntro />
      </FadeIn>
      <FadeIn>
        <StudioIntro />
      </FadeIn>
      <FadeIn>
        <Metodo />
      </FadeIn>
      <FadeIn>
        <Beneficios />
      </FadeIn>
      <FadeIn>
        <Galeria />
      </FadeIn>
      <FadeIn>
        <Teachers />
      </FadeIn>
      <FadeIn>
        <Contact />
      </FadeIn>
      <Footer />
    </main>
  )
}
