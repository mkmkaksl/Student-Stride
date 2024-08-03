import axios from "axios"

export default function Login(props) {
    const handleSubmit = (e) => {
        e.preventDefault();

        const username = document.querySelector("#username").value;
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        axios.post("http://localhost:3001/signup", {
            userName: username,
            email: email,
            password: password
        })
        .then(res => {
            props.onAuth({...res.data, secret: username, first_name: username})
        })
        .catch(err => {
            console.log(err);
        })
    }

    const handleSignUp = () => {
        props.setSignUp(false);
    }

    return (
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h2>Signup</h2>
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
                    <button type="submit">Register</button>
                    <br />
                    <button onClick={handleSignUp}>Already have a account?</button>
                </form>
            </div>
        </>
    )
}