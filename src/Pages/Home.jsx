import NavBar       from "../components/NavBar/NavBar";
import Hero         from "../components/Hero/Hero";
import About        from "../components/About/About";
import Skills       from "../components/Skills/Skills";
import Experience   from "../components/About/Experience";
import Projects     from "../components/Projects/Projects";
import Timeline     from "../components/Timeline/Timeline";
import Contact      from "../components/Contact/Contact";
import Footer       from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}