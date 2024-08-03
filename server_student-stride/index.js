
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } = require("firebase/auth")
const { initializeApp } = require("firebase/app");

const config = {
    ...Firebase Config Details
}

const firebaseApp = initializeApp(config);

const auth = getAuth(firebaseApp);


const axios = require("axios");

const PORT = process.env.PORT || 3001;

const app = express()
app.use(cors());

const chatEnginePrivateKey = {Private Key};
const chatEngineProjectID = "e8dd7476-2b0a-45e0-801e-826d2b7a77a2";

const chatEngineHeaders = {
    "Private-Key": chatEnginePrivateKey
}

app.post("/login", jsonParser, async (req, res) => {
    const { userName, email, password } = await req.body;

    signInWithEmailAndPassword(auth, email, password)
    .then(async (userCreds) => {
        const user = userCreds.user;

        try {
            const r = await axios.put("https://api.chatengine.io/users/", 
                {username: userName, email: email, password: password, secret: userName, first_name: userName},
                { headers: {
                    "Private-Key": chatEnginePrivateKey
                } }
            )
            return res.send(r.data);
        } catch (e) {
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

    createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCreds) => {
        const user = userCreds.user;

        try {
            const r = await axios.put("https://api.chatengine.io/users/", 
                {username: userName, email: email, password: password, secret: userName, first_name: userName},
                { headers: {
                    "Private-Key": chatEnginePrivateKey
                } }
            )
            return res.send(r.data);
        } catch (e) {
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