import { useState, useEffect } from 'react'
import Login from "./Login.jsx"
import Chatpage from "./Chatpage.jsx"
import Chats from "./Chats.jsx"
import About from "./About.jsx"
import Contact from "./Contact.jsx"
import Signup from "./Signup.jsx"

import Home from "./Home.jsx"
import './App.css'

function App() {

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")))
      console.log(user)
    }
  }, [])
  const [page, setPage] = useState("home");


  if (page == "home") {
    return <Home 
    setPage={(page) => setPage(page)} 
    logout={() => setUser(undefined)}
    user={user} />
  } else if (page == "about") {
    return <About 
    setPage={(page) => setPage(page)} 
    logout={() => setUser(undefined)}
    user={user} />
  } else if (page == "contact") {
    return <Contact 
    setPage={(page) => setPage(page)} 
    logout={() => setUser(undefined)}
    user={user} />
  }
  else if (page == "signup") {
    if (!user) {
      console.log("Login from signup page")
      return <Login 
      onAuth={(user) => {
        localStorage.setItem("user", JSON.stringify(user))
        setUser(user)
      }}  
      setPage={(page) => setPage(page)}
      />
    }
    } else if (page == "chats") {
      console.log("page == chats")
      if (!user) {
        return <Login 
          onAuth={(user) => {
            localStorage.setItem("user", JSON.stringify(user))
            setUser(user)
          }} 
        />
      }
      return <Chats user={user}/>
    // return <Chatpage user={user} setPage={(page) => setPage(page)} />
  }

}

export default App
