import { createContext, useState } from "react";

import { mockData } from "../../mockData";

export const DataContext = createContext({
  data: [],
  addData: () => {},
  editData: (id, updatedData) => {}
});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(mockData);
  console.log("data :", data);

  const updateData = ( id , updatedData ) => {

    const withoutCurrentPost = data.filter((post) => post.id !== id);

    setData([updatedData, ...withoutCurrentPost])

  }

  const value = {
    data,
    addData: newData => setData((prev) => [...prev, newData]),
    editData: updateData
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
