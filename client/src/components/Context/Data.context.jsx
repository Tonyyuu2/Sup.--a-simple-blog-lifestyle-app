import { createContext, useState, useEffect } from "react";

import { mockData } from "../../mockData";

export const DataContext = createContext({
  data: [],
  setData: () => {},
});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(mockData);
  console.log("data :", data);

  const value = {
    data,
    setData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
