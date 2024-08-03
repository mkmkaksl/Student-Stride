
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } = require("firebase/auth")
const { initializeApp } = require("firebase/app");

const config = {
    apiKey: "AIzaSyAUo-5XXRf812bGtE4l6pHtSGwZGktwTK8",
    authDomain: "student-stride.firebaseapp.com",
    projectId: "student-stride",
    storageBucket: "student-stride.appspot.com",
    messagingSenderId: "659729561887",
    appId: "1:659729561887:web:3b7fa7bf9f5843ad16982a",
    measurementId: "G-ZC1M3R4KKY"
}

const firebaseApp = initializeApp(config);

const auth = getAuth(firebaseApp);


const axios = require("axios");

const PORT = process.env.PORT || 3001;

const app = express()
app.use(cors());

const chatEnginePrivateKey = "026d9869-946d-46d5-9bef-e916791e87d7";
const chatEngineProjectID = "e8dd7476-2b0a-45e0-801e-826d2b7a77a2";

const chatEngineHeaders = {
    "Private-Key": chatEnginePrivateKey
}

app.post("/login", jsonParser, async (req, res) => {
    const { userName, email, password } = await req.body;
    console.log("Body username is " + userName)
    console.log("Body email is " + email)
    console.log("Body password is " + password)

    signInWithEmailAndPassword(auth, email, password)
    .then(async (userCreds) => {
        console.log("User logged in successfully");
        const user = userCreds.user;

        try {
            const r = await axios.put("https://api.chatengine.io/users/", 
                {username: userName, email: email, password: password, secret: userName, first_name: userName},
                { headers: {
                    "Private-Key": chatEnginePrivateKey
                } }
            )
            console.log("R is: " + r.data)
            return res.send(r.data);
        } catch (e) {
            console.log("ERROR")
            console.log(e)
            return res.send(e);
        }

    })
    .catch((error) => {
        console.log("Error: ");
        console.log(error.code);
        console.log(error.message);
    });
})

app.post("/signup", jsonParser, async (req, res) => {
    const { userName, email, password } = await req.body;
    console.log("Body username is " + userName)
    console.log("Body email is " + email)
    console.log("Body password is " + password)

    createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCreds) => {
        console.log("User logged in successfully");
        const user = userCreds.user;

        try {
            const r = await axios.put("https://api.chatengine.io/users/", 
                {username: userName, email: email, password: password, secret: userName, first_name: userName},
                { headers: {
                    "Private-Key": chatEnginePrivateKey
                } }
            )
            console.log("R is: " + r.data)
            return res.send(r.data);
        } catch (e) {
            console.log("ERROR")
            console.log(e)
            return res.send(e);
        }

    })
    .catch((error) => {
        console.log("Error: ");
        console.log(error.code);
        console.log(error.message);
    });
})

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
})