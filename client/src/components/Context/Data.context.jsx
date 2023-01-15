import { createContext, useState } from "react";

import { mockData } from "../../mockData";

export const DataContext = createContext({
  data: [],
  addData: () => {},
});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(mockData);
  console.log("data :", data);



  const value = {
    data,
    addData: newData => setData((prev) => [...prev, newData]),
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
