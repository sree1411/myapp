import { useContext, createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const name = "sree";
  const person = "viratkohli";

  const [count, setCount] = useState(0);

  const incBtn = () => {
    setCount(count + 1);
  };
  const decBtn = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  const resetBtn = () => {
    setCount(0);
  };

  const students = [
    {
      name: "sreekanth",
      age: 22,
    },
    {
        name: "virat kohli",
        age: 25,
      },
      {
        name: "sachi tendukar",
        age: 29,
      },
  ];

  return (
    <CartContext.Provider
      value={{ name, person, count, incBtn, decBtn, resetBtn, students}}
    >
      {children}
    </CartContext.Provider>
  );
};

export const UseCart = () => {
  return useContext(CartContext);
};
