import { createContext, useContext, useState } from "react";

const GiftContext = createContext();

export const GiftProvider = ({ children }) => {
  const [name, setName] = useState("sreekanth");

  const userDetails = {
    name: "sree",
    age: 31,
    rollno: 102838,
  };

  const studentList = [
    {
      name: "sree",
      age: 22,
      rollno: 102838,
    },

    {
      name: "virat",
      age: 24,
      rollno: 181283,
    },

    {
      name: "dhoni",
      age: 21,
      rollno: 142838,
    },
  ];


const [count, setCount] = useState(0)

const inc =()=>{
  setCount(count +1 )
}

const dec =()=>{
  setCount(count +1 )
}


  return (
    <>
      <GiftContext.Provider value={{ name, setName, userDetails, studentList, count, inc, dec }}>
        {children}
      </GiftContext.Provider>
    </>
  );
};

export const useData = () => {
  return useContext(GiftContext);
};
