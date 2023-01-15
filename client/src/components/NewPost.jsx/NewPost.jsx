import React, { useState } from "react";

function NewPost() {
  const newDate = new Date();
  const currentDate = newDate.toISOString().split("T")[0];

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(currentDate);
  const [image, setImage] = useState("");




  return (
    <div className="flex justify-center items-center mt-6">
      {/* card container */}
      <div className="bg-red-300 w-8/12 md:w-[680px] h-auto p-6">
        {/* form */}
        <div className="flex flex-col">
          <h1>Whatcha get up to?</h1>

          <form className="flex flex-col">
            <label>Title</label>
            <input
              required
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Post Title"
            />
            <label>Description</label>
            <textarea
              required
              type="text"
              value={description}
              autoComplete="off"
              rows="5"
              onChange={(event) => setDescription(event.target.value)}
              placeholder="What happened?"
            />
            <label>Location</label>
            <input
              required
              type="text"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="Where at?"
            />
            <label>Date</label>
            <input
              required
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
            <label>Image</label>
            <input
              required
              type="url"
              value={image}
              onChange={(event) => setImage(event.target.value)}
              placeholder="Add Link To Image"
              pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)"
              onInvalid={(e) =>
                e.target.setCustomValidity("Please Enter a Valid URL image.")
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />
            <button >hehe</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
