import { ChatInput } from "@/components/ChatInput/index"
import { Post } from "@/components/Chats/Post"

export const Dashboard = () => {
    return(
        <div className="h-screen w-screen flex flex-col justify-start items-center p-5">
            <ChatInput/>
            <Post/>
        </div>
    )
}