import { ChatHeader } from "./ChatHeader";
import { ChatBody } from "./ChatBody";
import { ChatFooter } from "./ChatFooter";

export const ChatInput = () => {
  return (
    <div className="bg-[#f6f6f6] w-[35%] p-3 rounded-[12px]">
      <div className="bg-white w-full h-fit border border-solid  border-[#f1f1f1] rounded-[12px] flex flex-col p-2">
        <ChatHeader />
        <ChatBody />
        <ChatFooter />
      </div>
    </div>
  );
};
