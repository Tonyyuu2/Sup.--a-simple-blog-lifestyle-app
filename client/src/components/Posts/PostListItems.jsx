import React, { useContext } from "react";
import { FaRegEdit  } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai"
import { Link, Navigate, useNavigate, } from "react-router-dom";
import { DataContext } from "../Context/Data.context";

function PostListItems({ _id, title, description, location, date, image }) {


  const { deleteData } = useContext(DataContext)
  const navigate = useNavigate()
  
  const dateFormat = () => {
    const newDate = new Date(date).toDateString().split(' ')
    return `${newDate[1]} ${newDate[2]} ${newDate[3]}`
  }

  const dataDelete = async (_id) => {

    deleteData(_id)

    await fetch(`https://sup-backend-4axq.onrender.com/posts/${_id}`, {
      method: "DELETE",
    });

    navigate('/')

    
  }

  return (
    // card-container
    <div className="flex flex-col w-auto h-auto bg-red-300 overflow-hidden p-5 md:w-[680px] shadow-xl">
      <div className="absolute bg-red-400 m-2 rounded-full text-center p-3 text-white font-bold text-sm ">
        <p>{dateFormat()}</p>
      </div>
      <div className="md:w-[40em] md:flex md:items-center md:justify-center shadow-lg">
        <img src={image} alt="" />
      </div>
      <div className="flex items-center justify-between">
        <h1 className={`font-bold text-4xl mt-3 text-white ${title.length > 30 && 'flex-wrap leading-8 w-9/12'}`}>{title}</h1>
        <div className="flex items-center gap-1">
          <Link to={`/edit/${_id}`}>
            <FaRegEdit className="text-4xl transition ease delay-10 hover:-translate-y-1 hover:scale-100 duration-300 cursor-pointer text-red-600 mt-3 " />
          </Link>

            <AiOutlineDelete
              className="transition ease delay-10 hover:-translate-y-1 hover:scale-100 duration-300 cursor-pointer text-red-600 mt-3 text-4xl" onClick={() => dataDelete(_id)}
            />

        </div>
      </div>
      <i className="text-lg font-bold text-white mt-2">{location}</i>
      <p className="font-bold pb-4 pt-5 text-lg">{description}</p>
    </div>
  );
}

export default PostListItems;
