import React from "react";

function PostListItems({ id, title, description, location, date, image }) {
  const datePart = date.split("-");
  const newDate = new Date(datePart[0], datePart[1], datePart[2]);

  return (
    // card-container
    <div className="flex flex-col w-auto h-auto bg-red-300  overflow-hidden p-5">
      <div className="absolute bg-red-500 left-[25em] m-4 rounded-full text-center p-2 text-white font-bold text-xl">
        <p>{newDate.toDateString()}</p>
      </div>
      <div className="md:w-[40em] md:flex md:items-center md:justify-center">
        <img src={image} alt="" />
      </div>
      <h1 className="font-bold text-4xl">{title}</h1>
    </div>
  );
}

export default PostListItems;
