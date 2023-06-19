import Header from "./components/Header.tsx";
import Menu from "./components/Menu.tsx";
import About from "./components/About.tsx";

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
              <div className="project-tile">
                <img src="https://shots.codepen.io/nietoperq/pen/BaPJqGW-512.webp?version=1674304822"
                     alt="" />
                <div className="overlay">
                  <div className="project-description">
                    <h3>Project 1</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nisi aperiam voluptate accusamus velit omnis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="project-tile">
                <img src="https://shots.codepen.io/nietoperq/pen/GRBOjyV-512.webp?version=1674084446"
                     alt="" />
                <div className="overlay">
                  <div className="project-description">
                    <h3>Project 2</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nisi aperiam voluptate accusamus velit omnis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="project-tile">
                <img src="https://shots.codepen.io/nietoperq/pen/dyjWxgX-512.webp?version=1673554073"
                     alt="" />
                <div className="overlay">
                  <div className="project-description">
                    <h3>Project 3</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nisi aperiam voluptate accusamus velit omnis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="project-tile">
                <img src="https://shots.codepen.io/nietoperq/pen/vYagdwo-512.webp?version=1673549480"
                     alt="" />
                <div className="overlay">
                  <div className="project-description">
                    <h3>Project 4</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nisi aperiam voluptate accusamus velit omnis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a href="https://github.com/TalkySafe143">see more...</a>
          </section>

          <section className="content-card experience" id="experience">
            <h1>Experience</h1>
            <div className="timeline">
              <div className="timeline-items">
                <div className="timeline-item">
                  <div className="timeline-date">July, 2022 - June, 2023</div>
                  <div className="timeline-content">
                    <h3>Assistant teacher in "Introduction
                      to programming"</h3>
                    <p>
                      I was in charge of providing assistance to the students of the "Introduction to Programming" course given by the Pontificia Universidad Javeriana. This course teaches the basics of the C++ language and the required algorithmic thinking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="content-card contact" id="contact">
            <h1>Contact</h1>
            <form className="form" id="form" action="https://www.freecodecamp.com/email-submit">
              <div className="input-box">
                <input type="text" className="text-input" name="name" placeholder="Name" />
              </div>
              <div className="input-box">
                <input type="email" className="text-input" name="email" id="email" placeholder="Email" />
              </div>
              <div className="input-box">
                <input type="subject" className="text-input" name="subject" id="subject"
                       placeholder="Subject" />
              </div>
              <div className="input-box">
                <textarea name="text" className="message" placeholder="Message..."></textarea>
              </div>
              <div className="input-box">
                <input type="submit" className="submit-btn" id="submit" value="submit" />
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
