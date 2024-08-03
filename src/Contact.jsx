import logo from "./assets/logo.png"
import "./Contact.css"
import account from "./assets/Account.png"

export default function Contact(props) {

    const handleMouseEnter = (action) => {
        const popUp = document.querySelector("header .profile .popup")
        if (action == "show") {
            popUp.classList.add("show")
        } else {
            popUp.classList.remove("show")
        }
    }

    const logOut = () => {
        localStorage.removeItem("user")
        props.logout();
    }

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

                    {props.user ? 
                        <div 
                        className="profile"
                        onMouseEnter={() => handleMouseEnter("show")} 
                        onMouseLeave={() => handleMouseEnter("leave")}
                        >
                            <img src={ account } 
                            alt="Account Icon" className="account-icon" />
                            <div className="popup">
                                <button onClick={logOut}>Log out</button>
                            </div>
                        </div>
                        : ""
                    }
                </div>
            </header>
            <main>
                <section id="contact" class="contact">
                    <h2 class="fade-in normal">Meet Our Team</h2>
                    <div class="team-member">
                        <div class="parallax-bg yug"></div>
                        <div class="member-info">
                            <p>Name: Yug Sharma</p>
                            <p>Email: yugsharma1507@gmail.com</p>
                            <p>Phone: +1 972-829-5446</p>
                        </div>
                    </div>
                    <div class="team-member">
                        <div class="parallax-bg manoj"></div>
                        <div class="member-info">
                            <p>Name: Manoj Kumar</p>
                            <p>Email: manojjeeramani@gmail.com</p>
                            <p>Phone: +1 972-215-6201</p>
                        </div>
                    </div>
                    <div class="team-member">
                        <div class="parallax-bg parjanya"></div>
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