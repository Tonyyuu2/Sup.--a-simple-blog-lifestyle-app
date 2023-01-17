import { createContext, useState } from "react";

import { mockData } from "../../mockData";

export const DataContext = createContext({
  data: [],
  addData: () => {},
  editData: (id, updatedData) => {},
  deleteData: (id) => {},
});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(mockData);

  const updateData = (id, updatedData) => {
    const withoutCurrentPost = data.filter((post) => post.id !== id);

    setData([updatedData, ...withoutCurrentPost]);
  };

  const removeData = (id) => {
    const postDeleter = data.filter((post) => post.id !== id);

    setData([...postDeleter]);
  };

  const value = {
    data,
    addData: (newData) => setData((prev) => [...prev, newData]),
    editData: updateData,
    deleteData: removeData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
