import logo from "./assets/logo.png"
import "./Contact.css"

export default function Contact(props) {
    return (
        <>
            <header>
                <div class="header-content">
                    <div class="logo-container">
                        <img src={ logo } alt="Website Logo" class="logo" />
                        <h1>Contact Us</h1>
                    </div>
                    <nav>
                        <ul>
                            <li><a onClick={() => props.setPage("home")}>Home</a></li>
                            <li><a onClick={() => props.setPage("about")}>About</a></li>
                            <li><a onClick={() => props.setPage("contact")}>Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <section id="contact" class="contact">
                    <h2 class="fade-in">Meet Our Team</h2>
                    <div class="team-member">
                        <div class="parallax-bg" style="background-image: url('./assets/YB.jpg');"></div>
                        <div class="member-info">
                            <p>Name: Yug Sharma</p>
                            <p>Email: yugsharma1507@gmail.com</p>
                            <p>Phone: +1 972-829-5446</p>
                        </div>
                    </div>
                    <div class="team-member">
                        <div class="parallax-bg" style="background-image: url('./assets/MB.jpg');"></div>
                        <div class="member-info">
                            <p>Name: Manoj Kumar</p>
                            <p>Email: manojjeeramani@gmail.com</p>
                            <p>Phone: +1 972-215-6201</p>
                        </div>
                    </div>
                    <div class="team-member">
                        <div class="parallax-bg" style="background-image: url('./assets/PB.jpg');"></div>
                        <div class="member-info">
                            <p>Name: Parjanya Vedula</p>
                            <p>Email: vedula.parjanya@gmail.com</p>
                            <p>Phone: +1 360-583-2151</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}