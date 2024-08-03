import logo from "./assets/logo.png"
import account from "./assets/Account.png"
import chatting from "./assets/Chatting.png"
import start from "./assets/Start.png"
import "./Home.css"

export default function Home(props) {

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
                <div className="logo-container">
                    <img src={ logo } alt="Website Logo" className="logo" />
                    <h1>Welcome to Student Stride</h1>
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
            </header>
            {/* <div className="parallax"></div> */}
            <div className="box">
                { !props.user ?
                    <button className="shiny-button" onClick={() => props.setPage("signup")} >
                        <img src={ account } alt="Icon" className="button-icon" />
                        <div>Create an Account</div>
                    </button> :
                    <button className="shiny-buttonS" onClick={() => props.setPage("chats")} >
                        <img src={ start } alt="Icon" className="button-icon" />
                        <div>Start a Conversation</div>
                    </button>
                }
                
            </div>
            <footer>
                <div className="footer-content">
                    <p>&copy; 2024 Student Stride. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}