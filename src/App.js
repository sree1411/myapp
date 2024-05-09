import { useEffect, useState } from "react";
import "./App.css";
 

function App() {
  const [details, setDetails] = useState([]);

 
 const apiHanlder = async ()=>{
   try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method:"GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(data) not required the body to call the get method
    })


    if(response.ok){
      const data = await response.json();
      setDetails(data)
    }else {
      console.error("Failed to fetch data");
    }
    





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
