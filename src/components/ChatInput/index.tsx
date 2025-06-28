import { ChatHeader } from "./ChatHeader";


export const ChatInput = () => {
  return (
    <div className="bg-white flex justify-center h-screen p-5">
      <div className="bg-white w-[35%] h-full border border-solid outline outline-8 outline-[#f6f6f6] border-[#f1f1f1] rounded-[8px] flex flex-col p-2">
        <ChatHeader/>
      </div>
    </div>
  );
};
