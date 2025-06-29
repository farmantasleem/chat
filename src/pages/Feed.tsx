import { ChatInput } from "@/components/ChatInput/index";
import { Post, PostProps } from "@/components/Feed/Post";
import { BaseLayout } from "@/components/BaseLayout";
import { useState } from "react";
import { DummyPosts } from "@/utils/data";

export const Feed = () => {
  const [posts, setPosts] = useState<PostProps[]>(DummyPosts);

  const handleNewPost = (newPost: PostProps) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <BaseLayout>
      <div className="w-screen flex flex-col justify-start items-center p-5">
        <ChatInput onAddPost={handleNewPost} />
        <div className="flex flex-col items-center mx-auto gap-y-4 my-4">
          {posts.map((post, index) => (
            <Post key={index} data={post} />
          ))}
        </div>
      </div>
    </BaseLayout>
  );
};
