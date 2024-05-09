import { useEffect, useState } from "react";
import "./App.css";
 

function App() {
  const [details, setDetails] = useState([]);

  const apiHandler = async()=>{
    try{
      const response = await fetch("https://fakestoreapi.com/products", {
        method:"GET",
        headers:{
          "Content-Type": "application/json",
        },
        // body: JSON.stringify() not required for the get method
      })
  
      if(response.ok){
        const data = await response.json()
        setDetails(data)
      }else{
        console.log("error")
      }

     
    }catch(error){
      console.log(error)
    }
     
  }
  

  useEffect(()=>{
    apiHandler()
  },[])


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
