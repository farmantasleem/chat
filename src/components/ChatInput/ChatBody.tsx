import { useWithAuth } from "@/hooks/useWithAuth";
import { BsEmojiSmile } from "react-icons/bs";

export const ChatBody = ({
  onChange,
}: {
  onChange: (value: string) => void;
}) => {
  const handleAction = useWithAuth(() => {});
  return (
    <div className="flex items-start gap-2 p-2 border-b border-solid border-[#f1f1f1]">
      <BsEmojiSmile className="mt-1" />
      <textarea
        onChange={(e) => onChange(e.target.value)}
        onFocus={handleAction}
        className="w-full h-28 resize-none outline-none placeholder:text-[#c1c1c1] placeholder:text-sm"
        placeholder="How are you feeling today?"
      />
    </div>
  );
};
