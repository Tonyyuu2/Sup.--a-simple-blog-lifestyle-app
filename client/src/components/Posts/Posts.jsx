import React, { useEffect, useState } from "react";


import PostListItems from "./PostListItems";

function Posts() {
  const [updatedData, setUpdatedData] = useState([])


  useEffect(() => {
    async function getUpdatedPosts() {
      const response = await fetch(`https://sup-backend-4axq.onrender.com/posts`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const posts = await response.json();
      console.log('posts :', posts);
      setUpdatedData(posts);
    }
    getUpdatedPosts();
  }, [updatedData])

  const postListItems = updatedData.map((post) => {
    return <PostListItems key={post?._id} {...post} />;
  });

  return (
    <div className="absolute flex flex-col justify-center items center p-8 gap-20 awks:left-[3%] slight:left-[10%] lg:left-[22.5%] md:left-[12.5%] mt-5">
      {postListItems}
    </div>
  );
}

export default Posts;
