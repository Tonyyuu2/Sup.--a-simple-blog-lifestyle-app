import React from "react";

function PostListItems({ id, title, description, location, date, image }) {
  return (
    // card-container
    <div className="flex flex-col w-auto h-auto bg-red-300  overflow-hidden p-5">
      <div className="md:w-[40em] md:flex md:items-center md:justify-center ">
        <img src={image} alt="" />
      </div>
      <h1 className="font-bold text-4xl mt-3">{title}</h1>
    </div>
  );
}

export default PostListItems;
