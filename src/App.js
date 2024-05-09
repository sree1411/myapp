import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
 

function App() {
  const [details, setDetails] = useState([]);

 
 const apiHanlder = async ()=>{
   try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method:"GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
    const data = await response.json()
    setDetails(data)





   } catch (error) {
      console.log(error)
   }
 }
  
 useEffect(()=>{
  apiHanlder()
 }, [])



  return (
    <div className="App">
      {details.map((item) => {
        return (
          <>
            <li>{item.title}</li>
          </>
        );
      })}
    </div>
  );
}

export default App;
