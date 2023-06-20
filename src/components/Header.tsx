export default function Header() {
    return (
        <section className="header">
            <img className="header-img"
                 src="https://images.pexels.com/photos/17291070/pexels-photo-17291070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                 alt="" />
            <h1>Sebastian Galindo</h1>
            <h2>Backend Developer</h2>
            <div className="socials">
                <a href="https://www.linkedin.com/in/talkysafe143/" target="_blank" className="fab fa-linkedin-in" id="profile-link"></a>
                <a href="https://github.com/TalkySafe143" target="_blank" className="fab fa-github"></a>
            </div>
            <a href="/en.pdf" className="cta" download>Download CV</a>
        </section>
    );
}