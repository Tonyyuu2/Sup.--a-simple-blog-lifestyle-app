import React from "react";

function PostListItems({ id, title, description, location, date, image }) {
  const datePart = date.split("-");
  const newDate = new Date(datePart[0], datePart[1], datePart[2]);

  return (
    // card-container
    <div className="flex flex-col w-auto h-auto bg-red-300 overflow-hidden p-5 relative md:w-[680px] max-w-screen-[555px] ">
      <div className="absolute bg-red-400 left-[64%] md:left-[65%] m-2 rounded-full text-center p-3 text-white font-bold text-xl max-w-screen-sm">
        <p>{newDate.toDateString()}</p>
      </div>
      <div className="md:w-[40em] md:flex md:items-center md:justify-center">
        <img src={image} alt="" />
      </div>
      <h1 className="font-bold text-4xl mt-3 text-white">{title}</h1>
      <i className="text-lg font-bold text-white mt-2">{location}</i>
      <p className="font-bold pb-4 pt-5 text-lg">{description}</p>
    </div>
  );
}

export default PostListItems;
