import React from "react";
import ThirdComponent from "./ThirdComponent";
import { UserData } from "../UseContext.jsx/UseCart";

const SecondComponent = () => {

  const {count, incBtn} = UserData()

  return (
    <>
      <div>SecondComponent:{count}</div>

      <button onClick={incBtn}> + </button>
      <ThirdComponent/>
    </>
  );
};

export default SecondComponent;
