import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { DataContext } from "../Context/Data.context";
import ErrorHandling from "../ErrorHandling/ErrorHandling";

function NewPost() {
  const { addData } = useContext(DataContext);
  const navigate = useNavigate();

  const newDate = new Date();
  const currentDate = newDate.toISOString().split("T")[0];

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(currentDate);
  const [image, setImage] = useState("");

  const [error, setError] = useState({
    titleError: false,
    descriptionError: false,
    locationError: false,
    dateError: false,
    imageError: false,
  });
  console.log("error :", error);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title === "" || title.length <= 5) {
      const titleErrorNew = (error.titleError = true);
      setError((prev) => ({ ...prev, titleErrorNew }));
      return;
    } else {
      const titleErrorNew = (error.titleError = false);
      setError((prev) => ({ ...prev, titleErrorNew }));
    }

    if (description === "" || description.length <= 10) {
      const newDescriptionError = (error.descriptionError = true);
      setError((prev) => ({ ...prev, newDescriptionError }));
      return;
    } else {
      const newDescriptionError = (error.descriptionError = false);
      setError((prev) => ({ ...prev, newDescriptionError }));
    }

    if (location === "" || location.length <= 10) {
      const newLocationError = (error.locationError = true);
      setError((prev) => ({ ...prev, newLocationError }));
      return;
    } else {
      const newLocationError = (error.locationError = false);
      setError((prev) => ({ ...prev, newLocationError }));
    }

    if (date === "yyyy-mm-dd" || date > currentDate || date < currentDate) {
      const newDateError = (error.dateError = true);
      setError((prev) => ({ ...prev, newDateError }));
      return;
    } else if (date === currentDate) {
      const newDateError = (error.dateError = false);
      setError((prev) => ({ ...prev, newDateError }));
    }

    const regex =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

    if (image === "" || image.length <= 50 || !image.match(regex)) {
      const newImageError = (error.imageError = true);
      setError((prev) => ({ ...prev, newImageError }));
      return;
    } else if (date === currentDate) {
      const newImageError = (error.imageError = false);
      setError((prev) => ({ ...prev, newImageError }));
    }

    const newData = {
      title,
      description,
      location,
      date,
      image,
    };
    addData(newData);
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center mt-6 mb-8 p-6">
      {/* card container */}
      <div className="bg-red-300 w-8/12 md:w-[680px] h-auto p-6 rounded-xl">
        {/* form */}
        <div className="flex flex-col gap-5">
          <i className="font-bold text-white text-4xl">Whatcha get up to?</i>

          <form className="flex flex-col">
            <label className="font-bold text-lg">Title</label>
            <input
              required
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Post Title"
              className="p-2 rounded-xl mb-3"
            />
            {error.titleError && <ErrorHandling title={true} />}
            <label className="font-bold text-lg">Description</label>
            <textarea
              required
              type="text"
              value={description}
              autoComplete="off"
              rows="5"
              onChange={(event) => setDescription(event.target.value)}
              placeholder="What happened?"
              className="p-2 rounded-xl mb-3"
            />
            {error.descriptionError && <ErrorHandling description={true} />}
            <label className="font-bold text-lg">Location</label>
            <input
              required
              type="text"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="Where at?"
              className="p-2 rounded-xl mb-3"
            />
            {error.locationError && <ErrorHandling location={true} />}
            <label className="font-bold text-lg">Date</label>
            <input
              required
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              className="p-2 rounded-xl mb-3"
            />
            {error.dateError && <ErrorHandling date={true} />}
            <label className="font-bold text-lg">Image</label>
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
              className="p-2 rounded-xl mb-3"
            />
            {error.imageError && <ErrorHandling image={true} />}
            <div className="flex justify-center items-center p-3 mt-5 gap-4">
              <Button children="Post" onSubmit={handleSubmit} />
              <Button children="Cancel" cancel={true} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
