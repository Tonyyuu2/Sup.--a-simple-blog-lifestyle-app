import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../Button/Button";
import { DataContext } from "../Context/Data.context";
import ErrorHandling from "../ErrorHandling/ErrorHandling";

function EditPost() {
  const { editData } = useContext(DataContext);

  const newDate = new Date();
  const currentDate = newDate.toISOString().split("T")[0];

  const [info, setInfo] = useState({
    _id: "",
    title: "",
    description: "",
    location: "",
    date: "",
    image: "",
  });

  const [error, setError] = useState({
    titleError: false,
    descriptionError: false,
    locationError: false,
    dateError: false,
    imageError: false,
  });

  // const { data } = useContext(DataContext)
  const navigate = useNavigate();

  const { _id } = useParams();
  console.log("_id :", _id);

  // const useableId = _id.toString()

  useEffect(() => {
    // const filteredData = data.filter((post) => post.id === _id)

    async function fetchPost() {
      const response = await fetch(`http://localhost:8080/posts/${_id}`);
      console.log("response :", response);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const post = await response.json();

      setInfo({
        _id: post?._id,
        title: post?.title,
        description: post?.description,
        location: post?.location,
        date: post?.date,
        image: post?.image,
      });
    }

    fetchPost();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (info.title === "" || info.title.length <= 5) {
      const titleErrorNew = (error.titleError = true);
      setError((prev) => ({ ...prev, titleErrorNew }));
      return;
    } else {
      const titleErrorNew = (error.titleError = false);
      setError((prev) => ({ ...prev, titleErrorNew }));
    }

    if (info.description === "" || info.description.length <= 10) {
      const newDescriptionError = (error.descriptionError = true);
      setError((prev) => ({ ...prev, newDescriptionError }));
      return;
    } else {
      const newDescriptionError = (error.descriptionError = false);
      setError((prev) => ({ ...prev, newDescriptionError }));
    }

    if (info.location === "" || info.location.length <= 10) {
      const newLocationError = (error.locationError = true);
      setError((prev) => ({ ...prev, newLocationError }));
      return;
    } else {
      const newLocationError = (error.locationError = false);
      setError((prev) => ({ ...prev, newLocationError }));
    }

    if (
      info.date === "yyyy-mm-dd" ||
      info.date > currentDate ||
      info.date < currentDate
    ) {
      const newDateError = (error.dateError = true);
      setError((prev) => ({ ...prev, newDateError }));
      return;
    } else if (info.date === currentDate) {
      const newDateError = (error.dateError = false);
      setError((prev) => ({ ...prev, newDateError }));
    }

    const regex =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

    if (
      info.image === "" ||
      info.image.length <= 50 ||
      !info.image.match(regex)
    ) {
      const newImageError = (error.imageError = true);
      setError((prev) => ({ ...prev, newImageError }));
      return;
    } else if (info.date === currentDate) {
      const newImageError = (error.imageError = false);
      setError((prev) => ({ ...prev, newImageError }));
    }

    const newData = {
      _id: info._id,
      title: info.title,
      description: info.description,
      location: info.location,
      date: info.date,
      image: info.image,
    };

    editData(_id, newData);
    navigate("/");
  };

  const handleCancel = () => {
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
              value={info?.title || ""}
              onChange={(event) =>
                setInfo((prev) => {
                  return { ...prev, title: event.target.value };
                })
              }
              placeholder="Post Title"
              className="p-2 rounded-xl mb-3"
            />
            {error.titleError && <ErrorHandling title={true} />}
            <label className="font-bold text-lg">Description</label>
            <textarea
              required
              type="text"
              value={info?.description || ""}
              autoComplete="off"
              rows="5"
              onChange={(event) =>
                setInfo((prev) => {
                  return { ...prev, description: event.target.value };
                })
              }
              placeholder="What happened?"
              className="p-2 rounded-xl mb-3"
            />
            {error.descriptionError && <ErrorHandling description={true} />}
            <label className="font-bold text-lg">Location</label>
            <input
              required
              type="text"
              value={info?.location || ""}
              onChange={(event) =>
                setInfo((prev) => {
                  return { ...prev, location: event.target.value };
                })
              }
              placeholder="Where at?"
              className="p-2 rounded-xl mb-3"
            />
            {error.locationError && <ErrorHandling location={true} />}
            <label className="font-bold text-lg">Date</label>
            <input
              required
              type="date"
              value={info?.date || ""}
              onChange={(event) =>
                setInfo((prev) => {
                  return { ...prev, date: event.target.value };
                })
              }
              className="p-2 rounded-xl mb-3"
            />
            {error.dateError && <ErrorHandling date={true} />}
            <label className="font-bold text-lg">Image</label>
            <input
              required
              type="url"
              value={info?.image || ""}
              onChange={(event) =>
                setInfo((prev) => {
                  return { ...prev, image: event.target.value };
                })
              }
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
              <Button children="Cancel" cancel={true} onCancel={handleCancel} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditPost;
