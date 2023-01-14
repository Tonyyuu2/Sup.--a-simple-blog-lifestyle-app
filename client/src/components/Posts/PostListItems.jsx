import React from "react";

function PostListItems({ id, title, description, location, date, image }) {
  const datePart = date.split("-");
  const newDate = new Date(datePart[0], datePart[1], datePart[2]);

  return (
    // card-container
    <div className="flex flex-col w-auto h-auto bg-red-300 overflow-hidden p-5 relative md:w-[680px] max-w-screen-[555px]">
      <div className="absolute bg-red-500 left-[64%] md:left-[65%] m-2 rounded-full text-center p-3 text-white font-bold text-xl max-w-screen-sm">
        <p className="">{newDate.toDateString()}</p>
      </div>
      <div className="md:w-[40em] md:flex md:items-center md:justify-center">
        <img src={image} alt="" />
      </div>
      <h1 className="font-bold text-4xl">{title}</h1>
    </div>
  );
}

export default PostListItems;
