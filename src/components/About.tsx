export default function About() {
    return (
        <section className="content-card about" id="about">
            <h1>About me</h1>
            <div className="about-item about-me">
                <p>
                    Hello, I'm Sebastian Galindo, a dedicated student pursuing a degree in Systems Engineering at Pontificia Universidad Javeriana. Passionate about technology and driven to excel in the field, I specialize in Backend Development.
                </p>
                <p>
                    As a student, I have gained a solid foundation in Systems Engineering, focusing on software development. I have also had the valuable opportunity to work as a teaching assistant, where I honed my communication and problem-solving skills while assisting students in their coursework. Now, I am eagerly seeking my first professional experience to apply my knowledge and contribute to the industry as a Backend Developer.
                </p>
                <p>
                    With a strong drive for continuous learning, I stay up-to-date with the latest advancements in the field and actively engage in personal projects to further enhance my skills. I am enthusiastic about joining a dynamic team where I can leverage my technical expertise, contribute to innovative solutions, and grow both personally and professionally. I am excited to embark on this next chapter and make a meaningful impact as a Backend Developer.
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