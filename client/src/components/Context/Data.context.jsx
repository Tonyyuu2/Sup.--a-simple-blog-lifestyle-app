import { useEffect } from "react";
import { createContext, useState } from "react";

// import { mockData } from "../../mockData";

export const DataContext = createContext({
  data: [],
  addData: (newData) => {},
  editData: (_id, updatedData) => {},
  deleteData: (_id) => {},
});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(`http://localhost:8080/posts`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const posts = await response.json();
      setData(posts);
    }
    getPosts();
  }, []);

  const updateData = async (_id, updatedData) => {
    
    await fetch(`http://localhost:8080/posts/${_id}`, {
      method: "POST",
      body: JSON.stringify(updatedData),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const withoutEdittedPost = data.filter((post) => post._id !== _id)
    setData([updateData, ...withoutEdittedPost])

  };


  const removeData = (id) => {
    const postDelete = data.filter((post) => post.id !== id);

    setData([...postDelete]);
  };

  const createData = async (newData) => {
    await fetch(`http://localhost:8080/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    }).catch((err) => {
      window.alert(err);
      return;
    });

    setData((prev) => [...prev, newData])
  };

  const value = {
    data,
    addData: createData,
    editData: updateData,
    deleteData: removeData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
