import { useWithAuth } from "@/hooks/useWithAuth";
import { BsChatRightDots, BsSend, BsHeart } from "react-icons/bs";

export type PostProps = {
  avatar: string;
  name: string;
  content: string;
};

export const Post = ({ data }: { data: PostProps }) => {
  const handleAction = useWithAuth(() => {
    alert("function not implemented");
  });

  return (
    <div
      onClick={handleAction}
      className="bg-[#f6f6f6] w-[35%] h-fit p-3 rounded-[12px]"
    >
      {/* Post Header */}
      <div className="flex gap-x-1 items-start p-2 bg-white rounded-t-[12px]">
        <img
          className="w-7 h-7 rounded-[4px]"
          src={data?.avatar}
          alt="post-image"
        />
        <div className="flex flex-col gap-0">
          <p className="m-0 leading-none text-sm">{data?.name}</p>
          <span className="text-[#b2b2b2] m-0 leading-none text-xs">
            10 seconds ago
          </span>
        </div>
      </div>

      {/* Post Body */}
      <div className="flex gap-x-2 items-start p-2 bg-white rounded-b-[12px]">
        <span className="rounded-full min-w-6 h-6 items-center justify-center flex bg-[#f6f6f6]">
          🥴
        </span>
        <p className="text-sm">{data?.content}</p>
      </div>
      {/* Post Footer */}
      <div className="flex gap-x-4 items-center mt-4">
        <BsHeart />
        <BsChatRightDots />
        <BsSend />
      </div>
    </div>
  );
};
