import { PrettyChatWindow } from "react-chat-engine-pretty";
import "./Chatpage.css"

export default function Chatpage(props) {
    console.log(props.user)
    return (
        <div className="chat-page">
            <PrettyChatWindow
                projectId="e8dd7476-2b0a-45e0-801e-826d2b7a77a2"
                username={props.user.username}
                email={props.user.email}
                password={props.user.password}
                secret={props.user.secret}
            />
        </div>
    )
}