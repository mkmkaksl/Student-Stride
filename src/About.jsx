import logo from "./assets/logo.png"
import account from "./assets/Account.png"
import "./About.css"

export default function About(props) {

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
                        <h1>About Us</h1>
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
                <section id="about" className="about">
                    <h2 class="fade-in">Inspiration</h2>
                    <p class="fade-in">Most students, especially from low income settings, are always in a dilemma on how to plan for college education, some of which include playing a sport or managing their time in class.
                        They only realize when exactly exigencies are necessary, and often by then it is already too late. This issue is then aggravated by the costly price of professional college admission programs. 
                        Student Stride was created based on the realization of the existence of this gap. We are also high school students who have noticed the gap and this is our attempt to laying a bridge for the rest.
                    </p>
                    <h1>Rules</h1>
                    <p class="Rules">
                        <strong>
                        1. Respectful Communication: Always communicate respectfully and professionally with mentors and mentees. <br />

                        2. Confidentiality: Keep personal information shared during interactions confidential and do not share it outside of the mentorship platform. <br />
                        
                        3. Active Participation: Engage actively and thoughtfully in discussions, and complete any agreed-upon tasks or follow-ups. <br />
                        
                        4. Timeliness: Respond to messages and requests in a timely manner to ensure productive and effective mentoring relationships. <br />
                        
                        5. Feedback: Provide constructive feedback on your experiences to help improve the mentorship program. <br />
                        
                        6. Compliance: Follow all platform guidelines and rules to ensure a safe and supportive environment for everyone. <br />
                        
                        7. Professionalism: Maintain a professional attitude and demeanor in all communications and interactions.
                    </strong>
                    </p>
                    <h1 class="fade-in">Our Mission</h1>
                    <p class="fade-in">Our mission is to leverage technology to make the world a better place. <strong>Our platform allows young high school students to get in contact with older students who would be willing to share their experience and knowledge.</strong>
                        This mentorship ensures that the young students are informed early enough of the opportunities as well as the strategies to enable them to sail through the academic year.</p>
                </section>
            </main>
        </>
    )
}