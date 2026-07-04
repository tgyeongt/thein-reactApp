import About from "./components/about/About";
import Activity from "./components/activity/Activity";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Nav from "./components/layout/Nav";
import ScrollProgress from "./components/layout/ScrollProgress";
import Section from "./components/layout/Section";
import Projects from "./components/projects/Projects";
import Record from "./components/record/Record";
import Skills from "./components/skills/Skills";

// Every section's layout (padding, background, divider, scroll target)
// is declared here in one place instead of duplicated inside each
// section component — tune the whole page's rhythm/margins from here.
function App() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <Section as="header" id="top" dataSec="about" padding="pt-[130px] pb-[70px]">
        <Hero />
      </Section>
      <Section
        id="about"
        dataSec="about"
        padding="py-[110px]"
        head={{ no: "01", kicker: "ABOUT", title: "소개" }}
      >
        <About />
      </Section>
      <Section
        id="record"
        dataSec="record"
        padding="py-[110px]"
        bg="bg-paper-alt"
        head={{ no: "02", kicker: "AWARDS & CERTIFICATIONS", title: "수상 & 자격" }}
      >
        <Record />
      </Section>
      <Section
        id="activity"
        dataSec="record"
        padding="py-[110px]"
        head={{ no: "03", kicker: "TRAINING & ACTIVITY", title: "교육 · 대외활동" }}
      >
        <Activity />
      </Section>
      <Section
        id="skills"
        dataSec="skills"
        padding="py-[110px]"
        bg="bg-paper-alt"
        head={{ no: "04", kicker: "SKILLS", title: "기술 스택" }}
      >
        <Skills />
      </Section>
      <Section
        id="projects"
        dataSec="projects"
        padding="py-[110px]"
        head={{ no: "05", kicker: "PROJECTS", title: "프로젝트" }}
      >
        <Projects />
      </Section>
      <Section
        as="footer"
        id="contact"
        dataSec="contact"
        padding="pt-[120px] pb-[70px]"
        bg="bg-ink"
        textClass="text-[#f0f0f0]"
        border={false}
      >
        <Contact />
      </Section>
    </>
  );
}

export default App;
