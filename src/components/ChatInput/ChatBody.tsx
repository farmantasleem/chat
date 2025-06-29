import { BsEmojiSmile } from "react-icons/bs";

export const ChatBody = () => {
  return (
    <div className="flex items-start gap-2 p-2 border-b border-solid border-[#f1f1f1]">
      <BsEmojiSmile className="mt-1" />
      <textarea
        className="w-full h-28 resize-none outline-none placeholder:text-[#c1c1c1] placeholder:text-sm"
        placeholder="How are you feeling today?"
      />
    </div>
  );
};
