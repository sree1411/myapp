import { createContext, useContext, useState } from "react";

const GiftContext = createContext();

export const GiftProvider = ({ children }) => {
  const [name, setName] = useState("sreekanth");
  const userDetails={
     name:"sree",
     email:"test@gmail",
     password: "1234"
  }

  return (
    <>
      <GiftContext.Provider value={{ name, setName, userDetails }}>
        {children}
      </GiftContext.Provider>
    </>
  );
};

export const useData = () => {
  return useContext(GiftContext);
};
