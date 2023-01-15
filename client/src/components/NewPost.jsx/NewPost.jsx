import React, { useState } from "react";

function NewPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState('')

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
              onChange={(event) => setTitle(event.target.value)}
              placeholder="What happened?"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
