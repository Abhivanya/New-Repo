import About from "./_components/About";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import HeroSection from "./_components/home/HeroSection";
import Container from "./_components/layout/Container";
import ProjectCards from "./_components/ProjectCards";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills";

export default function Home() {
  return (
    <main className=" relative   overflow-hidden min-h-screen  ">
      <div className="hero-glow" />
      <Container className="grid gap-5">


      <HeroSection />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
      </Container>
    </main>
  )
}