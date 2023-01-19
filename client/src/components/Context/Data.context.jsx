import { useEffect } from "react";
import { createContext, useState } from "react";

// import { mockData } from "../../mockData";

export const DataContext = createContext({
  data: [],
  dataSet: () => {},
  addData: (newData) => {},
  editData: (_id, updatedData) => {},
  deleteData: (_id) => {},
});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    async function getPosts() {
      const response = await fetch(`https://sup-backend-4axq.onrender.com/posts`);

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

  const updateData = (_id, updatedData) => {
    const newData = data.filter((post) => post._id !== _id);
    setData([updatedData, ...newData]);
  };

  const removeData = (_id) => {
    const postDelete = data.filter((post) => post._id !== _id);

    setData([...postDelete]);
  };

  const createData = async (newData) => {
    await fetch(`https://sup-backend-4axq.onrender.com/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    }).catch((err) => {
      window.alert(err);
      return;
    });

    setData((prev) => [...prev, newData]);
  };

  const value = {
    data,
    dataSet: () => {},
    addData: createData,
    editData: updateData,
    deleteData: removeData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
