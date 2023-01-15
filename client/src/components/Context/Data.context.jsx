import { createContext, useState,  } from "react";

import { mockData } from "../../mockData";

export const DataContext = createContext({
  data: [],
  setData: () => {},
  addData: () => {},
});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(mockData);
  console.log("data :", data);


  const addData = (newData) => {
    setData((prev) => [...prev, newData])
  }

  const value = {
    data,
    setData,
    addData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
