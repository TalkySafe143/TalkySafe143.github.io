export default function About() {
    return (
        <section className="content-card about" id="about">
            <h1>About me</h1>
            <div className="about-item about-me">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
                    non dolore facere reiciendis iusto nemo tempore laboriosam
                    laborum fugit dolorum totam incidunt tempora laudantium
                    obcaecati natus sit, aspernatur consectetur! Voluptates?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                    consectetur quos fugiat fugit! Officiis, temporibus.
                </p>
            </div>
            <div className="col-2">
                <div className="about-item skills">
                    <h1>Skills</h1>
                    <div className="skillContainer">
                        <span className="skill">Java</span>
                        <span className="skill">Node.js</span>
                        <span className="skill">React</span>
                        <span className="skill">SQL</span>
                        <span className="skill">Git</span>
                        <span className="skill">API</span>
                        <span className="skill">AWS</span>
                        <span className="skill">Mongo</span>
                        <span className="skill">Typescript</span>
                        <span className="skill">C++</span>
                        <span className="skill">Python</span>
                    </div>
                </div>
                <div className="about-item languages">
                    <h1>Languages</h1>
                    <div className="language">
                        <p>Español</p>
                        <span className="bar"><span className="espanol"></span></span>
                    </div>
                    <div className="language">
                        <p>English</p>
                        <span className="bar"><span className="english"></span></span>
                    </div>
                </div>
            </div>
        </section>
    );
}