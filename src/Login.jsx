import axios from "axios"
import logo from "./assets/logo.png"
import "./Login.css"

export default function Login(props) {
    const handleSubmit = (e, action) => {
        e.preventDefault();
        console.log(e)

        // const username = document.querySelector("#username").value;
        // const email = document.querySelector("#email").value;
        // const password = document.querySelector("#password").value;
        const username = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        axios.post("http://localhost:3001/" + action, {
            userName: username,
            email: email,
            password: password
        })
        .then(res => {
            console.log(res)
            props.onAuth({...res.data, secret: username, first_name: username})
            props.setPage("home");
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <>
        {/* <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="input">
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" name="username" />
                </div>
                <div className="input">
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="input">
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" name="password" />
                </div>

                <button type="submit">Login</button>
                <br />
                <button type="button" onClick={handleSignUp}>Create a New Account</button>
            </form>
        </div> */}
            <div>
                <header>
                    <div className="logo-container">
                        <img src={ logo } alt="Website Logo" className="logo" />
                        <h1>Create or Login to an Account</h1>
                    </div>
                    
                    <nav>
                        <ul>
                            <li><a onClick={() => props.setPage("home")}>Home</a></li>
                            <li><a onClick={() => props.setPage("about")}>About</a></li>
                            <li><a onClick={() => props.setPage("contact")}>Contact</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
            <div className="content">
                <div className="split left">
                    <h2>Create a New Account</h2>
                    <form onSubmit={(e) => handleSubmit(e, "signup")}>
                        <input type="text" name="username" placeholder="Username" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="password" name="password" placeholder="Password" required />
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
                <div class="split right">
                    <h2>Log In to Existing Account</h2>
                    <form onSubmit={(e) => handleSubmit(e, "login")}>
                        <input type="text" name="username" placeholder="Username" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="password" name="password" placeholder="Password" required />
                        <button type="submit">Log In</button>
                    </form>
                </div>
            </div>
        </>
    )
}