import { createContext, useContext, useState } from "react";

const GiftContext = createContext();

export const GiftProvider = ({ children }) => {
  const [name, setName] = useState("sreekanth");
  const userDetails={
     name:"sree",
     email:"test@gmail",
     password: "1234"
  }
  const abc= [12,22,33,52,35,34,57,77]

  return (
    <>
      <GiftContext.Provider value={{ name, setName, userDetails, abc }}>
        {children}
      </GiftContext.Provider>
    </>
  );
};

export const useData = () => {
  return useContext(GiftContext);
};
