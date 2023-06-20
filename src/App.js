import Header from "./components/Header.tsx";
import Menu from "./components/Menu.tsx";
import About from "./components/About.tsx";
import Project from "./components/Project.tsx";
import Experience from "./components/Experience.tsx";
import Contact from "./components/Contact.tsx";

function App() {
  return (
    <div className="container">

      <Menu />

      <div className="portfolio">

        <Header />

        <div className="content">

          <section className="content-card home" id="welcome-section">
            <h1>Hello, I am Sebastian Galindo</h1>
          </section>

          <About />

          <section className="content-card projects" id="projects">
            <h1>Projects</h1>
            <div className="col-2 project-list">

              <Project name="GBIF-API-BDD" />

              <Project name="DNS-server-C" />

              <Project name="platziverse" />

              <Project name="discordBot" />
            </div>
            <a href="https://github.com/TalkySafe143">see more...</a>
          </section>

          <section className="content-card experience" id="experience">
            <h1>Experience</h1>
            <div className="timeline">
              <div className="timeline-items">
                <Experience name="Assistant teacher in 'Introduction to programming'" period="July, 2022 - June, 2023" description="I was in charge of providing assistance to the students of the 'Introduction to Programming' course given by the Pontificia Universidad Javeriana. This course teaches the basics of the C++ language and the required algorithmic thinking." />

              </div>
            </div>
          </section>

          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
