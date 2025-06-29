import { ChatHeader } from "./ChatHeader";
import { ChatBody } from "./ChatBody";
import { ChatFooter } from "./ChatFooter";
import { PostProps } from "../Feed/Post";
import { useState } from "react";


export const ChatInput = ({
  onAddPost,
}: {
  onAddPost: (payload: PostProps) => void;
}) => {

  const [postInput, setPostInput] = useState<PostProps>({
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQE3PcwiaHy5-w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1682075192619?e=1756944000&v=beta&t=iPMxPCp9u1eGD90mw7XQk_-ElBNwgHyjgfnXf7ALCsc",
    name: "Pranav Nair",
    content: "",
  });

  const handleChange = (value: string) => {
   setPostInput({
    ...postInput,
    content: value,
   })
  };

  return (
    <div className="bg-[#f6f6f6] w-[35%] p-3 rounded-[12px]">
      <div className="bg-white w-full h-fit border border-solid  border-[#f1f1f1] rounded-[12px] flex flex-col p-2">
        <ChatHeader />
        <ChatBody onChange={handleChange}/>
        <ChatFooter onSend={()=>onAddPost(postInput)}/>
      </div>
    </div>
  );
};
