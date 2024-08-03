import { PrettyChatWindow } from "react-chat-engine-pretty";
import logo from "./assets/logo.png"
import account from "./assets/Account.png"

export default function Chatpage(props) {

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
        <div className="chat-page">
            <header>
                <div class="header-content">
                    <div class="logo-container">
                        <img src={ logo } alt="Website Logo" class="logo" />
                        <h1>Chatting</h1>
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

            <PrettyChatWindow
                projectId="e8dd7476-2b0a-45e0-801e-826d2b7a77a2"
                username={props.user.username}
                secret={props.user.secret}
            />
        </div>
    )
}