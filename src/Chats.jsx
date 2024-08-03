import { PrettyChatWindow } from "react-chat-engine-pretty";

export default function Chatpage(props) {
    return (
        <div className="chat-page">
            <PrettyChatWindow
                projectId="e8dd7476-2b0a-45e0-801e-826d2b7a77a2"
                username={props.user.username}
                secret={props.user.secret}
            />
        </div>
    )
}