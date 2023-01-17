import React, { useContext } from "react";

import { DataContext } from "../Context/Data.context";
import PostListItems from "./PostListItems";

function Posts() {
  const { data } = useContext(DataContext);

  const postListItems = data.map((post) => {
    return <PostListItems key={post?._id} {...post} />;
  });

  return (
    <div className="absolute flex flex-col justify-center items center p-8 gap-20 lg:left-[22.5%] md:left-[12.5%] mt-5">
      {postListItems}
    </div>
  );
}

export default Posts;
